import { useState } from 'react';
import { Button } from 'react-bootstrap';
import useActions from '../hooks/useActions'
const Task = ({idTask,activeTask}) => {
    const{deleteHandler,changeStatusHandler}=useActions();
    let btnState =[];
    activeTask ? btnState=['outline-success','Set completed']: btnState=['outline-secondary','set as incompleted']
  return (
    <><Button className='mx-2' variant={btnState[0]} onClick={()=>changeStatusHandler(idTask)}>{btnState[1]}</Button>
    <Button className='mx-2' variant="outline-danger" onClick={()=>deleteHandler(idTask)}>Delete</Button></>
  )
}

export default Task