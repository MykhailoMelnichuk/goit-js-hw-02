console.log('Задание 5');
const checkForSpam = function checkForSpam(str) {
    str = str.toLowerCase();
    const isStrForbiddenWord = str.includes('spam') || str.includes('sale');
    return isStrForbiddenWord;
  };
  console.log(checkForSpam('Latest technology news'));
  console.log(checkForSpam('JavaScript weekly newsletter'));
  console.log(checkForSpam('Get best sale offers now!'));
  console.log(checkForSpam('[SPAM] How to earn fast money?'));