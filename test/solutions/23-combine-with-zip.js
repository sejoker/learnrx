module.exports = function (videos, bookmarks) {
  return Array.zip(videos, bookmarks,
      function (video, bookmark) {
        return { videoId: video.id, bookmarkId: bookmark.id };
      });
}