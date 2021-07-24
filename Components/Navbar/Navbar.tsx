import React from 'react';
import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navitem}>Sign Out</div>
    </div>
  );
};

export default Navbar;
