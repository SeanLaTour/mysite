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
