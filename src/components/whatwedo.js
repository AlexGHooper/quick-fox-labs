import React, { useEffect } from 'react'
import Button from './button'
import './whatwedo.scss'
import makeVisible from '../hooks/makeVisible'

export default function WhatWeDo({ title, subtitle, copy, points }) {

    const [bodyContent, isVisible] = makeVisible();

    return (
        <section className="section section--d-blue" ref={bodyContent}>
            <div className={`section__wrapper ${isVisible ? 'section__wrapper--visible' : ''}`}>
                <h2>
                    {title}
                </h2>
                <p>
                    {subtitle}
                </p>
                <p>
                    {copy}
                </p>
                <ul className="list list--home">
                    {points.map((point) => (
                        <li><img src={point.img} alt="point" /><p>{point.copy}</p></li>
                    ))}
                </ul>
                <Button modal copy="Let's talk" base orange />
            </div>
        </section>
    )
}