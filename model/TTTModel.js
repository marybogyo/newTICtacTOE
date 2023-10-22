class TTTModel{
    #lepes;
    #ertek="";
    constructor(){
        this.#lepes=0;
        
    }

    aktualisJatekos(){
        
        this.#lepes++;
        if (this.#lepes % 2 == 0) {
          this.#ertek = "X";
        } else {
          this.#ertek = "O";
        }
        return this.#ertek;
    }

    kovetkezojatekos(){
        let kovjat=""
        if (this.#lepes % 2 == 0) {
            kovjat = "O";
          } else {
            kovjat = "X";
          }
        return kovjat;
    }
}
export default TTTModel;