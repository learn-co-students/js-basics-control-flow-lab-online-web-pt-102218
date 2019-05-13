function scuberGreetingForFeet(length){
  let out;
  if (length <= 400) {
    out =  "This one is on me!"
  } else if (length > 2000 && length <= 2500) {
    out = 'I will gladly take your thirty bucks.' 
  } else if (length > 2500) {
    out = 'No can do.'
  }
  return out
}

function ternaryCheckCity(city){
  return city === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip){
   switch (tip) {
      case "generous":
        return 'Thank you so much.'
      case "not as generous":
        return 'Thank you.'
      case 'thanks for everything':
        return "Bye."
   }
}