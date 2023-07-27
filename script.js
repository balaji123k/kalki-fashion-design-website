

const chudidharimg = document.getElementsByClassName('chudidharimg');

for(let i=0;i<chudidharimg.length;i++){
    chudidharimg[i].addEventListener('click',function(e){
        localStorage.setItem("id", e.target.getAttribute("value"));
        window.location.href = "http://127.0.0.1:5500/K%20F%20D%20Website/form.html";
    })
}

// console.log(chudidharimg[0]);