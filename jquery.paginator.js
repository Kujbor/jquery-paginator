/*
 * jquery.paginator.js - jQuery plugin for Twitter Bootstrap pagination
 * Author Oleg Taranov aka Kujbor
 * Copyright (C) 2013: CubeComp Development
 */
define("jquery.paginator", ["jquery"], function($) {

    "use strict";

    var template;

    var Paginator = function() {

        this.setTemplate = function(renderFunc) {
            template = renderFunc;
        };

        this.getTemplate = function() {
            return template;
        };
    };

    $.paginator = new Paginator();

    $.fn.paginator = function(JSON) {

        if (!template) {
            console.error("template of paginator not specified");
        }

        return $(this).html(template(JSON));
    };
});
