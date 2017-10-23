const { debug } = require("feathers-hooks-common");

module.exports = {
  before: {
    all: [],
    find: [debug("Should only run before /user")],
    get: [debug("Should only run before /user")],
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
