import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { Container, Row, Col, Nav, NavLink, NavItem, TabContent, TabPane } from 'reactstrap';

function Scenes() {
  const [key, setKey] = useState('home');
  const [tabs, setTabs] = useState([
    { title: 'Home' },
    { title: 'Profile' },
    { title: 'Contact' },
  ]);

  const addNewTab = () => {
    setTabs((prevTabs) => [
      ...prevTabs,
      { title: `New Tab ${prevTabs.length + 1}` },
    ]);
  };

  return (
    <Container className='ml-0 ' style={{background:"#f6f5f9"}}>
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
                <h4 >
                  Tab {index + 1} Contents
                </h4>
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
  );
}

export default Scenes;
