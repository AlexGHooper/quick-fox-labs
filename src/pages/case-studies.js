import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Hero from '../components/hero'
import CaseStudiesList from '../components/caseStudiesList'
import BannerCTA from '../components/bannerCTA'
import SEO from "../components/seo"

import waaImg from '../assets/waa.jpg'
import pureImg from '../assets/pure.jpg'
import heroImg from '../assets/case-study.svg'

import pureLogo from '../assets/logos/pure.svg'
import waaLogo from '../assets/logos/waa.png'

const CaseStudies = () => (
  <Layout>
    <SEO title="Case Studies" />
    <Hero
      img={heroImg}
      page="School"
      pageTitle="We deliver sell-out events time after time, and we have the case studies to prove it."
    />
    <CaseStudiesList
      caseStudies={[{ name: "We Are Africa", img: waaImg, logo: waaLogo, link: 'waa', stats: ['18m views', '100 organic shares', '400% increase in leads', '80% qualified leads', '25% sales came directly from digital', '3 x ROAS'] }, { name: "Pure Life Experiences", img: pureImg, logo: pureLogo, link: 'pure', stats: ['11 Million views', '600% engagement uplift', '75% qualified leads', '15% sales came directly from digital', '3 x ROAS', '300% ROI'] }]} />
    <BannerCTA
      title="Ready to get started?"
      link1="/quiz"
      link2="https://calendly.com/quickfoxlabs/30min"
      link1Copy="Contact us"
      link2Copy="book a meeting"
      external2
    />
  </Layout>
)

export default CaseStudies
