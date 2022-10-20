import React from 'react';
import { supabase } from '../lib/supabaseClient';

import { Hero } from '../components/Hero';
import { Footer } from '../components/Footer';
import { Project } from '../components/Project';

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


export const getServerSideProps = async () => {
  const { data: projects, error } = await supabase
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

  return (
    <PageWrapper className={theme4}>
      <Hero />
      <MainWrapper>
        {/* <pre>{JSON.stringify(projects, null, 2)}</pre> */}

        <Project props={projects} />
        <AboutWrapper></AboutWrapper>
      </MainWrapper>
      <Footer />
    </PageWrapper>
  );
};
export default Home;