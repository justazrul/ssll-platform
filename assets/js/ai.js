/**
 * ======================================
 * SSLL AI Tutor v2.0
 * ======================================
 */

const AITutor = {

    chatArea: null,
    input: null,
    button: null,

    init() {

        this.chatArea = document.getElementById("chatArea");
        this.input = document.getElementById("userInput");
        this.button = document.getElementById("sendBtn");

        if (!this.chatArea || !this.input || !this.button) return;

        this.button.addEventListener("click", () => this.sendMessage());

        this.input.addEventListener("keypress", (e) => {

            if (e.key === "Enter") {

                this.sendMessage();

            }

        });

    },

    sendMessage() {

        const question = this.input.value.trim();

        if (question === "") return;

        this.addUserMessage(question);

        this.input.value = "";

        this.showTyping();

        setTimeout(() => {

            this.hideTyping();

            const answer = this.searchKnowledge(question);

            this.addBotMessage(answer);

        },700);

    },

    addUserMessage(text){

        const html =

        `
        <div class="user-message">

            <div class="bubble user">

                ${text}

            </div>

        </div>
        `;

        this.chatArea.insertAdjacentHTML("beforeend",html);

        this.scrollBottom();

    },

    addBotMessage(text){

        const html=

        `
        <div class="bot-message">

            <div class="avatar">

                🤖

            </div>

            <div class="bubble bot">

                ${text}

            </div>

        </div>
        `;

        this.chatArea.insertAdjacentHTML("beforeend",html);

        this.scrollBottom();

    },

    showTyping(){

        this.typing=document.createElement("div");

        this.typing.id="typing";

        this.typing.className="bot-message";

        this.typing.innerHTML=

        `
        <div class="avatar">

            🤖

        </div>

        <div class="bubble bot">

            AI is typing...

        </div>
        `;

        this.chatArea.appendChild(this.typing);

        this.scrollBottom();

    },

    hideTyping(){

        if(this.typing){

            this.typing.remove();

        }

    },

    searchKnowledge(question){

        const q=question.toLowerCase();

        if(q.includes("led")){

            return "LED (Light Emitting Diode) is an energy-efficient lighting technology that consumes less electricity and lasts much longer than traditional incandescent bulbs.";

        }

        if(q.includes("heat")){

            return "Heat transfer occurs through conduction, convection and radiation.";

        }

        if(q.includes("climate")){

            return "Climate change refers to long-term changes in global temperatures mainly caused by greenhouse gas emissions.";

        }

        if(q.includes("energy")){

            return "Energy efficiency means using less energy to perform the same task while reducing electricity consumption.";

        }

        if(q.includes("smart lighting")){

            return "Smart Lighting automatically controls lighting using sensors, timers and intelligent algorithms to save energy.";

        }

        return "Sorry, I don't have an answer yet. This topic will be added in the next knowledge update.";

    },

    scrollBottom(){

        this.chatArea.scrollTop=this.chatArea.scrollHeight;

    }

};

document.addEventListener("DOMContentLoaded",()=>{

    AITutor.init();

});