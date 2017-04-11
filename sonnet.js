console.log("sonnet.js loaded");

var sonnet =  document.getElementById("sonnet").innerHTML;

var index = sonnet.indexOf("orphans");
console.log("index of orphans", index);

console.log("character/space length", sonnet.length);

sonnet = sonnet.replace("winter", "yuletide")
console.log("yuletide for winter", sonnet);
// Reference "Regular Expression" for info on replace all
sonnet = sonnet.replace(/the /gi, "a large ");
console.log("replacing 'the'", sonnet);

document.getElementById("sonnet").innerHTML = sonnet;