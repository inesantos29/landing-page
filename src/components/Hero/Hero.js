import React from 'react'
import heroImage from './images/rock-header.png'
import { Title } from '../Title'
import { HeroSection, ContentHero } from './style'

const Hero = () => (
  <section>
    <HeroSection style={{ backgroundImage: `url(${heroImage})` }}>
      <ContentHero>
        <Title />
      </ContentHero>
    </HeroSection>
  </section>
)

export default Hero
