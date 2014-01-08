(function () {

  
  window.PetScorePresenter = function (options) {

    var $root = options.root;
    var $totalLikeCount = 0;
    var comments = options.comments;

      // // // // // // //
     // View Listeners //
    // // // // // // //



      // // // // // // //
     // Model Listeners /
    // // // // // // //

    comments.on('like', function(totalLikeCount) {
      $totalLikeCount += 1;
      $root.text('Total Likes: ' + $totalLikeCount);
    });
  };

})();