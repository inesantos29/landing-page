import React from 'react'
import heroImage from './images/rock-header.png'
import { HeroSection } from './style'

const Hero = () => (
  <section>
    <HeroSection style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="content-hero"></div>
    </HeroSection>
  </section>
)

export default Hero
