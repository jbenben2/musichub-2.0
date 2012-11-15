/*
  This file serves as the application controller for the app
*/

// Render homepage
exports.index = function(req, res){
  if(req.get('X-PJAX')){
    res.renderPjax('home/index');
  }
  else {
    res.render('layouts/main', { title: 'MusicHub-2.0', content: '../home/index' });
  }
};