const assert = require("assert");
const rp = require("request-promise");
const app = require("../src/app");

describe("Feathers application tests", () => {
  before(function(done) {
    this.server = app.listen(3030);
    this.server.once("listening", () => done());
  });

  after(function(done) {
    this.server.close(done);
  });

  describe("bug recreation - root service hooks running instead of nested service hooks", function() {
    it("should run hooks for user-reset service", done => {
      rp({
        url: "http://localhost:3030/user/reset/?param1=param1&param2=param2"
      })
        .then(() => {
          assert.fail("See debug output, runs the hooks for /user service");
        })
        .catch(done);
    });
  });
});
