function scuberGreetingForFeet(feet){
  // Write your code here!
  if (feet > 2500) { return 'No can do.'}
  return feet <= 400 ? 'This one is on me!' : 'I will gladly take your thirty bucks.'
}

function ternaryCheckCity(city){
  // Write your code here!
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.'
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip){
    case 'generous':return 'Thank you so much.'
    case 'not as generous':return 'Thank you.'
  }
  return 'Bye.'
}