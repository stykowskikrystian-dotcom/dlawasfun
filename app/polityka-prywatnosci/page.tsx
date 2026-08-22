import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Polityka prywatności | dlawas.fun",
  description: "Zasady przetwarzania danych osobowych i ochrony prywatności w serwisie dlawas.fun.",
  alternates: { canonical: "/polityka-prywatnosci" },
  openGraph: {
    title: "Polityka prywatności | dlawas.fun",
    description: "Zasady przetwarzania danych osobowych i ochrony prywatności w serwisie dlawas.fun.",
    url: "/polityka-prywatnosci",
    type: "website",
  },
};

export default function PrivacyPolicy() {
  return (
    <main className="privacyPage">
      <div className="privacyGlow" aria-hidden="true" />
      <header className="privacyHeader">
        <Link href="/#start" aria-label="Wróć na stronę główną dlawas.fun">
          <Image src="/logo-dlawas-fun-nav.png" alt="dlawas.fun" width={160} height={90} priority />
        </Link>
        <Link className="privacyBack" href="/#kontakt">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6" /></svg>
          Wróć do kontaktu
        </Link>
      </header>

      <article className="privacyArticle">
        <div className="privacyHero">
          <p className="sectionKicker"><span>PRYWATNOŚĆ</span> Jasne zasady</p>
          <h1>Polityka<br /><em>prywatności</em></h1>
          <p>Wyjaśniamy, jakie dane mogą być przetwarzane podczas korzystania z serwisu i kontaktowania się z dlawas.fun, w jakim celu to robimy oraz jakie prawa przysługują użytkownikom.</p>
          <div><span>Aktualizacja</span><strong>22 sierpnia 2026</strong></div>
        </div>

        <nav className="privacyToc" aria-label="Spis treści polityki prywatności">
          <a href="#administrator"><span>01</span> Administrator danych</a>
          <a href="#zakres"><span>02</span> Zakres i cele</a>
          <a href="#technologia"><span>03</span> Hosting i mapa</a>
          <a href="#prawa"><span>05</span> Twoje prawa</a>
          <a href="#cookies"><span>06</span> Cookies</a>
          <a href="#kontakt-polityka"><span>07</span> Kontakt</a>
        </nav>

        <div className="privacyContent">
          <section id="administrator">
            <span className="privacyNumber">01</span>
            <div>
              <p className="privacyLabel">Informacje ogólne</p>
              <h2>Administrator danych</h2>
              <p>Administratorem danych osobowych związanych z serwisem jest <strong>Paweł Grzeszczak</strong>, ul. 3 Maja 11, 19-500 Giżycko. W sprawach dotyczących prywatności można kontaktować się pod adresem <a href="mailto:kontakt@dlawas.fun">kontakt@dlawas.fun</a>.</p>
              <p>Polityka dotyczy serwisu działającego pod adresem dlawasfun.vercel.app oraz kontaktu inicjowanego za pomocą zamieszczonych w nim odnośników telefonicznych i e-mailowych.</p>
            </div>
          </section>

          <section id="zakres">
            <span className="privacyNumber">02</span>
            <div>
              <p className="privacyLabel">Dane i podstawy prawne</p>
              <h2>Co przetwarzamy i dlaczego</h2>
              <p>Serwis nie posiada formularza, kont użytkowników ani płatności online. Dane otrzymujemy, gdy użytkownik dobrowolnie kontaktuje się z nami telefonicznie albo e-mailem. Mogą to być między innymi: imię, dane kontaktowe, termin i miejsce wydarzenia, liczba gości oraz informacje potrzebne do przygotowania oferty i realizacji usługi.</p>
              <ul>
                <li><strong>Obsługa zapytania i przygotowanie oferty</strong> — podjęcie działań przed zawarciem umowy, art. 6 ust. 1 lit. b RODO.</li>
                <li><strong>Realizacja zamówionej usługi</strong> — wykonanie umowy, art. 6 ust. 1 lit. b RODO.</li>
                <li><strong>Rozliczenia i obowiązki prawne</strong> — art. 6 ust. 1 lit. c RODO.</li>
                <li><strong>Bezpieczeństwo, administracja i obrona roszczeń</strong> — prawnie uzasadniony interes Administratora, art. 6 ust. 1 lit. f RODO.</li>
                <li><strong>Marketing bezpośredni</strong> — wyłącznie wtedy, gdy istnieje właściwa podstawa prawna, w tym zgoda, jeżeli jest wymagana.</li>
              </ul>
            </div>
          </section>

          <section id="technologia">
            <span className="privacyNumber">03</span>
            <div>
              <p className="privacyLabel">Bezpieczeństwo i dostawcy</p>
              <h2>Hosting, logi i mapa</h2>
              <p>Serwis korzysta z szyfrowanego połączenia HTTPS i jest utrzymywany na infrastrukturze Vercel. Dostawca hostingu może przetwarzać dane techniczne niezbędne do bezpiecznego działania strony, takie jak adres IP, czas zapytania, adres żądanego zasobu, typ urządzenia lub przeglądarki i informacje o błędach.</p>
              <p>W sekcji kontaktowej znajduje się mapa OpenStreetMap. Mapa jest ładowana z serwerów zewnętrznego dostawcy dopiero w pobliżu momentu jej wyświetlenia. W związku z tym OpenStreetMap może otrzymać informacje techniczne, w szczególności adres IP i dane przeglądarki. Szczegóły opisuje <a href="https://osmfoundation.org/wiki/Privacy_Policy" target="_blank" rel="noreferrer">polityka prywatności OpenStreetMap Foundation</a>.</p>
              <p>Dane mogą być ujawniane podmiotom świadczącym usługi hostingowe, telekomunikacyjne, pocztowe, księgowe lub prawne oraz upoważnionym współpracownikom — wyłącznie w zakresie potrzebnym do wykonania ich zadań. Jeżeli dostawca przetwarza dane poza Europejskim Obszarem Gospodarczym, odbywa się to z zastosowaniem mechanizmów wymaganych przez obowiązujące przepisy.</p>
            </div>
          </section>

          <section>
            <span className="privacyNumber">04</span>
            <div>
              <p className="privacyLabel">Okres przechowywania</p>
              <h2>Jak długo przechowujemy dane</h2>
              <p>Dane związane z zapytaniem są przechowywane przez czas potrzebny do udzielenia odpowiedzi i prowadzenia rozmów dotyczących oferty. Dane związane z umową przechowujemy przez okres jej realizacji, a następnie przez czas wymagany przepisami podatkowymi i rachunkowymi oraz do upływu terminów przedawnienia ewentualnych roszczeń. Dane przetwarzane na podstawie zgody przechowujemy do jej wycofania, o ile nie istnieje inna podstawa dalszego przetwarzania.</p>
            </div>
          </section>

          <section id="prawa">
            <span className="privacyNumber">05</span>
            <div>
              <p className="privacyLabel">Kontrola nad danymi</p>
              <h2>Twoje prawa</h2>
              <p>W zależności od podstawy przetwarzania przysługuje prawo dostępu do danych, ich sprostowania, usunięcia, ograniczenia przetwarzania, przenoszenia danych, wniesienia sprzeciwu oraz wycofania zgody w dowolnym momencie. Wycofanie zgody nie wpływa na zgodność z prawem wcześniejszego przetwarzania.</p>
              <p>Osoba, która uważa, że jej dane są przetwarzane niezgodnie z prawem, może złożyć skargę do Prezesa Urzędu Ochrony Danych Osobowych, ul. Stawki 2, 00-193 Warszawa.</p>
            </div>
          </section>

          <section id="cookies">
            <span className="privacyNumber">06</span>
            <div>
              <p className="privacyLabel">Technologie internetowe</p>
              <h2>Cookies i zewnętrzne odnośniki</h2>
              <p>W aktualnej wersji serwis nie wykorzystuje własnych cookies marketingowych, systemów remarketingowych, Google Analytics ani piksela Facebooka. Infrastruktura hostingowa i osadzona mapa mogą używać rozwiązań technicznych niezbędnych do bezpieczeństwa, dostarczenia treści i prawidłowego działania usług.</p>
              <p>Odnośniki do Facebooka, Instagrama, Google Maps i głównej strony dlawas.fun prowadzą do zewnętrznych serwisów, które działają według własnych zasad prywatności. Samo kliknięcie takiego odnośnika powoduje przejście poza niniejszy serwis.</p>
            </div>
          </section>

          <section id="kontakt-polityka" className="privacyContact">
            <span className="privacyNumber">07</span>
            <div>
              <p className="privacyLabel">Pytania o prywatność</p>
              <h2>Napisz do nas</h2>
              <p>W sprawach dotyczących danych osobowych i realizacji swoich praw skontaktuj się bezpośrednio z Administratorem.</p>
              <a href="mailto:kontakt@dlawas.fun?subject=Prywatno%C5%9B%C4%87%20i%20dane%20osobowe%20%E2%80%94%20dlawas.fun">kontakt@dlawas.fun <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9" /></svg></a>
            </div>
          </section>
        </div>
      </article>

      <footer className="privacyFooter">
        <span>© 2026 dlawas.fun</span>
        <Link href="/#kontakt">Kontakt</Link>
        <Link href="/">Strona główna</Link>
      </footer>
    </main>
  );
}
