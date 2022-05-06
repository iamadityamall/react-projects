import React from "react";
import { useEffect } from "react";

const Concepts = () => {
  useEffect(() => {
    document.title = "react-concepts";
  }, []);

  return (
    <section className="h-screen flex justify-center items-center">
      <h1 className="text-8xl">still working on it....</h1>
    </section>
  );
};

export default Concepts;
