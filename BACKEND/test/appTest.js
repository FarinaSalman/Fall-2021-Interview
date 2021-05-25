let mongoose = require('mongoose');
let Url = require('../models/Url');

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');
let should = chai.should();

chai.use(chaiHttp);
describe('urls', () => {
    /**
     * Test /api/url/encode
     */
    describe('/api/url/encode', () => {
        it('it should return status 200', (done) => {
            chai.request(server)
                .post('/encode')
                .send({
                    longUrl: "https://www.uottawa.ca/en"
                })
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });      
        });
        it('it should return status 401', (done) => {
            chai.request(server)
                .post('/encode')
                .send({
                    longUrl: "uottawa"
                })
                .end((err, res) => {
                    res.should.have.status(401);
                    done();
                });      
        });
    });

    describe('/api/url/decode', () => {
        it('it should return status 200', (done) => {
            chai.request(server)
                .post('/decode')
                .send({
                    shortUrl: "http://localhost:5000/RvfwHzCFk"
                })
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });      
        });
        it('it should return status 401', (done) => {
            chai.request(server)
                .post('/decode')
                .send({
                    shortUrl: "RvfwHzCFk"
                })
                .end((err, res) => {
                    res.should.have.status(401);
                    done();
                });      
        });
    });
});