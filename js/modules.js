const answers=document.querySelectorAll(".quiz-answer");

const result=document.getElementById("quizResult");

answers.forEach(button=>{

button.addEventListener("click",()=>{

answers.forEach(b=>{

b.classList.remove("btn-success","btn-danger");

});

if(button.dataset.correct){

button.classList.add("btn-success");

result.innerHTML="✅ Betul! Jawapan ialah Watt.";

result.className="mt-4 fw-bold text-success";

}else{

button.classList.add("btn-danger");

result.innerHTML="❌ Cuba lagi.";

result.className="mt-4 fw-bold text-danger";

}

});

});