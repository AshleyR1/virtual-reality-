let target;

window.addEventListener("DOMContentLoaded",function() {
  target = document.querySelector("#target");
  target.a = 0;
  target.da = -0.01;

  loop();
})

function loop(){
  target.a += target.da;

 // target.setAttribute("rotation",{x:target.a, y:0, z: 0});
 
  if(target.a < -Math.PI / 1.8 || target.a > Math.PI / 20){
    target.da = -target.da;
  }
  target.object3D.rotation.x = target.a;



  window.requestAnimationFrame( loop );
}