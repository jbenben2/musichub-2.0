/********************************
        ROUTE FILE
*********************************/

/*
  Similarly to rails routes this file defines all the available endpoints
  though we must define each controller
*/ 

module.exports = function(app){

  // CONTROLLERS
  application_controller = require('./controllers/application'); 
  music_controller = require('./controllers/music');
  

  // ROUTES
  app.get('/', application_controller.index); // Homepage
  app.get('/music', music_controller.index);
};
