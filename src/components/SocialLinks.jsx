import Link from 'next/link';
import { FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa';
import { SocialWrapperStyled, IconStyled } from '@/styles/heroStyle.css';

// Type LinkProps = {
//   title: string;
//   href: Url;
//   iconRef: string;
// }

const SocialLinks = () => {
  return (
    <SocialWrapperStyled>
      {/* <Link href='https://twitter.com/MozaiK_K' passHref>
        <IconStyled target='_blank'>
          {<FaTwitter title='twitter icon' />}
        </IconStyled>
      </Link> */}
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
