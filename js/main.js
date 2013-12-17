
var videos = [
  { title: 'Get Krazy', youtubeId: 'GyR2HJ9B7aM' },
  { title: 'Sadness', youtubeId: 'sIeJSSjTG3k' }
];

var itemTemplate = $('#templates .video-list-item');

var renderVideoList = function () {
  for (var i = 0; i >= videos.length; i += 1){
  	var newVideoHtml = $.render(itemTemplate, { title: videos[i].title });
  	$('#vid-item').append(newVideoHtml);
	};
	// return newVideoHtml;
console.log(newVideoHtml);
};
