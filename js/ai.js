// =======================================
// SSLL AI Tutor v1.1
// =======================================

const chatArea = document.getElementById("chatArea");
const input = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

const clearBtn = document.getElementById("clearChat");
const copyBtn = document.getElementById("copyLast");
const saveBtn = document.getElementById("saveChat");

const quickButtons = document.querySelectorAll(".quick-btn");
const faqButtons = document.querySelectorAll(".faq-btn");

const questionCounter=document.getElementById("questionCounter");
const analyticsCounter=document.getElementById("analyticsQuestions");

let totalQuestion=0;

let lastBotReply="";
function scrollBottom(){

chatArea.scrollTop=chatArea.scrollHeight;

}

function addUserMessage(text){

chatArea.innerHTML+=`

<div class="user-message">

<div class="bubble user">

${text}

</div>

<div class="avatar">

👨

</div>

</div>

`;

scrollBottom();

}

function addBotMessage(text){

lastBotReply=text;

chatArea.innerHTML+=`

<div class="bot-message">

<div class="avatar">

🤖

</div>

<div class="bubble bot">

${text}

</div>

</div>

`;

scrollBottom();

}
function showTyping(){

chatArea.innerHTML+=`

<div id="typingBox" class="bot-message">

<div class="avatar">

🤖

</div>

<div class="bubble bot">

<span class="typing-dot">●</span>

<span class="typing-dot">●</span>

<span class="typing-dot">●</span>

</div>

</div>

`;

scrollBottom();

}

function hideTyping(){

const typing=document.getElementById("typingBox");

if(typing){

typing.remove();

}

}
function getAnswer(question){

question=question.toLowerCase();

for(const item of knowledgeBase){

for(const keyword of item.keywords){

if(question.includes(keyword)){

return `

📂 Kategori

${item.category || "General"}

━━━━━━━━━━━━━━━━━━

📚 ${item.title}

${item.answer}

━━━━━━━━━━━━━━━━━━

🎯 Cadangan

• Modules

• Smart Lighting Lab

• Energy Calculator

• System Thinking

`;

}

}

}

return`

🤖

Maaf.

Saya belum mempunyai maklumat tersebut.

Cuba gunakan kata kunci seperti

• LED

• Smart Lighting

• AI

• Electricity

• Sustainability

`;

}
function sendMessage(){

const question=input.value.trim();

if(question==="") return;

addUserMessage(question);

input.value="";

totalQuestion++;

if(questionCounter){

questionCounter.textContent=totalQuestion;

}

if(analyticsCounter){

analyticsCounter.textContent=totalQuestion;

}

showTyping();

setTimeout(()=>{

hideTyping();

const answer=getAnswer(question);

addBotMessage(answer);

saveHistory();

},700);

}