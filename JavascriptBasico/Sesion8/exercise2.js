const deleteLast = (list) => {
  if (!list || typeof(list) != 'object'){
    console.log("Bad parameters, insert an array");
  }
  list.pop();
  return list;
};

let list = [1, 5, 10, 4, 3]; 
console.log(deleteLast(list));