/*
This is empty on purpose! Your code to build the resume will go here.
 */
 
 var bio = {
	name: 'name placeholder',
	role: 'role placeholder',
	contacts: 
	{
		mobile: '123 456 7890',
		email: 'email@email.com',
		github: 'github link placeholder',
		blog: 'blog placeholder',
		twitter: 'twitter handle placeholder',
		location: 'Saint Louis, MO'
	},
	welcomeMessage: 'welcome message placeholder',
	skills: ['html','css','javascript'],
	biopic: 'images/fry.jpg',
	display: function(){
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").prepend(formattedRole);
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		$("#header").prepend(formattedName);

		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		//$("#topContacts").append(formattedMobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		//$("#topContacts").append(formattedEmail);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		//$("#topContacts").append(formattedGithub);
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		//$("#topContacts").append(formattedTwitter);
		var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
		//$("#topContacts").append(formattedBlog);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		//$("#topContacts").append(formattedLocation);
		
		$("#topContacts, #footerContacts").append(formattedMobile+formattedEmail+formattedGithub+formattedTwitter+formattedBlog+formattedLocation);
		
		var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
		$("#header").append(formattedBioPic);
		var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header").append(formattedWelcomeMessage);
		
		$("#header").append(HTMLskillsStart);
		bio.skills.forEach(function(skill, i){
				var formattedSkills = HTMLskills.replace("%data%", skill);
				$("#skills").append(formattedSkills);
		});
	}
 };
bio.display();

var education = {
	 schools:
		 [
			{
				name: 'school name placeholder 1',
				location: 'Los Angeles, CA',
				degree: 'degree placeholder',
				majors: ['major 1','major 2'],
				dates: '12012015 - 12012017',
				url: 'web address placeholder'
			},
			{
				name: 'school name 2',
				location: 'Miami, FL',
				degree: 'degree placeholder',
				majors: ['major 1','major 2'],
				dates: '12012010 - 12012014',
				url: 'web address placeholder'
			}
		 ],
	 onlineCourses:
		 [
			{
				title: 'online course 1',
				school: 'school 1',
				dates: '05102016 - 05012017',
				url: 'web address placeholder'
			},
			{
				title: 'online course 2',
				school: 'school 2',
				dates: '05102016 - 05012017',
				url: 'web address placeholder'
			}
		 ],
	 display: function(){
		 $("#education").append(HTMLschoolStart);
		 education.schools.forEach(function(school){
			 var formattedSchool = HTMLschoolName.replace("%data%", school.name);
			 var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
			 var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
			 var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
			 $(".education-entry").append(formattedSchool+formattedDegree+formattedDates+formattedLocation);
			 school.majors.forEach(function(major){
				 var formattedMajor = HTMLschoolMajor.replace("%data%", major);
				 $(".education-entry").append(formattedMajor);
			 });
		 });
		 $(".education-entry").append(HTMLonlineClasses);
		 education.onlineCourses.forEach(function(onlineCourse){
			 var formattedClassTitle = HTMLonlineTitle.replace("%data%", onlineCourse.title);
			 var formattedClassSchool = HTMLonlineSchool.replace("%data%", onlineCourse.school);
			 var formattedClassDates = HTMLonlineDates.replace("%data%", onlineCourse.dates);
			 var formattedClassUrl = HTMLonlineURL.replace("%data%", onlineCourse.url);
			 $(".education-entry").append(formattedClassTitle+formattedClassSchool+formattedClassDates+formattedClassUrl);
		 });
	 }
 };
 education.display();
 
var work = {
	 jobs:
		[
			{
				employer: 'employer 1',
				title: 'job title 1',
				location: 'Austin, TX',
				dates: '06/10/2015 - 06/01/2016',
				description: 'job description 1'
			},
			{
				employer: 'employer 2',
				title: 'job title 2',
				location: 'Portland, ME',
				dates: '05/10/2016 - 05/01/2017',
				description: 'job description 2'
			}
		],
	 display: function(){
		 $("#workExperience").append(HTMLworkStart);
		 work.jobs.forEach(function(job, i){
				var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", job.employer);
				var formattedWorkTitle = HTMLworkTitle.replace("%data%", job.title);
				var formattedDate = HTMLworkDates.replace("%data%", job.dates);
				var fomattedLocation = HTMLworkLocation.replace("%data%", job.location);
				var fomattedDescription = HTMLworkDescription.replace("%data%", job.description);
				$(".work-entry").append(formattedWorkEmployer+formattedWorkTitle+formattedDate+fomattedLocation+fomattedDescription);
		});
	 }
 };
 work.display();
 
var projects = {
	 projects:
		 [
			{
				title: 'project title 1',
				dates: '05/10/2016 - 05/01/2017',
				description: 'project description 1',
				images: ['images/197x148.gif','images/197x148.gif','images/197x148.gif']
			},
			{
				title: 'project title 2',
				dates: '06/10/2016 - 06/01/2017',
				description: 'project description 2',
				images: ['images/197x148.gif','images/197x148.gif','images/197x148.gif']
			}
		 ],
	 display: function(){
		 $("#projects").append(HTMLprojectStart);
		 projects.projects.forEach(function(project,i){
				var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
				var formattedProjectDate = HTMLprojectDates.replace("%data%", project.dates);
				var fomattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);
				$(".project-entry").append(formattedProjectTitle+formattedProjectDate+fomattedProjectDescription);
				project.images.forEach(function(projectImage, x){
					var formattedProjectImages = HTMLprojectImage.replace("%data%", projectImage);
					$(".project-entry").append(formattedProjectImages);
				});
		});
	 }
 };
 projects.display();
 
 $("#mapDiv").append(googleMap);