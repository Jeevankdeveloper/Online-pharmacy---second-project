

//Coupon Function

function loadCoupon() {
    document.getElementById('coupon').style.visibility = "visible";
    document.getElementById('bodyInside').style.opacity = "0.7";
}



function closeCoupon() {
    document.getElementById('coupon').style.visibility = "hidden";
    document.getElementById('bodyInside').style.opacity = "1";
}

//Change color

function changeMode() {
    let mybody = document.body;
    mybody.classList.toggle('mydark');
}






