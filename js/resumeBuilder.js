// $("#main").append("Justin Huynh");

// var awesomeThoughts = "I am Justin Huynh and I am AWESOME!";
// console.log(awesomeThoughts);

// var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
// $("#main").append(funThoughts);

var formattedName = HTMLheaderName.replace("%data%", "Justin Huynh");
var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);