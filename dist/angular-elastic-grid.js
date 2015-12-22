(function (angular) {

  // Create all modules and define dependencies to make sure they exist
  // and are loaded in the correct order to satisfy dependency injection
  // before all nested files are concatenated by Gulp

  // Config
  angular.module('angular-elastic-grid.config', [])
      .value('angular-elastic-grid.config', {
          debug: true
      });

  // Modules
  
  angular.module('angular-elastic-grid.directives', []);
  
  
  
  
  angular.module('angular-elastic-grid',
      [
        'angular-elastic-grid.config',
        'angular-elastic-grid.directives'
      ]);

})(angular);

/**
 * Created by coichedid on 21/04/15.
 */
'use strict';
angular.module('angular-elastic-grid').directive('elasticGrid', [
  function($timeout) {
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
        filter: '@',
        timeout: '@'
      },
      link: function postLink(scope, element, attrs) {
        $timeout(function() {
          // Elastic grid directive logic
         element.elastic_grid({
            'hoverDirection': scope.direction || true,
            'hoverDelay': scope.delay || 0,
            'hoverInverse': scope.inverse || false,
            'expandingSpeed': scope.speed || 500,
            'expandingHeight': scope.height || 500,
            'filterEffect': scope.filter || 'none',
            'items': scope.items || [{
              'title': 'Title 1',
              'description': 'This is a description.',
              'thumbnail': ['https://pixabay.com/en/boy-child-fun-beach-sea-colors-958457/'],
              'large': ['https://pixabay.com/en/christmas-santa-claus-fig-993304/'],
              'button_list': [{'title': 'Demo', 'url': 'http://#'}, {'title': 'Download', 'url': 'http://#'}],
              'tags': ['Test']
            }]
          });
        }, scope.timeout || 100);
      }
    };
  }
]);
