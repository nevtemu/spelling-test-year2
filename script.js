const questions = [
  ["kit", "набор инструментов / комлект"],
  ["ski", "кататься на лыжах"],
  ["skin", "кожа"],
  ["kid", "ребенок"],
  ["kite", "воздушный змей"],
  ["bike", "велосипед"],
  ["sure", "уверен"],
  ["kettle", "чайник"],  
  ["lake", "озеро"],
  ["bake", "выпекать"],  
  ["fake", "поддельный"],
  ["take", "брать"],  
  ["move", "двигаться"],
  ["like", "нравиться"],
  ["sketch", "рисунок / набросок"],
  ["frisky", "резвый"],  
  ["Kent", "графтсво в Англии"],
  ["skip", "пропускать"],  
  ["duke", "герцог"],
  ["wake", "будить"],  
  ["poor", "бедный"],

  ["snowman", "снеговик"],  
  ["mailman", "почтальон"],
  ["baseball", "бейсбол"],  
  ["football", "футбол"],
  ["sunflower", "подсолнух"],  
  ["goldfish", "золотая рыбка"],
  ["playground", "игровая плозадка"],  
  ["raincoat", "дождевик"],
  ["popcorn", "попкорн"],  
  ["bedroom", "спальня"],
  ["racecar", "гоночный автомобиль"],
  ["moonlight", "лунный свет"],
  ["farmyard", "двор фермы"],
  ["breakfast", "завтрак"],
  ["flashlight", "фонарик"],  
  ["fireplace", "камин"],
  ["newspaper", "газета"],  
  ["blackberry", "ежевика"],

  ["live", "жить"],  
  ["dive", "нырять"],
  ["wave", "волна"],  
  ["hive", "улей"],
  ["give", "давать"],  
  ["have", "иметь"],
  ["money", "деньги"],  
  ["love", "любить"],
  ["crave", "желать чего-то / жаждать"],  
  ["shave", "бриться"],
  ["halves", "половинки"],  
  ["calf", "теленок"],
  ["calves", "телята"], 
  ["solve", "решать"],  
  ["busy", "занятой"],
  ["believe", "верить"],  
  ["behave", "вести себя"],
  ["cursive", "писать курсивом (соединяя буквы)"],  
  ["involve", "вовлекать"],
  ["improve", "улучшать"],  
  ["reserve", "запасать / запасы"],
  ["any", "любой"],

  ["gem", "драгоценный камень"],
  ["giant", "огромный"],
  ["magic", "магия"],
  ["giraffe", "жираф"],  
  ["energy", "энергия"],
  ["join", "присоединяться"],  
  ["people", "люди"],
  ["badge", "знак на одежде"],  
  ["edge", "край"],
  ["bridge", "мост"],  
  ["fudge", "помадка / английская конфетка"],
  ["dodge", "уворачиваться"],  
  ["could", "мог бы"],
  ["should", "должен"],  
  ["age", "возраст"],
  ["huge", "большой"],  
  ["change", "менять"],
  ["bulge", "выпуклость"],  
  ["village", "деревня"],

  ["kick", "пинать ногой"],  
  ["peck", "клевать"],
  ["fluff", "пушок"],  
  ["bell", "колокол"],
  ["miss", "скучать / промахиваться"],  
  ["buzz", "жужжание"],
  ["class", "класс"],  
  ["quick", "быстро"],
  ["attack", "нападение"],
  ["sniff", "нюхать"],
  ["small", "маленький"],
  ["across", "напротив"],
  ["frizz", "завитые волосы"],  
  ["pass", "проходить / пропуск"],
  ["luckily", "к счастью"],  
  ["unstuck", "выбираться"],
  ["blastoff", "взлет"],  
  ["seagull", "чайка"],
  ["kindness", "доброта"],  
  ["whizz", "двигаться быстро"],
  ["last", "последний"], 

  ["few", "несколько"],
  ["dew", "роса"],  
  ["you", "ты"],
  ["June", "Июнь"],  
  ["crew", "экипаж / команда"],
  ["soon", "скоро"],  
  ["some", "некоторые"],
  ["threw", "бросил"],  
  ["queue", "очередь"],
  ["value", "значение"],  

  ["flute", "флейта"],  
  ["statue", "статуя"],
  ["looked", "смотрел"],  
  ["curfew", "комендантский час"],
  ["interview", "интервью"],
  ["rescue", "спасение"],
  ["pursue", "преследование"],
  ["issue", "проблема / издание"],
  ["barbecue", "барбекю"],  
  ["off", "выключено"],

  ["itch", "чесать"],  
  ["pitch", "поле"],
  ["fetch", "приносить"],  
  ["watch", "часы / смотреть"],
  ["witch", "ведьма"],  
  ["patch", "латка"],
  ["many", "много"],  
  ["glitch", "сбой"],
  ["switch", "переключать"],  
  ["snitch", "ябедничать"],

  ["stitch", "шов"],
  ["clothes", "одежда"],  
  ["stretch", "растягивать"],
  ["scratch", "царапать"],  
  ["unlatch", "открывать / отпирать"],
  ["unstitch", "распороть"],  
  ["dispatch", "отправляться"],
  ["hopscotch", "игра в классики"],  
  ["everybody", "каждый"],

  ["graph", "график"],  
  ["phone", "телефон"],
  ["phonics", "фонетика"],
  ["photo", "фотография"],
  ["phase", "стадия"],
  ["after", "после"],
  ["Sofie", "Софи"],  
  ["dolphin", "дельфин"],
  ["elephant", "слон"],  
  ["sphere", "шар"],
  ["telephone", "телефон"],  
  ["phrase", "высказывание"],
  ["great", "великий"],  
  ["every", "каждый"],
  ["orphan", "сирота"],  
  ["phobia", "страх"],
  ["microphone", "микрофон"],  
  ["nephew", "племянник"],
  ["trophy", "трофей"],  

  ["sink", "раковина / утонуть"],
  ["link", "ссылка / звено цепи"],  
  ["pink", "розовый"],
  ["wink", "подмигивать"],  
  ["bank", "банк"],
  ["ink", "чернила"],  
  ["sank", "затонул"],
  ["sunk", "погруженный / утопленный"],  
  ["thank", "спасибо"],
  ["drink", "пить"],  
  ["stink", "вонять"],
  ["junk", "хлам / барахло"],
  ["would", "было бы"],
  ["skunk", "скунс"],
  ["drank", "пьяный / выпил"],
  ["trunk", "хобот слона / багажний машины"],  
  ["shrink", "сжиматься"],
  ["think", "думать"],  
  ["plank", "доска"],
];

let totalyAnswered = 0;
let correct = 0;
let question;
let answer;
const previousQuestions = [,,,,,];

const talk = () => {
    let voice = new SpeechSynthesisUtterance(question);
    window.speechSynthesis.speak(voice);
}
const checkAnswer = () => {
  if (document.getElementById("answer").value){//is there an answer?
      answer = document.getElementById("answer").value;
      if (answer == question) {//correct answer
          correct++;
          document.getElementsByClassName("fa-check-square")[0].classList.toggle("hidden")    
          document.getElementsByClassName("fa-thumbs-up")[0].style.color = "green"
          document.getElementsByClassName("fa-thumbs-up")[0].classList.toggle("hidden")
      } else { //wrong answer
          document.getElementById("textMistakes").innerHTML+=question + " ";
          document.getElementsByClassName("fa-check-square")[0].classList.toggle("hidden") 
          document.getElementsByClassName("fa-thumbs-up")[0].style.color = "red"
          document.getElementsByClassName("fa-thumbs-up")[0].classList.add("fa-flip-vertical") 
          document.getElementsByClassName("fa-thumbs-up")[0].classList.toggle("hidden")    
      }
      totalyAnswered++; //this is answers statistics
      document.getElementById("totalyAnswered").innerHTML = "Answered questions: " + totalyAnswered;
      document.getElementById("corectAnswers").innerHTML = "Correct answers: " + Math.floor((correct / totalyAnswered) * 100) + "%";
    }
}
const askQuestion =()=> {
    document.getElementsByClassName("fa-thumbs-up")[0].classList.toggle("hidden")
    document.getElementsByClassName("fa-thumbs-up")[0].classList.remove("fa-flip-vertical") 
    document.getElementsByClassName("fa-check-square")[0].classList.toggle("hidden")   
    document.getElementById("answer").value = "";
    let n // index of question in questions array
    do {n = getRandomNumber(0, questions.length); //to perform this task at least once
        question = questions[n][0];} 
    while (previousQuestions.includes(question))
    document.getElementById("hint").innerHTML = questions[n][1]; //display hint
    previousQuestions.push(question); //track previous questions to avoid reapeted questions
    previousQuestions.shift();
}
const getRandomNumber = (min,max) => Math.floor(Math.random()*(max-min+1))+min;
askQuestion();
