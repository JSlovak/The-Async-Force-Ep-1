/*jshint esversion: 6 */


// Initial data request
const allDataoReq1 = new XMLHttpRequest();
// const person4oReq1 = new XMLHttpRequest();
// const person14oReq1 = new XMLHttpRequest();
// const planetoReq1 = new XMLHttpRequest();

// Initialize  XHR Methods for each div / spec request
allDataoReq1.addEventListener('load', EpOne);
allDataoReq1.open('GET','http://swapi.co/api/');
allDataoReq1.send();

// person4oReq1.addEventListener('load', person4);
// person4oReq1.open('GET','http://swapi.co/api/people/4/');
// person4oReq1.send();

// person14oReq1.addEventListener('load', person14);
// person14oReq1.open('GET', 'http://swapi.co/api/people/14/');
// person14oReq1.send();

// planetoReq1.addEventListener('load', planetAppearance);
// planetoReq1.open('GET','http://swapi.co/api/films/');
// planetoReq1.send();

function EpOne(){
  const requestData = JSON.parse(this.responseText);
  // console.log(requestData);

  const persons = new XMLHttpRequest();
  persons.addEventListener('load', personsOfInterests);
  persons.open('GET',`${requestData.people}`);
  persons.send();

  const planets = new XMLHttpRequest();
  planets.addEventListener('load', planetList);
  planets.open('GET',`${requestData.planets}`);
  planets.send();

  function personsOfInterests(){
    var personData = JSON.parse(this.responseText);
    console.log(personData.results);

    function person4() {
      const person4Name = document.querySelector('#person4Name');
      console.log(personData.results);
      person4Name.innerHTML = personData.results[3].name;

      const oReq = new XMLHttpRequest();
      oReq.addEventListener ('load', homeWorld);
      oReq.open('GET', `${personData.results[3].homeworld}`);
      oReq.send();

      function homeWorld (){
        const requestData = JSON.parse(this.responseText);
        const person4NHomeWorld = document.querySelector('#person4HomeWorld');
        person4NHomeWorld.innerHTML = requestData.name;
      }
     }

    function person14(){
      const requestData = JSON.parse(this.responseText);
      const person14Name = document.querySelector('#person14Name');
      person14Name.innerHTML = requestData.name;
      console.log(requestData.results);

      const oReq = new XMLHttpRequest();
      oReq.addEventListener('load', person14Species);
      oReq.open('GET', `${requestData.results[13].species}`);
      oReq.send();

      function person14Species() {
        const requestData = JSON.parse(this.responseText);
        const person14Species = document.querySelector('#person14Species');
        person14Species.innerHTML = requestData.name;
      }
    }
  }

  function planetList(){
      const requestData = JSON.parse(this.responseText);
      console.log(requestData.results);

    }
}
// // function called, for Person 4 spec
// function person4(){
//    const requestData = JSON.parse(this.responseText);
//    const person4Name = document.querySelector('#person4Name');
//     person4Name.innerHTML = requestData.name;

//     const person4oReq2 = new XMLHttpRequest();
//     person4oReq2.addEventListener ('load', person4HomeWorld);
//     person4oReq2.open('GET', 'http://swapi.co/api/planets/1/');
//     person4oReq2.send();

//   function person4HomeWorld (){
//     const requestData = JSON.parse(this.responseText);
//     const person4NHomeWorld = document.querySelector('#person4HomeWorld');
//      person4NHomeWorld.innerHTML = requestData.name;
//   }
// }
//  // function called for Person 14 spec
// function person14(){
//   const requestData = JSON.parse(this.responseText);
//   const person14Name = document.querySelector('#person14Name');
//   person14Name.innerHTML = requestData.name;

//   const person14oReq2 = new XMLHttpRequest();
//   person14oReq2.addEventListener('load', person14Species);
//   person14oReq2.open('GET', 'http://swapi.co/api/species/1/');
//   person14oReq2.send();


//   function person14Species() {
//     const requestData = JSON.parse(this.responseText);
//     const person14Species = document.querySelector('#person14Species');
//     person14Species.innerHTML = requestData.name;
//   }
// }
// function called for Planets appearance in Movie list spec

// function planetAppearance(){
//   const requestData = JSON.parse(this.responseText);
//   const resultsLength = requestData.results.length;

//   for(let i=0; i<resultsLength; i++){
//     const filmList = document.querySelector('#filmList');
//     const film = document.createElement('li');
//     const planetsLength = requestData.results[i].planets.length;

//     film.innerHTML = requestData.results[i].title;
//     filmList.appendChild(film);

//     for(let j= 0; j<planetsLength; j++){
//       const planetList = document.createElement('ul');
//       film.appendChild(planetList);

//       const planetoReq2 = new XMLHttpRequest();
//       planetoReq2.addEventListener('load', listPlanets);
//       planetoReq2.open('GET',`${requestData.results[i].planets[j]}`,false);
//       planetoReq2.send();

//       function listPlanets() {
//        const requestData = JSON.parse(this.responseText);
//        planetList.innerHTML = requestData.name;
//       }
//     }
//   }
//  }