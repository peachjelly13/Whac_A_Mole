let moleTile;
let plantTile;
let score = 0;
let gameOver = false;
let timecompleted = false;
window.onload = function(){
  setGame();
}
function setGame(){
  for(let i =0;i<9;i++){
    let tile = document.createElement("div");
    tile.id = i.toString();
    tile.addEventListener("click",selecttile);
    document.getElementById("board").appendChild(tile);
  }
  setInterval(setMole,900);
  setInterval(setPlant,1000);
}
function getRandomTile(){
  let num = Math.floor(Math.random()*9);
  return num.toString();

}
function setMole(){
  if(gameOver){
    return;
  }
  if(timecompleted){
    return;
  }
  if(moleTile){
    moleTile.innerHTML = "";
  }
  let mole = document.createElement("img");
  mole.src = "montymole.png"
  let num = getRandomTile();
  if(plantTile && plantTile.id == num){
    return;
  }
  moleTile = document.getElementById(num);
  moleTile.appendChild(mole);

}
function setPlant(){
  if(gameOver){
    return;
  }
  if(timecompleted){
    return;
  }
  if(plantTile){
    plantTile.innerHTML = "";
  }
  let plant = document.createElement("img");
  plant.src = "plant.png";
  let num = getRandomTile();
  if(moleTile && moleTile.id == num){
    return;
  }
  plantTile = document.getElementById(num);
  plantTile.appendChild(plant);
}
function selecttile(){
  if(gameOver){
    return;
  }
  if(timecompleted){
    return;
  }
  if(this==moleTile){
    score += 10;
    document.getElementById("h2").innerText = "Score: " + score;
  }
  else if(this==plantTile){
      document.getElementById("h2").innerText = "GAME OVER !!!!";
      document.getElementById("h3").innerText = "Score: " + score;
      gameOver = true;
  }
}
function myFunction() {
  alert('Time completed!');
  timecompleted = true;
}
setTimeout(myFunction, 300000);
