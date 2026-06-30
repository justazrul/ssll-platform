/**
 * =====================================
 * Modal Manager
 * =====================================
 */

const ModalManager = {

    open(id){

        const modal=document.getElementById(id);

        if(!modal) return;

        bootstrap.Modal.getOrCreateInstance(modal).show();

    },

    close(id){

        const modal=document.getElementById(id);

        if(!modal) return;

        bootstrap.Modal.getOrCreateInstance(modal).hide();

    }

};