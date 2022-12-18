let raceNumber = Math.floor(Math.random() * 1000);
let registerEarly = true;
const runnerAge = 18;

if (runnerAge > 18 && registerEarly === true) {
  raceNumber += 1000;
  console.log(`You will race at 9:30 AM. Your Race Number is: ${raceNumber}`);
}else if (runnerAge > 18 && registerEarly === false){
  raceNumber += 1000;
  console.log(`You will race at 11:00 AM. Your race Number is: ${raceNumber}`)
}else if(runnerAge < 18){
  console.log(`You will race at 12:30 PM. Your race Number is: ${raceNumber}`)
}else if(runnerAge == 18){
  console.log("See the registration desk!")
}
