let exitem = " ";
let state = " ";
let pkgsize = " ";
let pkg = " ";
let tot = 0;
let totorder = 0;
let totcounted = 0;

function manufachange() {
    state = document.getElementById("manufac").value;
    document.getElementById("manufacurrent").innerHTML = "Selected Manufacturer Brand: " + state;
    price();
}
function packchange() {
    pkg = document.getElementById("pack").value;
    document.getElementById("packagecurrent").innerHTML = "Package Type :" + pkg;
    price();
}
function packsize() {
    pkgsize = document.getElementById("size").value;
    document.getElementById("packagesize").innerHTML = "Package Size :" + pkgsize;
    price();
}
function packextra() {
    exitem = document.getElementById("extra").value;
    document.getElementById("packageextra").innerHTML = "Extra item/s to be Included in Package :" + exitem;
    price();
}

function price() {
    let pkgcost = 0;
    let pkgsizecost = 0;
    let statecost = 0;
    let exitemcost = 0;

    if (state == "dilmaceylonteacompany") 
    {
        statecost = 1000;
    }
    if (state == "afjonestea") 
    {
        statecost = 1500;
    }
    if (state == "georgestuartteas") 
    {
        statecost = 1000;
    }
    if (state == "prestigeceylonteaspvtltd") 
    {
        statecost = 1000;
    }
    if (state == "malwattevalleyplantationsplc") 
    {
        statecost = 2000;
    }
    if (state == "empireteas") 
   {
        statecost = 2000;
    }

    if (pkg == "tinsdefault") 
    {
        pkgcost = 5000;
    }
    if (pkg == "paperpouches") 
    {
        pkgcost = 1000;
    }
    if (pkg == "bags") 
    {
        pkgcost = 2500;
    }

    if (pkgsize == "small") 
    {
        pkgsizecost = 1000;
    }
    if (pkgsize == "mediumdefault") 
    {
        pkgsizecost = 2500;
    }
    if (pkgsize == "large") 
    {
        pkgsizecost = 5000;
    }

    if (exitem == "mug") 
    {
        exitemcost = 500;
    }
    if (exitem == "silverpin") 
    {
        exitemcost = 1000;
    }
    if (exitem == "woodensouvenir") 
    {
        exitemcost = 1500;
    }

    tot = statecost + pkgcost + pkgsizecost + exitemcost;
    document.getElementById("totalcurrentcost").innerHTML = "Total Amount of Current Order : " + tot;

		}
function addorder() 
	{
    totorder = totorder + tot;
    totcounted++;

    document.getElementById("finalprice").innerHTML = "Dear Customer you total is : " + totorder;
    document.getElementById("totalorders").innerHTML = "No of Order/s you have made : " + totcounted;
    document.getElementById("manufacurrent").innerHTML = "Selected Manufacturer Brand: ";
    document.getElementById("packagecurrent").innerHTML = "Package Type :";
    document.getElementById("packagesize").innerHTML = "Package Size :";
    document.getElementById("packageextra").innerHTML = "Extra item/s to be Included in Package :";
    document.getElementById("totalcurrentcost").innerHTML = "Total Amount of Current Order : ";
	}
function placeorder() 
		{
    document.getElementById("finalprice").innerHTML = "Total : 0";
    document.getElementById("totalorders").innerHTML = "Total number of orders is : 0";
    alert("Dear Customer Your Order to Ceylon Tea Pvt(LTD) has been made , We will let you know the delivery dates Soon! Stay Safe & Drink Tea ");
		}
function addfavourite() 
	{
    localStorage.setItem("manufac", state);
    localStorage.setItem("pack", pkg);
    localStorage.setItem("size", pkgsize);
    localStorage.setItem("extra", exitem);
    localStorage.setItem("totalcurrentcost", tot)
	}
function orderfavourite() 
	{
    document.getElementById("manufacurrent").innerHTML = "Selected Manufacturer Brand: " + localStorage.getItem("manufac");
    document.getElementById("packagecurrent").innerHTML = "Package Type :" + localStorage.getItem("pack");
    document.getElementById("packagesize").innerHTML = "Package Size :" + localStorage.getItem("size");
    document.getElementById("packageextra").innerHTML = "Extra item/s to be Included in Package :" + localStorage.getItem("extra");
    document.getElementById("totalcurrentcost").innerHTML = "Total Amount of Current Order : " + localStorage.getItem("totalcurrentcost");
    document.getElementById("manufac").value = localStorage.getItem("manufac");
    document.getElementById("pack").value = localStorage.getItem("pack");
    document.getElementById("size").value = localStorage.getItem("size");
    document.getElementById("extra").value = localStorage.getItem("extra");
    document.getElementById("totalcurrentcost").value = localStorage.getItem("totalcurrentcost");
	}