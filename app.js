const albumURL = "https://lit-fortress-6467.herokuapp.com/object"
const album = document.querySelector(".albums");

axios.get(albumURL).then(res => {
  for(let i=0; i< 4; i++){
    let newDiv = document.createElement("div");
    newDiv.class = "generatedDiv"
    let newImg = document.createElement('img');
    newImg.src = `images/${res.data.results[i].cover_art}`;
    album.appendChild(newDiv)
    newDiv.appendChild(newImg);
  }
});
