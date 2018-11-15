

$(document).ready(function(){
  console.log('ready!');
  myStorage = window.localStorage;
  //var source = $("#entry-template").html();
  //var template = Handlebars.compile(source);

  //var parentDiv = $("#templatedProjects");
  $('#postButton').click(post);
});

function post() {
  var item = document.getElementById("question").value;
  var description = document.getElementById("description").value;

  myStorage = window.localStorage;
  myStorage.setItem('item', item);
  myStorage.setItem('description', description);

  item = myStorage.getItem("item");
  description = myStorage.getItem("description");
  var question = "What's a good substitute for " + item + "?";
  console.log(question);
  console.log(description);

  var x = document.getElementById("snackbar");

  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);

  $('#MyQuestions').append('<div class="row mt-3"><h5><a href="#" class="mb-3">' + question + '</a></h5> </div>')
  //parentDiv.append(question);
  //window.onload = document.getElementById("MyQuestions").innerHTML = myStorage.getItem("item");

  // '<div class="row mt-3"><h1 class="mb-3">' + question + '</h1> <p>' + description + ' </p> </div>';
}
