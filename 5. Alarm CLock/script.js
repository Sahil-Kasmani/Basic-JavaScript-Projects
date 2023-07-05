let cur_Time = document.getElementById("current");
let btn = document.getElementById("btn");
let inputMenu = document.querySelectorAll("input");
let selectMenu = document.querySelector("select");
inputClass = document.querySelector(".inputs")
// let e;
// e.preventDefault()

let alarmTime, isAlarmset = false;
let audio = new Audio("audio_file.mp3");


setInterval(() => {
    let d = new Date()
    let time1 = d.toLocaleTimeString()
    cur_Time.innerHTML = time1

    if(alarmTime == time1){
      console.log("Alarm ringing..")
      audio.play();
      audio.loop = true
    }
}, 1000);

function setAlarm(e) {
  if(isAlarmset == true){
    alarmTime = "";
    inputMenu[0].value = "";
    inputMenu[1].value = "";
    inputMenu[2].value = "";
    selectMenu.value = "";
    console.clear();
    audio.pause();
    inputClass.classList.remove("disable");
    btn.innerText = "Submit"
    return isAlarmset = false;
  }
  let time = `${inputMenu[0].value}:${inputMenu[1].value}:${inputMenu[2].value} ${selectMenu.value}`;
  inputClass.classList.add("disable");
  btn.innerText = "Clear Alarm"
  isAlarmset = true;
  alarmTime = time;
  console.log(time);
  e.preventDefault()
}



btn.addEventListener("click",setAlarm)