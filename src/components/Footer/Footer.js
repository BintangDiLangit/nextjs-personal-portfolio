import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { Link } from '../../styles/GlobalComponents';
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Chat</LinkTitle>
          <LinkItem href="https://t.me/bab4y4ga">Telegram</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mail:founder@bintangmfhd.tech">
		  	founder@bintangmfhd.tech
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>&copy; 2021 <Link href="https://www.bintangmfhd.tech">  bintangmfhd</Link> . All rights reserved.</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/BintangDiLangit">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/bintangmfhd/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com/bintangmfhd">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.twitter.com/bintangmf_hd">
            <AiFillTwitterCircle size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>

    </FooterWrapper>
  );
};

export default Footer;
