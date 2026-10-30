class Cloud{
constructor(x,y,z){
  this.obj= document.createElement ("a-entity");
      
      let c= document.createElement("a-sphere");
      c.setAttribute("radius", 1);
      c.setAttribute("color","white");
      c.setAttribute("position",`${5} ${5} ${1}`)
      this.obj.append(c);
      
      let cu= document.createElement("a-sphere");
      cu.setAttribute("radius", 1);
      cu.setAttribute("color","white");
      cu.setAttribute("position",`${4} ${5} ${1}`)
      this.obj.append(cu);
      
      let cl= document.createElement("a-sphere");
      cl.setAttribute("radius", 1);
      cl.setAttribute("color","white");
      cl.setAttribute("position",`${5} ${6} ${1}`)
      this.obj.append(cl);
      
      let clo= document.createElement("a-sphere");
      clo.setAttribute("radius", 1);
      clo.setAttribute("color","white");
      clo.setAttribute("position",`${6} ${5} ${1}`)
      this.obj.append(this.obj);


}

  
}







  
}
