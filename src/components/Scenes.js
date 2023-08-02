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
    <Container className='ml-0'>
      <Row  className='  max-w-full w-screen '>
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
      <TabContent activeTab={key} className='p-1 '>
        {tabs.map((tab, index) => (
          <TabPane key={index} tabId={`tab-${index}`}>
            <Row>
              <Col sm="12">
                <h4>
                  Tab {index + 1} Contents
                </h4>
              </Col>
            </Row>
          </TabPane>
        ))}
      </TabContent>
    </Container>
  );
}

export default Scenes;
