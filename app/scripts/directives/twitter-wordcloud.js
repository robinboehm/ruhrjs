'use strict';

angular.module('ruhrjsApp')
  .directive('twitterWordcloud', function (wordFetcher) {
        return {
            restrict: 'E',
            templateUrl : 'views/directives/twitter-wordcloud.html',
            scope:{
                // attributes
                width : "@",
                height: "@",
                fontFamily : "@",
                fontSize: "@",

                // EventCallbacks
                // Todo: &onClick -> Callback when clicking on a text element
                // Todo: &onHover -> Callback when hover over a text element

                query: "@",
                maxWords: "@",
                fetchSize: "@"
            },
            link: function postLink(scope, element, attrs) {

                var query               =   "JavaScript"; //
                var maxWords            =   100; // # Words so display in the visualisation
                var fetchSize           =   50; // #Tweets


                // Check and set attributes, else keep then default values
                if(angular.isDefined(attrs.query))       query          = attrs.query;
                if(angular.isDefined(attrs.maxWords))    maxWords       = attrs.maxWords;
                if(angular.isDefined(attrs.fetchSize))   fetchSize      = attrs.fetchSize;


                // Default Values for the sub directive wordcound
                scope.width             =   800;
                scope.height            =   400;
                scope.fontFamily        =   "Impact";
                scope.fontSize          =   20;

                // Check and set attributes, else keep then default values
                if(angular.isDefined(attrs.width))        scope.width           = attrs.width;
                if(angular.isDefined(attrs.height))       scope.height          = attrs.height;
                if(angular.isDefined(attrs.fontFamily))   scope.fontFamily      = attrs.fontFamily;
                if(angular.isDefined(attrs.fontSize))     scope.fontSize        = attrs.fontSize * 1 || 0; // Form to Number

                var disableLoadingAnimation = function(){
                   // Promise
                };

                var publishWordsToScope = function(words){
                    scope.words = words;
                }


                // Fetch words via service
                wordFetcher.getWords(query,fetchSize,maxWords)
                    .success(publishWordsToScope)
                    .then(disableLoadingAnimation);
            }
        };
  });
