import serve from '../src/index.js';

const routes = [
  {
    path: '/courses/:id',
    handler: {
      body: 'course'
    },
  },
  {
    path: '/courses/:course_id/exercises/:id',
    handler: {
      body: 'exercise'
    },
  },
];

describe('test createRouter function:', () => {
  test('should return a route', () => {
    const path = '/courses/php_trees';

    expect(serve(routes, path))
      .toMatchObject({ path: '/courses/php_trees', handler: { body: 'course' }, params: { id: 'php_trees' } });
  });

  test('should throw an error', () => {
    const path = '/no_such_path';

    expect(() => serve(routes, path)).toThrow();
  });
});
