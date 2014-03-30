// Using jQuery Event API v1.3
$('#call-to-action-button').on('click', function() {
  ga('send', 'event', 'button', 'click', 'call-to-action-button');
});

$('#close-questionnaire-button').on('click', function() {
  ga('send', 'event', 'button', 'click', 'close-questionnaire-button');
});