module.exports = function (videos, bookmarks) {
  var counter,
  videoIdAndBookmarkIdPairs = [];

  for(var counter = 0; counter < Math.min(videos.length, bookmarks.length); counter++) {
    videoIdAndBookmarkIdPairs.push({
      videoId: videos[counter].id,
      bookmarkId: bookmarks[counter].id
    });
  }

  return videoIdAndBookmarkIdPairs;
}