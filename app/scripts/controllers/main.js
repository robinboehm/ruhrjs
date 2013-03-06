'use strict';

angular.module('ruhrjsApp')
  .controller('MainCtrl', function ($scope) {

    $scope.talks = [
        {
        time : "06.03.2011 12:00",
        title : "Creating the RuhrJS Website",
        speakers: [
            {
                firstname: "Robin"
            },
            {
                firstname: "Philipp"
            }
         ],
            description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum Lorem IpsumLorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum"
        }
    ];
        
  });
