

function toggle(id){
    var add="";
    if (id!=1){
        add+= (id-1) + "";
    }
    var checked = document.getElementById("chxbox" + add).checked;
    checked = !checked;

    document.getElementById("chxbox" + add).click();

    if (checked == true){
        document.getElementById("toggle-ball" + add).className="on";
        document.getElementById("toggle" + add).className="toggle toggle-blue";
    }
    else
    {
        document.getElementById("toggle-ball" + add).className="off";
        document.getElementById("toggle" + add).className="toggle toggle-grey";
    }
}