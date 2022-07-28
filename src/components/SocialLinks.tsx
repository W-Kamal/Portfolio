import Link from 'next/link';
import { FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa';
import { SocialWrapperStyled, IconStyled } from '@/styles/heroStyle.css';
import { Url } from 'url';

// interface LinkProps {
//   title: string;
//   href: Url;
//   iconRef: string;
// }

const iconList = [
  {
    title: 'twitter icon',
    href: 'https://twitter.com/MozaiK_K',
    iconRef: 'FaTwitter',
  },
  {
    title: 'linkedin icon',
    href: 'https://www.linkedin.com/in/kamal-wardi/',
    iconRef: 'FaLinkedinIn',
  },
  {
    title: 'github icon',
    href: 'https://github.com/WARDI-Kamal',
    iconRef: 'FaGithub',
  }
];

// comment appliquer un style global aux react-icons ?
// est-ce que mettre les data en context est pertinent...?
const SocialLinks = () => {
  return (
    <SocialWrapperStyled>
      <Link href='https://twitter.com/MozaiK_K' passHref>
        <IconStyled target='_blank'>
          {<FaTwitter title='twitter icon' />}
        </IconStyled>
      </Link>
      <Link href='https://www.linkedin.com/in/kamal-wardi/' passHref>
        <IconStyled target='_blank'>
          {<FaLinkedinIn title='linkedin icon' />}
        </IconStyled>
      </Link>
      <Link href='https://github.com/WARDI-Kamal' passHref>
        <IconStyled target='_blank'>
          {<FaGithub title='github icon' />}
        </IconStyled>
      </Link>
    </SocialWrapperStyled>
  );
};

export default SocialLinks;

// const IconLinks = ({ ...props }: LinkProps) => {
//   return (
//     <SocialWrapperStyled>
//       {iconList.map(()=>
//         <Link href={iconList.href} passHref>
//         <IconStyled target='_blank'>
//           {<{props.iconRef} title={iconList.title} />}
//         </IconStyled>
//       </Link>        
//       )}
//     </SocialWrapperStyled>
//   );
// };

// export default IconLinks;
