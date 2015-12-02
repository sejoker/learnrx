module.exports = function (lists, videos, boxarts, bookmarks) {
  return lists.map(function (list) {
    return {
      name: list.name,
      videos:
        videos.
          filter(function (video) {
            return video.listId === list.id;
          }).
          concatMap(function (video) {
            return Array.zip(
              bookmarks.filter(function (bookmark) {
                return bookmark.videoId === video.id;
              }),
              boxarts.filter(function (boxart) {
                return boxart.videoId === video.id;
              }).
              reduce(function (acc,curr) {
                return acc.width * acc.height < curr.width * curr.height ? acc : curr;
              }),
              function (bookmark, boxart) {
                return { id: video.id, title: video.title, time: bookmark.time, boxart: boxart.url };
              });
        })
    };
  });
}