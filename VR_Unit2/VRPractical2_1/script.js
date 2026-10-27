let scene;

function rnd(l, u){
  return Math.floor(Math.random()*(u-l) + l);
}

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); //CSS Selector

  for(let i = 0; i < 100; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    createTree(x,0,z);
  }

  for(let i = 0; i < 100; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    createCloud(x,0,z);
  }

  for(let i = 0; i < 100; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    createHouse (x,0,z);
  }
   

   //Task 2: Use the createCloud(...)  to add several clouds to the scene at various positions.

   //Task 4: Use the createHouse(...)  to add several houses to the scene at various positions.
})

/* Task 1: Create a function createCloud that,
      1) Accept an x, y and z position for where to place the cloud "entity"
      2) Create an entity to store all the components that will make up the cloud
      3) Create three sphere, or some other appropriate component that can slightly overlap.         
      4) Adjust the attributes appropriately.  Add each sphere to the cloud entity
      5) Set cloud entities position to those passed in to the function.
      6) Add the cloud entity to the scene
*/

function createCloud(x,y,z){
let cloud= document.createElement ("a-entity");

let c= document.createElement("a-sphere");
c.setAttribute("radius", 1);
c.setAttribute("color","white");
c.setAttribute("position",`${5} ${5} ${1}`)
cloud.append(c);

let cu= document.createElement("a-sphere");
cu.setAttribute("radius", 1);
cu.setAttribute("color","white");
cu.setAttribute("position",`${4} ${5} ${1}`)
cloud.append(cu);

let cl= document.createElement("a-sphere");
cl.setAttribute("radius", 1);
cl.setAttribute("color","white");
cl.setAttribute("position",`${5} ${6} ${1}`)
cloud.append(cl);

let clo= document.createElement("a-sphere");
clo.setAttribute("radius", 1);
clo.setAttribute("color","white");
clo.setAttribute("position",`${6} ${5} ${1}`)
cloud.append(clo);


  cloud.setAttribute("position",{x:x, y:y, z:z});
  scene.append( cloud )
}
/* Task 3: Create a function createHouse that,
      1) Accept an x and z position for where to place the house "entity"
      2) Create an entity to store all the components that will make up the house
      3) Create box for the base of the house.  Add base to the entity.
      4) Create triangular prism from a cylinder for the roof.  Add the roof to the entity.
      5) Adjust the attributes appropriately.
      5) Set house entities position to those passed in to the function.
      6) Add the house entity to the scene
*/
function createHouse(x,y,z){
let house= document.createElement ("a-entity");

let h= document.createElement("a-box");
h.setAttribute("width", 3);
h.setAttribute("height", 2);
h.setAttribute("depth",1);
h.setAttribute("color","brown");
h.setAttribute("position",`${1} ${0} ${1}`);

let hu= document.createElement("a-cone");
hu.setAttribute("radius-bottom", 2);
hu.setAttribute("radius-top", 0.5);
hu.setAttribute("color","red");
hu.setAttribute("position",`${1} ${4} ${1}`);

house.setAttribute("position",{x:x, y:y, z:z});
scene.append(h);




}




function createTree(x, y, z){
  let tree = document.createElement("a-entity");
  
  let pines = document.createElement("a-cone");
  pines.setAttribute("color","green");
  pines.setAttribute("position","0 2 0");
  pines.setAttribute("height","2");
  tree.append( pines );

  let stump = document.createElement("a-cylinder");
  stump.setAttribute("position","0 1 0");
  stump.setAttribute("color","brown");
  stump.setAttribute("radius","0.25");
  tree.append( stump );

  tree.setAttribute("position",{x:x, y:y, z:z});
  scene.append( tree )
}



