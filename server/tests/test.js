import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server';
// import UserModel from '../models/User';
// import supertest from 'supertest';
chai.use(chaiHttp);
chai.should();

/*
  * Test the /GET route
  */

// let authUser = supertest.agent(server);
// describe('Auto Mart',()=>{
  
  //SignUp Test

  describe('/Get All Users', () => {
    it('it should GET all users', (done) => {
      chai.request(server)
          .get('/api/v1/users')
          // .set('access-email','emmykalisa8@gmail.com')
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
            done();
          });
    });
  });

  describe('/SignUp', () => {
    it('it should Created User', (done) => {
      chai.request(server)
          .post('/api/v1/signup')
          // .set('access-email','emmykalisa8@gmail.com')
          .send({email:'emmykalisa8@gmail.com', firstName:'Emmanuel', lastName:'KALISA', password:'kalisa', address:'kacyiru', is_admin:'false'})
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
            done();
          });
    });
    it('it should return an error', (done) => {
      chai.request(server)
          .post('/api/v1/signup')
          // .set('access-email','emmykalisa8@gmail.com')
          .send({firstName:'Emmanuel', lastName:'KALISA', password:'kalisa', address:'kacyiru', is_admin:'false'})
          .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
            done();
          });
    });
  });

// });




