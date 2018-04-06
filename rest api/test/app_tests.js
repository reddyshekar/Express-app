var request = require("supertest");
var assert = require('assert');
const chai = require('chai');  
const chaiHttp = require('chai-http');
let should = chai.should();

chai.use(chaiHttp);
const expect = require('chai').expect;

describe('routes', function () {
    this.timeout(5000);
    var server;
    beforeEach(function () {
        // Clears the cache so a new server instance is used for each test.
        delete require.cache[require.resolve('../app')];
        server = require("../app");
    });
    afterEach(function () {
        server.close();
    });
    // Test to make sure URLs respond correctly.
    it("url /", function (done) {
        request(server)
            .get("/")
            .end(function (err, res) {
            assert.equal(res.text, "welcome to home page!");
            done();
        });
    });

    it("url generateGreeting/:name", function (done) {
        request(server)
            .get("/generateGreeting/testString")
            .end(function (err, res) {
            assert.equal(res.text, "Hello testString");
            done();
        });
    });

});
