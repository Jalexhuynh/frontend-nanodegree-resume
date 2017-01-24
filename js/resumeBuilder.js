/*
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
*/

// BEGIN JSON OBJECT PRACTICE

var bio = {
	"name": "Justin Huynh",
	"role": "Web Developer",
	"welcomeMessage" : "Hi, welcome to my blog!",
	"bioPic" : "images/me.jpg",
	"contacts": {
		"mobile": "951-310-8018",
		"email": "J.alexhuyh@gmail.com",
		"github": "Jalexhuynh",
		"location": "Corona, CA"
	},
	"skills" : ["Programming", "Web Design", "Microbiology", "Graphic Design"]
};

var education = {
	"schools":
	[
		{
			"name": "University of California, Los Angeles",
			"url": "http://www.ucla.edu/",
			"location": "Los Angeles, CA",
			"degree dates": "Bachelors of Science",
			"major": ["Microbiology, Immunology, and Molecular Genetics"],
			"years": "Fall 2011 - Spring 2015"
		},
		{
			"name": "Mt. San Antonio College",
			"url": "http://www.mtsac.edu/",
			"location": "Walnut, CA",
			"degree dates": "Professional Certificate",
			"major": ["Web Programming"],
			"years": "Currently Enrolled"
		}
	],
	"onlineCourses":
	[
		{
			"title": "How to Use Git and Github",
			"school": "Udacity",
			"url": "http://www.udacity.com/course/ud775"
		},
		{
			"title": "J",
			"school": "Udacity",
			"url": "http://www.udacity.com/course/ud804"	
		}
	]
};

var work = {
	"jobs":
	[
		{
			"employer": "La Jolla Institute for Allergy & Immunology",
			"title": "Research Technician I",
			"location": "San Diego, CA",
			"dates": "DEC 2015 - JAN 2017",
			"description": "Lorem Ipsum"
		},
		{
			"employer": "USC Keck School of Medicine",
			"title": "Research Technician I",
			"location": "Los Angeles, CA",
			"dates": "AUG 2015 - OCT 2015",
			"description": "Lorem Ipsum"
		},
		{
			"employer": "UCLA Bruin Cafe",
			"title": "Barista",
			"location": "Los Angeles, CA",
			"dates": "SEP 2012 - JUN 2014",
			"description": "Lorem Ipsum"
		}
	]
};