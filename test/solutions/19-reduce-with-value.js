var objectAssign = require('object-assign');

module.exports = function (videos) {
  return videos.
    reduce(function(accumulatedMap, video) {
      var copyOfAccumulatedMap = objectAssign(accumulatedMap);
      copyOfAccumulatedMap[video.id] = video.title;
      return copyOfAccumulatedMap;
    },
    {});
}