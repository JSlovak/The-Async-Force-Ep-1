/*jshint esversion: 6 */


// Initial data request
const person4oReq1 = new XMLHttpRequest();

person4oReq1.addEventListener('load', person4Name);
person4oReq1.open('GET','http://swapi.co/api/people/4/');
person4oReq1.send();

function person4Name(){
   const requestData = JSON.parse(this.responseText);
   const person4Name = document.querySelector('#person4Name');
    person4Name.innerHTML = requestData.name;

    const person4oReq2 = new XMLHttpRequest();
    person4oReq2.addEventListener ('load', person4HomeWorld);
    person4oReq2.open('GET', 'http://swapi.co/api/planets/1/');
    person4oReq2.send();
}

  function person4HomeWorld (){
    const requestData = JSON.parse(this.responseText);
    console.log(requestData);
    const person4NHomeWorld = document.querySelector('#person4HomeWorld');
     person4NHomeWorld.innerHTML = requestData.name;
  }

const person14oReq1 = new XMLHttpRequest();

person14oReq1.addEventListener('load', person14Name);
person14oReq1.open('GET', 'http://swapi.co/api/people/14/');
person14oReq1.send();

function person14Name(){
  const requestData = JSON.parse(this.responseText);
  const person14Name = document.querySelector('#person14Name');
  person14Name.innerHTML = requestData.name;

  const person14oReq2 = new XMLHttpRequest();
  person14oReq2.addEventListener('load', person14Species);
  person14oReq2.open('GET', 'http://swapi.co/api/species/1/');
  person14oReq2.send();
}

  function person14Species() {
    const requestData = JSON.parse(this.responseText);
    console.log(requestData);
    const person14Species = document.querySelector('#person14Species');
    person14Species.innerHTML = requestData.name;
  }