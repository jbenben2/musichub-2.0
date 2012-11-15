
/*
 * GET users listing.
 */

exports.index = function(req, res){
  
  if(req.get('X-PJAX')){
    res.renderPjax('music/index');
  }
  else {
    res.render('layouts/main', {title: 'MusicHub-2.0', music: true});
  }
};