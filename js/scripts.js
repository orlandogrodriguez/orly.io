//Navigation Bar Buttons
var homeButton = document.getElementById('home-tab');

var aboutButton = document.getElementById('about-tab');
var skillsButton = document.getElementById('skills-tab');
var projectsButton = document.getElementById('projects-tab');
var experienceButton = document.getElementById('experience-tab');

var contactButton = document.getElementById('contact-tab');

//Listeners
homeButton.addEventListener('click', function() {loadContent('home')});

aboutButton.addEventListener('click', function() {loadContent('aboutme')});
skillsButton.addEventListener('click', function() { });
projectsButton.addEventListener('click', function() { });
experienceButton.addEventListener('click', function() { });

contactButton.addEventListener('click', function() { });

function loadContent(content) {
    $('#pageContent').load('html/'+ content + '.html', function() {
        console.log('Loaded the content for ' + content);
    })
}
