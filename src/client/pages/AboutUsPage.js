import React from "react";
import "./AboutUsPage.css";

function AboutUsPage() {
  return (
    <div>
      <img
        className="img_view"
        src={"images_om_os/Om_Os_Picture.jpg"}
        alt="A image of a fruit"
      />

      <div className="containers">
        <h1 className="head">DESSERTHUS I HJERTET AF NØRREBRO!</h1>
        <p className="text">
          Crepe Café laver selv den luftige pandekagedej, der giver små, flotte
          pandekager – næsten som æbleskiver – som der endnu ikke er andre
          steder i byen. Hos mission hos Crepe Café er, at opgradere den
          klassiske pandekage og gøre lidt mere ud af det. Derfor laver vi dem
          også fra bunden. Vi har åbent alle ugens dage fra kl. 15, så rammer
          sukkertrangen kort efter frokost eller skal du have lidt lækkert til
          eftermiddagskaffen kan du bestemt få stillet dine cravings hos Crepe
          Café Desserthus.
        </p>
      </div>
    </div>
  );
}

export default AboutUsPage;
