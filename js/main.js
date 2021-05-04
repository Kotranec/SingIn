document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.datepicker');
    let instances = M.Datepicker.init(elems, {
        "format" : "yyyy-mm-dd"
    });
  });

document.querySelectorAll(".modal-show").forEach(function(e){
    e.onclick = showModal;
});

document.querySelectorAll(".modal-project-close").forEach(function(e){
    e.onclick = closeModal;
});

document.querySelectorAll(".modal-wrap").forEach(function(e){
    e.onclick = closeModal;    
});

document.querySelector('#login-in .modal-project').onclick = function(e){
    e.stopPropagation();
}
document.querySelector('#sign-up .modal-project').onclick = function(e){
    e.stopPropagation();
}




function showModal() {    
    let modalId = this.dataset.modal;      
    document.querySelector(modalId).classList.remove('hide');  
  
    document.onkeydown = function(e){
        console.log(e);
        if (e.keyCode == 27){
            closeModal();    
        }
    }
};

function closeModal(){    
    document.querySelectorAll(".modal-wrap").forEach(function(e){
        e.classList.add('hide');               
        document.onkeydown = null;
    });
}

document.querySelector(".read-rules").onclick = function(){
    document.querySelector(".form-slider").style.marginLeft = "-360px";
};

document.querySelector(".back-from-rules").onclick = function(){
    document.querySelector(".form-slider").style.marginLeft = "0";
}

