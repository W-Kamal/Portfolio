import { supabase } from '../lib/supabaseClient';
import { GetServerSideProps } from 'next';
import { Project } from 'src/Types/index';

import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import ProjectWrapper from '@/components/ProjectWrapper';

import { styled } from '../../stitches.config';
import { theme1, theme2, theme3, theme4, theme5 } from '../../stitches.config';


// Styling - Comment styliser la scrollbar ?
const PageWrapper = styled('div', {
  height: '100vh',
  overflowX: 'hidden',
  // overflowY:"scroll",
  // color:'$primary',
  backgroundColor: '$background',
  paddingX: 2,
});

const MainWrapper = styled('div', {
  height: 'max-content',
});
const AboutWrapper = styled('div', {});



export const getServerSideProps: GetServerSideProps = async () => {
  const { data: projects, error } = await supabase
    .from<Project>('projects')
    .select('*')
    .order('id');

  return {
    props: {
      projects,
    },
  };
};

const Home = ({ projects }: { projects: Project[] }) => {
  return (
    <PageWrapper className={theme4}>
      <Hero />
      <MainWrapper>
        {/* <pre>{JSON.stringify(projects, null, 2)}</pre> */}
        <ProjectWrapper projects={projects} />
        <AboutWrapper></AboutWrapper>
      </MainWrapper>
      <Footer />
    </PageWrapper>
  );
};
export default Home;