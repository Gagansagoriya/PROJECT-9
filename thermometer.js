{/* <span id="temp"></span></h1>
 */}

 const thermometerLoading = () =>{
  
    let temp = document.getElementById('temp');
    temp.innerHTML = "&#xf2ca";
    setTimeout(() => {
        temp.innerHTML = "&#xf2ca";
        temp.style.color = '#fbd785';
       
    },1000);
    setTimeout(() => {
        temp.innerHTML = "&#xf2c9";
        temp.style.color = '#fcb045';

    },2000);
    setTimeout(() => {
        temp.innerHTML = "&#xf2c8";
        temp.style.color = '#f64f59';

    },3000);
    setTimeout(() => {
        temp.innerHTML = "&#xf2c7";
        temp.style.color = '#fc354c';
    },4000);

 }
 thermometerLoading();
 setInterval(thermometerLoading, 5000);
