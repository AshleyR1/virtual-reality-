let maze = [
  "------ox ox ox c x xo---------------",
  "--T---T---T--T-----T-T-----",
  "--OX-----------------x
  "-ox---ox---------------ox-",
  "---ox--------------ox---",
  "----------------------",
  "----------------------",
  "----------------------",
  "----------------------",
  "----------------------",
  "----------------------",
  "----------------------",
];
let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  for(let r = 0; r < maze.length; r++){
    let row = maze[r];
    let cols = row.split("");
    for(let c = 0; c < cols.length; c++){
      if(cols[c] == "x"){
        new Block(c,1,r)
      }
      else if(cols[c] == "T"){
        new Tree(c,1,r);
      }else if(cols[c]=="o"){
        new Rock(c,1,r)
      }
    }

  }

})