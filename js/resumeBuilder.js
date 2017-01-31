// BEGIN JSON OBJECT PRACTICE

var bio = {
	"name": "Justin Huynh",
	"role": "Web Developer",
	"welcomeMessage" : "I am a UCLA graduate with a degree in Microbiology, hoping to" +
					   " switch fields into computer programming!",
	"bioPic" : "images/me.jpg",
	"contacts": {
		"mobile": "951-310-8018",
		"email": "J.alexhuyh@gmail.com",
		"github": "Jalexhuynh",
		"location": "Corona, CA"
	},
	"skills" : ["Programming", "Web Design", "Microbiology", "Graphic Design",
				"Javascript", "HTML", "CSS", "Python", "Adobe Photoshop"]
};

var education = {
	"schools":
	[
		{
			"name": "University of California, Los Angeles",
			"url": "http://www.ucla.edu/",
			"location": "Los Angeles, CA",
			"degree": "Bachelors of Science",
			"major": ["Microbiology, Immunology, and Molecular Genetics"],
			"years": "Fall 2011 - Spring 2015"
		},
		{
			"name": "Mt. San Antonio College",
			"url": "http://www.mtsac.edu/",
			"location": "Walnut, CA",
			"degree": "Professional Certificate",
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
			"description": "Conducted research on human immune responses to Tuberculosis (TB) though ELISPOT assays" + 
						   " analysis of Mucosal-Associate Invariant T (MAIT) cells by flow cytometry and in-vitro" + 
						   " assays, as well as routinely isolating peripheral blood mononuclear cells (PBMCs) from" +
						   " post-active TB or latent TB blood samples. Also assisted in maintaining lab inventory" +
						   " of supplies, plasma/cell samples, and independently coordinating experiments with the PI."
		},
		{
			"employer": "USC Keck School of Medicine",
			"title": "Research Technician I",
			"location": "Los Angeles, CA",
			"dates": "AUG 2015 - OCT 2015",
			"description": "Processed HIV samples through RNA extractions of infected Plasma, PCR runs, and gel" + 
						   " electrophoresis. Assisted in 454 sequencing, and led the design of PCR primers using" + 
						   " python code to determine the best primer pair to use for amplification of pol and env" +
						   " regions of HIV samples in a novel research project. "
		},
		{
			"employer": "UCLA Bruin Cafe",
			"title": "Barista",
			"location": "Los Angeles, CA",
			"dates": "SEP 2012 - JUN 2014",
			"description": "Managed and cooperated with team members to perform various assigned tasks, as well as" +
						   " handle independent duties without requiring supervision. Also took charge of training" + 
						   " new employees in performing their assigned positions. "
		}
	]
};

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
appendToResume(bio.bioPic, HTMLbioPic, "#header");
appendToResume(bio.welcomeMessage, HTMLwelcomeMsg, "#header");



var displaySkills = function() {
	$("#header").append(HTMLskillsStart);
	for (skill in bio.skills) {
		var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#skills:last").append(formattedSkills);
	};
};

displaySkills();


var displayEducation = function() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name).replace("#", education.schools[school].url);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedSchoolEntry = formattedSchoolName + formattedSchoolDegree;
		$(".education-entry:last").append(formattedSchoolEntry);

		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedSchoolLocation);

		var formattedSchoolYears = HTMLschoolDates.replace("%data%", education.schools[school].years);
		$(".education-entry:last").append(formattedSchoolYears);

		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$(".education-entry:last").append(formattedSchoolMajor);
	};
};

displayEducation();


var displayWork = function() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedWorkEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
		$(".work-entry:last").append(formattedWorkEmployerTitle);

		var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedWorkDates);

		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedWorkLocation);

		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedWorkDescription);
	};
};

displayWork();


$("#main").append(internationalizeButton);
var inName = function(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	return name[0] + " " + name[1];
}

$("#mapDiv").append(googleMap);