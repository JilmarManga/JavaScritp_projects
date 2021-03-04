let name = 'Jilmar';
let timeRegistered = 1500;
let runnersAge = 15;



let raceNumber = Math.floor(Math.random() * 1000);

if (timeRegistered >= 930 && timeRegistered <= 1100) {
  timeRegistered = true;
} else {
  timeRegistered = false;
}

let registeredEarly = timeRegistered;

/*if (runnersAge > 18 && registeredEarly === true){
  raceNumber += 1000;
}*/

raceNumber += 1000;

if (runnersAge > 18 && registeredEarly === true){
  console.log(`${name}, your race start at 9:30 am whit the race number ${raceNumber}.`);
}
else if (runnersAge > 18 && registeredEarly === false) {
  console.log(`${name}, your race start at 11:00 am whit the race number ${raceNumber}.`);
}
else if (runnersAge < 18) {
  console.log(`${name}, your race start at 12:30 am whit the race number ${raceNumber}.`);
}
