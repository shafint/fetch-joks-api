//JESON.stringify(object); object ke jeson a rupantorito kore;
//JESON.parse(jesion_name); jeson ke object a rupantorito kore day;


//GET https://icanhazdadjoke.com/

const h1=document.querySelector('#dis');
const btn=document.querySelector('#btn');


 const generateJoks=()=>{

    const setHeader ={
        headers:{
            Accept:"application/json"
        }
    }

    fetch('https://icanhazdadjoke.com',setHeader)
    .then((res)=> res.json())
    .then((data)=>h1.innerHTML=data.joke)
    .catch((err)=>{
        alert(err);
    });

    };

btn.addEventListener('click',generateJoks);
generateJoks()