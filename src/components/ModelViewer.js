import React, { Suspense, useEffect, useRef } from 'react';
import * as THREE from 'three';
import './style.css'
import {Canvas} from '@react-three/fiber'
import {OrbitControls, useGLTF} from '@react-three/drei'


 function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/shoe.gltf')
  return (
    <group ref={group} {...props} dispose={null} scale={3}>
      <mesh geometry={nodes.shoe.geometry} material={materials.laces} />
      <mesh geometry={nodes.shoe_1.geometry} material={materials.mesh} />
      <mesh geometry={nodes.shoe_2.geometry} material={materials.caps} />
      <mesh geometry={nodes.shoe_3.geometry} material={materials.inner} />
      <mesh geometry={nodes.shoe_4.geometry} material={materials.sole} />
      <mesh geometry={nodes.shoe_5.geometry} material={materials.stripes} />
      <mesh geometry={nodes.shoe_6.geometry} material={materials.band} />
      <mesh geometry={nodes.shoe_7.geometry} material={materials.patch} />
    </group>
  )
}

const ModelViewer = () => {

const ref = useRef();

  return (
  <div className="app">
         <div className="wrapper">
        <div className="card">
            <div className="product-canvas">
              <Canvas>
                <Suspense fallback={null}>
                <ambientLight  />
                <spotLight intensity={0.9} angle={0.1} penumbra={1}
                            position={[10,15,10]} castShadow />
                  <Model/>
                  <OrbitControls enablePan={true} enableZoom={true}   />
                </Suspense>
              </Canvas>
            </div>
            <h2>Color chooser</h2>
            <div className='colors'>
                 <div>
                    <input type="color" id="head" name="head"
                           value="#e66465" />
                    <label for="head">Main</label>
                  </div>

                <div>
                    <input type="color" id="body" name="body"
                            value="#f6b73c" />
                    <label for="body">Stripes</label>
                </div>
                 <div>
                    <input type="color" id="body" name="body"
                            value="#f6b73c" />
                    <label for="body">Soul</label>
                </div>
            </div>
        </div>
    </div>
     

    </div>
  )
};

export default ModelViewer;
