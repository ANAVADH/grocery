function ajax(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
             var response = JSON.parse(this.responseText);
             var lllist=response.list;
            var tbody = document.getElementById("MBDY");
            var trow="";

            for(var i=0; i<lllist.length; i++){

                trow += `<tr>
                <th scope="row">${lllist[i].slN}</th>      
                <td>${lllist[i].item}</td> 
                <td>${lllist[i].quantity}</td> 
                <td>${lllist[i].unit}</td> 
                <td>${lllist[i].price}</td> 
                <td>${lllist[i].status}</td>
                <td><input class="switch" type="checkbox"id="checking"> </td>
             
                </tr>`;
           }
            tbody.innerHTML = trow;

        }}
        xhttp.open("GET","./lists.json",true);
        xhttp.send();
}

window.addEventListener("load", ajax);


function strikeon(){
    

}
