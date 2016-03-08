/**
 * Created by coichedid on 21/04/15.
 */
'use strict';
angular.module('angular-elastic-grid').directive('elasticGrid',
  function() {
    // List of known option keys for elastic_grid according to jquery-elastic-grid.js docs:
    // http://demo.phapsu.com/jquery.elastic_grid/index.php
    var OPTION_FILTERS = [
      'popup', 'none', 'moveup', 'scaleup',
      'fallperspective', 'helix', 'fly', 'flip',
    ];

    return {
      template: '<div></div>',
      restrict: 'EA',
      replace: true,
      scope:  {
        items: '=',
        direction: '=',
        inverse: '@',
        speed: '@',
        height: '@',
        delay: '@',
        filter: '@'
      },
      link: function postLink(scope, element, attrs) {
        scope.$watch(function(scope) {
          return scope.items;
        }, function (newValue) {
          // Elastic grid directive logic
          element.elastic_grid({
              'hoverDirection': scope.direction || true,
              'hoverDelay': scope.delay || 0,
              'hoverInverse': scope.inverse || false,
              'expandingSpeed': scope.speed || 500,
              'expandingHeight': scope.height || 500,
              'filterEffect': OPTION_FILTERS[scope.filter] || OPTION_FILTERS.none,
              'items': newValue || [{
                'title': 'Title 1',
                'description': 'This is a description.',
                'thumbnail': ['http://www.joomlaworks.net/images/demos/galleries/abstract/7.jpg'],
                'large': ['http://www.joomlaworks.net/images/demos/galleries/abstract/7.jpg'],
                'button_list': [{'title': 'Demo', 'url': 'http://#', 'new_window': '_blank'},
                {'title': 'Download', 'url': 'http://#', 'new_window': '_blank'}],
                'tags': ['Test']
              }]
            });
        });
      }
    };
  }
);
