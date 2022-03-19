const jsObj = [
{
    "name" : "kaungsanm" , 
    "gender": "male" ,
    "age" : 22,
    "hobby" : "basketball"
},
{
    "name" : "Dasataran" , 
    "gender": "female" ,
    "age" : 24,
    "hobby" : "model"
}
]

const jschangeString = JSON.stringify(jsObj);
localStorage.setItem("change" ,jschangeString );

const changeobj = localStorage.getItem("change");
console.log("changeobj" , changeobj);


const  JsonChangeparse = JSON.parse(changeobj);
console.log("jsonCHangeobj", JsonChangeparse);
console.log(JsonChangeparse[1])
