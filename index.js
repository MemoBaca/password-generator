const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let password1 = document.getElementById("p1");
let password2 = document.getElementById("p2");

function generate() {
  //console.log(document.getElementById('plen').value)
  //console.log(document.getElementById('snn').checked)
  let passwordLen = document.getElementById("plen").value;
  let snn = document.getElementById("snn").checked;
  let pass1 = "";
  let pass2 = "";
  let charLen;
  snn ? (charLen = characters.length) : (charLen = 51);
  for (let i = 0; i < passwordLen; i++) {
    pass1 += characters[Math.floor(Math.random() * charLen)];
    pass2 += characters[Math.floor(Math.random() * charLen)];
  }
  password1.textContent = pass1;
  password2.textContent = pass2;
}

window.generate = generate;
