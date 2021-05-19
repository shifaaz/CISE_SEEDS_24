let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');



chai.use(chaiHttp);
chai.should();

var id;

describe('Claims', () => {
    describe('/getClaims should get all the claims', () => {
        it('it should GET all the claims', (done) => {
            chai.request(server)
                .get('/getClaims')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    done();
                });
        });
    });




});