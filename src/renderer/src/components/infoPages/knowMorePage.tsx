import { useEffect, useRef } from "react";
import "./infoPages.css";

const KnowMorePage = (props: any) => {
  const knowMoreElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (knowMoreElement.current) {
      knowMoreElement.current.scrollTo({ top: 0 });
    }
  }, [props.activePage === "know-more"]);
  return (
    <div
      className={
        props.activePage === "know-more"
          ? "know-more_window"
          : "know-more_window know-more_hide"
      }
    >
      <div
        ref={knowMoreElement}
        className="know-more_content"
      >
        {props.language === "cz" && (
          <div>
            <p>
              Problém obchodního cestujícího může být řešen měřením délky všech
              možných tras a výběrem té nejkratší. Tato metoda (vyzkoušení všech
              možností) se nazývá hrubá síla. Počet tras však rychle roste s
              počtem měst. Například pro 5 měst existuje 12 možných tras, pro 10
              měst 181 440 tras a pro 28 měst (počet hlavních měst všech
              členských států EU k roku 2014) je nepředstavitelných 5 444 434
              725 209 176 080 384 000 000 možných tras. Vyzkoušení všech možných
              tras by trvalo miliony let, i s nejrychlejším počítačem na světě.
            </p>

            <p>
              Pro problém obchodního cestujícího neexistuje známý způsob řešení,
              který by byl zásadně efektivnější než hrubá síla. Proto se v praxi
              používají heuristiky (například při plánování tras pro dodávky
              balíků). Tyto metody nemusí najít nejkratší trasu, ale jsou
              schopny rychle najít dobrou alternativu.
            </p>

            <p>
              Problém podobný problému obchodního cestujícího na první pohled je
              hledání tzv. Eulerova tahu. Eulerův tah prochází každou spojnici
              mezi městy právě jednou, i když města lze navštívit několikrát. V
              praxi se s ním setkáváme při plánování tras pro sněhové pluhy a
              svoz odpadu, kdy je třeba projet každou silnici (opakované projetí
              silnice nemá smysl). Na rozdíl od problému obchodního cestujícího
              lze nejkratší Eulerův tah najít spolehlivě a poměrně rychle.
            </p>
            <p>
              Věděli jste, že čmelák řeší problém obchodního cestujícího při
              létání z květu na květ? Během několika pokusů bylo pozorováno, že
              čmelák dokázal zkrátit délku svého letu na jednu pětinu původní
              délky. Jeho řešení nebylo to nejlepší možné, ale pro čmeláka je
              důležité rychle najít rozumně krátkou trasu a začít sbírat pyl.
            </p>
          </div>
        )}
        {props.language === "en" && (
          <div>
            <p>
              The Traveling Salesman Problem can be solved by measuring the
              length of all possible routes and selecting the shortest one. This
              method, trying all alternatives, is called the brute force
              solution. However, the number of routes grows rapidly as the
              number of cities increases. For example, there are 12 possible
              routes for 5 cities, 181,440 routes for 10 cities, and an
              astonishing 5,444,434,725,209,176,080,384,000,000 possible routes
              for 28 cities (the number of capital cities of all EU member
              states as of 2014). Trying all possible routes would take millions
              of years, even with the world's fastest computer.
            </p>

            <p>
              There is no known solution method for the Traveling Salesman
              Problem that would be fundamentally more efficient than brute
              force. Therefore, heuristics are used in practice (for example,
              when planning delivery routes for parcels). These methods may not
              find the shortest route, but they can quickly find a good
              alternative.
            </p>

            <p>
              A problem that appears very similar to the Traveling Salesman
              Problem at first sight is the search for the Eulerian path. The
              Eulerian path goes through each connecting route between cities
              only once, although cities can be visited multiple times. In
              practice, this is encountered when planning routes for snow plows
              and garbage trucks that must travel on every road (repeatedly
              traveling on the same road makes no sense). Unlike the Traveling
              Salesman Problem, the shortest Eulerian path can be reliably and
              relatively quickly found.
            </p>

            <p>
              Did you know that a bumblebee solves a problem similar to the
              Traveling Salesman Problem when flying from one flower to another?
              Over several experiments, it was observed that a bumblebee could
              reduce the length of its flight to one-fifth of its original
              length. Its solution was not the best possible, but for the
              bumblebee, it is important to quickly find a reasonably short
              route and start collecting pollen.
            </p>
          </div>
        )}
        {props.language === "de" && (
          <div>
            <p>
              Das Problem des Handelsreisenden kann gelöst werden, indem man die
              Länge aller möglichen Routen misst und die kürzeste auswählt.
              Diese Methode, das Ausprobieren aller Alternativen, wird als die
              Brute-Force-Lösung bezeichnet. Die Anzahl der Routen wächst jedoch
              rapide mit der Anzahl der Städte. Zum Beispiel gibt es 12 mögliche
              Routen für 5 Städte, 181.440 Routen für 10 Städte und erstaunliche
              5.444.434.725.209.176.080.384.000.000 mögliche Routen für 28
              Städte (die Anzahl der Hauptstädte aller EU-Mitgliedsstaaten im
              Jahr 2014). Das Ausprobieren aller möglichen Routen würde selbst
              mit dem schnellsten Computer der Welt Millionen von Jahren dauern.
            </p>

            <p>
              Es gibt keine bekannte Lösungsmethode für das Problem des
              Handelsreisenden, die grundlegend effizienter ist als die
              Brute-Force-Methode. Daher werden in der Praxis Heuristiken
              verwendet (z. B. bei der Planung von Lieferstrecken für Pakete).
              Diese Methoden finden möglicherweise nicht die kürzeste Route,
              können jedoch schnell eine gute Alternative finden.
            </p>

            <p>
              Ein Problem, das auf den ersten Blick dem Problem des
              Handelsreisenden sehr ähnlich erscheint, ist die Suche nach dem
              Eulerpfad. Der Eulerpfad durchläuft jede Verbindung zwischen den
              Städten nur einmal, obwohl die Städte mehrmals besucht werden
              können. In der Praxis trifft man auf dieses Problem bei der
              Planung von Routen für Schneepflüge und Müllwagen, die jede Straße
              befahren müssen (wiederholtes Befahren derselben Straße macht
              keinen Sinn). Im Gegensatz zum Problem des Handelsreisenden kann
              der kürzeste Eulerpfad zuverlässig und relativ schnell gefunden
              werden.
            </p>

            <p>
              Wussten Sie, dass eine Hummel ein Problem löst, das dem Problem
              des Handelsreisenden ähnlich ist, wenn sie von einer Blume zur
              anderen fliegt? In mehreren Experimenten wurde beobachtet, dass
              eine untersuchte Hummel die Länge ihres Fluges auf ein Fünftel der
              ursprünglichen Länge reduzieren konnte. Ihre Lösung war nicht die
              beste mögliche, aber für die Hummel ist es wichtig, schnell eine
              vernünftig kurze Strecke zu finden und mit dem Sammeln von Pollen
              zu beginnen.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default KnowMorePage;
