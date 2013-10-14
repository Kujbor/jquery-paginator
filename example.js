$.get('templates/pagination.html', function(template) {

    $.paginator.setTemplate(_.template(template));

});

$(function() {

    $('#pagination').paginator({
        base: 'page/',
        first: 1,
        current: 3,
        last: 10
    });

});
