btn.addEventListener('click',function(){
    setInterval(() => {
      let t;
      let date;
      let time2;
      const option = { weekday:'long',year:'numeric',month:'long',day:'numeric'}
      t = new Date();
      // sahu = "I am sahil"
      date = t.toLocaleDateString(undefined, option);
      time2 = t.toLocaleTimeString();
      // time = t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds();
      document.getElementById('time').innerHTML = time2 + "<br>on " + date;
    }, 100);
    console.log("Button is clicked");
});
