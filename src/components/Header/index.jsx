import React from 'react';
import styles from './styles.module.css';

function Header(props) {
    return (
        <header className={styles.header}>
        <div className={styles['header-top']}>
            <div className={styles['left-side']}>
                BNCC x Ticket Gallery
            </div>
            <div className={styles['right-side']}>
                <button className={styles.btnAdd} onClick={props.onClick} type="submit">
                    <img src="plus-s-svg.svg" alt="plus Icon" className={styles.icon} />
                    Memory
                </button>
                <button className={styles.btnAuth} onClick={props.onClick} type="submit">
                    Login or Signin
                </button>
            </div>
        </div>
        {props.children}
        </header>
    );
}

export default Header;
