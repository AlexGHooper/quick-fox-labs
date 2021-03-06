import React from 'react';
import './hero.scss';
import fox from '../assets/qfl-logo-notext.svg'
import arrow from '../assets/arrow-down.svg'

export default function Hero({ page, pageTitle, copy, darkBlue, img, bg }) {
    return (
        <div className={`hero hero--normal ${darkBlue ? 'hero--d-blue' : ''}`}
            style={{ backgroundImage: `url(${bg ? bg : ''})` }}
        >
            <div className="hero__wrapper">
                <div className="hero__wrapper__content">
                    <h1>{pageTitle}</h1>
                    <p>{copy}</p>
                </div>
                <div className="hero__wrapper__fox">
                    <img src={img} alt="Hero" />
                </div>
            </div>
            <img className="arrow" src={arrow} alt="down arrow" />
        </div>
    );
}