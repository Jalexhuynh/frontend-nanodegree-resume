var bio = {
	"name" : "Justin Huynh",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "951-310-8018",
		"email" : "J.alexhuyh@gmail.com",
		"github" : "Jalexhuynh",
		"location" : "Corona, CA"
	},
	"picture" : "images/me.jpg",
	"welcome" : "Hi, welcome to my blog!",
	"skills" : ["Programming, Web Design, Microbiology", "Graphic Design"]
}

var prependToHeader = function(item, how) {
	$("#header").prepend(how.replace("%data%", item));
};

var appendToResume = function(item, how, where) {
	$(where).append(how.replace("%data%", item));
};

prependToHeader(bio.role, HTMLheaderRole);
prependToHeader(bio.name, HTMLheaderName);
appendToResume(bio.contacts.mobile, HTMLmobile, "#topContacts");
appendToResume(bio.contacts.email, HTMLemail, "#topContacts");
appendToResume(bio.contacts.github, HTMLgithub, "#topContacts");
appendToResume(bio.contacts.location, HTMLlocation, "#topContacts");
appendToResume(bio.picture, HTMLbioPic, "#header");
appendToResume(bio.welcome, HTMLwelcomeMsg, "#header");