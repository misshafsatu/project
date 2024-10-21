const todos = [
    { id: 1, task: "Buy groceries", completed: false },
    { id: 2, task: "Walk the dog", completed: true },
    { id: 3, task: "Do laundry", completed: false },
    { id: 4, task: "Prepare dinner", completed: false },
    { id: 5, task: "Read a book", completed: true },
    { id: 6, task:  "Do my assignment", completed: false },
    { id: 7, task: "Attend the mosque", completed: true },
    { id: 8, task: "Read the holy Qur'an", completed: true },
    { id: 9, task: "clean the living room alongiside the bedroom", completed: false },
    { id: 10, task: "code and practice what being taught", completed: true },

      
  ];
  
  console.log(todos);

  
  

  for (let i = 0; i < todos.length; i++) {


    console.log("Task: " + todos[i].task + ", Completed: " + (todos[i].completed ? "completed" : "not"));
  }
  
  