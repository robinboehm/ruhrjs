'use strict';

angular.module('ruhrjsApp')
  .directive('wordcloud', function (
        // TODO: Create a d3 Service and inject
        ) {
    return {
      restrict: 'E',
        scope:{
            // attributes
            width : "@",
            height: "@",
            fontFamily : "@",
            fontSize: "@",

            // Bindings
            words: "="

            // EventCallbacks
            // Todo: &onClick -> Callback when clicking on a text element
            // Todo: &onHover -> Callback when hover over a text element
        },
      link: function postLink(scope, element, attrs) {
          // Default Values
          var width             =   800;
          var height            =   400;
          var fontFamily        =   "Impact";
          var fontSize          =   20;
          var words;

          // Check and set attributes, else keep then default values
          if(angular.isDefined(attrs.width))        width           = attrs.width;
          if(angular.isDefined(attrs.height))       height          = attrs.height;
          if(angular.isDefined(attrs.fontFamily))   fontFamily      = attrs.fontFamily;
          if(angular.isDefined(attrs.fontSize))     fontSize        = attrs.fontSize * 1 || 0; // Form to Number

          // Check Scope
          if(angular.isDefined(scope.words))    words   = scope.words;


          //TODO: Refactor String to a service
          // Skip rendering when no corrent word param is parsed
          if(!angular.isArray(words)){
              element.text("wordcloud: words attribute should be an array");
              return;
          }
          // Font-Size Param wrong
          if(!angular.isNumber(fontSize) || fontSize<=0){
              element.text("wordcloud: font-size attribute not valid. font-size "+attrs.fontSize +" -> "+fontSize);
              return;
          }

          // CloudFactory - so high in the sky ;)
          var cloudFactory = function(words){
              // Keep the anonym functions here for readability
              var fill = d3.scale.category20();
              d3.layout.cloud().size([width, height])
                  .words(words.map(function(d) {
                      return {text: d, size: fontSize + Math.random() * fontSize*10};
                  }))
                  .rotate(function() { return ~~(Math.random() * 2) * 90; })
                  .font(fontFamily)
                  .fontSize(function(d) { return d.size; })
                  .on("end", draw)
                  .start();

              function draw(words) {
                  // Center the drawing
                  var height_translate = height/2;
                  var width_translate = width/2;
                  var rootElement = element[0];


                  d3.select(rootElement)
                      .append("svg")
                      .attr("width", width)
                      .attr("height", height)
                      .append("g")
                      .attr("transform", "translate("+width_translate+","+height_translate+")")// Translate to center
                      .selectAll("text")
                      .data(words)
                      .enter().append("text")
                      .style("font-size", function(d) { return d.size + "px"; })
                      .style("font-family", fontFamily)
                      .style("fill", function(d, i) { return fill(i); })
                      .attr("text-anchor", "middle")
                      .attr("transform", function(d) {
                          return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
                      })
                      .text(function(d) { return d.text; });
              }
          };

          // Execute
          cloudFactory(words);
      }
    };
  });
