function plus(){
    const x=document.getElementByIdElement("div");
    document.body.appendChild(x);
 }

function push(){
    const y=document.createElement("span");
    document.Board.appendChild(y);
}
function col1(z)
{
    z.style.backgroundColor = "red";
}

function col2(w)
{
    var q=w.style.backgroundColor;
    if (w.style.backgroundColor=="red"){
        w.style.backgroundColor="green";
    }else{
            w.style.backgroundColor="red";
        }
    }
