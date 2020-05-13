import React from 'react'
import heroImage from './images/rock-header.png'
import { HeroSection, ContentHero } from './style'
import { Title } from '../Title'
import { Button } from '../Button'

const Hero = () => (
  <section>
    <HeroSection style={{ backgroundImage: `url(${heroImage})` }}>
      <ContentHero>
        <Title />
        <Button label="learn more" />
      </ContentHero>
    </HeroSection>
  </section>
)

export default Hero
