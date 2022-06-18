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
    for(i=0; i<container_div.getElementsByTagName('div').length; i++){
        if(searchwords==""){
            document.getElementById('views').getElementsByClassName("lab")[i].style.display = "flex"
        }
        e= document.getElementById('views').getElementsByClassName("lab")[i].getElementsByClassName('details')[0].getElementsByClassName('name')[0].innerHTML.toUpperCase();
        if(e.indexOf(searchwords.toUpperCase())==-1){
            document.getElementById('views').getElementsByClassName("lab")[i].style.display = "none"
        }
    }
}