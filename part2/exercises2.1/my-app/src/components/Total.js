import React from "react";

/**
 * Total
 */
const Total = ({ course }) => {
  const totalNumberOfExercise = course.reduce((sum, part) => {
    return sum + part.exercises;
  }, 0);
  return (
    <div>
      <p><b>total number of {totalNumberOfExercise} exercise</b></p>
    </div>
  );
};
export default Total;
