let arr = [{id:1,name:"john",age:"18",profession:"developer"},
          {id:2, name:"jack",age:"20", profession:"developer"},
          {id:3, name:"karen", age:"19",profession:"admin"}];
          let arr2= [{id:4,name:"jyoti",age:"24",profession:"developer"},
          {id:5, name:"twinkle",age:"26", profession:"profession"},
          {id:6, name:"shivangi", age:"29",profession:"admin"}];
arr = arr.concat(arr2)
console.log(arr);
let newArr = arr.map(function (item){
item.age=Number(item.age);
return item;

})
console.log(newArr)
let newArry = arr.map(function (item){
   if(item.profession ==="developer")
    console.log(item.name);
    
    })
    
let newArryu = arr.forEach(function (item){
   if(item.profession === "developer" )
    console.log(item.name);
    
    })
    
emp = arr.filter(object =>{
    return object.profession !=="admin";
})
console.log(emp);

