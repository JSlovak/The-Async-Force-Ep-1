
// Dislaying Data //


// ## Part 1

// Use first-tier functions to access the target API. These functions should return objects, that the second tier functions work with.

// Second tier functions with use object notation will pick out specific integers or specific data and display on the webpage.

// Using DOM (.querySelectorAll) to target the divs on the document to display the data on desired place on the webpage.

// --

// once the XHR request has finished loading run the following functions

// function asyncForceEpOne {

//   ## first tier of functions calls

//     function allData call {
//       returns allData }

//     function peopleData call {
//       returns People Data }

//     function planetData call {
//       returns Planet Data }

//     function speciesData call {
//       returns Species Data }

//     function filmData call {
//       returns Film Data }

//   ## second-tier of functions

//       function person4 call{
//         display person4
//       }

//       function person14 call {
//         display person14
//       }

//       function filmList call {
//         display filmList
//       }
// }

// function module parseData {

//     function allData call {
//       access data using API link
//       and return JSON data
//       parse and return in a stored variable
//       return allData }

//     function peopleData call {
//       access data using the allData function
//       access the new API link
//       and return JSON data
//       parse and return in a stored variable
//       return People Data }

//     function planetData call {
//       access data using the allData function
//       access the new API link
//       and return JSON data
//       parse and return in a stored variable
//       return planetData }


//     function speciesData call {
//       access data using the allData function
//       access the new API link
//       and return JSON data
//       parse and return in a stored variable
//       return speciesData }

//     function filmData call {
//       access data using the allData function
//       access the new API link
//       and return JSON data
//       parse and return in a stored variable
//       return speciesData
//       return filmData }

//       return {
//         peopleData,
//         planetData,
//         speciesData,
//         filmData
//       }
// }

// function module display Page {
//     function person4 call{
//       access people data
//       loop through to person4
//         access name value
//         store name value in name variable
//         append that variable to the respective header

//       access planet data
//       loop through to person4
//         access planet value
//         store planet value in planet variable
//         append that variable to the respective header
//     }

//     function person14 call {
//       access people data
//       loop through to person14
//         access name value
//         store name value in name variable
//         append that variable to the respective header

//       access species data
//       loop through to person14
//         access species value
//         store species value in species variable
//         append that variable to the respective header
//     }

//      function filmList call {

//         display filmList
//       }

//     return {
//       person4
//       person14

//     }
// }

// ## Part 2

// Second tier functions will use object notation and for loop to run through all array of objects (returned by the first)

// Use DOM to dynamically create a list of data and display on the page


// Use this object to access the desired data, through the use of a for loop.

