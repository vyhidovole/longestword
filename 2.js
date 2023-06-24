const findLongestWord = function(str) {
    let arrStr = str.split(' ');
    let wordLength = 0;
    let longestWord;
    console.log(arrStr)
  
    for (let i = 0; i < arrStr.length; i += 1) {
    //   wordLength = arrStr[1].length;
  
      if (arrStr[i].length > wordLength) {
        longestWord = arrStr[i];
  
        return longestWord;
      }
  
    }
  };
  
  // Вызовы функции для проверки
  console.log(
    findLongestWord("Thettttttt quick brown fox jumped over the lazy dog")
  ); // вернет 'jumped'