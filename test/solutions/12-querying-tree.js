module.exports = function (movieLists) {
  return movieLists.
    map(function (movieList) {
      return movieList.videos.
        map(function (video) {
          return video.boxarts.
            filter(function (boxart) {
              return boxart.width === 150;
            }).
            map(function (boxart) {
              return {id: video.id, title: video.title, boxart: boxart.url};
            });
          }).
          concatAll();
      }).
      concatAll();
}