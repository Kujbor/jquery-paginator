$(function() {
    $.get('templates/pagination.html', function(template) {
        $.paginator.setTemplate(_.template(template));
        $('#pagination').paginator({first: '#1.html', last: '#2.html'});
    });
});
