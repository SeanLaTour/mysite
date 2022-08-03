import React from "react"

// STRINGS AND ARRAYS

export var romanToInt = function (s) {
  if (s.length === 1) {
    return romanKey[s]
  }
  s = s.split("")
  let num = 0
  for (let i = 0; i < s.length; i++) {
    if (romanKey[s[i]] < romanKey[s[i + 1]]) {
      num += Number(romanKey[s[i + 1]] - romanKey[s[i]])
      i++
    } else {
      num += Number(romanKey[s[i]])
    }
  }
  return num
}

const romanKey = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
}

// RESURSION

export const fib = (num, stop, last = 1, index = 1) => {
  if (stop <= 1) return 1
  const sum = num + last
  last = num
  if (index === stop) return sum
  index++
  return fib(sum, stop, last, index)
}

export const recFact = num => {
  if (num <= 1) return 1
  return num * recFact(num - 1)
}

// SORTING

export const mergeSort = array => {
  if (array.length <= 1) return array
  const middleIndex = Math.floor(array.length / 2)
  const leftArray = array.slice(0, middleIndex)
  const rightArray = array.slice(middleIndex)

  return sort(mergeSort(leftArray), mergeSort(rightArray))
}

const sort = (leftArray, rightArray) => {
  const output = []
  let leftIndex = 0
  let rightIndex = 0

  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    const leftElement = leftArray[leftIndex]
    const rightElement = rightArray[rightIndex]

    if (leftElement < rightElement) {
      output.push(leftElement)
      leftIndex++
    } else {
      output.push(rightElement)
      rightIndex++
    }
  }
  return [
    ...output,
    ...leftArray.slice(leftIndex),
    ...rightArray.slice(rightIndex),
  ]
}

//BST

export class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

export class BST {
  constructor(data) {
    this.root = new Node(data)
  }

  addNode(data) {
    const node = this.root
    const searchTree = node => {
      if (node.data > data) {
        if (node.left === null) {
          node.left = new Node(data)
        } else if (node.left !== null) {
          return searchTree(node.left)
        }
      } else if (node.data < data) {
        if (node.right === null) {
          node.right = new Node(data)
        } else if (node.right !== null) {
          return searchTree(node.right)
        }
      }
    }
    return searchTree(node)
  }

  searchData(val) {
    const searchTree = node => {
      let count = 1
      if (val === node.data) {
        return node
      } else if (val !== node) {
        if (val < node.data) {
          return searchTree(node.left)
        } else if (val > node.data) {
          return searchTree(node.right)
        }
      }
    }
    return searchTree(this.root)
  }
}
