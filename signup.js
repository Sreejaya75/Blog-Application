function addData()
{
    var name=document.getElementById('name').value;
    var email=document.getElementById('email').value;
    var pass=document.getElementById('pass').value;

    localStorage.setItem('UName',name);
    localStorage.setItem('UEmail',email);
    localStorage.setItem('UPass',pass);
    
}