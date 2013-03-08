'use strict';

angular.module('ruhrjsApp')
  .factory('talkprovider', function () {
    // Service logic

    var slotSize = 3;

    var generateEmtpyText = function(){
        return{
            title: "Free Slot",
            description : "You’re doing something interesting stuff with JavaScript more people should know about?",
            twitter :   "https://twitter.com/RuhrJS/",
            mailingList : "https://groups.google.com/group/ruhrjs"
        };
    };

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
      },
      getFreeSlots: function(){
          var freeSlots = Array();
          var currentSlot = talks.length;

          for(;currentSlot<slotSize;currentSlot++){
              freeSlots.push(generateEmtpyText());
          }
          return freeSlots;
      }

    };
  });
