
$(function () {

  //TODO: clicking projects-link hides all sections, shows articles section.

  var projects = [];

  function Project (title, projectUrl, body, date) {
    this.title = title;
    this.projectUrl = projectUrl;
    this.body = body;
    this.date = date;
  };

  // var project = new Project();

  Project.prototype.toHtml = function () {
    var appTemplate = $('#hello-hi-hey').html();
    var compiledTemplate = Handlebars.compile(appTemplate);
    var html = compiledTemplate(this);

    /*Populating the project li element that has class of .projectClass with most current project info: title, description, date */

    // $newProject.find('.title').text(this.title);
    // $newProject.find('.projectClass').text(this.description);
    // $newProject.find('.projectClass').text(this.date);
    //
    // $newProject.removeClass('template');

    // this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
    // this.publishStatus = this.publishedOn ? 'published ' + this.daysAgo + ' days ago' : '(draft)';
    //
    return html;
  };

  //portfolio.sort  here function from example.

  projectData.forEach(function(ele) {
    projects.push(new Project(ele));
  });

  projects.forEach(function(a) {
    var article = a.toHtml();
    $('#articles').append(article);
  });

});


projects.fetchAll = function() {
  if (localStorage.projectData) {
    Sites.loadAll(JSON.parse(localStorage.projectData));
    projectView.initIndexPage();
  } else {
    $.get('data/projectData.json', function(data) {
      Sites.loadAll(data);
      var dataString = JSON.stringify(data);
      localStorage.setItem('projectData', dataString);
      portfolioView.initIndexPage();
    });
  }
};
