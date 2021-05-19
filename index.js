const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
<<<<<<< HEAD
      return tutorials.map(element => {
      element = element.split(" ");
      for(let i = 0; i < element.length; i++){
         element[i] = element[i][0].toUpperCase() + element[i].slice(1);
      }
   return element.join(" ");
   });
};
=======
        return tutorials.map(item => {
      let sentence = item.split(" ");
      tutorials.forEach(sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1));
   return sentence.join(" ");
   })
}
>>>>>>> 0a0b5b9476be8be4b51a13f36462abd00ebcfa4d
