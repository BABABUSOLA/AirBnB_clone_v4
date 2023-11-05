$(document).ready(function() {
    const amenities = {};
    $('input[type="checkbox"]').change(function() {
        const amenityId = $(this).data('id');
        const amenityName = $(this).data('name');

        if ($(this).is(':checked')) {
            amenities[amenityId] = amenityName;
        } else {
            delete amenities[amenityId];
        }

        const amenitiesList = Object.values(amenities).join(', ');
        $('.amenities h4').text(amenitiesList);
    });
    apiStatus();
});
function apiStatus () {
  const HOST = '0.0.0.0';
  const API_URL = `http://${HOST}:5001/api/v1/status/`;
  $.get(API_URL, (data) => {
    if ( data.status === 'OK') {
      $('#api_status').addClass('available');
    } else {
      $('#api_status').removeClass('available');
    }
  });
}
