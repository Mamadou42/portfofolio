import React from 'react'

import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents'
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles'

const data = [
  { number: 10, text: 'open_source' },
  { number: 5, text: 'deployment' },
  { number: 10, text: 'learned_techno' },
  { number: 1, text: 'challenge' },
]

const Acomplishments = ({ t }) => (
  <Section>
    <SectionTitle>{t('accomplishment')}</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{t(card.text)}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
)

export default Acomplishments
