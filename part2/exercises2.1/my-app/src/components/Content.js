import React from "react";

const Content = ({ parts }) => {
  const course_parts = parts.map(part => <Part key={part.id} parts={part} />);
  return <div>{course_parts}</div>;
};
const Part = ({ parts }) => {
  return (
    <div>
      <p>
        {parts.name} {parts.exercises}
      </p>
    </div>
  );
};
export default Content;
