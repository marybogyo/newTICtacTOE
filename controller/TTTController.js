import TTTModel from "../model/TTTModel.js";
import InfoView from "../view/InfoView.js";
import Jatekter from "../view/Jatekter.js";
class TTTController {
  constructor() {
    new Jatekter($(".jatekter"), 3), (this.tttModel = new TTTModel());
    this.infoView = new InfoView($(".info"));

    $(window).on("elemKivalaszt", (event) => {
      //console.log(event.detail); ez az a négyzet objektum, amire kattintottink
      //itt hívom majd a modelt, és megkérem hogy számoljon, hogy ki következik,
      let ertek = this.tttModel.aktualisJatekos();
      event.detail.setErtek(ertek);
      let kovJa=this.tttModel.kovetkezojatekos();  
      this.infoView.setPelem(kovJa);
    });
  }
}
export default TTTController;
