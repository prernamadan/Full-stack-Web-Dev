let users =[]
function register ()
{
    let tempname= document.getElementById("name").value;
    let tempemail= document.getElementById("email").value;

    let userCount =users.filter((x)=>{
        return x.email==tempemail;
    })

    if(userCount.length==0)
    {
        let user={
            name: tempname,
            email: tempemail
        }
        users.push(user);
    }
    else{
        document.getElementById("invalid").innerHTML="User Already exist";
    }

    document.getElementById('name').value = '';
    document.getElementById('email').value = ''; 
    let container =document.getElementById("userContainer");
    container.innerHTML="";

    users.map((user)=>{

        let div= document.createElement('div');
        div.classList.add("user-card");
        let n= document.createElement("h4");
        let e= document.createElement("p");
        n.innerHTML= user.name;
        e.innerHTML=user.email;
        container.appendChild(div);
        div.appendChild(n);
        div.appendChild(e);
    })
}
users.map((x)=>{
    let div = document.createElement('div');
    container.appendChild(div)
})
