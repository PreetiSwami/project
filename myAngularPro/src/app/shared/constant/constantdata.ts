//regular expression

export const RegName:string="[a-zA-Z]{3,30}";
export const RegPassword:string="((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{6,20})";
export const RegEmail:string="(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))";
export const RegContact:string="([0-9]{10,12})";

//Array Object

export const myCourse:string[]=["Angular","Fullstack","MEAN","JAVA"];

//Array of Object

export const students=[
    {id:120,name:"Saurabh",address:"Pune",gender:"male",grade:"A",contact:564343},
    {id:121,name:"Dipak",address:"Mumbai",gender:"male",grade:"A",contact:56434},
    {id:122,name:"Nandini",address:"Rajkot",gender:"female",grade:"A",contact:564343},
    {id:123,name:"Dipali",address:"Delhi",gender:"female",grade:"A",contact:564343},
    {id:124,name:"Sumit",address:"Pune",gender:"male",grade:"A",contact:564343}
  ]

  //Database URL 
  export const DBURL:string="http://localhost:3000"

