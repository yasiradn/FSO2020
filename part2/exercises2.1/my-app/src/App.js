import React from "react";
import Course from "./components/Course"

const App = ({courses}) => {
    const course = courses.map(getCourse => <Course key={getCourse.id} parts={getCourse} />);
    return (
        <div>
          <h1>Web development curriculum</h1>
          {course}
        </div>
      );
}
export default App