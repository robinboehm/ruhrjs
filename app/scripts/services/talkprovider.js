'use strict';

angular.module('ruhrjsApp')
  .factory('talkprovider', function () {
    // Service logic

    // Mock of the Talks
    // Possible extension via $http service
    var talks = [
        {
            time : "06.03.2011 12:30",
            title : "Using TalkProvider",
            speakers: [
                {
                    firstname: "Robin"
                },
                {
                    firstname: "Philipp"
                }
            ],
            description: "Provide Impsum Provide Impsum  Provide Impsum  Provide Impsum  Provide Impsum  Provide Impsum"
        },
        {
            time : "06.03.2011 14:30",
            title : "Creating a basic Design for RuhrJS",
            speakers: [
                {
                    firstname: "Robin"
                },
                {
                    firstname: "Philipp"
                }
            ],
            description: "Provide Impsum Provide Impsum  Provide Impsum  Provide Impsum  Provide Impsum  Provide Impsum"
        },
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

    // Public API here
    return {
      getTalks: function () {
        return talks;
      }
    };
  });
