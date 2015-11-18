module.exports = function (videos) {
  return videos.map(function (video) { 
      return { id: video.id, title: video.title };
  });
}