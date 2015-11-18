module.exports = function (videos) {
  
  var videoAndTitlePairs = [];

  videos.forEach(function(video) {
    videoAndTitlePairs.push({id:video.id, title: video.title});
  });

  return videoAndTitlePairs;
}