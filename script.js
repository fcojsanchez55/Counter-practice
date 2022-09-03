let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");


btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        //currentTarget to now when click it
     const styles = e.currentTarget.classList;
     if (styles.contains("up")) {
       count--;
     }else if (styles.contains("down")) {
        count++;
     }else {
        count = 0;
     }
     //Changin colors!!
     if (count > 0) {
        value.style.color = "green";
     }else if (count < 0){
        value.style.color = "red";
     }if (count === 0){
        value.style.color = "black"
     }
     value.textContent = count;
    });
});