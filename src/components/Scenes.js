import { useState } from 'react';
import { FaPlus ,FaTimes} from 'react-icons/fa';
import { Container, Row, Col, Nav, NavLink, NavItem, TabContent, TabPane } from 'reactstrap';
import { BrowserRouter as Router, Switch, Routes,Route, Link, useRoutes } from "react-router-dom";
import React, { Suspense, useEffect, useRef } from 'react';
import * as THREE from 'three';
import {Tabs, Text} from '@geist-ui/react'

import {Canvas} from '@react-three/fiber'
import {OrbitControls, useGLTF} from '@react-three/drei'

function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/shoe.gltf')
  return (
    <group ref={group} {...props} dispose={null} scale={3}>
      <mesh geometry={nodes.shoe.geometry} material={materials.laces} material-color={"red"}/>
      <mesh geometry={nodes.shoe_1.geometry} material={materials.mesh} material-color={"red"} />
      <mesh geometry={nodes.shoe_2.geometry} material={materials.caps} material-color={"blue"} />
      <mesh geometry={nodes.shoe_3.geometry} material={materials.inner} />
      <mesh geometry={nodes.shoe_4.geometry} material={materials.sole} />
      <mesh geometry={nodes.shoe_5.geometry} material={materials.stripes} />
      <mesh geometry={nodes.shoe_6.geometry} material={materials.band} />
      <mesh geometry={nodes.shoe_7.geometry} material={materials.patch} />
    </group>
  )
}
function Scenes() {
  const [key, setKey] = useState('home');

  const [tabs, setTabs] = useState([
    {
      id: 1,
      title: `Scene 1`,
      draggedImages: [],
      content :<div className='content-center'>
      <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' ,flexDirection: 'column' }}><Canvas className='min-h-full'>
      <Suspense fallback={null}>
      <ambientLight  />
      <spotLight intensity={0.9} angle={0.1} penumbra={1}
                  position={[10,15,10]} castShadow />
        <Model/>
        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true}   />
      </Suspense>
    </Canvas>
    </div> 
    </div> 
    },
    {
      id: 2,
      title: `Scene 2`,
      draggedImages: [],
      content : <div className='content-center'>
      <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' ,flexDirection: 'column' }}><Canvas className='min-h-full'>
      <Suspense fallback={null}>
      <ambientLight  />
      <spotLight intensity={0.9} angle={0.1} penumbra={1}
                  position={[10,15,10]} castShadow />
        <Model/>
        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true}   />
      </Suspense>
    </Canvas>
    </div> 
    </div> 
    },
    {
      id: 3,
      title: `Scene 3`,
      draggedImages: [],
      content : <div className='content-center'>
      <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' ,flexDirection: 'column' }}><Canvas className='min-h-full'>
      <Suspense fallback={null}>
      <ambientLight  />
      <spotLight intensity={0.9} angle={0.1} penumbra={1}
                  position={[10,15,10]} castShadow />
        <Model/>
        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true}   />
      </Suspense>
    </Canvas>
    </div> 
    </div> 
    },
  ]);

  const [activeTabId, setActiveTabId] = useState(1);

  const handleCloseTab = (index) => {
    const newTabs = [...tabs];
    newTabs.splice(index, 1);
    setTabs(newTabs);
  };

  const handleDrag = (e, data, picture) => {
    const draggedImage = {
      id: picture.id,
      url: picture.url,
      position: { x: data.x, y: data.y },
    };
  
  
    setTabs((prevTabs) => {
      return prevTabs.map((tab) => {
        if (tab.id === activeTabId) {
          const index = tab.draggedImages.findIndex((img) => img.id === picture.id);
          if (index !== -1) {
            return {
              ...tab,
              draggedImages: [
                ...tab.draggedImages.slice(0, index),
                draggedImage,
                ...tab.draggedImages.slice(index + 1),
              ],
            };
          } else {
            return {
              ...tab,
              draggedImages: [...tab.draggedImages, draggedImage],
            };
          }
        } else {
          return tab;
        }
      });
    } )
  };


  const addNewTab = () => {
    setTabs((prevTabs) => [
      ...prevTabs,
      { title: `Scene ${prevTabs.length + 1}` },
    ]);
  };

  return (
    <Router>
    <Container className='ml-0 max-w-full' style={{background:"#f6f5f9"}}>
      <Row  className=' '>
        <Col className=' p-1  ' style={{background:"#e2e2f0"}}>
          <Nav tabs >
            {tabs.map((tab, index) => (
              <NavItem key={index}>
                <NavLink
                   className={key === `tab-${index}` ? 'active flex' : ' flex'} 
                  onClick={() => setKey(`tab-${index}`)}
                >
                  {tab.title}

                  <span
                    className='pl-1 cursor-pointer'
                    onClick={() => handleCloseTab(index)} // Add the close click handler
                  >
                    <FaTimes size={10} />
                  </span>
                </NavLink>
              </NavItem>
            ))}
            <NavItem>
              <div style={{ cursor: 'pointer' }} onClick={addNewTab} className='px-3 pt-2'>
                <FaPlus size={20} />
              </div>
            </NavItem>
          </Nav>
        </Col>
      </Row>
      <div className='flex'>
        <div>
      <TabContent activeTab={key} className='p-1 bg-white shadow-md sm:w-[444px] h-[668px] lg:w-[888px] rounded-xl p-5 ml-1 mt-1'>
        {tabs.map((tab, index) => (
          <TabPane className='' key={index}  tabId={`tab-${index}`}>
           
              
              {key === `tab-${index}` && <div className='content-center min-h-full '>{tab.content}</div>}
              {/* <Canvas>
                <Suspense fallback={null}>
                <ambientLight  />
                <spotLight intensity={0.9} angle={0.1} penumbra={1}
                            position={[10,15,10]} castShadow />
                  <Model/>
                  <OrbitControls enablePan={true} enableZoom={true}   />
                </Suspense>
              </Canvas>
       */}
            
          </TabPane>
        ))}
        

        
      </TabContent>
      </div>
      <div className='bg-white ml-2 mt-2 h-[668px] w-[414px] shadow-md rounded-xl'>

      <Tabs initialValue="html" hideDivider className='p-3' marginLeft={1}>
  <Tabs.Item label="Scene" value="html"  >
    <Text mt={0}> Orientation</Text>
   
  </Tabs.Item>
  <Tabs.Item label="Assets" value="css" className='content-center items-center' marginLeft={13}>
  <Text mt={0}>Overlay assets</Text>
    <div className='h-8 w-80 border shadow-sm bg-yellow-200 mb-3'></div>
   <Text className='mb-3'> AR assets</Text>  
   <div className='h-8 w-80 border shadow-sm bg-yellow-200 mb-3'></div>
  </Tabs.Item>
</Tabs>

      </div>
      </div>
      
    </Container>
    </Router>
  );
}

export default Scenes;
