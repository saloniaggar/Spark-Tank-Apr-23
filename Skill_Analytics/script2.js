
console.info("Satyam");

async function callAPI(userquery,param){

    console.info(userquery);
    let options={
        method:"post",
        body: JSON.stringify({
            "model": "text-davinci-003",
            "prompt": userquery,
            "max_tokens": 1000,
            "temperature": 0
        }),
        headers: {
            'Authorization': "Bearer "+"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",
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
