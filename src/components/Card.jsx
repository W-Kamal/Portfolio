import React from "react";
import { styled } from '../../stitches.config';
import Image from 'next/image';
import Link from 'next/link';
import { getArrayFromString } from '../utils/helpers';

const View = styled('div', {
  backgroundImage: '',
  backgroundColor: '',
  outline: '3px solid red',
  br: 2,
  outlineColor: '000',
  '&.link__list': {
    display: 'flex',
    gap: '1rem',
    '& li': {
      paddingX: 0.5,
    }
  }
});


export const Card = ({ props }) => {
  console.log(`props : `, props)
  // const {} id, title, description, type, status, stack, thumbnail_url, repository_url, live_url, logo_url, icon_arr  = {...props }
  return (
    <View className="cardView">
      <div className='info'>
        <h3 className='title'>{props.title}</h3>
        <p className='description'>{props.description}</p>
        <p className='type'>{props.type}</p>
        <p className='status'>{props.status}</p>
      </div>
      <div className='stack__wrapper'>
        {getArrayFromString(props.stack, ', ').map((item) => (
          <span className='stack' key={item}>{item}</span>
        ))}
      </div>
      <ul className='link__list'>
        {(props.repository_url) && (
          <li>
            <Link href={props.repository_url} scroll={false}>
              <a target="_blank">Github</a>
            </Link>
          </li>
        )}
        {(props.live_url) && (
          <li>
            <Link href={props.live_url} scroll={false}>
              <a target="_blank">Live</a>
            </Link>
          </li>
        )}
      </ul>
    </View>
  );
};