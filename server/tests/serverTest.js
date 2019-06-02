import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server';
chai.use(chaiHttp);
chai.should();

  
  //SignUp Test

  describe('/ ', () => {
    it('Start server', (done) => {
        chai.request(server)
            .get('/')
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
              done();
            });
      });
      it('Test invalid route', (done) => {
        chai.request(server)
            .get('/Invalid route')
            .end((err, res) => {
                  res.should.have.status(404);
                  res.body.should.be.a('object');
              done();
            });
      });
  });
