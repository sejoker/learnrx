module.exports = function (movieLists) {
  
  var allVideoIdsInMovieLists = [];

  movieLists.forEach(function(movieList) {
    movieList.videos.forEach(function(video) {
      allVideoIdsInMovieLists.push(video.id);
    });
  });

  return allVideoIdsInMovieLists;

}