import { CSS3DObject } from './libs/three.js-r132/examples/jsm/renderers/CSS3DRenderer.js';
const THREE = window.MINDAR.IMAGE.THREE;

document.addEventListener('DOMContentLoaded', () => {
  const start = async() => {
    const mindarThree = new window.MINDAR.IMAGE.MindARThree({
      container: document.body,
      imageTargetSrc: './targets.mind',
    });	

    await mindarThree.start();
    renderer.setAnimationLoop(() => {
      cssRenderer.render(cssScene, camera);
    });
  }
  
  
  const {renderer, cssRenderer, scene, cssScene, camera} = mindarThree;

    const artist1Obj = new CSS3DObject(document.querySelector("#pizzarelli"));
    const artist1Css = mindarThree.addCSSAnchor(0);
    artist1Css.group.add(artist1Obj);
	
    const artist2Obj = new CSS3DObject(document.querySelector("#brubeck"));
    const artist2Css = mindarThree.addCSSAnchor(1);
    artist2Css.group.add(artist2Obj);
	
    const artist3Obj = new CSS3DObject(document.querySelector("#ellington"));
    const artist3Css = mindarThree.addCSSAnchor(2);
    artist3Css.group.add(artist3Obj);
	
    const artist4Obj = new CSS3DObject(document.querySelector("#higgins"));
    const artist4Css = mindarThree.addCSSAnchor(3);
    artist4Css.group.add(artist4Obj);
	
    const artist5Obj = new CSS3DObject(document.querySelector("#waller"));
    const artist5Css = mindarThree.addCSSAnchor(4);
    artist5Css.group.add(artist5Obj);
	
    const artist6Obj = new CSS3DObject(document.querySelector("#gershwin"));
    const artist6Css = mindarThree.addCSSAnchor(5);
    artist6Css.group.add(artist6Obj);
	
    const artist7Obj = new CSS3DObject(document.querySelector("#jimmyMcPartland"));
    const artist7Css = mindarThree.addCSSAnchor(6);
    artist7Css.group.add(artist7Obj);
	
    const artist8Obj = new CSS3DObject(document.querySelector("#marianMcPartland"));
    const artist8Css = mindarThree.addCSSAnchor(7);
    artist8Css.group.add(artist8Obj);
	
    const artist9Obj = new CSS3DObject(document.querySelector("#sutton"));
    const artist9Css = mindarThree.addCSSAnchor(8);
    artist9Css.group.add(artist9Obj);
	
    const artist10Obj = new CSS3DObject(document.querySelector("#alpertGlenn"));
    const artist10Css = mindarThree.addCSSAnchor(9);
    artist10Css.group.add(artist10Obj);
	
	console.log("Scooby");
	
	const pizzarelliLogic = document.querySelector("#pizzarelli");
	pizzarelliLogic.addEventListener("targetFound", event => {
		console.log("Pizzarelli found");
	});
	
	const brubeckLogic = document.querySelector("#brubeck");
	brubeckLogic.addEventListener("targetFound", event => {
		console.log("Brubeck found");
	});
  

  start();
});