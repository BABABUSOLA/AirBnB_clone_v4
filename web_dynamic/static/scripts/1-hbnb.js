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
});

