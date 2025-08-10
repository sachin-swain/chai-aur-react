import React from "react";
import { createContext ,useContext } from "react";


// createContext() takes a single object as an argument.

 export const TodoContext = createContext(
   {todos: [
        {
            id :1,
            todo :"todoMesg",
            completed :false,
        }
    ],
     addTodo :(todo)=>{},
     updateTodo : (id,todo) =>{},
     deleteTodo: (id)=>{},
     toggleComplete: (id)=>{},
    }
 );

 export const TodoProvider = TodoContext.Provider

 export const useTodo =() =>{
    return useContext(TodoContext)

 }

