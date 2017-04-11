 // /*jshint esversion: 6 */

module.exports = function person4() {
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
};