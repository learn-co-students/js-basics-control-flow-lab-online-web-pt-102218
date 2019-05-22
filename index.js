function scuberGreetingForFeet(ride){
  let greeting 
  
  if (ride <= 400) {
    greeting = "This one is on me!";
  }
  if (ride > 2000 && ride < 2500) {
      greeting = "I will gladly take your thirty bucks.";
    } 
  if (ride >= 2500) {
      greeting = "No can do.";
    }
  
  return greeting
}


function ternaryCheckCity(city){
  let greeting
  
  city === 'NYC' ? (greeting = 'Ok, sounds good.') : (greeting = 'No go.');
  
  return greeting 
}

function switchOnCharmFromTip(tip){
  let response
  
  switch (tip) {
    case 'generous':
        response = 'Thank you so much.';
        break;
    case 'not as generous':
        response = "Thank you.";
        break;
    default:
        response = "Bye.";
  }
  return response 
}
