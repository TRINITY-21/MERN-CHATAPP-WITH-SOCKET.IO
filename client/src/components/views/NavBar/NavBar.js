import React, { useState } from 'react';
import LeftMenu from './Sections/LeftMenu';
import RightMenu from './Sections/RightMenu';
import {Icon} from '@ant-design/compatible'
import { Drawer, Button,  } from 'antd';
import './Sections/Navbar.css';

function NavBar() {
  const [visible, setVisible] = useState(false)

  const showDrawer = () => {
    setVisible(true)
  };

  const onClose = () => {
    setVisible(false)
  };

  return (
    <nav className="menu" style={{ position:'fixed', zIndex: 5, width: '100%' }}>
      <div className="menu__logo">
        <a href="/chat"><svg id="Layer_1" enable-background="new 0 0 512 512" height="30" viewBox="0 0 512 512" width="30" xmlns="http://www.w3.org/2000/svg"><g><path d="m304 304-96-96" fill="none"/><path d="m303 319c-4.095 0-8.189-1.562-11.313-4.687l-94-94c-6.249-6.248-6.249-16.379 0-22.627 6.248-6.249 16.379-6.249 22.627 0l94 94c6.249 6.248 6.249 16.379 0 22.627-3.125 3.125-7.219 4.687-11.314 4.687z"/><path d="m144.003 384c-4.167 0-8.258-1.628-11.317-4.687-4.525-4.526-5.919-11.313-3.542-17.256l64-160c1.626-4.065 4.848-7.287 8.913-8.913l160-64c5.944-2.377 12.73-.983 17.256 3.542 4.525 4.526 5.919 11.313 3.542 17.256l-64 160c-1.626 4.065-4.848 7.287-8.913 8.913l-160 64c-1.926.771-3.941 1.145-5.939 1.145zm76.306-163.691-47.588 118.97 118.97-47.588 47.588-118.97z"/><path d="m256 512c-68.38 0-132.667-26.628-181.02-74.98s-74.98-112.64-74.98-181.02 26.628-132.667 74.98-181.02 112.64-74.98 181.02-74.98 132.667 26.628 181.02 74.98 74.98 112.64 74.98 181.02-26.628 132.667-74.98 181.02-112.64 74.98-181.02 74.98zm0-480c-123.514 0-224 100.486-224 224s100.486 224 224 224 224-100.486 224-224-100.486-224-224-224z"/></g></svg></a>
      </div>
      <div className="menu__container">
        <div className="menu_left">
          <LeftMenu mode="horizontal" />
        </div>
        <div className="menu_rigth">
          <RightMenu mode="horizontal" />
        </div>
        <Button
          className="menu__mobile-button"
          type="primary"
          onClick={showDrawer}
        >
          <Icon type="align-right" />
        </Button>
        <Drawer
          title="Basic Drawer"
          placement="right"
          className="menu_drawer"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
          <LeftMenu mode="inline" />
          <RightMenu mode="inline" />
        </Drawer>
      </div>
    </nav>
  )
}

export default NavBar