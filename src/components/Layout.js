import React from 'react';
import styles from './styles/styles.module.css';

const Layout = ({ children }) => {
    return (
        <div className={styles.layout} >
            <header className="header">
                <a
                className="App-link"
                href="/"
                >
                <svg 
                xmlns="http://www.w3.org/2000/svg" width="83" height="83" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" 
                strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
                </a>
            </header>
            <main>{children}</main>
        </div>
    )
}

export default Layout