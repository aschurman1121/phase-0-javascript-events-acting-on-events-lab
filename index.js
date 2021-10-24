// Your code here
document.addEventListener("keydown", function (e){
    console.log(e);
})
document.addEventListener("keydown", function (event){
    if(event.key === "ArrowLeft"){
        const leftNumbers = dodger.style.left.replace("px", "");
        const left = parseInt(leftNumbers, 10);

        dodger.style.left = `${left - 1}px`;
    }
});
const dodger = document.getElementById("dodger");
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });


  //dodger right

  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowRight") {
      const rightNumbers = dodger.style.right.replace("px", "");
      const right = parseInt(rightNumbers, 10);
  
      dodger.style.right = `${right - 1}px`;
    }
  });

  function moveDodgerRight() {
    const rightNumbers = dodger.style.right.replace("px", "");
    const right = parseInt(rightNumbers, 10);
  
    if (right > 0) {
      dodger.style.right = `${right - 1}px`;
    }
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });
