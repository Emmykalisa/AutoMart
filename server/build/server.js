"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _User = _interopRequireDefault(require("../routes/User"));

var _expressValidator = _interopRequireDefault(require("express-validator"));

var _expressSession = _interopRequireDefault(require("express-session"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// server.js
// import Message from './routes/Message';
const app = (0, _express.default)();
app.use(_express.default.json()); // app.use(cookParser());

app.use((0, _expressSession.default)({
  resave: true,
  saveUninitialized: true,
  secret: 'mysecret',
  name: 'session',
  cookie: {
    path: '/',
    httpOnly: true,
    secure: false,
    maxage: 3600000
  }
}));
app.get('/', (req, res) => {
  return res.status(200).send({
    'message': 'Congz, your host was done, add you API to view your data'
  });
});
app.use((0, _expressValidator.default)());

let isAuth = (req, res, next) => {
  let headers = req.headers['access-email'];
  if (headers) req.user = {
    email: headers
  };
  return next();
};

app.use(isAuth);
app.use('/api/v1', _User.default);
app.use('/api/v1', Message);
app.all('*', (req, res) => {
  return res.status(404).json({
    status: 404,
    error: 'Invalid route'
  });
});
let port = process.env.PORT || 3000;
var server = app.listen(port, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
});
var _default = app;
exports.default = _default;