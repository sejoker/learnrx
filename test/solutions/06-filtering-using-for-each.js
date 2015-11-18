module.exports = function (videos) {
  
  var topRated = [];

  videos.forEach(function(video) {
    if (video.rating === 5.0) {
      topRated.push(video);
    }
  });

  return topRated;
}