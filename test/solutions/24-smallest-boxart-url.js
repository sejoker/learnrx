module.exports = function (movieLists) {  
  return movieLists.concatMap( function(movieList) {
    return movieList.videos.concatMap(function (video) {
      return Array.zip(
        video.boxarts.reduce(function (acc,curr) {
          if (acc.width * acc.height < curr.width * curr.height) {
                return acc;
          }
          else {
              return curr;
          }
          }),
        video.interestingMoments.filter(function (interestingMoment) {
          return interestingMoment.type === "Middle";
        }),
          function (boxart, interestingMoment) {
          return {
            id: video.id,
            title: video.title,
            time: interestingMoment.time,
            url: boxart.url
            };
          });
    });
  });
}