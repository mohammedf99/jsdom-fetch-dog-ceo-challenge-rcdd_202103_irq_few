console.log('%c HI', 'color: firebrick')

const imgURL = 'https://dog.ceo/api/breeds/image/random/4';
const BREED_URL = 'https://dog.ceo/api/breeds/list/all';

document.addEventListener('DOMContentLoaded', function(){
  
  fetch(imgURL).then(function(response){
    // console.log(response.json());
    return response.json();
    
  }).then(function(json){
    
    displayImage(json);
    
  });
  
  
  fetch(BREED_URL).then(function(response){
    console.log(response.json());
    // return response.json();
  }).then(function(json){
    addBreeds(json);
  });
  
  
  
});


function displayImage(json){
  
  const imgsContainer = document.querySelector("#dog-image-container");
  
  
  for(let i = 0; i < json.message.length; i++){
    
    const div = document.createElement('div');
    div.innerHTML = `<img src="${json.message[i]}" alt="dog-image">`;
    imgsContainer.append(div);
  }
}

let breedNames = [];


function addBreeds(json){
  
  const breedUl = document.querySelector('#dog-breeds');
  breedNames = Object.key(json.message);
  
  for(let i = 0; i < breedNames.length; i++){
    
    const breedLi = document.createElement('li');
    breedLi.append(document.createTextNode(breedNames[i]));
    breedUl.append(breedLi);
    
  }
  
}







