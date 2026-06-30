/**
 * =====================================
 * SSLL Utilities
 * =====================================
 */

const Utils = {

    qs(selector, scope = document) {
        return scope.querySelector(selector);
    },

    qsa(selector, scope = document) {
        return [...scope.querySelectorAll(selector)];
    },

    create(tag, className = "") {
        const el = document.createElement(tag);

        if (className) {
            el.className = className;
        }

        return el;
    },

    show(element) {
        if (element) element.classList.remove("d-none");
    },

    hide(element) {
        if (element) element.classList.add("d-none");
    },

    toggle(element) {
        if (element) element.classList.toggle("d-none");
    },

    formatNumber(number) {
        return Number(number).toLocaleString();
    },

    randomID(length = 8) {

        const chars =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        let id = "";

        for (let i = 0; i < length; i++) {

            id += chars.charAt(
                Math.floor(Math.random() * chars.length)
            );

        }

        return id;

    },

    debounce(callback, delay = 300) {

        let timeout;

        return (...args) => {

            clearTimeout(timeout);

            timeout = setTimeout(() => {

                callback(...args);

            }, delay);

        };

    }

};