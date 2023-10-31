const assert = require('assert');
const { describe, it } = require('./helpers/mocha');

describe(function () {
    it("success", function () {
        assert(1 === 1);
    });
})

describe(function () {
    it.allowFail("flaky test", function () {
        //assert.ok(false);
        assert(Math.random() > 0.5)
    });
});
