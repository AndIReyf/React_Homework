import React from "react";
import style from './TodoList.module.scss';
import {FilterType} from "../App";

export type TaskType = {
    id: number
    n: string
    p: string
}
export type TitleType = string

type PropsType = {
    tasks: Array<TaskType>
    title: TitleType
    deleteTask: (id: number) => void
    filterTasks: (value: FilterType) => void
}

export function TodoList(props: PropsType) {
    return (
        <div className={style.todoListBox}>
            <div className={style.wrap}>
            <h1 className={style.title}>{props.title}</h1>
            <ul>
                {
                    props.tasks.map(t => <li key={t.id} className={style.tasksList}>
                        <button className={style.deleteBtn} onClick={() => {props.deleteTask(t.id)}}><span></span></button>
                        <span className={style.task}>{t.n}</span>
                        <span className={style.priority}>{t.p}</span>
                    </li>)
                }
            </ul>
            <div className={style.buttonBox}>
                <button className={style.btn} onClick={() => {props.filterTasks('all')}}>All</button>
                <button className={style.btn} onClick={() => {props.filterTasks('low')}}>Low</button>
                <button className={style.btn} onClick={() => {props.filterTasks('middle')}}>Middle</button>
                <button className={style.btn} onClick={() => {props.filterTasks('high')}}>High</button>
            </div>
            </div>
        </div>
    )
}