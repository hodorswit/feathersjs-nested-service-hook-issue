const { debug } = require("feathers-hooks-common");

module.exports = {
  before: {
    all: [],
    find: [debug("Should only run before /user/reset")],
    get: [debug("Should only run before /user/reset")],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
