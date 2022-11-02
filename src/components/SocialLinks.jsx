import React from 'react';
import Link from 'next/link';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { SocialWrapperStyled, IconStyled } from '../styles/heroStyle.css';

const SocialLinks = () => {
  return (
    <SocialWrapperStyled>
      <Link href='https://www.linkedin.com/in/kamal-wardi/' passHref>
        <IconStyled target='_blank'>
          {<FaLinkedinIn title='linkedin icon' />}
        </IconStyled>
      </Link>
      <Link href='https://github.com/W-Kamal' passHref>
        <IconStyled target='_blank'>
          {<FaGithub title='github icon' />}
        </IconStyled>
      </Link>
    </SocialWrapperStyled>
  );
};

export default SocialLinks;
