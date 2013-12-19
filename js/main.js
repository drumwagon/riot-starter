
var videos = [
  { title: 'Get Krazy', youtubeId: 'GyR2HJ9B7aM' },
  { title: 'Sadness', youtubeId: 'sIeJSSjTG3k' }
];

var itemTemplate = $('#templates .video-list-item').html();
$('.submit').on('click', function () {
	$('.name').val()
})
var vidObject = {}
var newVideo = videos.push(vidObject);

for (var i = 0; i < videos.length; i += 1){
  var video = videos[i];
  var newVideoHtml = $.render(itemTemplate, { title: video.title, youtubeId: video.youtubeId });
  $('#vid-item').append(newVideoHtml);
};
	// return newVideoHtml;
console.log(newVideoHtml);



