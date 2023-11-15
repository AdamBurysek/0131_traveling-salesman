import "./howToPage.css";
import { useEffect, useRef } from "react";

const HowToPage = (props: any) => {
  const howToElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (howToElement.current) {
      howToElement.current.scrollTo({ top: 0 });
    }
  }, [props.activePage === "how-to"]);

  return (
    <div
      className={
        props.activePage === "how-to"
          ? "how-to_window"
          : "how-to_window how-to_hide"
      }
    >
      <div
        ref={howToElement}
        className="how-to_content"
      >
        {props.language === "cz" && (
          <div>
            <p>
              Na zobrazené mapě máte možnost stát se obchodním cestujícím. Ten
              potřebuje najít co nejkratší okružní trasu přes všechna vyznačená
              města. Město, které již bylo navštíveno, má červenou barvu. V
              levém horním rohu lze vidět aktuálně uraženou celkovou vzdálenost.
              Po naklikání všech měst se dozvíte, jestli vaše cesta byla
              nejkratší možná nebo ne. V případě, že nejkratší nebyla, uvidíte
              nejkratší možnou vzdálenost a případně si můžete zobrazit správné
              řešení nebo to zkusit znovu.
            </p>
            <p>
              Na dotykové obrazovce si můžete vybrat ze tří úrovní obtížnosti.
              Každá obtížnost má 3 různé varianty, které se generují náhodně.
              Cestu označíte kliknutím na město, které chcete navštívit.
            </p>
            <p>
              V těžké úrovni je vzdálenost označena jako Km*. To je z důvodu
              zakulacení země, které není ve hře zohledněno.
            </p>
          </div>
        )}
        {props.language === "en" && (
          <div>
            <p>
              You can become a traveling salesman on a planar map and a globe.
              The traveling salesman needs to find the shortest circular route
              through all the towns that are marked with pegs. The route is
              marked using a string indicating the length of the route and a
              mark indicating the shortest possible route.
            </p>
            <p>
              On the touchscreen, you can choose from among three levels of
              difficulty. The route is marked by tracing your finger between the
              towns.
            </p>
          </div>
        )}
        {props.language === "de" && (
          <div>
            <p>
              Auf einer ebenen Karte und einem Globus habt ihr die Möglichkeit,
              zu einem Handelsreisenden zu werden. Dieser muss eine möglichst
              kurze Rundstrecke über alle durch die Stifte gekennzeichneten
              Städte finden. Die Strecke wird mit einer Schnur, die die Länge
              der Strecke zeigt, und mit einer Markierung, die den kürzesten
              möglichen Weg kennzeichnet, veranschaulicht.
            </p>
            <p>
              Auf dem Touchscreen könnt ihr aus drei Schwierigkeitsebenen der
              Aufgabe auswählen. Der Weg wird durch Ziehen des Fingers zwischen
              den einzelnen Städten markiert.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HowToPage;
