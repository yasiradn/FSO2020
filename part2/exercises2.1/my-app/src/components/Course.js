import React from "react";

import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const Course = ({ parts }) => {
  return (
    <div>
      <Header course={parts.name} />
      <Content parts={parts.parts} />
      <Total course={parts.parts} />
    </div>
  );
};

export default Course;
