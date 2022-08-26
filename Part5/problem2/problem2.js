function caesar(offset, input) {
  var arr = [];
  let text = input.toLowerCase().split("");

  for (let i = 0; i < input.length; i++) {
    var index = 0;
    let isi = text[i].charCodeAt(index) + offset;
    if (isi > 122 && offset >= 26) {
      isi = 97 + (offset - 1);
    } else if (isi > 122 && offset < 26) {
      for (let j = 0; j < offset; j++) {
        if (offset > 26) {
          offset -= 25;
        } else {
          break;
        }
      }
      isi = 97 + (offset - 1);
    }
    let char = String.fromCharCode(isi);
    arr.push(char);
  }

  return arr.join("");
}

console.log(caesar(3, "abc")); // def
console.log(caesar(2, "alta")); // cnvc
console.log(caesar(10, "alterraacademy")); // kvdobbkkmknowi
console.log(caesar(1, "abcdefghijklmnopqrstuvwxyz")); // bcdefghijklmnopqrstuvwxyza
console.log(caesar(1000, "abcdefghijklmnopqrstuvwxyz")); // mnopqrstuvwxyzabcdefghijkl
