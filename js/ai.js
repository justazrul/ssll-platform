// ===========================================
// SSLL AI Tutor Engine v1.0
// ===========================================

const chatArea = document.getElementById("chatArea");
const input = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

const quickButtons = document.querySelectorAll(".quick-btn");
const faqButtons = document.querySelectorAll(".faq-btn");

const clearChat = document.getElementById("clearChat");
const copyLast = document.getElementById("copyLast");
const saveChat = document.getElementById("saveChat");

const questionCounter = document.getElementById("questionCounter");
const analyticsQuestions = document.getElementById("analyticsQuestions");

let totalQuestion = 0;

let lastBotReply = "";

function getAnswer(question){

question=question.toLowerCase();

for(const item of knowledgeBase){

for(const keyword of item.keywords){

if(question.includes(keyword)){
return `
📂 Kategori : ${item.category}

━━━━━━━━━━━━━━━━━━━━

📚 ${item.title}

${item.answer}

━━━━━━━━━━━━━━━━━━━━

🎯 Cadangan Pembelajaran

• Learning Modules

• Smart Lighting Lab

• Energy Calculator

• System Thinking
`;

}

}

}

return `

Maaf.

Saya belum mempunyai jawapan tersebut.

Cuba gunakan kata kunci seperti

• Smart Lighting

• LED

• AI

• Electricity

• Sustainability

• System Thinking

`;

};
// ===========================================
// USER MESSAGE
// ===========================================

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

function scrollBottom(){

chatArea.scrollTop=chatArea.scrollHeight;

}

// ===========================================
// TYPING ANIMATION
// ===========================================

function showTyping(){

    chatArea.innerHTML += `

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

function removeTyping(){

    const typing=document.getElementById("typingBox");

    if(typing){

        typing.remove();

    }

}
// ===========================================
// SEND MESSAGE
// ===========================================

function sendMessage(){

    const question=input.value.trim();

    if(question==="") return;

    addUserMessage(question);

    input.value="";

    totalQuestion++;

    questionCounter.textContent=totalQuestion;

    analyticsQuestions.textContent=totalQuestion;

    showTyping();

    setTimeout(()=>{

        removeTyping();

        const answer = getAnswer(question);

        removeTyping();

        addBotMessage(answer);

        saveHistory();

    },900);

}
// ===========================================
// EVENTS
// ===========================================

sendBtn.addEventListener("click",sendMessage);

input.addEventListener("keypress",function(e){

    if(e.key==="Enter"){

        sendMessage();

    }

});

quickButtons.forEach(btn=>{

    btn.addEventListener("click",()=>{

        input.value=btn.textContent;

        sendMessage();

    });

});

faqButtons.forEach(btn=>{

    btn.addEventListener("click",()=>{

        input.value=btn.textContent;

        sendMessage();

    });

});
// ===========================================
// LOCAL STORAGE
// ===========================================

function saveHistory(){

    localStorage.setItem(

        "ssll_ai_chat",

        chatArea.innerHTML

    );

}

function loadHistory(){

    const history=

    localStorage.getItem("ssll_ai_chat");

    if(history){

        chatArea.innerHTML=history;

        scrollBottom();

    }

}
// ===========================================
// CLEAR CHAT
// ===========================================

clearChat.addEventListener("click",()=>{

    if(confirm("Padam semua perbualan?")){

        localStorage.removeItem("ssll_ai_chat");

        location.reload();

    }

});
// ===========================================
// COPY LAST ANSWER
// ===========================================

copyLast.addEventListener("click",()=>{

    if(lastBotReply===""){

        alert("Tiada jawapan untuk disalin.");

        return;

    }

    navigator.clipboard.writeText(lastBotReply);

    alert("Jawapan berjaya disalin.");

});
// ===========================================
// SAVE BUTTON
// ===========================================

saveChat.addEventListener("click",()=>{

    saveHistory();

    alert("Perbualan disimpan.");

});
// ===========================================
// INITIALIZE
// ===========================================

loadHistory();

scrollBottom();