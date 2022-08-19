function compare(a, b) {
  let result = "";
  for (let i = 0; i < a.length; i++) {
    if (a[i] == b[i]) {
      result += a[i];
    }
  }
  return result;
}

console.log(compare("AKA", "AKASHI")); // AKA
console.log(compare("KANGAROO", "KANG")); // KANG
console.log(compare("KI", "KIJANG")); // KI
console.log(compare("KUPU-KUPU", "KUPU")); // KUPU
console.log(compare("ILALANG", "ILA")); // ILA
