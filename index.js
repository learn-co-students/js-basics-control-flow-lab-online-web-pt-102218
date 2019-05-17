function scuberGreetingForFeet(someNumber){
  if (someNumber <= 400) {
    return 'This one is on me!'

  }
  else if (someNumber > 400 && someNumber <= 2500) {
    return 'I will gladly take your thirty bucks.'
  }
  else {
    return 'No can do.'
  }
}
function ternaryCheckCity(city){
  switch (city) {
  case 'NYC' : 
   return 'Ok, sounds good.'
   break;
   default: 
    return 'No go.';
    break;
  }    
  // Write your code here!
}

function switchOnCharmFromTip(tip){
  switch(tip) {
    case 'generous' : 
      return "Thank you so much.";
      break; 
    case 'not as generous' : 
      return "Thank you."; 
      break;
    default: 
      return "Bye."; 
      break;
  }
  // Write your code here!
}