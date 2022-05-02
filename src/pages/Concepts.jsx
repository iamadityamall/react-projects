import React from 'react';
import { useEffect } from 'react';

const Concepts = () => {
  useEffect(() => {
    document.title = "react-concepts";
  }, []);

  return <section className="h-screen ">concepts</section>;
}

export default Concepts