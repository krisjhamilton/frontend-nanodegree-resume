
// Udacity - Project 2: Interactive Resume
// Kris Hamilton - April 2015
// - Resourced information and guidance from Udacity Forums, Udacity Courses, Google, Github and prior knowledge


//Here we go...

"use strict";

// Storing JSON data/objects for Bio into an object called 'bio'
var bio = {
	"name": "Kris Hamilton",
	"role": "Digital Jedi",
	"contacts": {
		"mobile": "+64 27 291 2314",
		"email": "krisjhamilton@outlook.com",
		"github": "krisjhamilton",
		"twitter": "@AKStudioDev",
		"location": "Wellington, NZ"
	},
	"welcomeMessage": "A Business Analyst, Web Developer, Musician and Pebbler",
	"skills": ["Business Analysis", "HTML/CSS", "PHP/MySQL", "Pebble Development", "Digital Jedi"],
	"bioPic": "images/kris.jpg"
};

// Function to append Bio data/objects from the 'bio' object
bio.display = function () {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole).prepend(formattedName);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

	// Found this was a quicker way to append multiple objects to an id
	$("#topContacts").append(formattedMobile).append(formattedEmail).append(formattedTwitter).append(formattedGithub).append(formattedLocation);

    $("#footerContacts").append(formattedMobile).append(formattedEmail).append(formattedTwitter).append(formattedGithub).append(formattedLocation);

	var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	var formattedMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedBioPic);
	$("#header").append(formattedMessage);
	
	if(bio.skills.length > 0){	
		if (bio.skills.length > 0) {
	        $('#header').append(HTMLskillsStart);
	        bio.skills.forEach(function (skill) {
	            var formattedSkill = HTMLskills.replace("%data%", skill);
	            $('#skills').append(formattedSkill);
	        });
	    }	
	}
};

// Storing JSON data/objects for Work into an object called 'work'
var work = {
	"jobs": [
		{
			"employer": "TEC",
			"title": "Business Analyst",
			"location": "Wellington",
			"dates": "2014 - Present",
			"description": "Working on the Business Improvement Project to capture, map and improve the current state processes using the Lean methodology"
		},
		{
			"employer": "BP Oil NZ Ltd",
			"title": "Business Analyst and Business Improvement Project Lead",
			"location": "Wellington",
			"dates": "2012 - 2014",
			"description": "Gathering business requirements and working with stakeholder and vendors to implement enhancements to the companies core loyalty platform"
		}
	]
};

// Function to append Work data/objects from the 'work' object
work.display = function () {
	for (var job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedDescription);
	}
};

// Storing JSON data/objects for Education into an object called 'education'
var education = {
	"schools": [
		{
			"name": "Weltec",
			"location": "Petone, NZ",
			"degree": "Certificate in Web Design",
			"majors": ["PHP/MySQL"],
			"dates": 2012,
			"url": "http://weltec.ac.nz"
		}
	],
	"onlineSchool": [
		{
			"title": "HTML5 and CSS",
			"school": "Code Academy",
			"dates": 2013,
			"url": "http://codeacademy.com"
		},
		{
			"title": "PHP",
			"school": "Code Academy",
			"dates": 2013,
			"url": "http://codeacademy.com"
		}
	]
};

// Function to append Education data/objects from the 'education' object
education.display = function (){
    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace("%data%", school.name).replace('#', school.url);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
        $(".education-entry:last").append(formattedSchoolName);
        $(".education-entry:last a").append(formattedSchoolDegree);
        $(".education-entry:last").append(formattedSchoolLocation).append(formattedSchoolDates);

        school.majors.forEach(function(major) {
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", major);
            $(".education-entry:last").append(formattedSchoolMajor);
        });
    });

    if (education.onlineSchool.length > 0) {
        $(".education-entry").append(HTMLonlineClasses);
        education.onlineSchool.forEach(function (course) {
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", course.title).replace('#', course.url);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", course.school);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", course.dates);

            $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool).append(formattedOnlineDates).append('<br>');
        });
    }
};

// Storing JSON data/objects for Projects into an object called 'projects'
var projects = {
	"projects": [
		{
			"title": "Destiny Pebble Tracker",
			"dates": "06-04-2015",
			"description": "Destiny tracker for up to date information on your characters, including: <br /> - Power Level <br /> - Glimmer <br /> - Grimoire Score <br /> - Vanguard/Cruicible/Cryptarch levels and progression <br /> - Primary and Secondary stats",
			"images": ["images/pebble.jpg"]
		},
		{
			"title": "Destroy The Night",
			"dates": "2012 - 2013",
			"description": "Playing lead guitar in Wellington local band Destroy The Night. The band release a 6 track EP on iTunes, Amazon, Spotify and many more places",
			"images": ["images/theBand.jpg"]
		}
	]
};

// Function to append Projects data/objects from the 'projects' object
projects.display = function () {
	for(var project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedTitle);
		$(".project-entry:last").append(formattedDates);
		$(".project-entry:last").append(formattedDescription);
		
		if (projects.projects[project].images.length > 0) {
			for (var image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
};

// Click tracker - logging the users mouse clicks
$(document).click(function(loc) { 
	var x = loc.pageX;
	var y = loc.pageY; 
	logClicks(x,y);
});


// Internationalize Button
// 		Note: I had to update helper.js as per stated in the forum link -
// 		http://forums.udacity.com/questions/100250412/uncaught-typeerror-cannot-read-property-touppercase-of-undefined
function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	return name[0] +" "+name[1];
}

// Calling functions for all sections
bio.display();
work.display();
education.display();
projects.display();

// Appending the Internationalize button
$('#main').append(internationalizeButton);

// Appending the Google Map
$("#mapDiv").append(googleMap);












