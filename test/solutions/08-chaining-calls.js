module.exports = function (videos) {
  return videos.
    filter(function(video) {
      return video.rating === 5.0;
    }).
    map(function(video) {
      return video.id;
    });
}