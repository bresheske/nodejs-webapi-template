const chai = require('chai');
const chaihttp = require('chai-http');
chai.should();
chai.use(chaihttp);

declare const describe: Function;
declare const it: Function;

const api = 'http://localhost:8000/api';

describe('/get', () => {
    it('should should return a nice hello message', (done) => {
        chai.request(api)
            .get('/')
            .type('application/json')
            .end((err, result) => {
                result.should.have.status(200);
                result.body.should.be.a('object');
                result.body.message.should.equal('well, hello there.');
                done();
            });
    });
});