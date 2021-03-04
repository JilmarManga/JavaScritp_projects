let userName = 'Jilmar';
userName ? console.log(`Hello ${userName}!`) : console.log('Hello!')
// ternary expression that decides what to do if the user enters a name or not


let userQuestion = ' Will to eat meat this weekend?'

console.log(userName + userQuestion);

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = randomNumber;
switch (eightBall) {
  case 0:
  eightBall = 'It is certain';
  break;

  case 1:
  eightBall = 'It is decidedly so';
  break;

  case 2:
  eightBall = 'Reply hazy try again';
  break;

  case 3:
  eightBall = 'Cannot predict now';
  break;

  case 4:
  eightBall = 'Do not count on it';
  break;

  case 5:
  eightBall = 'My sources say no';
  break;

  case 6:
  eightBall = 'Outlook not so good';
  break;

  case 7:
  eightBall = 'Signs point to yes';
  break;

  case 8:
  eightBall = 'off course';
  break;

}
/*We need to create a control flow that takes in the randomNumber we
made in step 4, and then assigns eightBall to a reply that a Magic Eight
 Ball would return. Think about utilizing if/else or switch statements.
 Here are 8 Magic Eight Ball phrases that we�d like to save to the variable
 eightBall*/

console.log(`The eight ball answered: ${eightBall}`);
