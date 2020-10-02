/* Create an app that loads a single random image for a specific breed, based on a user input. This app should account for the happy case when the breed is found, as well as the unhappy case when it is not. Use the endpoint described in the "RANDOM IMAGE FROM A BREED COLLECTION" section of this page of the DogAPI docs. Note that the API will return an HTTP status code of 404 along with a JSON object with info about the error if a request is made for a breed that can't be found. */

//https://dog.ceo/api/breed/hound/images/random

const searchTerm = $('#js-search-term').val();

function getDogImage(searchTerm) {
  const url = "https://dog.ceo/api/breed/"+searchTerm+"/images/random";
  console.log(url);

  fetch(url)
  
    .then(response => response.json())
    .then(responseJson => {
      console.log(responseJson);
      if (responseJson.status === 'success'){
        displayResults(responseJson);
      }
      throw Error;
    })
    .catch(error => alert('Something went wrong. Try again later.')); 
}


/* Well if you want to use your second code, you would flip the if statement

also to get the code you would use response.status

respoinseJson is the product of response.json which just encapsulates the data in JSON form

responseJson will not have a status property, however response will */


function displayResults(responseJson){
  console.log(responseJson);
  $('#results-list').empty();
  $('#results-list').replaceWith(
    `<img src="${responseJson.message}" class="results-list">`
  )
  //display the results section
  $('#results').removeClass('hidden');
} 

function watchForm(){
  $('form').submit(event =>{
    event.preventDefault();
    const searchTerm = $('#js-search-term').val();
    //console.log(searchTerm);
    getDogImage(searchTerm);
  });
}

$(function(){
  watchForm();
});
