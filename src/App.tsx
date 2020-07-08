import React, {useState} from 'react';
import './App.css';
import Chat from "./Chat/Chat";
import {TaskType, TitleType, TodoList} from "./TodoList/TodoList";
import {Task3, UserType} from "./Task3/Task3";
import {v1} from "uuid";
import {Task4} from "./Task4/Task4";

export type FilterType = 'all' | 'low' | 'middle' | 'high';

function App() {
    let title: TitleType = 'My tasks to do';

    let [tasks, setTasks] = useState<Array<TaskType>>([
        {id: 1, n: "Work", p: "high"},
        {id: 2, n: "Anime", p: "low"},
        {id: 3, n: "Games", p: "middle"},
        {id: 4, n: "React", p: "high"},
        {id: 5, n: "HTML&SCSS", p: "low"}
    ])

    let [filter, setFilter] = useState<FilterType>('all');

    const [user, setUser] = useState<Array<UserType>>([]);

    const deleteTask = (id: number) => {
        setTasks(tasks.filter(t => t.id !== id));
    }
    const filterTasks = (value: FilterType) => {
        setFilter(value);
    }

    let filteredTasks = tasks;
    switch (filter) {
        case "low": {
            filteredTasks = tasks.filter(t => t.p === 'low');
            break;
        }case "middle": {
            filteredTasks = tasks.filter(t => t.p === 'middle');
            break;
        }
        case "high": {
            filteredTasks = tasks.filter(t => t.p === 'high');
            break;
        }
    }

    const addUser = (value: string) => {
        let newUser = {id: v1(), name: value};
        setUser([newUser, ...user]);
    }

  return (
    <div className="App">
      <Chat />
      <TodoList tasks={filteredTasks}
                title={title}
                deleteTask={deleteTask}
                filterTasks={filterTasks}
      />
      <Task3 users={user}
             addUser={addUser}
      />
      <Task4 />
    </div>
  );
}

export default App;
