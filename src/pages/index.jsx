import React from 'react';
import { supabase } from '../lib/supabaseClient';
import { Hero } from '../components/Hero';
import { Footer } from '../components/Footer';
import { Card } from '../components/Card';
import { styled } from '../../stitches.config';
import { theme1, theme2, theme3, theme4, theme5 } from '../../stitches.config';


// Styling - Comment styliser la scrollbar ?
const PageWrapper = styled('div', {
  overflowX: 'hidden',
  backgroundColor: '$background'
});

const ProjectsWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  width: '100%'
})

const ProjectsList = styled('ul', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gridGap: '2px',
  // ' li':{
  //   minHeight: 'calc(var(--vh, 1vh)*100)',
  //   margin: 0,
  // }
});
const AboutWrapper = styled('div', {});


export const getServerSideProps = async () => {
  const { data: projects } = await supabase
    .from('projects')
    .select('*')
    .order('id');

  return {
    props: {
      projects,
    },
  };
};

const Home = ({ projects }) => {
  // console.log(`props : `, projects)

  return (
    <PageWrapper className={theme5}>
      <Hero />
      {/* <pre>{JSON.stringify(projects, null, 2)}</pre> */}

      <ProjectsWrapper className="1">
        <ProjectsList className="2">
          {projects.map(project =>
            <li key={project.id}>
              <Card props={project} />
            </li>)}
        </ProjectsList>
      </ProjectsWrapper>
      {/* <AboutWrapper></AboutWrapper> */}
      <Footer />
    </PageWrapper>
  );
};
export default Home;