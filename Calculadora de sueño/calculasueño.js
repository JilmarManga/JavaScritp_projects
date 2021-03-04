
const getSleepHours = day => {
  switch(day) {
    case 'monday':
      return 8
      break;
    case 'tuesday':
      return 8
      break;
    case 'wednesday':
      return 8
      break;
    case 'thursday':
      return 8
      break;
    case 'friday':
      return 8
      break;
    case 'saturday':
      return 8
      break;
    case 'sunday':
      return 8
      break;
    default:
      return 'Error!'
  }
};

const getActualSleepHours = () =>
  getSleepHours ('monday') + getSleepHours ('tuesday') + getSleepHours ('wednesday') + getSleepHours ('thursday') + getSleepHours ('friday') + getSleepHours ('saturday') + getSleepHours ('sunday')


const getIdealSleepHours = () => {
  let idealHours = 8;
    return idealHours * 7;
};

const calculateSleepdebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log('you got a perfect amount of sleep.')
  }
  else if  (actualSleepHours > idealSleepHours) {
    console.log('you got ' + (actualSleepHours - idealSleepHours) + ' more sleep than you needed.');
  }
  else if (actualSleepHours < idealSleepHours) {
    console.log('you got ' + (idealSleepHours - actualSleepHours) + ' less sleep than you needed.');
  }
  else {
    console.log('something is bad wiht the code')
  }

};

calculateSleepdebt();
