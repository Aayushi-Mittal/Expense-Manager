import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Home.module.css';

const FOF = () => {
    return (
        <div className={styles.fof}>
            <img className={styles.fofimg} src="https://error404.fun/img/full-preview/2x/32.png" alt="404" />
            <div className={styles.fofheading}>
                <h1>404</h1>
                <p>Page Not Found!</p>
                <Link to="/"><button>Go to Home</button></Link>
            </div>
        </div>
    )
}

export default FOF;
