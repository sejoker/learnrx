module.exports = function (movieLists) {
  
return movieLists.
    map(function (movieList) {
    return movieList.videos.map(function(video) {
      return video.id;
      });
    }).
    concatAll();
}