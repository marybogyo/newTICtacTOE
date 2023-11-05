class TTTModel {
  #lepes;
  #ertek = "";
  #lista = [];
  constructor() {
    this.#lepes = 0;
    this.n = 3;
    for (let index = 0; index < this.n * this.n; index++) {
      this.#lista.push(".");
    }
  }

  #visszEll() {
    let szoveg = "";
    this.#lista.forEach((elem, i) => {
      szoveg += elem;
      if (i % this.n == this.n - 1) {
        szoveg += "@";
      }
    });
    console.log(szoveg);
    return szoveg;  
  }
  #fuggEll() {
    let szoveg = "";
    console.log(szoveg);
    return szoveg;
  }

  #atEll() {
    let szoveg = "";
    console.log(szoveg);
    return szoveg;
  }
  ell() {
    let szoveg = this.#visszEll() + this.#fuggEll() + this.#atEll();
    this.eredmenySzoveg;
    console.log(szoveg);
    console.log("szoveg.indexOf", szoveg.indexOf("XXX"));
    if (szoveg.indexOf("XXX") >= 0) {
      return "1";//X nyert
    } else if (szoveg.indexOf("OOO") >= 0) {
      return "2";//O nyert
    }else if(szoveg.indexOf(".")==-1){
      return "3";//Döntetlen
    }else{
      return("X/O következik");
    }    
  }

  aktualisallapot(index) {
    //ezt tudja majd, hogy hanyadik elemre kattintottam

    this.#lepes++;
    if (this.#lepes % 2 == 0) {
      this.#ertek = "X";
    } else {
      this.#ertek = "O";
    }
    this.#lista[index] = this.#ertek;
    console.log(this.#lista);
    return this.#ertek;
  }

  kovetkezojatekos() {
    let kovjatekos= this.ell();
    if(kovjatekos== "X/O következik"){
    if (this.#lepes % 2 == 0) {
      kovjatekos = "O";
    } else {
      kovjatekos = "X";
    }}
    return kovjatekos;
  }
}
export default TTTModel;
