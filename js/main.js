// Using jQuery Event API v1.3
$('#call-to-action-button').on('click', function() {
  ga('send', 'event', 'button', 'click', 'call-to-action-button');
});

$('#call-to-action-download-sana-app-btn').on('click', function() {
  ga('send', 'event', 'button', 'click', 'call-to-action-download-sana-app-btn');
});

$('#close-questionnaire-button').on('click', function() {
  ga('send', 'event', 'button', 'click', 'close-questionnaire-button');
});