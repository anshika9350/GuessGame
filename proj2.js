const overlay=document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const btnCloseModal=document.querySelector('.close-modal');
const btnOpenModal=document.querySelectorAll('.show-modal');

for(let i=0;i<btnOpenModal.length;i++){
    btnOpenModal[i].addEventListener('click',function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden')
    })
};
const closeModal= function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden')
};
btnCloseModal.addEventListener('click',closeModal);
overlay.addEventListener('click',closeModal);
document.addEventListener('keydown',function(e){
    //console.log(e.key);
        if(e.key==='Escape'){
        
            closeModal()
        }
        
})