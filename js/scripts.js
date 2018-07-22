jQuery(document).ready(function($) {
    // for Sort arrows
    var sort = $('#sort');
    sort.on('click', function () {
        if ($(this).hasClass('down')) {
            $(this).removeClass('down').addClass('up');
        } else if ($(this).hasClass('up')) {
            $(this).removeClass('up');
        } else {
            $(this).addClass('down');
        }
    });


    // for Tabs
    var tabs = $('#tabs');

    if(window.location.hash) {
        var hash = window.location.hash.substring(1);

        $('.orders-wrap').each( function() {
            var id = $(this).attr('id');
            if (id === hash) {
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }
        });
        tabs.find('a').each( function() {
            var href = $(this).attr('href');
            if (href === '#'+hash) {
                $(this).closest('li').addClass('active');
            } else {
                $(this).closest('li').removeClass('active');
            }
        });
    }
    tabs.find('a').on('click', function () {
        var parentSection = $(this).parents('.table-wrap'),
            idValue = $(this).attr('href');

        tabs.find('li').removeClass('active');
        $(this).closest('li').addClass('active');

        parentSection.find('.orders-wrap').removeClass('active');
        parentSection.find(idValue).addClass('active');
    });

});