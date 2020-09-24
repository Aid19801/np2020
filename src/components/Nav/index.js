import React, { useState } from 'react';
import Navbar from 'react-bulma-components/lib/components/navbar';

function Nav() {
  const [burger, toggleBurger] = useState(false);

  const handleClick = () => {
    return toggleBurger(!burger);
  };

  return (
    <Navbar color="light" fixed="top" active={burger} transparent={false}>
      <Navbar.Brand>
        <Navbar.Item renderAs="a" href="#">
          <img
            src="https://photos.angel.co/startups/i/7049935-29af3beeeb9ee5994ca2d94a33cc3d6a-medium_jpg.jpg?buster=1562705214"
            alt="Net Purpose Logo"
          />
        </Navbar.Item>
        <Navbar.Burger onClick={handleClick} />
      </Navbar.Brand>
      <Navbar.Menu>
        <Navbar.Container>
          <Navbar.Item dropdown hoverable href="#">
            <Navbar.Link arrowless>First</Navbar.Link>
            <Navbar.Dropdown>
              <Navbar.Item href="#">Subitem 1</Navbar.Item>
              <Navbar.Item href="#">Subitem 2</Navbar.Item>
            </Navbar.Dropdown>
          </Navbar.Item>
          <Navbar.Item href="#">Second</Navbar.Item>
        </Navbar.Container>
        <Navbar.Container position="end">
          <Navbar.Item href="#">At the end</Navbar.Item>
        </Navbar.Container>
      </Navbar.Menu>
    </Navbar>
  );
}

export default Nav;
