/**
 * Toast Notification
 */

const Toast = {

    show(message, type = "primary") {

        const toast = document.createElement("div");

        toast.className =
            `toast align-items-center text-bg-${type} border-0 position-fixed`;

        toast.style.bottom = "20px";
        toast.style.right = "20px";
        toast.style.zIndex = "9999";

        toast.innerHTML = `

        <div class="d-flex">

            <div class="toast-body">

                ${message}

            </div>

            <button
                class="btn-close btn-close-white me-2 m-auto"
                data-bs-dismiss="toast">
            </button>

        </div>

        `;

        document.body.appendChild(toast);

        const bsToast = new bootstrap.Toast(toast);

        bsToast.show();

        toast.addEventListener("hidden.bs.toast", () => {

            toast.remove();

        });

    }

};