import React, { useState } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';

const menuData = {
  appetizers: [
    { name: "Spaghetti Alla Carbonara", price: 49, desc: "Lorem passionate chefs masterfully" },
    { name: "Golden Saffron Risotto", price: 19, desc: "Lorem passionate chefs masterfully" },
    { name: "Paella Valenciana", price: 59, desc: "Lorem passionate chefs masterfully" },
    { name: "Peri Peri Prawns", price: 39, desc: "Lorem passionate chefs masterfully" },
    { name: "Golden Saffron Risotto", price: 99, desc: "Lorem passionate chefs masterfully" },
    { name: "Spaghetti Alla Carbonara", price: 49, desc: "Lorem passionate chefs masterfully" },
    { name: "Golden Saffron Risotto", price: 19, desc: "Lorem passionate chefs masterfully" },
    { name: "Peri Peri Prawns", price: 39, desc: "Lorem passionate chefs masterfully" },

  ],
  italian: [
    { name: "Truffle-Infused Filet Mignon", price: 29, desc: "Lorem passionate chefs masterfully" },
    { name: "Butter Poached Lobster", price: 89, desc: "Lorem passionate chefs masterfully" },
  ],
  chinese: [
    { name: "Golden Saffron Risotto", price: 19, desc: "Lorem passionate chefs masterfully" },
  ],
  indian: [
    { name: "Peri Peri Prawns", price: 39, desc: "Lorem passionate chefs masterfully" },
  ],
  beverages: [
    { name: "Paella Valenciana", price: 59, desc: "Lorem passionate chefs masterfully" },
  ],
};

const MenuSection = () => {
  const [activeTab, setActiveTab] = useState('appetizers');

  const currentItems = menuData[activeTab] || [];

  return (
    <section id='Menu' className="menu-section">
      <Container fluid className="px-0">
        <div className="menu-header text-center">
          <p className="special-selection text-center">Special Selection</p>
          <h1 className="menu-title">Our Menu</h1>
        </div>

        {/* Tabs - Exact as in image */}
        <div className="menu-tabs-wrapper">
          <Nav variant="tabs" className="menu-tabs justify-content-center flex-nowrap overflow-auto">
            <Nav.Item>
              <Nav.Link
                active={activeTab === 'appetizers'}
                onClick={() => setActiveTab('appetizers')}
                className="menu-tab"
              >
                Appetizers
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                active={activeTab === 'italian'}
                onClick={() => setActiveTab('italian')}
                className="menu-tab"
              >
                Italian Cuisine
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                active={activeTab === 'chinese'}
                onClick={() => setActiveTab('chinese')}
                className="menu-tab"
              >
                Chinese Special
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                active={activeTab === 'indian'}
                onClick={() => setActiveTab('indian')}
                className="menu-tab"
              >
                Indian Cuisine
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                active={activeTab === 'beverages'}
                onClick={() => setActiveTab('beverages')}
                className="menu-tab"
              >
                Beverages
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>

        {/* Menu Items - Exact two-column layout */}
        <Container className="menu-items py-5">
          <Row className="">
            {currentItems.map((item, index) => (
              <Col xs={12} md={6} key={index} className="menu-item-row">
                <div className="menu-item d-flex flex-row flex-sm-row justify-content-between align-items-start gap-2 ">

                  <div className="menu-left">
                    <h5 className="menu-name ">{item.name}</h5>
                    <p className="menu-desc text-white">{item.desc}</p>
                  </div>

                  <div className="menu-right text-start text-sm-end">
                    <div className="menu-price text-end">${item.price}</div>
                    <p className="menu-extra text-white">Extra free juices</p>
                  </div>

                </div>

                <div className="menu-divider d-none d-sm-block"></div>
                <div className="menu-divider2 d-none d-sm-block"></div>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </section>
  );
};

export default MenuSection;