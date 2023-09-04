function plus(){
    const x=document.createElement("div");
    document.body.appendChild(x);
 }

function push(){
    const y=document.createElement("span");
    document.body.appendChild(y);
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
