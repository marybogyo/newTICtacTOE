class InfoView{
    constructor(szuloElem){
        this.szuloElem = szuloElem;
        this.#htmlOsszeallit();
        this.pElem=$(".info p")     
    }
    

setPelem(ertek){
    
    switch(ertek){
      case "1":
        this.pElem.html("X nyert")
       break;
    case "2":
        this.pElem.html("O nyert")
        break;
    case "3":
        this.pElem.html("Döntetlen")
    case "X":
        this.pElem.html("X következik")
        break;
    case "O":
        this.pElem.html("O következik")
        break;
    default:
        break;
    }
    
}

#htmlOsszeallit(){
    let txt="<p>Kikövetkezik?</p>"
    this.szuloElem.html(txt)
    
}}

export default InfoView;