System.config({
  "defaultJSExtensions": true,
  "meta": {
    "assets/bower_components/angular/angular": {
      "exports": "angular"
    },
    "assets/bower_components/ui-router/release/angular-ui-router.min": {
      "deps": [
        "angular"
      ]
    }
  },
  "map": {
    "angular": "assets/bower_components/angular/angular.min",
    "angular-ui-router": "assets/bower_components/ui-router/release/angular-ui-router.min",
    "json": "assets/bower_components/plugin-json/json",
    "lodash": "assets/bower_components/lodash/dist/lodash",
    "text": "assets/bower_components/plugin-text/text"
  }
});
