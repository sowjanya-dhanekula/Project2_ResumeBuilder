/*
This is empty on purpose! Your code to build the resume will go here.
 */

 /*********BIO*********/
 var bio ={
 	"name" : "Sowjanya Dhanekula",
 	"role" : "Front-End Web Developer",
 	"contacts": {
 		"mobile": "9000806855",
 		"email": "dhanekula.sowjanya@gmail.com",
 		"github": "sowjanya_dhanekula",
 		"location": "Hyderabad"
 		},
 	"welcomeMessage": "Hello, this is my latest Resume!",
 	"skills" : ["Oracle Business Intelligence", "Javascript", "Jquery", "Oracle Database", "Vignette Content Management"],
 	"biopic": "./images/Sow.jpg"

 };

/*********DISPLAY HEADER AND BIO*************/

     bio.display = function() {
     	var formattedName= HTMLheaderName.replace("%data%",bio.name);
     	var formattedRole= HTMLheaderRole.replace("%data%",bio.role);
     	$("#header").prepend(formattedRole);
     	$("#header").prepend(formattedName);
        
        var formattedbioPic= HTMLbioPic.replace("%data%",bio.biopic);
     	$("#header").append(formattedbioPic);

     	var formattedWelcomeMsg= HTMLwelcomeMsg.replace("%data%",(bio.welcomeMessage));
     	$("#header").append(formattedWelcomeMsg);
     	

        var formattedmobile= HTMLmobile.replace("%data%",(bio.contacts.mobile));
        var formattedEmail= HTMLemail.replace("%data%",(bio.contacts.email));
        var formattedgithub= HTMLgithub.replace("%data%",(bio.contacts.github));
        var formattedlocation= HTMLlocation.replace("%data%",(bio.contacts.location));
        var allcontacts= formattedmobile + formattedEmail + formattedgithub + formattedlocation;

        $("#topContacts").append(allcontacts);
        $("#footerContacts").append(allcontacts);
        $("#header").append(HTMLskillsStart);

        for (var i=0; i < bio.skills.length; i++) {
            var formattedSkills = HTMLskills.replace("%data%",bio.skills[i]);
            $("#skills").append(formattedSkills);
        }

    }
              

        bio.display();


 /*************WORK*************/

    var work= {
        "jobs": [
        {
            "employer": "Tata Consultancy Services",
            "title": "Assistant System Engineer",
            "location": "Kolkata",
            "dates": "Sep-2007 - Jan-2010",
            "description": "Requirements gathering from Users and analysis of it, extracting data from source systems and building the staging tables and views in various schemas of Oracle database, Interactive dashboards, Reports, Prompts, Charts, Pivot tables, Gauges, Guided Navigation, iBots are created using Oracle BI Interactive Dashboards, Oracle BI Answers and these can be directly accessed by the Business users and Export-Import of metadata, Change management for modifying columns, Metadata Administration, Dependency and Impact Analysis are done in Oracle BI Administrator."
        },
        {
            "employer": "Cognizant Technology Solutions",
            "title": "Developer",
            "location": "Hyderabad",
            "dates": "Sep-2005 - Aug-2007",
            "description": "The Vignette Content Management 7.3 technology for creating the content and delivering to the Vignette Application Portal, Off-Shore requirement analysis and Design, content authoring and approval from the author and reviewer levels and preparing quality and status reports on a daily basis."
        }

      ]
     }

/***********************DISPLAY WORK***********************/

    work.experience= function() {
        for (var job in work.jobs) {
            var formattedemployer= HTMLworkEmployer.replace("%data%",(work.jobs[job].employer));
            var formattedworktitle= HTMLworkTitle.replace("%data%",(work.jobs[job].title));
            var formattedemptitle= formattedemployer + formattedworktitle;
            //concat employer and title
            var formatteddates= HTMLworkDates.replace("%data%",(work.jobs[job].dates));
            var formattedworklocation= HTMLworkLocation.replace("%data%",(work.jobs[job].location));
            var formatteddescription= HTMLworkDescription.replace("%data%",(work.jobs[job].description));
            $("#workExperience").append(HTMLworkStart);
            $(".work-entry:last").append(formattedemptitle);
            $(".work-entry:last").append(formatteddates);
            $(".work-entry:last").append(formattedworklocation);
            $(".work-entry:last").append(formatteddescription);
     }   
 }

        work.experience();

/*********************PROJECT*****************/

  var projects= {

    "projects": [ 
      {
        "title": "One IT Information Management System",
        "client": "British Telecommunication Plc, UK",
        "industry": "Telecommunications",
        "dates": "Oct 2008 to Jan 2010",
        "location": "Kolkata",
        "images": "./images/OBI Architecture.gif",
        "role": "Developer and Tester(System Testing)",
        "project specific skills": "OBI, OWB, SQL and PL/SQL",
        "description": "The One IT Information Management System (referred to as IMS) solution provides an easy, accessible solution for reporting all data from Clarity. IMS is an initiative in BT Design Strategy aimed at implementing a consistent method to manage BT Design business performance information efficiently. The goal is to reduce Cycle Time (CT) and increase the percentage of Right First Time (RFT) by communicating the end-to-end (E2E) impact of what we do, communicating business performance information, and improving the decision-making process in BT Design. This is aimed to overcome a number of business problems we are currently facing where we have lack of data to make informed decisions about our deliverables and resources."


     },
     {
        "title": "Unified Rolling Calendar",
        "client": "British Telecommunication Plc, UK",
        "industry": "Telecommunications",
        "dates": "Oct 2007 – Sep 2008",
        "location": "Kolkata",
        "images": "./images/URC.jpeg",
        "role": "Developer and Tester(System Testing)",
        "project specific skills": "OBI, OWB, SQL and PL/SQL",
        "description": "The Unified Rolling Calendar (referred to as URC) is designed to provide a database driven, web based model to track investments of Global Services. The tool replaces more than 10 spreadsheets and will be the single reference for GS investment tracking. It will enforce and enable the line of sight from Investment Proposals (aka IP, PIP, and Proposal) and Business Cases through the Calendar of Demand (Programmers) and to individual Projects. It will also allow tracking of statuses as well as the actual spend and forecast but primarily the demand and delivery calendarizing in terms of committed dates or forecasted dates."
     },

     {
        "title": "Card Center Redesign",
        "client": "American Express Technologies(USA)",
        "industry": "Banking & Financial Services",
        "dates": "Oct 2006 – Sep 2007",
        "location": "Hyderabad",
        "images": "./images/vignette_Architecture.jpeg",
        "role": "Developer",
        "project specific skills": "Vignette 7.3, HTML",
        "description": "Card Center Redesign revamps the now several-year-old card application area of the American Express website www.americanexpress.com/cards .It provides an easier way to access information including card benefits, product comparisons, and Find Me A Card questionnaire. The Find Me a Card feature helps prospective Card members find the right card product to suit their needs and lifestyles. The Card Center site supports all Consumer Card products currently available on the americanexpress.com website. The site uses Vignette Content Management 7.3 technology for creating the content and delivering to the Vignette Application Portal."
    }]
    
}

/***********************DISPLAY PROJECT ***************************/

    projects.display= function() {
        for (var project in projects.projects) {
            var formattedprojecttitle= HTMLprojectTitle.replace("%data%",(projects.projects[project].title));
            var formattedprojectdate= HTMLprojectDates.replace("%data%",(projects.projects[project].dates));
            var formattedprojectdescription= HTMLprojectDescription.replace("%data%",(projects.projects[project].description));
            var formattedprojectimage= HTMLprojectImage.replace("%data%",(projects.projects[project].images));
            $("#projects").append(HTMLprojectStart);
            $(".project-entry:last").append(formattedprojecttitle);
            $(".project-entry:last").append(formattedprojectdate);
            $(".project-entry:last").append(formattedprojectdescription);
            $(".project-entry:last").append(formattedprojectimage);

    }
}
    projects.display();


/**********************EDUCATION***********************/

    var education= {

        "schools": [ 
            {
                "name": "Gandhi Institute of Technology and Management",
                "location": "Visakapatnam",
                "degree": "Bachelor of Engineering",
                "majors": ["Electronic Circuits and Analysis ", "Industrial Instrumentation"],
                "dates": "2005",
                "url": "http://www.gitam.edu/"
                
            }],

        "onlineCourses": [ 
            {
                "title": "Front- End Web developer",
                "school": "Udacity",
                "date": "2016",
                "url": "http://www.Udacity.com/"
                
            }]
    }


/***********************DISPLAY EDUCATION*************************/

    education.display= function() {
        for (var school in education.schools) {
            var formattedschoolname= HTMLschoolName.replace("%data%",(education.schools[school].name));
            var formattedschooldate= HTMLschoolDates.replace("%data%",(education.schools[school].dates));
            var formattedschoollocation= HTMLschoolLocation.replace("%data%",(education.schools[school].location));
            var formatteddegree= HTMLschoolDegree.replace("%data%",(education.schools[school].degree));
            var formattedschoolmajor= HTMLschoolMajor.replace("%data%",(education.schools[school].majors));
            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(formattedschoolname);
            $(".education-entry:last").append(formattedschooldate);
            $(".education-entry:last").append(formattedschoollocation);
            $(".education-entry:last").append(formatteddegree);
            $(".education-entry:last").append(formattedschoolmajor);

       }

       for (var onlinecourse in education.onlineCourses) {
            var formattedcoursetitle= HTMLonlineTitle.replace("%data%",(education.onlineCourses[onlinecourse].title));
            var formattedonlineschool= HTMLonlineSchool.replace("%data%",(education.onlineCourses[onlinecourse].school));
            var formattedonlinedate= HTMLonlineDates.replace("%data%",(education.onlineCourses[onlinecourse].dates));
            var formattedonlineurl= HTMLonlineURL.replace("%data%",(education.onlineCourses[onlinecourse].url));
            $("#education").append(HTMLonlineClasses);
            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(formattedcoursetitle);
            $(".education-entry:last").append(formattedonlineschool);
            $(".education-entry:last").append(formattedonlinedate);
            $(".education-entry:last").append(formattedonlineurl);
        }
    }
    education.display();

    /************ Internationalize  Name******************/

    function inName(name){
        myname = name.trim().split(" ");
        console.log(myname);
        myname[1] = myname[1].toUpperCase();
        myname[0] = myname[0].slice(0,1).toUpperCase() + myname[0].slice(1).toLowerCase();
        return myname[0] + " " +myname[1];
    }
      
    
    $("#main").append(internationalizeButton);

    /****************Append Google map******************/
    $("#mapDiv").append(googleMap);
    

 


