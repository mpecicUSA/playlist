const albumURL = "https://lit-fortress-6467.herokuapp.com/object"
const album = document.querySelector(".albums");

axios.get(albumURL).then(res => {
  console.log(res);
  function randomNumber() {
    return Math.floor(Math.random()*5)
  };

  for(let i=0; i<3; i++){
    let newDiv = document.createElement("div");
    newDiv.className = "generatedDiv"
    let newImg = document.createElement('img');
    newImg.src = `images/${res.data.results[randomNumber()].cover_art}`;
    album.appendChild(newDiv)
    newDiv.appendChild(newImg);
  }
});
