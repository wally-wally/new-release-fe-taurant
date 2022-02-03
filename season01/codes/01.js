export function checkAvailableRegisterReceiveRule(mailboxId) {
  // TODO: 여기에 함수 내부 로직을 작성해주세요.
  return [1, 2, 4, 5].includes(mailboxId) ? 'available' : 'unavailable';
}