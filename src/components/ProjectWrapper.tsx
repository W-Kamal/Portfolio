import { styled } from '../../stitches.config';
import { Project, ExternalLink } from '@/lib/Types';
import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
  useEffect,
} from 'react';

const Wrapper = styled('div', {});
const ProjectView = styled('article', {
  backgroundImage: '',
});

// le nombre de click sur les liens (git ou démo ou articles qd il y aura)
function getArrayFromString(str: string): string[] {
  return str.split(', ');
}
function formatDate(strDate: string): string {
  const date: Date = new Date(strDate);
  return new Intl.DateTimeFormat('fr-FR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(date);
}
const ProjectWrapper = ({ projects }: { projects: Project }) => {
  console.log(`projects Props : `, projects);
  console.log(`Typeof projects Props : `, typeof projects);
  // console.log(`date : `, projectList[0].created_at)
  // console.log(`date type : `, typeof(projectList[0].created_at))
  // console.log(`formated date : `, formatDate(projectList[0].created_at))

  return (
    <Wrapper>
      {projects &&
        projects.map((project) => (
          <ProjectView className='project__view' key={project.id}>
            <div className='project__summary'>
              <div className='project__info'>
                <h3 className='title'>{project.title}</h3>
                <h4 className='name'></h4>
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
                {getArrayFromString(project.stack).map((item: string) => (
                  <span key={item}>{item}, </span>
                ))}
              </div>
              <div className='project__link'></div>
            </div>
          </ProjectView>
        ))}
    </Wrapper>
  );
};

export default ProjectWrapper;
