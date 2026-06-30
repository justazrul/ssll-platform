/**
 * =====================================
 * Loading Overlay
 * =====================================
 */

const Loading = {

    overlay: null,

    init() {

        if (document.getElementById("ssll-loader")) return;

        this.overlay = document.createElement("div");

        this.overlay.id = "ssll-loader";

        this.overlay.innerHTML = `
            <div class="spinner-border text-primary"></div>
            <p class="mt-3 mb-0 fw-semibold">Loading...</p>
        `;

        document.body.appendChild(this.overlay);

    },

    show() {

        if (!this.overlay) this.init();

        this.overlay.classList.add("show");

    },

    hide() {

        if (!this.overlay) return;

        this.overlay.classList.remove("show");

    }

};