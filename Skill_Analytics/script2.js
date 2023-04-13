
console.info("Satyam");


async function callAPI(userquery,param){

    console.info(userquery);
    const key=await sat();
    let options={
        method:"post",
        body: JSON.stringify({
            "model": "text-davinci-003",
            "prompt": userquery,
            "max_tokens": 1000,
            "temperature": 0
        }),
        headers: {
            'Authorization': "Bearer "+key,
            'Content-Type' : 'application/json'
        
        }
    }
    
  let p = await fetch("https://api.openai.com/v1/completions",options);
  let result=await p.json();
  console.info(result.choices[0].text);
  document.getElementById(param).innerHTML = [result].map((res)=>
    `${res.choices[0].text}`
  ).join("");
// result= await p.json();
return result;
}
function showaskquestion(param){
    if(document.getElementById(param).style.display == "block"){
        document.getElementById(param).style.display = "none";
    }else{
        document.getElementById(param).style.display = "block";
    }
   
}
async function sat(){

    console.info("inside");

  let res= await fetch('Skill_Analytics/file.txt');

  let t = await res.text();

  return t;

}
