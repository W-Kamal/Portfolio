import React from 'react';
import { useRouter } from 'next/router';
import { styled } from '../../stitches.config';

import Availability from './Availability';
import Btn from './Button';
import SocialLinks from './SocialLinks';

import en from '../locales/en';
import fr from '../locales/fr';

export const Wrapper = styled('footer', {
  display: 'flex',
  flexDirection: 'row',
  marginTop: '7rem',
});

export const Footer = () => {
  const router = useRouter();
  const { locale } = router;
  const transl = locale === 'fr' ? fr : en;

  // redirect with router depending on locale choice (i18n)
  const changeLanguage = (event) => {
    const locale = event.target.value;
    // router.push(router.pathname, router.asPath, { locale locale });
    router.push('/', '/', { locale });
  };

  return (
    <Wrapper>
      <Availability />
      {/* <Btn /> */}
      <select
        onChange={changeLanguage}
        defaultValue={locale}
        className='text-white text-shadow-sm text-lg bg-transparent tracking-wide'
      >
        <option className='text-black' value='en'>
          EN
        </option>
        <option className='text-black' value='fr'>
          FR
        </option>
      </select>
      <SocialLinks />
    </Wrapper>
  );
};