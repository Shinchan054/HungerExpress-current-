var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var upload = require('express-fileupload');
var dot = require('dotenv').config();
var flash = require('express-flash');
var bodyparser = require('body-parser');
var session = require('express-session');



var hh;
const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:12345@localhost:5432/HungerExpress');

var initModels = require('./Models/init-models');
var models = initModels(sequelize);


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
app.use(bodyparser.urlencoded({extended:true}));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use((req,res,next) => {
  res.locals.session = req.session;
  next();
});
// app.use(passport.initialize());
// app.use(passport.session());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use(session(
    {
      secret: 'secret',
      resave: false,
      saveUninitialized: false,
      cookie: {maxAge: 1000 * 60 * 60 * 24 * 7}
    }
))

app.use(flash());



var AddItemRouter = require("./routes/webpageRoutes/Add_item");
var LoginRouter = require("./routes/webpageRoutes/login");
var custromerRouter = require("./routes/webpageRoutes/customer");
var SignupRouter = require("./routes/webpageRoutes/signup");
var resRouter = require("./routes/webpageRoutes/show_restaurant");
var catRouter = require("./routes/webpageRoutes/Add_category");
var resloginRouter = require("./routes/webpageRoutes/rest_login");
var reshomeRouter = require("./routes/webpageRoutes/restaurant_home");
var resmenueRouter = require("./routes/webpageRoutes/menu");
var searchRouter = require("./routes/webpageRoutes/search");
var custProRouter = require("./routes/webpageRoutes/customer_profile");
var searchresRouter = require("./routes/webpageRoutes/search_result");
var cartRouter = require("./routes/webpageRoutes/cart");
var dashRouter = require("./routes/webpageRoutes/dashboard");
var orRouter = require("./routes/webpageRoutes/Order");
var locRouter = require("./routes/webpageRoutes/cust_location");
var rlocRouter = require("./routes/webpageRoutes/rest_location");
var orrRouter = require("./routes/webpageRoutes/location");
var orfinRouter = require("./routes/webpageRoutes/rest_finish_order");
var riderRouter = require("./routes/webpageRoutes/rider_home");
var riderloginRouter = require("./routes/webpageRoutes/Rider_login");
var riderorderRouter = require("./routes/webpageRoutes/rider_finish");
var custFinishRouter = require("./routes/webpageRoutes/customer_finish");
var riderMsgRouter = require("./routes/webpageRoutes/rider_msg");
var custMsgRouter = require("./routes/webpageRoutes/cust_msg");
var custInvoice= require("./routes/webpageRoutes/Incoice");

app.use(upload());
app.use(cookieParser());

app.use('/restaurant/add_item', AddItemRouter);
app.use('/customer/home',custromerRouter);
app.use('/customer/login',LoginRouter);
app.use('/customer/signup',SignupRouter);
app.use('/restaurants',resRouter);
app.use('/restaurant/add_category',catRouter);
app.use('/restaurant/login',resloginRouter);
app.use('/restaurant/home',reshomeRouter);
app.use('/restaurant/menu',resmenueRouter);
app.use('/customer/search',searchRouter);
app.use('/customer/profile',custProRouter);
app.use('/customer/search_result',searchresRouter);
app.use('/customer/cart',cartRouter);
app.use('/restaurant/dashboard',dashRouter);
app.use('/customer/order_page',orRouter);
app.use('/customer/location',locRouter);
app.use('/restaurant/location',rlocRouter);
app.use('/order_loc',orrRouter);
app.use('/restaurant/finished_order',orfinRouter);
app.use('/rider/home',riderRouter);
app.use('/rider/login',riderloginRouter);
app.use('/rider/order/finish',riderorderRouter);
app.use('/customer/order/finish',custFinishRouter);
app.use('/rider/msg',riderMsgRouter);
app.use('/customer/msg',custMsgRouter);
app.use('/customer/invoice',custInvoice);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;