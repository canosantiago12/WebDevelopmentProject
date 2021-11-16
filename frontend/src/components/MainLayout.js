import React from 'react';
import Footer from './Footer';
import NavbarMenu from './NavbarMenu';

const MainLayout = ({ children }) => (
  <>
    <NavbarMenu />
    <main>{children}</main>
    <Footer />
  </>
);

export default MainLayout;
