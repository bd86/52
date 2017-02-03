;(function(){

  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
  //camera.position.y = 400;

  var renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  
  //var geometry = new THREE.BoxGeometry(1, 1, 1);
  var geometry = new THREE.TetrahedronGeometry(1,1);
  var material = new THREE.MeshBasicMaterial({ color: 0xffa500, wireframe: true });
  var cube = new THREE.Mesh(geometry, material);
  //cube.position.set(3, 1, 1 );
  scene.add(cube);

  camera.position.z = 5;

  function render() {
    requestAnimationFrame(render);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.02;
   
    // if(camera.position.x > 3){
    //   camera.position.x -= 0.01;
    //   console.log('true');
    // }else{
    //   camera.position.x += 0.01;
    // }
    // if(camera.position.y > (window.innerHeight-10)){
    //   camera.position.y -= 0.01;
    // }else{
    //   camera.position.y += 0.02;
    // }

    //camera.position.x += 0.01;
    //camera.position.y += 0.02;

    renderer.render(scene, camera);
  }
  render();
 
})();


