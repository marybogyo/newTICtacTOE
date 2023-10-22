class InfoView{
    constructor(szuloElem){
        this.szuloElem = szuloElem;
        this.#htmlOsszeallit();
        this.pElem=$(".info p")     
    }
    

setPelem(ertek){
    this.pElem.html(ertek + " következik")
}

#htmlOsszeallit(){
    let txt="<p>Kikövetkezik?</p>"
    this.szuloElem.html(txt)
    
}
}
export default InfoView;