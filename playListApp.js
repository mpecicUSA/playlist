const albumURL = "https://lit-fortress-6467.herokuapp.com/object"
const albumArtHolder = document.querySelector(".container-inner");
const albumDetails = document.querySelector(".selection");

let albumSelected = "";
let newDiv = document.createElement("div");
let newP = document.createElement('p');

axios.get(albumURL).then(res => {
  console.log(res);
  for(let i=0; i<5; i++){
    let newDiv = document.createElement("div");
    newDiv.className = "generatedDiv"
    newDiv.id = `${res.data.results[i].id}`
    let newImg = document.createElement('img');
    newImg.src = `images/${res.data.results[i].cover_art}`;
    albumArtHolder.appendChild(newDiv)
    newDiv.appendChild(newImg);
  }
});
albumArtHolder.addEventListener("click",e =>{
  console.log(event.target);
  // let text = document.createTextNode(albumArtHolder.{id});
  // albumDetails.appendChild(text);

})
