const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
})



const motivationalQuotes = [
    "The only way to do great work is to love what you do. –steve Jobs",
    "Success is not the key to happiness. Happiness is the key to success. – Albert Schweitzer",
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "Your time is limited, don't waste it living someone else's life. – Steve Jobs",
    "The harder you work for something, the greater you’ll feel when you achieve it.",
    "Don’t stop when you’re tired. Stop when you’re done.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    "It does not matter how slowly you go as long as you do not stop. – Confucius",
    "Dream it. Wish it. Do it.",
    "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
    "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",
    "The secret of getting ahead is getting started. – Mark Twain",
    "Don’t let yesterday take up too much of today. – Will Rogers",
    "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
    "Do something today that your future self will thank you for.",
    "Great things never come from comfort zones.",
    "You don’t have to be great to start, but you have to start to be great. – Zig Ziglar",
    "The future depends on what you do today. – Mahatma Gandhi",
    "The way to get started is to quit talking and begin doing. – Walt Disney",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. – Christian D. Larson"
];
const astrologyMessages = [
    "You are destined for greatness, Leo!",
    "Your stars align for a romantic evening, Libra.",
    "Get ready for a productive day, Capricorn!",
    "Your intuition is strong, trust your instincts, Scorpio.",
    "A new opportunity is coming your way, Sagittarius.",
    "Take a chance and pursue your dreams, Aries.",
    "Your creativity is shining, Pisces!",
    "Stay focused and determined, Taurus.",
    "Your hard work will pay off, Virgo.",
    "Expect a surprise visit from an old friend, Gemini.",
    "Your confidence is growing, Cancer.",
    "Your spiritual journey is about to begin, Aquarius.",
    "You're entering a period of great change, Pisces.",
    "Your passion and energy will take you far, Leo.",
    "You're on the path to success, Capricorn.",
    "Your heart is guiding you towards true love, Libra.",
    "You're about to receive an unexpected windfall, Sagittarius.",
    "Your creativity will lead to a breakthrough, Gemini.",
    "You're entering a period of great abundance, Taurus.",
    "Your intuition is stronger than ever, Scorpio.",
    "You're on the path to spiritual enlightenment, Aquarius."
  ];
  const nonsensicalJokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why don't eggs tell jokes? They'd crack each other up!",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "What do you call a fake noodle? An impasta!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why don't lobsters share? Because they're shellfish!",
    "What do you call a can opener that doesn't work? A can't opener!",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "Why don't some couples go to the gym? Because some relationships don't work out!",
    "What do you call a bear with no socks on? Barefoot!",
    "Why did the bicycle fall over? Because it was two-tired!",
    "What do you call a group of cows playing instruments? A moo-sical band!",
    "Why did the banana go to the doctor? He wasn't peeling well!",
    "Why did the chicken cross the playground? To get to the other slide!",
    "What do you call a dog that does magic tricks? A labracadabrador!",
    "Why did the mushroom go to the party? Because he was a fun-gi!",
    "Why did the computer go to the doctor? It had a virus!",
    "Why did the kid bring a ladder to school? He wanted to reach his full potential!",
    "What do you call a fish with a sunburn? A star-fish!",
    "Why did the rabbit go to the doctor? He had hare-loss!"
  ];


const isValidDate = (userInput)=> {
    const parts = userInput.split("-")

    if(parts.length !== 3){
        return false 
    }

    const year = parseInt(parts[0], 10)
    const month = parseInt(parts[1], 10)
    const days = parseInt(parts[2], 10)

    if(year < 1 || year > 9999){ return false};
    if(month < 1 || month > 12){return false};
    const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (days < 1 || days > monthDays[month - 1]) {return false

  } else{

    return true 
  }
  

}



const generator = () => {

   

    

    rl.question("Please enter your date of birth (YYYY-MM-DD)", (userInput) => {

    if (isValidDate(userInput)) {
      console.log("Valid Date");
      const dateParts = userInput.split("-");
      const month = parseInt(dateParts[1], 10);
      const day = parseInt(dateParts[2], 10);
    
  
      let astrologySign = "";
      switch (true) {
        case (month === 1 && day >= 20) || (month === 2 && day <= 18):
          astrologySign = "Aquarius";
          break;
        case (month === 2 && day >= 19) || (month === 3 && day <= 20):
          astrologySign = "Pisces";
          break;
        case (month === 3 && day >= 21) || (month === 4 && day <= 19):
          astrologySign = "Aries";
          break;
        case (month === 4 && day >= 20) || (month === 5 && day <= 20):
          astrologySign = "Taurus";
          break;
        case (month === 5 && day >= 21) || (month === 6 && day <= 20):
          astrologySign = "Gemini";
          break;
        case (month === 6 && day >= 21) || (month === 7 && day <= 22):
          astrologySign = "Cancer";
          break;
        case (month === 7 && day >= 23) || (month === 8 && day <= 22):
          astrologySign = "Leo";
          break;
        case (month === 8 && day >= 23) || (month === 9 && day <= 22):
          astrologySign = "Virgo";
          break;
        case (month === 9 && day >= 23) || (month === 10 && day <= 22):
          astrologySign = "Libra";
          break;
        case (month === 10 && day >= 23) || (month === 11 && day <= 21):
          astrologySign = "Scorpio";
          break;
        case (month === 11 && day >= 22) || (month === 12 && day <= 21):
          astrologySign = "Sagittarius";
          break;
        case (month === 12 && day >= 22) || (month === 1 && day <= 19):
          astrologySign = "Capricorn";
          break;
      }
      
    let astrologyMessage = "";
    switch (astrologySign) {
      case "Aquarius":
        astrologyMessage = "You're a humanitarian at heart, always looking for ways to make a positive impact on the world.";
        break;
      case "Pisces":
        astrologyMessage = "You're a dreamer, always chasing your heart's desires and living in a world of fantasy.";
        break;
      case "Aries":
        astrologyMessage = "You're a natural-born leader, always taking charge and pushing boundaries.";
        break;
      case "Taurus":
        astrologyMessage = "You're a practical and dependable individual, always valuing stability and security.";
        break;
      case "Gemini":
        astrologyMessage = "You're a curious and adaptable person, always looking for new experiences and knowledge.";
        break;
      case "Cancer":
        astrologyMessage = "You're a sensitive and emotional individual, always putting the needs of others before your own.";
        break;
      case "Leo":
        astrologyMessage = "You're a confident and charismatic person, always shining bright like a star.";
        break;
      case "Virgo":
        astrologyMessage = "You're a hardworking and analytical individual, always striving for perfection.";
        break;
      case "Libra":
        astrologyMessage = "You're a social butterfly, always seeking balance and harmony in your relationships.";
        break;
      case "Scorpio":
        astrologyMessage = "Your intuition is stronger than ever, trust your instincts";
        break;
    case "Sagittarius":
        astrologyMessage = "A new opportunity is coming your way, you're about to receive an unexpected windfall";
        break;

    case "Capricorn" : 
        astrologyMessage = " Get ready for a productive day, you're on the path to success"
        break;

    }




    
    const randomMotivational = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
    const randomJoke = nonsensicalJokes[Math.floor(Math.random() * nonsensicalJokes.length)];
    

    console.log(`Your astrology sign is ${astrologySign}.\n${astrologyMessage}\n\nInspirational message: ${randomMotivational}\n\nNonsensical joke: ${randomJoke}`);
} else {
    console.log("Invalid date. Please try again!");
}
rl.close()
})
}



generator()