import axios from 'axios';


const url = "https://jsonplaceholder.typicode.com/todos/1";

// Interfaces in typescript are used to define structure of an object
interface Todo{
  id: number;
  title: string;
  completed: boolean;
}


axios.get(url)
  .then(response => {

    // Type Annotation
    const todo = response.data as Todo;
    console.log(todo);

    /*
    This is error , and typescript will notify it  Lets see how:

    const id = todo.Id;
    const title = todo.Title;
    const finished = todo.Completed;
    */
  
    const id = todo.id;
    const title = todo.title;
    const finished = todo.completed;
    logTodo(id,title,finished);
  });

  // type annotation;
  const logTodo = (id:number,title:string,completed:boolean) =>{
    console.log(`
      The todo with id: ${id}
      has a title of: ${title}
      has been: ${completed}
    `);
  }

  /*
  tsc filename.ts
  node filename.js

  npm install @types/node --save-dev
  ts-node filename.ts
  */