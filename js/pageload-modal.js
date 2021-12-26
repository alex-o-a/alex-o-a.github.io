window.addEventListener("load", function(){
    setTimeout(
        function open(event){
            document.querySelector(".popup").style.display = "block";
        },
        1000
    )
});


document.querySelector("#close").addEventListener("click", function(){
    document.querySelector(".popup-bg").style.display = "none";
});

// document.querySelector("#bt").addEventListener("click", function(){
//     document.querySelector(".popup").style.display = "none";
// });