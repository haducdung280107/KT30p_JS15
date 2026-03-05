
const livevalue=document.getElementById("action");
productForm.addEventListener('submit',function(e){
    const emailvalue=document.getElementById("email");
    const passworkvalue=document.getElementById("passwork");
    let user=[email="nva@gmail.com",passwork="12345"];
    if(emailvalue=="nva@gmail.com" && passworkvalue=="12345"){
        const newlive={
            email:emailvalue,
            passwork:passworkvalue
        };
        livevalue.innerHTML+=`
        <h3>4{}</h3>`
    }
});