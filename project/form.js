function onsubmit(event){
    //this is to prevent thet page from being refresh after submit
    event.preventDefault();
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var gender=document.querySelector('input[name="gender"]:checked').value;
    // var acceptLicenseYes=document.getElementById("acceptLicenseYes");
    // var acceptLicenseN0=document.getElementById("acceptLicenseNo");
    // var acceptLicense;
    // if(acceptLicenseYes.checked==true && acceptLicenseNo.checked==true){
    //     acceptLicense="cannot select both checkboxes";
    // }
    // else if(acceptLicenseYes.checked==true)
    // {
    //     acceptLicense=document.getElementById("acceptLicenseYes").value;
    // }
    // else if(acceptLicenseN0.checked==true){
    //     acceptLicense=document.getElementById("acceptLicenseNo").value;
    // }
    var suggestion =document.getElementById("sugesstion").value;
    var dropdown = document.getElementById("country");
    var selectedOption = dropdown.options[dropdown.selectedIndex].text;

    document.getElementById("formData").innerHTML="Name : "+ name +" <br>Email :" + email +"<br> Gender : " + gender + "<br> sugesstion : " + suggestion   + "<br> country : " + selectedOption;
}
window.onload=function(){
    // window.alert("hello .js");
     document.getElementById("contactForm").addEventListener('submit',onsubmit);
}