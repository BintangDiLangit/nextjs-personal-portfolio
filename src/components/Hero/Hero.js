import React from 'react';

import { Section, SectionText, SectionTitle, Link } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hey there,
        </SectionTitle>
        <SectionText>
          Hey there, This is Bintang Miftaqul Huda. I am an Web & Flutter developer who also works on Kernels & Scripts.
        </SectionText>
        <Button onClick={(e) => {
          e.preventDefault();
          window.location.href = 'https://app.kinobi.asia/resume/6154234ce1c1b2001f45e189';
        }}>My Resume</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
