export function question01(words) {
  // TODO: 여기에 함수 내부 로직을 작성해주세요.
  return words.some((word) => word.match(/[&?;:]/g));
}

export function question02(words) {
  // TODO: 여기에 함수 내부 로직을 작성해주세요.
  return words.map((word) => word.replaceAll('&', '&amp;'));
}