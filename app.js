let cardText = document.getElementById('character-input');
    let checkButton = document.getElementById('check-button');
    let resultText = document.getElementById('result-text');

    function detector() {
      let character = cardText.value;
      if (isASCII(character)) {
        resultText.textContent = 'The entered character is an ASCII character.';
      } else {
        resultText.textContent = 'The entered character is a Unicode character.';
      }
    }

    function isASCII(character) {
      return character.charCodeAt(0) <= 127;
    }

    checkButton.addEventListener('click', detector);