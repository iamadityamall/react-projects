import React from 'react';
import SingleProject from '../components/SingleProject';
import {projects} from "../data/projectData";
import { useEffect } from 'react';

const Projects = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#E8F9FD";
    document.title = "react-projects";
  }, []);

  return <section>
    {projects.map((data) => {
      return <SingleProject data={data} key={data.id}/>
    })}
  </section>
}

export default Projects