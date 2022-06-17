
/******* W A R N I N G  ****/
/***** DO NOT TOUCH THIS FILE *****/

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
    /* to get back the counter to 0 **/
    document.getElementById("COUNTER").innerHTML = 0;
    /* to get back the coins to 0 **/
    document.getElementById("coins").value = "";
    if(n==1){
        /* to get back the items of main page **/
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
function showPopUp(id, Hid){
    if(Hid!=undefined){
        document.getElementById("DT").setAttribute("value", Hid);

    }
    HideAllPopUp(0)
    if(id!="SearchCardsPopUP"){
        document.getElementById("popUp").style.display = "flex";
        document.getElementById(id).style.display = "flex";
        document.getElementById(id).classList.add = "test";
        if(id=="itemToTrade"){
            document.getElementById("Btn_To_Coin").setAttribute("onclick", "showPopUp('CoinPopUP',"+Hid+")");
            document.getElementById("Btn_To_Card").setAttribute("onclick", "showPopUp('CardsPopUP',"+Hid+")");
        }
        if(id=="CoinPopUP"){
            document.getElementById("Btn_Set_Coins").setAttribute("onclick", "Added('',document.getElementById('coins').value+' Coin',"+Hid+",'',document.getElementById('coins').value)");
        }
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
function Added(idCard, name, ItemNumber, NumberCards, NumberCoin){
    HideAllPopUp()
   
    
    if(ItemNumber==1){
        document.getElementById('FI_TypeItem').value="unset";
        document.getElementById('FI_Coins').value ="unset";
        document.getElementById('FI_IdCard').value="unset";
        document.getElementById('FI_CardNumber').value="unset";
        if(name.indexOf("Coin")!=-1){
            document.getElementById('first_item').value = name;
            document.getElementById('FI_Coins').value = NumberCoin;
            document.getElementById('FI_TypeItem').value = "Coin";
        }else{
            document.getElementById('first_item').value = name+" x"+NumberCards;
            document.getElementById('FI_TypeItem').value = "Card";
            document.getElementById('FI_IdCard').value = idCard;
            document.getElementById('FI_CardNumber').value = NumberCards;
        }
        document.getElementById('first_item').style.color ="black";
    }else if(ItemNumber==2){
        document.getElementById('SI_TypeItem').value="unset";
        document.getElementById('SI_Coins').value ="unset";
        document.getElementById('SI_IdCard').value="unset";
        document.getElementById('SI_CardNumber').value="unset";
        if(name.indexOf("Coin")!=-1){
            document.getElementById('second_item').value = name;

            document.getElementById('SI_Coins').value = NumberCoin;
            document.getElementById('SI_TypeItem').value = "Coin";
        }else{
            document.getElementById('second_item').value = name+" x"+NumberCards;

            document.getElementById('SI_TypeItem').value = "Card";
            document.getElementById('SI_IdCard').value = idCard;
            document.getElementById('SI_CardNumber').value = NumberCards;
        }
        document.getElementById('second_item').style.color ="black";
    }   
}
function SelectCard(id, name){
    HideAllPopUp(1)
    showPopUp('CardsPopUP')
    document.getElementById("txt").type="text";
    document.getElementById("txt").value=name;
    document.getElementById("txt").readOnly=true;
    document.getElementById("id_Item").value = id;
}
function DoneCard(id){
    Count =  document.getElementById("COUNTER").innerHTML;
    if(Count!=0){
        ItemNumber =document.getElementById("DT").getAttribute("value");
        name= document.getElementById("txt").value;
        Added(id,name, ItemNumber, Count, 0)
        document.getElementById("txt").type="text";
        document.getElementById("txt").value="Select Card";
        document.getElementById("txt").readOnly=true;
    }
   
}

