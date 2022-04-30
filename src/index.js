import {call } from "../components/navbar"

import "../style/navbar.css"
document.getElementById("call").innerHTML=call()

  const display=async (e)=>{
      try{
          if(e.key=="Enter"){
  let query=document.getElementById("query").value;
 const url= `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${query}%202&key=AIzaSyDOV9bXN2oSkEENhRiLUoHaQPrgz86V6GY`;
let  res=await fetch(url);
let data=await res.json();
displaydata(data.items)
 }}catch(err){
    console.log("err",err)
 }
 
  }
document.getElementById("query").addEventListener("keydown",display)
const displaydata=(data)=>{
    let show=document.getElementById("show");
    show.innerHTML=null;
    data.forEach(({id:{videoId},snippet:{title}}) => {
        let div=document.createElement("div")

        let iframe=document.createElement("iframe");
        iframe.src=`https://www.youtube.com/embed/${videoId}`;
        iframe.style.width="100%";
        iframe.style. height="100%";
        iframe.allow="fullscreen";

        let h=document.createElement("h5");
        h.innerText=title;

        div.append(iframe,h);
        let data={
            title,
            videoId,
        };
        div.onclick= () =>{
            displaydata1(data);
        }
        show.append(div);

    });
}
const displaydata1 = (x) =>{
    
    localStorage.setItem("data",JSON.stringify(x))
    //window.location.href="v.html";
}
