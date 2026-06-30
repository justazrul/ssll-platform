/**
 * =====================================
 * Theme Manager
 * =====================================
 */

const Theme={

    key:"ssll-theme",

    init(){

        const theme=localStorage.getItem(this.key);

        if(theme==="dark"){

            document.documentElement.setAttribute(
                "data-bs-theme",
                "dark"
            );

        }

    },

    toggle(){

        const current=
        document.documentElement.getAttribute("data-bs-theme");

        const next=current==="dark"
            ? "light"
            : "dark";

        document.documentElement.setAttribute(
            "data-bs-theme",
            next
        );

        localStorage.setItem(this.key,next);

        Toast.show(
            `Theme changed to ${next}`,
            "success"
        );

    }

};