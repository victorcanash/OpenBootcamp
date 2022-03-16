const deleteLast = (list) => {
  if (!list || typeof(list) != 'object'){
    console.log("Bad parameters, insert an array");
  } else if (list.length <= 0){
    console.log("Bad parameters, the array must contain at least one element");
  } else {
  	list.pop();
  }
  return list;
};

let list = [1, 5, 10, 4, 3]; 
console.log(deleteLast(list));