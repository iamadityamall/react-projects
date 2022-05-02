import React from 'react';
import SingleProject from '../components/SingleProject';
import {projects} from "../data/projectData"

const Projects = () => {
  return <section>
    {projects.map((data) => {
      return <SingleProject data={data} key={data.id}/>
    })}
  </section>
}

export default Projects