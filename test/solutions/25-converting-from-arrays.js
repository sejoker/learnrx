module.exports = function (lists, videos) { 
 return lists.map(function (list) {
    return {
      name: list.name,
      videos:
        videos.
          filter(function (video) {
            return video.listId === list.id;
          }).
          map(function (video) {
            return {id: video.id, title: video.title};
          })
    };
  });
}