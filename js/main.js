let popped = 0;

document.addEventListener('mouseover', function(e){
    
    if (e.target.className === "green"){
        
                e.target.style.visibility = "hidden";
                e.target.textContent = "!";
                popped++;
             checkAllPopped();
    }   
    if (e.target.className === "balloon"){
              alert("GameOver")}
//    location.replace("welcome.html");
}   
);

function removeEvent(e){
    e.target.removeEventListener('mouseover', function(){
        
    })
};

function checkAllPopped(){
    if (popped === 3){
        let gallery = document.querySelector('#balloon-gallery');
        let message = document.getElementById('wellplayed');
        gallery.innerHTML = 'Click On Level2'
        message.style.display = 'block';
    }
};