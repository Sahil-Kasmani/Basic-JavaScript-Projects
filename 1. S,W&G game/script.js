let user = prompt("Enter S, W or G");
let cpu1 = Math.floor(Math.random() * 3);
let cpu = ["S","W","G"][cpu1]

const match=(cpu, user)=>{
    if(cpu==user){
        return "No one is Winner! Match Tie"
    }
    else if(cpu=="S" && user=="W"){
        return "Winner is cpu";
    }
    else if(cpu=="S" && user=="G"){
        return "Winner is User";
    }
    else if(cpu=="W" && user=="S"){
        return "Winner is User";
    }
    else if(cpu=="W" && user=="G"){
        return "Winner is Cpu";
    }
    else if(cpu=="G" && user=="W"){
        return "Winner is User";
    }
    else if(cpu=="G" && user=="S"){
        return "Winner is Cpu";
    }
}
let result = match(cpu,user);
document.write(`CPU: ${cpu} <br> USER: ${user} <br> ${result.toUpperCase()}`);