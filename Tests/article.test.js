let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');



chai.use(chaiHttp);
chai.should();

var id;

describe('Articles', () => {
  describe('/getArticles should get all the articles', () => {
    it('it should GET all the articles', (done) => {
      chai.request(server)
        .get('/getArticles')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          done();
        });
    });
  });

<<<<<<< HEAD


=======
>>>>>>> development

});