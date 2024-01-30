document.querySelector( document ).ready(function() {
    var base_color = "rgb(230,230,230)";
    var active_color = "rgb(237, 40, 70)";
    
    
    
    var child = 1;
    var length = document.querySelector("section").length - 1;
    document.querySelector("#prev").classList.add("disabled");
    document.querySelector("#submit").classList.add("disabled");
    
    document.querySelector("section").not("section:nth-of-type(1)").hide();
    document.querySelector("section").not("section:nth-of-type(1)").css('transform','translateX(100px)');
    
    var svgWidth = length * 200 + 24;
    document.querySelector("#svg_wrap").html(
      '<svg version="1.1" id="svg_form_time" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 ' +
        svgWidth +
        ' 24" xml:space="preserve"></svg>'
    );
    
    function makeSVG(tag, attrs) {
      var el = document.createElementNS("http://www.w3.org/2000/svg", tag);
      for (var k in attrs) el.setAttribute(k, attrs[k]);
      return el;
    }
    
    for (let i = 0; i < length; i++) {
      var positionX = 12 + i * 200;
      var rect = makeSVG("rect", { x: positionX, y: 9, width: 200, height: 6 });
      document.getElementById("svg_form_time").appendChild(rect);
      // <g><rect x="12" y="9" width="200" height="6"></rect></g>'
      var circle = makeSVG("circle", {
        cx: positionX,
        cy: 12,
        r: 12,
        width: positionX,
        height: 6
      });
      document.getElementById("svg_form_time").appendChild(circle);
    }
    
    var circle = makeSVG("circle", {
      cx: positionX + 200,
      cy: 12,
      r: 12,
      width: positionX,
      height: 6
    });
    document.getElementById("svg_form_time").appendChild(circle);
    
    document.querySelector('#svg_form_time rect').css('fill',base_color);
    document.querySelector('#svg_form_time circle').css('fill',base_color);
    document.querySelector("circle:nth-of-type(1)").css("fill", active_color);
    
     
    document.querySelector(".button").click(function () {
      document.querySelector("#svg_form_time rect").css("fill", active_color);
      document.querySelector("#svg_form_time circle").css("fill", active_color);
      var id = document.querySelector(this).attr("id");
      if (id == "next") {
        document.querySelector("#prev").removeClass("disabled");
        if (child >= length) {
          document.querySelector(this).classList.add("disabled");
          document.querySelector('#submit').removeClass("disabled");
        }
        if (child <= length) {
          child++;
        }
      } else if (id == "prev") {
        document.querySelector("#next").removeClass("disabled");
        document.querySelector('#submit').classList.add("disabled");
        if (child <= 2) {
          document.querySelector(this).classList.add("disabled");
        }
        if (child > 1) {
          child--;
        }
      }
      var circle_child = child + 1;
      document.querySelector("#svg_form_time rect:nth-of-type(n + " + child + ")").css(
        "fill",
        base_color
      );
      document.querySelector("#svg_form_time circle:nth-of-type(n + " + circle_child + ")").css(
        "fill",
        base_color
      );
      var currentSection = document.querySelector("section:nth-of-type(" + child + ")");
      currentSection.fadeIn();
      currentSection.css('transform','translateX(0)');
     currentSection.prevAll('section').css('transform','translateX(-100px)');
      currentSection.nextAll('section').css('transform','translateX(100px)');
      document.querySelector('section').not(currentSection).hide();
    });
    
    });