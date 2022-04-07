import React, { useState } from 'react';

const ToDoForm = ({ addTask }) => {

    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }
    return (
        <form onSubmit={handleSubmit} className="mb-6">
            
           <div className='flex -ml-[135px] '>
            <input  className="w-80 mx-auto relative bg-gray-200 NPM START" value={userInput} type="text" onChange={handleChange} placeholder="Create a new Todo"/>
                <button className='text-white absolute right-[525px]'>Submit</button>
           </div> 
        </form>
    );
};

export default ToDoForm;