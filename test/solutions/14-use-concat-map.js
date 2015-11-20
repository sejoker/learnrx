module.exports = function (movieLists) {
  return movieLists.concatMap(function(movieList) {
          return movieList.videos.concatMap(function(video) {
            return video.boxarts.
              filter(function(boxart) {
                return boxart.width === 150;
                }).
                map(function(boxart) {
                return {id: video.id, title: video.title, boxart: boxart.url};
              });
            });
          });
}