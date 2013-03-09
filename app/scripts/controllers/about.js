'use strict';

angular.module('ruhrjsApp')
  .controller('AboutCtrl', function ($scope) {
   $scope.words = ["This","is","a","d3","wordcloud"];
   $scope.words2 = ["This","is","a","d3","wordcloud","with","much","more","text","then","the","first"];
  });
