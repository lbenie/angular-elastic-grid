'use strict';
angular.module('angular-elastic-grid').directive('elasticGrid',
  function() {
    // List of known option keys for elastic_grid according to jquery-elastic-grid.js docs:
    // http://demo.phapsu.com/jquery.elastic_grid/index.php
    var FILTERS = ['popup', 'none', 'moveup', 'scaleup', 'fallperspective', 'helix', 'fly', 'flip'];

    return {
      template: '<div></div>',
      restrict: 'EA',
      replace: true,
      scope: {
        items: '=',
        direction: '@',
        inverse: '@',
        speed: '@',
        height: '@',
        delay: '@',
        filter: '@'
      },
      link: function postLink(scope, element, attrs) {
        scope.$watch(function(scope) {
          return scope.items;
        }, function(newValue) {
          // Elastic grid directive logic
          element.elastic_grid({
            hoverDirection: scope.direction || true,
            hoverDelay: scope.delay || 0,
            hoverInverse: scope.inverse || false,
            expandingSpeed: scope.speed || 500,
            expandingHeight: scope.height || 500,
            filterEffect: function() {
              return FILTERS.indexOf(scope.filter) > -1 ?
                    scope.filter :
                    FILTERS[FILTERS.indexOf('none')];
            }(),

            items: newValue || [{
              title: 'Title 1',
              description: 'This is a description.',
              thumbnail: ['http://placehold.it/350x150'],
              large: ['http://placehold.it/450x350', 'http://placehold.it/450x350', 'http://placehold.it/450x350'],
              button_list: [
                { title: 'Demo', url: 'http://placehold.it/450x350'},
                { title: 'Download', url: 'http://placehold.it/450x350'}
              ],
              tags: ['Test']
            }, {
              title: 'Title 2',
              description: 'This is a description.',
              thumbnail: ['http://placehold.it/350x150'],
              large: ['http://placehold.it/450x350', 'http://placehold.it/450x350', 'http://placehold.it/450x350'],
              button_list: [
                { title: 'Demo', url: 'http://placehold.it/450x350'},
                { title: 'Download', url: 'http://placehold.it/450x350'}
              ],
              tags: ['Test, Title2']
            }, {
              title: 'Title 3',
              description: 'This is a description.',
              thumbnail: ['http://placehold.it/350x150'],
              large: ['http://placehold.it/450x350', 'http://placehold.it/450x350', 'http://placehold.it/450x350'],
              button_list: [
                { title: 'Demo', url: 'http://placehold.it/450x350'},
                { title: 'Download', url: 'http://placehold.it/450x350'}
              ],
              tags: ['Test, Title1']
            }]
          });
        });
      }
    };
  }
);
