import React from "react";
import CourseForm from "./components/CourseForm";
import CourseSearch from "./components/CourseSearch";
import CourseList from "./components/CourseList";
import CourseValue from "./components/CourseValue";
import "./App.css";

function App() {
  return (
    <div className="container is-fluid">
      <CourseForm />
      <CourseSearch />
      <CourseList />
      <CourseValue />
    </div>
  );
}

export default App;
