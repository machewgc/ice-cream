$(document).ready(function() {

  var sadList = document.getElementById("sad");
  var madList = document.getElementById("mad");


  var sadFlavors = ["Rocky Road","Blueberry"];
  var madFlavors = ["Rum Raisin","Dark Chocolate","Cherry Garcia"];
  var flavors = [sadFlavors,madFlavors];
  var number = 0;


  flavors.forEach(function(emotion) {
  	number += 1;
  	emotion.forEach(function(flavor) {
      var newNumberListItem = document.createElement("li");
      var numberListValue = document.createTextNode(flavor);
      newNumberListItem.appendChild(numberListValue);
      if(number === 2) {
      	madList.appendChild(newNumberListItem);
     	} else {
      	sadList.appendChild(newNumberListItem);
      };
     });
  });


});
