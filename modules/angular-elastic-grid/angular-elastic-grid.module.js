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
