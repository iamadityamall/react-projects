import React from 'react';
import { useEffect } from 'react';

const Concepts = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#79DAE8";
    document.title = "react-concepts";
  }, []);

  return <section className="h-screen ">concepts</section>;
}

export default Concepts