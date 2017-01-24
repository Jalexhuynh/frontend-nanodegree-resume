// Biographical Section

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

// Skills List

$("#header").append(HTMLskillsStart);
appendToResume(bio.skills, HTMLskills, "#skills");


// Education Section

var education = {};
education["name"] = "University of California, Los Angeles";
education["degree"] = "Bachelors of Science";
education["dates"] = "Fall 2011 - Spring 2015";
education["location"] = "Los Angeles, CA";
education["major"] = "Microbiology, Immunology, and Molecular Genetics";

$("#education").append(HTMLschoolStart);

var appendToEducation = function(item, how) {
	$(".education-entry").append(how.replace("%data%", item));
};

appendToEducation(education.name, HTMLschoolName);
appendToEducation(education.degree, HTMLschoolDegree);
appendToEducation(education.dates, HTMLschoolDates);
appendToEducation(education.location, HTMLschoolLocation);
appendToEducation(education.major, HTMLschoolMajor); 


// Work History Section

var work = {};
work.employer = "La Jolla Institute for Allergy & Immunology - Research Technician I";
// work.title = "Research Technician I";
work.dates = "DEC 2015 - JAN 2015";
work.location = "San Diego, CA";


$("#workExperience").append(HTMLworkStart);

var appendToWork = function(item, how) {
	$(".work-entry").append(how.replace("%data%", item));
};

appendToWork(work.employer, HTMLworkEmployer); 
// appendToWork(work.title, HTMLworkTitle);
appendToWork(work.dates, HTMLworkDates);
appendToWork(work.location, HTMLworkLocation);