import fetch from 'node-fetch';

const promiseTwo = await fetch('https://rickandmortyapi.com/api/character/2')
const promiseFour = await fetch('https://rickandmortyapi.com/api/character/4')
const promiseSix = await fetch('https://rickandmortyapi.com/api/character/6')

Promise.all([promiseTwo,promiseFour,promiseSix])
  .then(responses => {
    return responses;
  })
  .then( arrResponses => {
    const response = Promise.all( arrResponses.map ( item => item.json()));
    return response;
  })
  .then( response => {
    const result = response.map( personaje =>  {
      return {
        id: personaje.id,
        name: personaje.name
      }
    }) 
    console.log(result);
  } )
  

