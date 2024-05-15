/**
 * 두 배열의 모든 조합으로 구성된 배열 생성
 *
 * @description 배열 A와 배열 B를 조합한 전체 목록을 생성합니다. 각 조합은 A의 한 요소와 B의 한 요소의 튜플로 구성합니다.
 *
 * @param {T[][]} arguments 인자의 개수는 제한이 없습니다.
 *
 * @example
 * ```tsx
 * const A = ['블랙', '그레이', '베이지'];
 * const B = ['S', 'M', 'L'];
 *
 * const result = combineArrays(A, B);
 * console.log(result);
 *
 * ----------
 *
 * [
 *   ['블랙', 'S'],
 *   ['블랙', 'M'],
 *   ['블랙', 'L'],
 *   ['그레이', 'S'],
 *   ['그레이', 'M'],
 *   ['그레이', 'L'],
 *   ['베이지', 'S'],
 *   ['베이지', 'M'],
 *   ['베이지', 'L'],
 * ]
 * ```
 */
export function combineArrays(...arrays) {
  const combinations = [];

  if (arrays.length === 0) return [];
  if (arrays.length === 1) return arrays[0];

  if (arrays.length === 2) {
    arrays[0].forEach((value1) => {
      arrays[1].forEach((value2) => {
        combinations.push([value1, value2].flat());
      });
    });

    return combinations;
  }

  return combineArrays(arrays[0], combineArrays(...arrays.slice(1)));
}
