// Initializes the `user-reset` service on path `/user/reset`
const createService = require('./user-reset.class.js');
const hooks = require('./user-reset.hooks');
const filters = require('./user-reset.filters');

module.exports = function () {
  const app = this;
  const paginate = app.get('paginate');

  const options = {
    name: 'user-reset',
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/user/reset', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('user/reset');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
