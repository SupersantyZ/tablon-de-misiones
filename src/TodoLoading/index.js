import React from 'react';
import './TodoLoading.css';

export function TodoLoading (){
  return (
    <div className='loading-container'>
      <span className='loading'>
        <ul>
        <div className='todo-fake-box'></div>
        <div className='todo-fake-box'></div>
        <div className='todo-fake-box'></div>
        <div className='todo-fake-box'></div>
        <div className='todo-fake-box'></div>
        <div className='todo-fake-box'></div>
        </ul>
      </span>
    </div>
  );
}