import React from 'react';
import SingleProject from '../components/SingleProject';
import {projects} from "../data/projectData";
import { useEffect } from 'react';

const Projects = () => {
  useEffect(() => {
    document.title = "react-projects";
  }, []);

  return <section className='flex flex-col items-center space-y-5 my-10 mx-10'>
    {projects.map((data) => {
      return <SingleProject data={data} key={data.id}/>
    })}
  </section>
}

export default Projects