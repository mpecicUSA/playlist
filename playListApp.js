const albumURL = "https://lit-fortress-6467.herokuapp.com/object"
const albumHolder = document.querySelector(".container-inner");

axios.get(albumURL).then(res => {
  console.log(res);
  for(let i=0; i<5; i++){
    let newDiv = document.createElement("div");
    newDiv.className = "generatedDiv"
    let newImg = document.createElement('img');
    newImg.src = `images/${res.data.results[i].cover_art}`;
    albumHolder.appendChild(newDiv)
    newDiv.appendChild(newImg);
  }
});
