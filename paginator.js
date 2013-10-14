/*
 * paginator.js - jQuery plugin for Twitter Bootstrap framework pagination
 * Author Oleg Taranov aka Kujbor
 * Copyright (C) 2013: CubeComp Development
 */
(function($) {

    "use strict";

    var template = new Function;

    $.paginator = new function() {

        this.setTemplate = function(renderFunc) {
            template = renderFunc;
        };

        this.getTemplate = function() {
            return template;
        };

    };

    $.fn.paginator = function(JSON) {

        return $(this).html(template(JSON));

    };

})($);
