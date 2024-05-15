import { combineArrays } from '../array';

describe('combineArrays()', () => {
  it('인자가 없는 경우 빈 배열을 반환합니다.', () => {
    const received = combineArrays();
    const expected = [];

    expect(received).toEqual(expected);
  });

  it('인자가 배열 1개인 경우 동일한 인자를 반환합니다.', () => {
    const received = combineArrays(['티셔츠', '바지']);
    const expected = ['티셔츠', '바지'];

    expect(received).toEqual(expected);
  });

  it('인자가 배열 2개인 경우 2개를 조합한 배열을 반환합니다.', () => {
    const received = combineArrays(['블랙', '그레이', '베이지'], ['S', 'M', 'L']);

    const expected = [
      ['블랙', 'S'],
      ['블랙', 'M'],
      ['블랙', 'L'],
      ['그레이', 'S'],
      ['그레이', 'M'],
      ['그레이', 'L'],
      ['베이지', 'S'],
      ['베이지', 'M'],
      ['베이지', 'L'],
    ];

    expect(received).toEqual(expected);
  });

  it('인자가 배열 3개인 경우 3개를 조합한 배열을 반환합니다.', () => {
    const received = combineArrays(['티셔츠', '바지'], ['블랙', '그레이', '베이지'], ['S', 'M', 'L']);

    const expected = [
      ['티셔츠', '블랙', 'S'],
      ['티셔츠', '블랙', 'M'],
      ['티셔츠', '블랙', 'L'],
      ['티셔츠', '그레이', 'S'],
      ['티셔츠', '그레이', 'M'],
      ['티셔츠', '그레이', 'L'],
      ['티셔츠', '베이지', 'S'],
      ['티셔츠', '베이지', 'M'],
      ['티셔츠', '베이지', 'L'],
      ['바지', '블랙', 'S'],
      ['바지', '블랙', 'M'],
      ['바지', '블랙', 'L'],
      ['바지', '그레이', 'S'],
      ['바지', '그레이', 'M'],
      ['바지', '그레이', 'L'],
      ['바지', '베이지', 'S'],
      ['바지', '베이지', 'M'],
      ['바지', '베이지', 'L'],
    ];

    expect(received).toEqual(expected);
  });
});
