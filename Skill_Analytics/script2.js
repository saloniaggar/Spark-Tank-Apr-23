
console.info("Satyam");


async function callAPI(userquery,param){

    console.info(userquery);
    const d = "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";
    const f = d;
    let options={
        method:"post",
        body: JSON.stringify({
            "model": "text-davinci-003",
            "prompt": userquery,
            "max_tokens": 1000,
            "temperature": 0
        }),
        headers: {
            'Authorization': "Bearer "+f,
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
