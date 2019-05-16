function scuberGreetingForFeet(_feet){
  // Write your code here!
  if (_feet <= 400){
    return 'This one is on me!';
  } else if (_feet <= 2500) {
    return 'I will gladly take your thirty bucks.';
  } else {
    return 'No can do.';
  }
}

function ternaryCheckCity(_city){
  return _city === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(_tipStr){
  switch (_tipStr) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    case 'thanks for everything':
      return 'Bye.';
  }
}