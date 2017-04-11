/*jshint esversion: 6 */


// Initial data request
const person4oReq1 = new XMLHttpRequest();
const person14oReq1 = new XMLHttpRequest();
const planetoReq1 = new XMLHttpRequest();

person4oReq1.addEventListener('load', person4);
person4oReq1.open('GET','http://swapi.co/api/people/4/');
person4oReq1.send();

person14oReq1.addEventListener('load', person14);
person14oReq1.open('GET', 'http://swapi.co/api/people/14/');
person14oReq1.send();

planetoReq1.addEventListener('load', planetAppearance);
planetoReq1.open('GET','http://swapi.co/api/films/');
planetoReq1.send();

function person4(){
   const requestData = JSON.parse(this.responseText);
   const person4Name = document.querySelector('#person4Name');
    person4Name.innerHTML = requestData.name;

    const person4oReq2 = new XMLHttpRequest();
    person4oReq2.addEventListener ('load', person4HomeWorld);
    person4oReq2.open('GET', 'http://swapi.co/api/planets/1/');
    person4oReq2.send();

  function person4HomeWorld (){
    const requestData = JSON.parse(this.responseText);
    const person4NHomeWorld = document.querySelector('#person4HomeWorld');
     person4NHomeWorld.innerHTML = requestData.name;
  }
}

function person14(){
  const requestData = JSON.parse(this.responseText);
  const person14Name = document.querySelector('#person14Name');
  person14Name.innerHTML = requestData.name;

  const person14oReq2 = new XMLHttpRequest();
  person14oReq2.addEventListener('load', person14Species);
  person14oReq2.open('GET', 'http://swapi.co/api/species/1/');
  person14oReq2.send();


  function person14Species() {
    const requestData = JSON.parse(this.responseText);
    const person14Species = document.querySelector('#person14Species');
    person14Species.innerHTML = requestData.name;
  }
}

function planetAppearance(){
  const requestData = JSON.parse(this.responseText);
  console.log(requestData);
  console.log(requestData.results);
  const resultsLength = requestData.results.length;



  for(let i=0; i<resultsLength; i++){
    const filmList = document.querySelector('#filmList');
    const film = document.createElement('li');
    const planetsLength = requestData.results[i].planets.length;
    console.log(requestData.results[i].planets);

    film.innerHTML = requestData.results[i].title;
    filmList.appendChild(film);

    for(let j= 0; j<planetsLength; j++){
      const planetList = document.createElement('ul');
      film.appendChild(planetList);
      console.log(requestData.results[i].planets[j]);
      console.log(`${requestData.results[i].planets[j]}`);

      const planetoReq2 = new XMLHttpRequest();
      planetoReq2.addEventListener('load', listPlanets);
      planetoReq2.open('GET',`${requestData.results[i].planets[j]}`,false);
      planetoReq2.send();

      function listPlanets() {
       const requestData = JSON.parse(this.responseText);
       console.log(requestData);
       planetList.innerHTML = requestData.name;
      }

    }
  }
 }