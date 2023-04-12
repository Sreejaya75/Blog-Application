function checkData()
{
    var inputEmail=document.getElementById('email').value;
    var inputPass=document.getElementById('pass').value;

    var storedEmail=localStorage.getItem('UEmail');
    var storedPass=localStorage.getItem('UPass');

    if(inputEmail==storedEmail)
    {
        if(inputPass==storedPass)
        {
            alert("Login Successful!");
            localStorage.setItem('activeUser',inputEmail);
            window.open("Home.php");
        }
        else
        {
            alert("Wrong Password!");
        }
    }
    else
    {
        alert("Invalid Email");
    }


}