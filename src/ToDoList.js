import React from 'react';
import ToDo from './ToDo';
import "./index.css"

const ToDoList = ({toDoList, handleToggle, handleFilter}) => {
    return (
        <div className='w-1/3 mx-auto'>
          
            <div>
                {toDoList.map(todo => {
                return (
                <div className="text-white bg-slate-800 container border-solid p-3 border-b-2 border-slate-600 ">
                    <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}/>
                </div>
                )
            })}
            </div>

            <div>
            <button className="float-right text-white text-xs" onClick={handleFilter}>Clear Completed</button>
            </div>
        </div>
    );
};

export default ToDoList;