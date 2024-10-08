/* --- EVENTS --- */

// Checks onscroll for left side
document.getElementById("leftSide").onscroll = function(){
    console.log("Scroll event detected on left side"); // For debugging
    leftArrowCheck();
};

document.getElementById("rightSide").onscroll = function(){
    console.log("Scroll event dected on right side"); // For debugging
    rightArrowCheck();
};

// Checks onload for entire page
window.onload = function(){
    console.log("Page load detected");
    leftArrowCheck();
    rightArrowCheck();
};

// Checks onresize for entire page
window.onresize = function(){
    console.log("Page resize detected");
    leftArrowCheck();
    rightArrowCheck();
};



/* --- FUNCTIONS --- */

// Function to check the whether the left arrows should be displayed
function leftArrowCheck(){
    console.log("Running leftArrowCheck() function"); // For debugging
    
    // Creates leftSide object 
    const leftSide = document.getElementById("leftSide");
    
    // Creates left arrow objects
    const leftBottomArrow = document.getElementById("leftBottomArrow");
    const leftTopArrow = document.getElementById("leftTopArrow");
    
    
    // Defines variables to calculate scrolling
    var maxScrollPosition = leftSide.scrollHeight - leftSide.clientHeight;
    var currentScrollPosition = leftSide.scrollTop;
    
    //console.log(maxScrollPosition); // DEBUG - The total length that you can scroll down
    //console.log(currentScrollPosition); // DEBUG - The current length that you have scrolled down
    
    
    // Checks if you aren't at the bottom yet
    if(currentScrollPosition + 1 < maxScrollPosition){
        leftBottomArrow.style.display = "block";
    } else {
        leftBottomArrow.style.display = "none";
    }
    
    // Checks if you aren't at the top yet
    if(currentScrollPosition > 0){
        leftTopArrow.style.display = "block";
    } else {
        leftTopArrow.style.display = "none";
    }
        
    /* 
    // LEGACY DEBUGGING
    console.log(leftSide.scrollHeight);
    console.log(leftSide.clientHeight);
    console.log(leftSide.scrollHeight-leftSide.clientHeight);
    */ 
}

function rightArrowCheck(){
    console.log("Running rightArrowCheck() function"); // For debugging
    
    // Creates rightSide object
    const rightSide = document.getElementById("rightSide");
    
    // Creates right arrow objects
    const rightBottomArrow = document.getElementById("rightBottomArrow");
    const rightTopArrow = document.getElementById("rightTopArrow");
    
    // Defines variables to calculate scrolling
    var maxScrollPosition = rightSide.scrollHeight - rightSide.clientHeight;
    var currentScrollPosition = rightSide.scrollTop;
    
    //console.log(maxScrollPosition); // DEBUG - The total length that you can scroll down
    //console.log(currentScrollPosition); // DEBUG - The current length that you have scrolled down
    
    // Checks if you aren't at the bottom yet
    if(currentScrollPosition + 1 < maxScrollPosition){
        rightBottomArrow.style.display = "block";
    } else {
        rightBottomArrow.style.display = "none";
    }
    
    // Checks if you aren't at the top yet
    if(currentScrollPosition > 0){
        rightTopArrow.style.display = "block";
    } else {
        rightTopArrow.style.display = "none";
    }
}