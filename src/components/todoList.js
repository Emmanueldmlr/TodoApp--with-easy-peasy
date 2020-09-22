import React,{useEffect} from 'react';
import {useStoreState} from 'easy-peasy'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import Todo from "./todo"
import {useStoreActions} from 'easy-peasy'
 
const TodoList = () => {
    const data = useStoreState(state => state)
    const fetchTodos = useStoreActions(Actions => Actions.fetchTodos)
    useEffect(() => {
      fetchTodos();
    },[])
    return (
      <div>
        {
        data.isLoading ? (
          <div className="offset-5" style={{ marginTop: "50px" }}>
            <FontAwesomeIcon icon={faSpinner} pulse size="3x" />
            <p style={{ color: "red" }}>Loading...</p>
          </div>
        ) : 
        data.error !== '' ? 
           <div className="offset-5" style={{ marginTop: "50px" }}>
            <p style={{ color: "red" }}>Data Could Not be Fetched</p>
          </div>
          :
          data.todos.length < 1 ? 
             <div className="offset-5" style={{ marginTop: "50px" }}>
                 <p style={{ color: "red" }}>No Pending Todo</p>
             </div>
          :

        <ul id="myUL">   
            {data.todos.map((todo) => <Todo todo={todo} />)}    
        </ul>
        }
      </div>
    );
}
 
 
export default TodoList;