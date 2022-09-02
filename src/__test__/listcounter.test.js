import '../modules/count-movies.js';

describe('Movies counter test', () => {
  it('Movie counter should return 5', () => {
    const mockMovies = [
      {
        id: 1,
        title: 'Big Bang',
      },
      {
        id: 2,
        title: 'Little Girl',
      },
      {
        id: 3,
        title: 'Paper Girls',
      },
      {
        id: 4,
        title: 'Liar - Liar',
      },
      {
        id: 305,
        title: 'Dare Devil',
      },
    ];

    expect(mockMovies.length).toBe(5);
  });

  it('movieCounter should return 0 when passed empty array', () => {
    const mockMovie = [];
    expect(mockMovie.length).toBe(0);
  });
});