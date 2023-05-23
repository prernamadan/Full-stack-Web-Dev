function changecolor()
{
    let element= document.getElementById('title');
    console.log(element);
    element.style.color='orange';
    element.style.fontSize= "x-large";
}
function cYes()
{
    let t= document.getElementById("t");
    t.innerHTML="Thank You For Joining";
    document.getElementById("b").style.display="none";
}

function cNo()
{
    let t= document.getElementById("t");
    t.innerHTML="Better Luck next time";
    document.getElementById("b").style.display="none";
}
function Cube()
{
    let c= document.getElementById("c").value;
    console.log(typeof(c));
    let pcube= c*c*c;
    console.log(pcube);
    document.getElementById("cube").innerHTML=pcube;
    document.getElementById("c").value="";
}