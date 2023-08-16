import { useState } from 'react';
import { FaPlus ,FaTimes} from 'react-icons/fa';
import { Container, Row, Col, Nav, NavLink, NavItem, TabContent, TabPane } from 'reactstrap';
import { BrowserRouter as Router, Switch, Routes,Route, Link } from "react-router-dom";
import TabContents from './TabContents';
function Scenes() {
  const [key, setKey] = useState('home');

  const [tabs, setTabs] = useState([
    {
      id: 1,
      title: `Scene 1`,
      draggedImages: [],
    },
    {
      id: 2,
      title: `Scene 2`,
      draggedImages: [],
    },
    {
      id: 3,
      title: `Scene 3`,
      draggedImages: [],
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
    <Container className='ml-0 w-max min-w-full' style={{background:"#f6f5f9"}}>
      <Row  className=' '>
        <Col className=' p-1  ' style={{background:"#e2e2f0"}}>
          <Nav tabs >
            {tabs.map((tab, index) => (
              <NavItem key={index}>
                <NavLink
                  className={key === `tab-${index}` ? 'active' : ' '}
                  onClick={() => setKey(`tab-${index}`)}
                >
                  {tab.title}

                  <span
                    className='pl-1 cursor-pointer'
                    onClick={() => handleCloseTab(index)} // Add the close click handler
                  >
                    <FaTimes />
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
            <Row>
              <Col sm="12">
              <Routes>
            {tabs.map((tab) => (
              <Route 
                  key={tab.id} 
                  path={`/tab/${tab.id}`} 
                  element={
                        <TabContents draggedImages={tab.draggedImages} 
                            handleDrag={(e, data, picture) => handleDrag(e, data, picture)}/>
                  } 
                
              />
            ))}
          </Routes>
              </Col>
            </Row>
          </TabPane>
        ))}
        

        
      </TabContent>
      </div>
      <div className='bg-white ml-2 mt-2 h-[668px] w-[414px] shadow-md rounded-xl'>

      </div>
      </div>
      
    </Container>
    </Router>
  );
}

export default Scenes;
