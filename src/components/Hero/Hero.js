import React from 'react'
import Typewriter from 'typewriter-effect'

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents'
import Button from '../../styles/GlobalComponents/Button'
import { LeftSection } from './HeroStyles'

const Hero = ({ t }) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        <Typewriter
          options={{
            cursor: '|',
            autoStart: true,
            loop: true,
            delay: 40,
            strings: ['' + t('introduction'), '' + t('portfolio')],
          }}
        />
      </SectionTitle>
      <SectionText>{t('goal')}</SectionText>
      <Button onClick={() => (window.location = 'https://google.com')}>
        {t('learn_more')}
      </Button>
    </LeftSection>
  </Section>
)

export default Hero
