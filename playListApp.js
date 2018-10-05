const albumURL = "https://lit-fortress-6467.herokuapp.com/object"
const albumArtHolder = document.querySelector(".container-inner");
const albumDetails = document.querySelector(".selection");

let albumSelected = "";
let newDiv = document.createElement("div");
let newh4 = document.createElement('h4');

axios.get(albumURL).then(res => {
  console.log(res);
  for(let i=0; i<5; i++){
    let newDiv = document.createElement("div");
    newDiv.className = "generatedDiv"
    let newImg = document.createElement('img');
    newImg.id = `${res.data.results[i].id}`
    newImg.src = `images/${res.data.results[i].cover_art}`;
    albumArtHolder.appendChild(newDiv)
    newDiv.appendChild(newImg);
  }
});
albumArtHolder.addEventListener("click",e =>{

  let albumArtistandName="";
  switch(event.target.id) {
    case "2":
      albumArtistandName = " Ghost in the Machine: The Police";
      break;
    case "6":
      albumArtistandName= " Red: Black Uhuru";
      break;
    case "22":
      albumArtistandName = " The Division Bell: Pink Floyd"
      break;
    case "18":
      albumArtistandName = " Thriller: Michael Jackson"
      break;
    case "55":
      albumArtistandName = " 21: Adele"
      break;
  };
  let text = document.createTextNode(albumArtistandName);
  newh4.appendChild(text);
  albumDetails.appendChild(newh4);

})
//event.target.id
