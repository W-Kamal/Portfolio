import { useRouter } from 'next/router';
import Availability from "./Availability";
import Btn from "./Button";
import SocialLinks from "./SocialLinks";

import en from '../locales/en';
import fr from '../locales/fr';

const Footer = () => {
  const router = useRouter();
  const { locale } = router;
  const transl = locale === 'fr' ? fr : en;

  // redirect with router depending on locale choice (i18n)
  const changeLanguage = (event:React.ChangeEvent<HTMLSelectElement>) => {
    const locale = event.target.value;
    // router.push(router.pathname, router.asPath, { locale locale });
    router.push('/', '/', { locale });
  };

  return (
    <>
      <Availability />
      {/* <Btn /> */}
      <select
        onChange={changeLanguage}
        defaultValue={locale}
        className="text-white text-shadow-sm text-lg bg-transparent tracking-wide"
        >
        <option className="text-black" value="en">EN</option>
        <option className="text-black" value="fr">FR</option>
      </select>
      <SocialLinks/>
    </>
  )
};

export default Footer;