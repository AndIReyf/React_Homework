import React, {useState} from "react";
import './PreJunior.scss';
import {TaskType, TitleType, TodoList} from "../../TodoList/TodoList";
import {Task3, UserType} from "../../Task3/Task3";
import {v1} from "uuid";
import Chat from "../../Chat/Chat";
import {Task4} from "../../Task4/Task4";
import {Menu} from "../../Menu/Menu";

export type FilterType = 'all' | 'low' | 'middle' | 'high';

export function PreJunior() {

    const title: TitleType = 'My tasks to do';
    let [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), n: "Work", p: "high"},
        {id: v1(), n: "Anime", p: "low"},
        {id: v1(), n: "Games", p: "middle"},
        {id: v1(), n: "React", p: "high"},
        {id: v1(), n: "HTML&SCSS", p: "low"}
    ])
    const [filter, setFilter] = useState<FilterType>('all');
    const [user, setUser] = useState<Array<UserType>>([]);
    const deleteTask = (id: string) => setTasks(tasks.filter(t => t.id !== id));
    const filterTasks = (value: FilterType) => setFilter(value);
    let filteredTasks = tasks;
    switch (filter) {
        case "low": {
            filteredTasks = tasks.filter(t => t.p === 'low');
            break;
        }
        case "middle": {
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
        <div className={'preJunior'}>
            <h1>PreJunior Page</h1>
            <Menu/>
            <Chat/>
            <TodoList tasks={filteredTasks}
                      title={title}
                      deleteTask={deleteTask}
                      filterTasks={filterTasks}
            />
            <Task3 users={user}
                   addUser={addUser}
            />
            <Task4/>
        </div>
    )
}