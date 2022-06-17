function AddCount(){
    document.getElementById("COUNTER").innerHTML = Number(document.getElementById("COUNTER").innerHTML)+1;
}

function MinCount(){
    x = Number(document.getElementById("COUNTER").innerHTML)-1;
    if(x<0){
    document.getElementById("COUNTER").innerHTML = 0;
    }else{
        document.getElementById("COUNTER").innerHTML = x;
    }
} 
function HideAllPopUp(n){
    if(n==1){
        document.getElementById("header").style.display = "flex";
        document.getElementById("main").style.display = "block";
        document.getElementById("footer").style.display = "flex";
        document.getElementById("popUp").style.backgroundColor = "rgba(0, 0, 0, 0.729)";
        document.getElementById("popUp").style.position = "fixed";
    }
    PopUpList = ["popUp", "itemToTrade", "CoinPopUP", "CardsPopUP", "SearchCardsPopUP"]
    for(i=0; i<PopUpList.length; i++){
        document.getElementById(PopUpList[i]).style.display = "none";
    }
    
}
function showPopUp(id){
    HideAllPopUp(0)
    if(id!="SearchCardsPopUP"){
        document.getElementById("popUp").style.display = "flex";
        document.getElementById(id).style.display = "flex";
    }else{
        document.getElementById("header").style.display = "none";
        document.getElementById("main").style.display = "none";
        document.getElementById("footer").style.display = "none";
        document.getElementById("popUp").style.display = "flex";
        document.getElementById("popUp").style.backgroundColor = "unset";
        document.getElementById("popUp").style.position = "unset";
        document.getElementById(id).style.position = "relative";
        document.getElementById(id).style.display = "flex";
    }
    

}



