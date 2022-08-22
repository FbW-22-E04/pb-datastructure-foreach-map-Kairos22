// 1
function doubleValues (myNums) {
    const addSelf = myNums.map((a) => a + a);
    return addSelf;
}
 
  console.log(doubleValues([1,2,3]));
  console.log(doubleValues([5,1,2,3,10]));
 console.log('------------------------------1');

 // 2
 function onlyEvenValues (arr) {
  const evenValues = []
  arr.forEach(element => {
    if (element % 2 == 0) {
      evenValues.push(element)
    }
  });
    console.log(evenValues);
 }

 onlyEvenValues([1, 2, 3]);
 onlyEvenValues([5, 1, 2, 3, 10]);
 console.log('-----------------------------------2');

 // 3
 function showFirstAndLast (arr) {
    const letter = arr.map ((thing) => 
       thing [0] + thing [thing.length -1]
    );
    console.log(letter);
 }

 showFirstAndLast(['colt','matt', 'tim', 'udemy']);
 showFirstAndLast(['hi', 'goodbye', 'smile']);
 console.log('-----------------------------------3');

 // 4
 function addKeyAndValue (arr, key, value) {
  const keyValue = arr.map((thing) => {
    thing [key] = value ;
    return thing;
  });
    console.log(keyValue);

 };

 addKeyAndValue ([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor');
 console.log('----------------------------4');

 // 5
 function vowelCount(string) {

    const stringFixed = string.toLowerCase();

    const arrFromString = [...stringFixed]
    
    
    const vowels = 'aeiou';

    const returnedVowels = {}
    
    arrFromString.forEach(letter => {
        
        if (vowels.includes(letter)) { 
            
            if (returnedVowels[letter] === undefined) {

                returnedVowels[letter] = 1
            } else {

                returnedVowels[letter] += 1
            }

          
        }
    })

    console.log("vowelCount ~ returnedVowels", returnedVowels)
    return returnedVowels

}

vowelCount('Elie'); 
vowelCount('Tim');
vowelCount('Matt');
vowelCount('Matt');
vowelCount('I Am awesome and so are you');

console.log('-----------------------')