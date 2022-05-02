import React from 'react';
import SingleProject from '../components/SingleProject';
import {projects} from "../data/projectData";
import { useEffect } from 'react';

const Projects = () => {
  useEffect(() => {
    document.title = "react-projects";
  }, []);
  
  return <section>
    {projects.map((data) => {
      return <SingleProject data={data} key={data.id}/>
    })}
  </section>
}

export default Projects