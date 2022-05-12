import React from 'react';
import SingleProject from '../components/SingleProject';
import {projects} from "../data/projectData";
import { useEffect } from 'react';

const Projects = () => {
  useEffect(() => {
    document.title = "react-projects";
  }, []);

  return <section className='grid grid-cols-1 justify-items-center space-y-10 py-20 md:grid-cols-2 md:place-content-center lg:grid-cols-4'>
    {projects.map((data) => {
      return <SingleProject data={data} key={data.id}/>
    })}
  </section>
}

export default Projects