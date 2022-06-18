/******* W A R N I N G  ****/
/***** DO NOT TOUCH THIS FILE *****/
class TradeSys{
    constructor(InputNumber){
        this.InputNumber = InputNumber;
        this.typeTrade = "none"
        this.Count = 0
        this.IdCard = "unset"
        this.CardName = "Search for...."
        this.Coins = "Enter the budget"
    }
    element(id){
        return document.getElementById(id)
    }
    showPopUp(PopUpName, para="none"){
        //HideAllPopUp("unset")
        if(PopUpName!="SearchCardsPopUP"){
            this.element("popUp").style.display = "flex";
            this.element(PopUpName).style.display = "flex";
            this.element("COUNTER").innerHTML = this.Count;
            this.element("txt_card").value = this.CardName;
            if(para!="no-defaultCC"){
                this.element("txt_card").style.color = "#D2D2D2";
                this.element("coins").style.color = "#D2D2D2";
            }
            this.element("coins").value = this.Coins;
        }else{
            this.element("header").style.display = "none";
            this.element("main").style.display = "none";
            this.element("footer").style.display = "none";
            this.element("popUp").style.display = "flex";
            this.element("popUp").style.backgroundColor = "unset";
            this.element("popUp").style.position = "unset";
            this.element(PopUpName).style.position = "relative";
            this.element(PopUpName).style.display = "flex";
        }
    }
    HideAllPopUp(para='unset'){
        if(para=="Reset"){
            /* to get back the items of main page **/
            this.element("header").style.display = "flex";
            this.element("main").style.display = "block";
            this.element("footer").style.display = "flex";
            this.element("popUp").style.backgroundColor = "rgba(0, 0, 0, 0.729)";
            this.element("popUp").style.position = "fixed";
        }
        this.PopUpList = ["popUp", "itemToTrade", "CoinPopUP", "CardsPopUP", "SearchCardsPopUP"]
        for(this.i=0; this.i<this.PopUpList.length; this.i++){
            this.element(this.PopUpList[this.i]).style.display = "none";
        }
    }
    setCoin(){
        if(this.InputNumber==1){
            this.InputId = "first_item"
        }else{
            this.InputId = "second_item"
        }
        this.Coins = this.element("coins").value
        this.element(this.InputId).value= this.Coins+" Coins";
        this.element(this.InputId).style.color = "black";
        this.HideAllPopUp('none')
        this.typeTrade = "Coins"
        this.FillHiddenWithDataLiSidkHoussem()
    }

    addCardsNumber(){
        this.Count = Number(this.element("COUNTER").innerHTML)+1
        this.element("COUNTER").innerHTML = this.Count;
    }
    minCardsNumber(){
        this.Count = Number(this.element("COUNTER").innerHTML)-1;
        if(this.Count<0){
            this.Count = 0   
        }
        this.element("COUNTER").innerHTML = this.Count;
    }
    selectCard(IdCard, CardName){
        this.CardName = CardName;
        this.element("txt_card").value = this.CardName;
        this.element("txt_card").style.color ="black";
        this.HideAllPopUp('Reset')
        this.showPopUp('CardsPopUP',"no-defaultCC")
        this.IdCard = IdCard
    }
    setCard(){
        this.HideAllPopUp()
        if(this.InputNumber==1){
            this.InputId = "first_item"
        }else{
            this.InputId = "second_item"
        }
        this.element(this.InputId).value= this.CardName+ " x"+ this.Count;
        this.element(this.InputId).style.color= "black";
        this.typeTrade = "Cards"
        this.FillHiddenWithDataLiSidkHoussem()
    }
    FillHiddenWithDataLiSidkHoussem(){
        if (this.InputNumber==1){
            this.pfx="FI"
        }else{
            this.pfx="SI"
        }
        this.element(this.pfx+"_Coins").value = " ";
        this.element(this.pfx+"_IdCard").value = " ";
        this.element(this.pfx+"_CardNumber").value = " ";
        this.element(this.pfx+"_TypeItem").value = this.typeTrade
        if(this.typeTrade=="Coins"){
            this.element(this.pfx+"_Coins").value = this.Coins
        }else{
            this.element(this.pfx+"_IdCard").value = this.IdCard
            this.element(this.pfx+"_CardNumber").value = this.Count
        }
    }
}