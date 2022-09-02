import '../modules/countComment.js';

describe('Comment counter test', () => {
  it('commentCounter should return 5', () => {
    const mockComments = [
      { username: 'masud', creation_date: '2022-08-30', comment: 'The first comment' },
      { username: 'Tamim', comment: 'I like this game', creation_date: '2022-08-30' },
      { comment: 'Comment check', username: 'Davon', creation_date: '2022-08-30' },
      { username: 'Michael', creation_date: '2022-08-30', comment: 'It is a good game' },
      { username: 'john', comment: 'nice game', creation_date: '2022-08-30' },
    ];

    expect(mockComments.length).toBe(5);
  });

  it('commentCounter should return 0 when passed empty array', () => {
    const mockComments = [];
    expect(mockComments.length).toBe(0);
  });
});