function scuberGreetingForFeet(someNumber){
  let result
  if (someNumber <= 400 ){
    result = 'This one is on me!'
  };
  if (someNumber > 2000){
    result = 'I will gladly take your thirty bucks.'
  };
  if (someNumber > 2500){
    result = 'No can do.'
  };
  return result;
}

function ternaryCheckCity(city){
  let saying 
  
  if(city === 'NYC'){
    saying = 'Ok, sounds good.'
  };
  if (city !== 'NYC'){
    saying = 'No go.'
  };

  return saying;
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let charmSaying
  if (tip === 'generous'){
    charmSaying = 'Thank you so much.';
  } else if (tip === 'not as generous'){
    charmSaying = 'Thank you.';
  } else {
    charmSaying = 'Bye.';
  }
  return charmSaying;
}