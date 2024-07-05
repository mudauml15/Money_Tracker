let data = JSON.parse(localStorage.getItem('data')) || [];
    // let data = []
    
    loadTasksFromLocStorage(); // load tasks from local storage 
    readAll(); 
    