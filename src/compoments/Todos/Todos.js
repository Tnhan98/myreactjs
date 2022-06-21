import React from "react";
import { useState } from "react";
import TodoItem from "../TodoItem/TodoItem";

export default function Todos() {
  const [jobs, setJobs] = useState([
    {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    },
    {
      userId: 1,
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: false,
    },
    {
      userId: 1,
      id: 3,
      title: "fugiat veniam minus",
      completed: false,
    },
    {
      userId: 1,
      id: 4,
      title: "et porro tempora",
      completed: true,
    },
    {
      userId: 1,
      id: 5,
      title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
      completed: false,
    },
  ]);
  const handleChecked = (id) => {
    const newJobs = jobs.map((job) => {
      if (job.id === id) {
        job.completed = !job.completed;
      }
      return job
    });
    setJobs(newJobs);
  };
  const handleDelete = (id) => {
    const newJobs = jobs.filter(job => {
        return job.id !== id
    })
    setJobs(newJobs);
  };
  return (
    <div>
      {jobs.map((job) => (
        <TodoItem
          key={job.id}
          TodoProps={job}
          checkedFunc={handleChecked}
          deleteFunc={handleDelete}
        />
      ))}
    </div>
  );
}
