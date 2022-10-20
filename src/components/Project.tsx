import { styled } from '../../stitches.config';
import { ProjectProps } from '@/utils/types';
import { ReactElement } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { formatDate, getArrayFromString } from '@/utils/helpers';

const View = styled('article', {
  backgroundImage: '',
  backgroundColor: '',
  '&.project__view': {
    backgroundColor: ''
  },
  '&.link__list': {
    display: 'flex',
    gap: '1rem',
    '& li': {
      paddingX: 0.5,
    }
  }
});


export const Project = ({ props }: { props: ProjectProps }): ReactElement => {
  const { id, created_at, title, description, type, status, objective, stack, is_released, thumbnail_url, repository_url, live_url } = { ...props }
  return (
    <>
      <View className='project__view' key={id}>
        <Image
          src={thumbnail_url}
          blurDataURL={thumbnail_url}
          alt='screenshot of project as background'
          width={200}
          height={200}
          objectFit='contain'
        />
        <div className='project__summary'>
          <div className='project__info'>
            <h3 className='title'>{title}</h3>
            <span className='date_creation'>
              {formatDate(created_at)}
            </span>
            <p className='description'>{description}</p>
            <span className='type'>{type}</span>
            <span className='status'>{status}</span>
          </div>
          <div className='project-stack__wrapper'>
            {getArrayFromString(stack, ', ').map((item: string) => (
              <span className='stack' key={item}>{item} </span>
            ))}
          </div>
          <ul className='link__list'>
            {(repository_url) && (
              <li>
                <Link href={repository_url} scroll={false}>
                  <a target="_blank">Github</a>
                </Link>
              </li>
            )}
            {(live_url) && (
              <li>
                <Link href={live_url} scroll={false}>
                  <a target="_blank">Live</a>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </View>
    </>
  );
};