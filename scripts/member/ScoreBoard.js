function showPopUp(id){
    document.getElementById("popUp").style.display = "flex";
    document.getElementById("title").innerHTML = document.getElementById("r"+id).innerHTML ;
    document.getElementById("name").innerHTML = document.getElementById("n"+id).innerHTML ;
    document.getElementById("score").innerHTML = document.getElementById("s"+id).innerHTML ;

}
function HidePopUp(){
    document.getElementById("popUp").style.display = "none";
}


