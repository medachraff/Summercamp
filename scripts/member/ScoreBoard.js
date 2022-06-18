function showPopUp(id, rank, name, points){
    document.getElementById("popUp").style.display = "flex";
    document.getElementById("title").innerHTML =  "#"+rank;
    document.getElementById("name").innerHTML = name ;
    document.getElementById("score").innerHTML = points ;

}
function HidePopUp(){
    document.getElementById("popUp").style.display = "none";
}

function updateView(){
    searchwords = document.getElementById('searchwords').value;
    var container_div = document.getElementById('views')
    for(i=1; i<=container_div.getElementsByTagName('div').length; i++){
        if(searchwords==""){
            document.getElementById('lab'+i).style.display = "block"
        }
        if(document.getElementById('n'+i).innerHTML.toUpperCase().indexOf(searchwords.toUpperCase())==-1){
            document.getElementById('lab'+i).style.display = "none"
        }
    }
}

