let jokes = ["Why did the chicken cross the playground?To get to the other slide!",
"Why did the actor fall through the floorboards?They were going through a stage!",
"Why did a scarecrow win a Nobel prize?He was outstanding in his field!",
"Why are peppers the best at archery?Because they habanero!",
"What did the duck say after she bought chapstick?Put it on my bill!",
"Why did an old man fall in a well?Because he couldn’t see that well!",
"What do you call a fake noodle?An impasta!",
"What did the three-legged dog say when he walked into a saloon?“I’m looking for the man who shot my paw!",
"How do you tell the difference between a bull and a cow?It is either one or the udder!",
"What’s red and smells like blue paint?Red paint!",
"What’s the difference between a hippo and a Zippo?One is very heavy, the other is a little lighter!",
"What does Jeff Bezos do before he goes to sleep?He puts his PJ-Amazon!",
"What happened when the world's tongue-twister champion got arrestedThey gave him a tough sentence!",
"What did the mama cow say to the calf?It’s pasture bedtime!",
"How does a vampire start a letter?Tomb it may concern!",
"What do you call an illegally parked frog?Toad!",
"What did one plate say to the other?Dinner is on me!",
"Why do hummingbirds hum?Because they don’t know the words!",
"What do sprinters eat before a race?Nothing. They fast!",
"Two muffins are baking in an oven. One of them looks to the other and says, Phew, it's getting hot in here! The other looks back and says, Ack! A talking muffin!"];

// let a = document.getElementsByTagName("p")[0].innerHTML = "<b>Random Joke Generator</b>";
// a ;

const clicked=()=>{
    let ran_joke = Math.floor(Math.random() * jokes.length);
    let ran_value = jokes[ran_joke]
    document.getElementById("joke").innerHTML = ran_value;
    console.log(ran_joke);
}




