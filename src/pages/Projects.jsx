import React from 'react';
import SingleProject from '../components/SingleProject';
import {projects} from "../data/projectData";
import { useEffect } from 'react';

const Projects = () => {
  useEffect(() => {
    document.title = "react-projects";
  }, []);

  return <section className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 items-center py-20 px-10'>
    {projects.map((data) => {
      return <SingleProject data={data} key={data.id}/>
    })}
  </section>
}

export default Projects