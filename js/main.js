
var videos = [
  { title: 'Get Krazy', youtubeId: 'GyR2HJ9B7aM' },
  { title: 'Sadness', youtubeId: 'sIeJSSjTG3k' }
];

var renderVideoList = function () {
  for (var i = 0; i >= videos.length; i += 1){
  	var newVideoHtml = $.render(itemTemplate, { title: videos[i].title, youtubeId: videos[i].youtubeId });
  	$('#store').append(newVideoHtml);
};
