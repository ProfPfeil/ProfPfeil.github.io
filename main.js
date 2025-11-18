import { CSS3DObject } from './libs/three.js-r132/examples/jsm/renderers/CSS3DRenderer.js';
const THREE = window.MINDAR.IMAGE.THREE;

document.addEventListener('DOMContentLoaded', () => {
  const start = async() => {
    const mindarThree = new window.MINDAR.IMAGE.MindARThree({
      container: document.body,
      imageTargetSrc: './targets.mind',
    });	

    const {renderer, cssRenderer, scene, cssScene, camera} = mindarThree;

    

    
    const qr1Obj = new CSS3DObject(document.querySelector("#qr1"));
    const qr1Css = mindarThree.addCSSAnchor(0);
    qr1Css.group.add(qr1Obj);

    const qr2Obj = new CSS3DObject(document.querySelector("#qr2"));
    const qr2Css = mindarThree.addCSSAnchor(1);
    qr2Css.group.add(qr2Obj);

    
    const qr1Logic = document.querySelector("#qr1");
	qr1Logic.addEventListener("targetFound", event => {
		console.log("QR1 found");
	});
	
	const qr2Logic = document.querySelector("#qr2");
	qr2Logic.addEventListener("targetFound", event => {
		console.log("QR2 found");
	});

    await mindarThree.start();
    renderer.setAnimationLoop(() => {
      cssRenderer.render(cssScene, camera);
    });

    }
	
	

  
  
  

  start();
});