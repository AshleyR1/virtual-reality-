class house{
constructor(x,y,z){
this.obj= document.createElement ("a-entity");

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

this.obj.setAttribute("position",{x:x, y:y, z:z});
scene.append(this.obj);



  
}




  
}
