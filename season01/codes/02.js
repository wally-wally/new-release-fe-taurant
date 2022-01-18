export function question01(words) {
  // TODO: 여기에 함수 내부 로직을 작성해주세요.

  return !!words.find(isHaveSpecialCharacter);

  function isHaveSpecialCharacter(word) {
    return /[&?;:]/g.test(word);
  }
}

export function question02(words) {
  // TODO: 여기에 함수 내부 로직을 작성해주세요.

  return words.map(replaceAmpersandToHtmlSpecialCharacterCode);

  function replaceAmpersandToHtmlSpecialCharacterCode(word) {
    return word.replace(/&/g, '&amp;');
  }
}