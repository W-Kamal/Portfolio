import { styled } from '../../stitches.config';
import { supabase } from '../lib/supabase';
import { useState } from 'react';
import { URL } from 'url';
import { GetStaticProps, GetServerSideProps } from 'next';

// How to specify that i want to get an array of string options ?
interface Project {
  id: number;
  created_at: Date;
  title: string;
  description: string;
  type: 'Openclassrooms' | 'Training' | 'Client Project' | 'Tuto';
  status: 'Completed' | 'Wip' | 'Standby' | 'Abandonned' | 'Rework Needed';
  goal: string; // mettre les informations du goal dans la description
  stack: string[];
  is_published: boolean; // à replace par l'information donnée par le status
  click_score: number; // *
  thumbnail_path: URL;
}
interface ExternalLink {
  repository_path: URL;
  demo_path: URL;
};

export const SliderWrapper = styled('section', {});
export const ProjectWrapper = styled('article', {});


// le nombre de click sur les liens (git ou démo ou articles qd il y aura)

// SSR : au moment de build
export const getServerSideProps: GetServerSideProps = async () => {
  const { data: projects} = await supabase
    .from<Project>('projects')
    .select('*');
  
  return {
    props: {
      projects: [],
    },
  };
};
// composant de pagination (dépendant de la réponse au fetch)
// comptabiliser le nombre de click
const Pagination = () => {
  const [pageNumber, setPageNumber] = useState<number>();
  const [projectScore, setProjectScore] = useState<number>();
  return (
    <div>
      <span>-1</span>
      {/* Afficher l'indicateur de position de la slide */}
      {/* <div></div> */}
      <span>+1</span>
    </div>
  );
};


// const Slider = ({...props}:Project, {stack}:ExternalLink) => {
const Slider = () => {
  // maper les projets + rendu conditionnel des informations et des links (e.g. démo)
  return (
    // intégrer dans les ::before/::after des icones ou marqueurs
    <SliderWrapper>
      {/* <pre>{JSON.stringify(projects, null, 2)}</pre> */}
      {/* Mettre la thumbnail en background du wrapper ? */}

      <ProjectWrapper className='project__wrapper'>
        <div className='project__summary'>
          <div className='project__info'>
            <h3 className='title'></h3>
            <h4 className='name'></h4>
            <span className='date_creation'></span>
            <p className='description'></p>
            <span className='type'></span>
            <div className='links_container'>
              <span className='status'></span>
            </div>
          </div>
          {/* map des stack */}
          <div className='project__stack'></div>
          {/* map des stack */}
          <div className='project__link'></div>
        </div>
      </ProjectWrapper>
      {/* <Pagination></Pagination> */}
    </SliderWrapper>
  );
};

export default Slider;
