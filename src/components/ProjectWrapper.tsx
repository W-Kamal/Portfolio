import { styled } from '../../stitches.config';
import { Project } from 'src/Types/index';
import { ReactElement } from 'react';
import Image from 'next/image';
import { formatDate, getArrayFromString } from '@/utils/utils';
import Link from 'next/link';


const Wrapper = styled('div', {});
const ProjectView = styled('article', {
  backgroundImage: '',
});
const UList = styled('ul', {
  display: 'flex',
  gap: '1rem',
  '& li': {
    paddingBlock: '0.5rem'
  }
});

// le nombre de click sur les liens (git ou démo ou articles qd il y aura)
type Slide = {
  url:URL,
  title:string
}

const ProjectWrapper = ({ projects }: { projects: Project[] }): ReactElement => {
  
  return (
    <Wrapper>
      {projects &&
        projects.map((project) => (
          <ProjectView className='project__view' key={project.id}>
            <Image
              src={project.thumbnail_url}
              blurDataURL={project.thumbnail_url}
              alt='screenshot of project as background'
              width={200}
              height={200}
              objectFit='contain'
            />
            <div className='project__summary'>
              <div className='project__info'>
                <h3 className='title'>{project.title}</h3>
                <span className='date_creation'>
                  {formatDate(project.created_at)}
                </span>
                <p className='description'>{project.description}</p>
                <span className='type'>{project.type}</span>
                <div className='links_container'>
                  <span className='status'>{project.status}</span>
                </div>
              </div>
              <div className='project__stack'>
                {getArrayFromString(project.stack, ', ').map((item: string) => (
                  <span key={item}>{item} </span>
                ))}
              </div>
              <UList>
                {(project.repository_url) && (
                  <li>
                    <Link href={project.repository_url} scroll={false}>
                      <a target="_blank">Github</a>
                    </Link>
                  </li>
                )}
                {(project.live_url) && (
                  <li>
                    <Link href={project.live_url} scroll={false}>
                      <a target="_blank">Live</a>
                    </Link>
                  </li>
                )}
              </UList>
            </div>
          </ProjectView>
        ))}
    </Wrapper>
  );
};

export default ProjectWrapper;
