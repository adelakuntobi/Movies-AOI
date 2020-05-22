
//Getting the section by ID
var section = document.getElementById("container-BBC");
var displayUrl = "https://api.themoviedb.org/3/movie/popular?api_key=88bba2ef075c3c427351c79bfa4b81a9&language=en-US&page=1"

var searchUrl = "https://api.themoviedb.org/3/search/movie?api_key=88bba2ef075c3c427351c79bfa4b81a9&query=";
var input = document.getElementById("input")

var genre = 'https://api.themoviedb.org/3/genre/movie/list?api_key=88bba2ef075c3c427351c79bfa4b81a9&language=en-US'

var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 300);
  
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("bigCD").style.display = "block";
  getNews();
}

input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("myBtn").click();
  }
});

var CONFIG_PATTERN = 'http://api.themoviedb.org/3/configuration?api_key=88bba2ef075c3c427351c79bfa4b81a9',
IMG_PATTERN = 'http://api.themoviedb.org/3/movie/{imdbid}/images?api_key=88bba2ef075c3c427351c79bfa4b81a9', 
KEY = '88bba2ef075c3c427351c79bfa4b81a9';
          

 //Fetching the API from the server
async function getNews() {
  const res = await fetch(displayUrl);
  const data = await res.json();
  $("#container-BBC").empty();
  console.log(data.results)
  data.results.forEach(function(value,index) {    
  //Using the createNode function to create new elements
  var divCol = createNode('div'),
   divImage = createNode('div'),
   h4Title = createNode('h4'),
   pYear = createNode('p'),

   bgImage = createNode('img'),
   divOverlay = createNode('div'),

   iStar = createNode('i'),
   h3Rating = createNode('h3'),
   h3Genre = createNode('h3'),
   button = createNode('button');


  divCol.classList.add("col-sm-4");
  divCol.classList.add("col-md-3");
  divImage.classList.add("image");
  divOverlay.classList.add("overlay");
  divOverlay.classList.add("text-center");
  iStar.classList.add("fa");
  iStar.classList.add("fa-star");
  button.classList.add("btn");
  button.classList.add("btn-success");


  //Assigning the data gotten from the API to the locally created elements
  h4Title.innerText = `${data.results[index].title}`
  pYear.innerText = `${data.results[index].release_date}`
  bgImage.src = `https://image.tmdb.org/t/p/w154/${data.results[index].poster_path}`;
  
  h3Rating.innerText = `${data.results[index].vote_average}`
  h3Genre.innerText = `${data.results[index].genre_ids[1]}`
  button.innerText = "View More"
  //Appending children to parents
  appendChildFunction(divCol,divImage);
  appendChildFunction(divCol,h4Title);
  appendChildFunction(divCol,pYear);

  appendChildFunction(divImage,bgImage);
  appendChildFunction(divImage,divOverlay);


  appendChildFunction(divOverlay,iStar);
  appendChildFunction(divOverlay,h3Rating);
  appendChildFunction(divOverlay,h3Genre);
  appendChildFunction(divOverlay,button);



  appendChildFunction(section,divCol);
  
});
}

getNews();

async function searchResult(){
  const res = await fetch(searchUrl + input.value);
  const data = await res.json();
  $("#container-BBC").empty();

  console.log(data.results)
  data.results.forEach(function(value,index) {    
  //Using the createNode function to create new elements
  var divCol = createNode('div'),
   divImage = createNode('div'),
   h4Title = createNode('h4'),
   pYear = createNode('p'),

   bgImage = createNode('img'),
   divOverlay = createNode('div'),

   iStar = createNode('i'),
   h3Rating = createNode('h3'),
   h3Genre = createNode('h3'),
   button = createNode('button');


  divCol.classList.add("col-sm-4");
  divCol.classList.add("col-md-3");
  divImage.classList.add("image");
  divOverlay.classList.add("overlay");
  divOverlay.classList.add("text-center");
  iStar.classList.add("fa");
  iStar.classList.add("fa-star");
  button.classList.add("btn");
  button.classList.add("btn-success");


  //Assigning the data gotten from the API to the locally created elements
  h4Title.innerText = `${data.results[index].title}`
  pYear.innerText = `${data.results[index].release_date}`
  bgImage.src = `https://image.tmdb.org/t/p/w154/${data.results[index].poster_path}`;
  
  h3Rating.innerText = `${data.results[index].vote_average}`
  h3Genre.innerText = `${data.results[index].genre_ids[1]}`
  button.innerText = "View More"
  //Appending children to parents
  appendChildFunction(divCol,divImage);
  appendChildFunction(divCol,h4Title);
  appendChildFunction(divCol,pYear);

  appendChildFunction(divImage,bgImage);
  appendChildFunction(divImage,divOverlay);


  appendChildFunction(divOverlay,iStar);
  appendChildFunction(divOverlay,h3Rating);
  appendChildFunction(divOverlay,h3Genre);
  appendChildFunction(divOverlay,button);

  appendChildFunction(section,divCol);

});
}

function createNode(element) {
  //Creates a new element
  return document.createElement(element);
}

function appendChildFunction(parent,element){
//Appends child to parent function
  return parent.appendChild(element)
}
