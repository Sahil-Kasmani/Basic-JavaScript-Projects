class Password {
  constructor() {
    this.uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    this.lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    this.numbers = "1234567890";
    this.symbols = "$_@&?!#/><\\[]";
    this.funnyPasswords = ["PapaBolPehle", "YadNhiYr", "BnauMantri", "GFreind", "HeavyDriver", "MyPreciousssPasssword", "MyName", "Chin2uuu_Hacker", "nothing", "user", "maiNahiBatunga", "Sorry", "1$perhour", "admin", "passwordIs1234"];
  }

  getRandomElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }

  getRandomCharacterFromString(str) {
    const randomIndex = Math.floor(Math.random() * str.length);
    return str[randomIndex];
  }

  funnyPassword() {
    return this.getRandomElement(this.funnyPasswords);
  }

  weakPassword() {
    let password = "";
    for (let i = 0; i < 8; i++) {
      const randomString = this.getRandomElement([this.uppercaseLetters, this.lowercaseLetters]);
      const randomCharacter = this.getRandomCharacterFromString(randomString);
      password += randomCharacter;
    }
    return password;
  }

  strongPassword() {
    let password = "";
    for (let i = 0; i < 15; i++) {
      const randomString = this.getRandomElement([this.uppercaseLetters, this.lowercaseLetters, this.symbols, this.numbers]);
      const randomCharacter = this.getRandomCharacterFromString(randomString);
      password += randomCharacter;
    }
    return password;
  }
}


let passGen = new Password();

let strong = document.getElementById("btn1")
let weak = document.getElementById("btn2")
let funny = document.getElementById("btn3")
let textBox = document.getElementById("textBox")

strong.addEventListener("click",function(){
        textBox.value = passGen.strongPassword()
})
weak.addEventListener("click",function(){
        textBox.value = passGen.weakPassword()
})
funny.addEventListener("click",function(){
        textBox.value = passGen.funnyPassword()
})


