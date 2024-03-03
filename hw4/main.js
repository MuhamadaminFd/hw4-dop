let users = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"}
  ];
  
  let id = users.find(user => user.id === 2);
  
  console.log(id); 
  





  let dop = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"}
  ];
  
  let usr = dop.filter(user => user.id > 1);
  
  console.log(usr); 
  