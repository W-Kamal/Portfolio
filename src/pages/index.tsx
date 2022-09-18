import { supabase } from '../lib/supabaseClient';
import { GetStaticProps, GetServerSideProps, NextPage } from 'next';
import { Project } from '@/lib/Types';

import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import ProjectWrapper from '@/components/ProjectWrapper';

import { theme1, theme2, theme3, theme4, theme5 } from '../../stitches.config';
import {
  PageWrapper,
  MainWrapper,
  AboutWrapper,
} from '@/styles/indexStyle.css';

export const getStaticProps: GetStaticProps = async () => {
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
  console.log(`projects : `, projects);
  // console.log(`type projects : `, typeof projects);
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
