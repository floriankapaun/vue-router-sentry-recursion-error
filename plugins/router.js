export default ({ app }) => {
  app.router.beforeEach(async (to, from, next) => {
      // Produce a redirection Error if user is trying to get from `test` to `index`
      if (to.name === 'index' && from.name === 'test') {
          return next({ name: 'test'});
      }
      // Else provide the requested route
      next();
  });
};
