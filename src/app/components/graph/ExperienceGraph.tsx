"use client"
import { ForceGraph3D } from "react-force-graph";
import * as THREE from 'three';
const ExperienceGraph = () => {

    const imgs = ['react.png'];
    const nds = imgs.map((img, id) => ({ id, img }))
    // Random connected graph
    const gData = {
      nodes: nds,
      links: []
    //   links: nds
    //     .filter(id => id)
    //       .map(id => ({
    //         source: 0,
    //         target: id
    //       }))
    };

  
      
    return ( 


        <ForceGraph3D
        graphData={gData}
        nodeThreeObject={({ img }) => {
          const imgTexture = new THREE.TextureLoader().load('../../../../public/r.jpg');
          imgTexture.colorSpace = THREE.SRGBColorSpace;
          console.log(imgTexture)
          const material = new THREE.SpriteMaterial({ map: imgTexture });
          const sprite = new THREE.Sprite(material);
          sprite.scale.set(12, 12, 12);

          return sprite;
        }}
      />
     );
}
 
export default ExperienceGraph;