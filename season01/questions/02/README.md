# 02
> `02.js` 파일에 작성해주세요. (`02.js` 파일 안에 `question01`, `question02` 함수가 모두 있습니다.)

## (1) `question01 ` 함수 요구 사항
- 함수의 인자로 텍스트가 담긴 배열(배열의 원소는 무조건 `string` 타입이라고 가정) 값이 들어온다고 할 때 `&`, `?`, `;`, `:`이 특수 문자 중 한 개 이상 포함되는 텍스트가 하나라도 있는 경우 `true`를 아닌 경우 `false`를 반환하는 `question01` 함수를 만들어주세요. (반환 타입은 `boolean`)
- 입출력 예시

| 입력 | 출력 |
| --- | --- |
| `['hello!', '1234567890', '']` | `false` |
| `['wally<wallys0213@gmail.com>', 'hihi&byebye<wow@wow.com>']` | `true` |
| `['What's your name?', 'console.log('1');']` | `true` |

<br>

## (2) `question02` 함수 요구 사항

- 함수의 인자로 텍스트가 담긴 배열(배열의 원소는 무조건 `string` 타입이라고 가정)이 들어온다고 할 때 `&` 문자열은 모두 `&amp;` 문자열로 변경한 텍스트를 담은 배열을 반환하는 `question02` 함수를 만들어주세요.
- 입출력 예시

| 입력 | 출력 |
| --- | --- |
| `['123&456', 'hello&bye<test@test.com>']` | `['123&amp;456', 'hello&amp;bye<test@test.com>']` |
| `['!@#$%^&*', '&quot;wow&quot;', '']` | `['!@#$%^&amp;*', '&amp;quot;wow&amp;quot;', '']` |