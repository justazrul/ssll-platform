document.addEventListener("DOMContentLoaded", () => {

    let selected = "";

    const a = document.getElementById("answerA");
    const b = document.getElementById("answerB");
    const c = document.getElementById("answerC");

    const submit = document.getElementById("submitQuiz");
    const result = document.getElementById("quizResult");

    function clearSelection() {

        a.classList.remove("active");
        b.classList.remove("active");
        c.classList.remove("active");

    }

    a.onclick = () => {

        clearSelection();
        selected = "A";
        a.classList.add("active");

    };

    b.onclick = () => {

        clearSelection();
        selected = "B";
        b.classList.add("active");

    };

    c.onclick = () => {

        clearSelection();
        selected = "C";
        c.classList.add("active");

    };

    submit.onclick = () => {

        if (selected === "") {

            result.innerHTML = "⚠️ Sila pilih satu jawapan.";
            result.className = "mt-3 text-warning fw-bold";
            return;

        }

        if (selected === "B") {

            result.innerHTML = "✅ Betul! Unit SI bagi kuasa ialah Watt.";
            result.className = "mt-3 text-success fw-bold";

        }
        else {

            result.innerHTML = "❌ Salah. Jawapan yang betul ialah Watt.";
            result.className = "mt-3 text-danger fw-bold";

        }

    };

});