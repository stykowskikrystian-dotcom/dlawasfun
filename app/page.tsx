"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const musicTeam = [
  {
    name: "Paweł",
    image: "/media/attractions/team/pawel.webp",
    description: "DJ i wodzirej z pasją. Czerpie energię od ludzi i sam zaraża nią innych. Animator zabaw obecny w branży weselnej i eventowej od 2007 roku.",
  },
  {
    name: "Kamil",
    image: "/media/attractions/team/kamil.webp",
    description: "DJ oraz technik światła i dźwięku. Od 2010 roku rozwija swoją pasję i umiejętności, dbając o to, żeby wszystko świetnie brzmiało i błyszczało.",
  },
  {
    name: "Michał",
    image: "/media/attractions/team/michal.webp",
    description: "DJ i wodzirej z 14-letnim doświadczeniem. Charyzmatyczny, pełen energii i pomysłowości, łączy poczucie humoru z profesjonalizmem.",
  },
  {
    name: "Krzysztof",
    image: "/media/attractions/team/krzysztof.webp",
    description: "DJ i wodzirej tworzący innowacyjny styl imprez od 2013 roku. Charyzmą, energią i doborem repertuaru buduje niezapomniane wspomnienia.",
  },
] as const;

const googleReviewsUrl = "https://www.google.com/search?q=DLAWAS.FUN+DJ+na+wesele+Gi%C5%BCycko+Opinie&tbm=lcl#lkt=LocalPoiReviews";

const googleReviews = [
  { name: "Bożena Lachowicz", text: "5 gwiazdek to za mało. Profeska od A do Z." },
  { name: "Justyna", text: "Młodzież bawiła się doskonale, muzyka była świetnie dobrana." },
  { name: "Aleksandra Szychta", text: "Nie mogliśmy wybrać lepiej! Od pierwszej rozmowy trafiliśmy w dobre ręce." },
  { name: "Elżbieta Sereda", text: "Parkiet był pełen od początku do końca wesela." },
  { name: "Patrycja B", text: "Całe wesele było super poprowadzone, parkiet zawsze był pełen." },
  { name: "Nicola", text: "Wspaniały DJ! Piosenki bardzo dobrze dobrane dla każdego." },
  { name: "Maria Jasińska", text: "Prowadzenie imprezy profesjonalne, a jednocześnie z pasją i zaangażowaniem." },
  { name: "Mariusz Grigo", text: "Nasze wesele było niezapomniane, muzyka na najwyższym poziomie." },
  { name: "Lena Dawidziuk", text: "Wspaniały DJ! Piosenki dopasowane do każdego." },
  { name: "Paulina Szturo", text: "Rozkręcą każdą imprezę. Świetna zabawa i profesjonalne podejście." },
  { name: "Anna Krawczyk", text: "Najlepsi w mieście. Bardzo dobra komunikacja i zawsze jakość." },
  { name: "Gildas Boursin", text: "Super dobrze zorganizowana akcja, nagłośnienie wysokiej jakości." },
  { name: "Maja", text: "Mega zabawa. Wiemy już, że Panowie będą także u nas." },
  { name: "Edyta Kaźmierczak", text: "Super zabawa, polecam." },
] as const;

function ArrowUpRightIcon() {
  return (
    <svg className="inlineArrowIcon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

function ArrowUpIcon() {
  return (
    <svg className="inlineArrowIcon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 19V5M6 11l6-6 6 6" />
    </svg>
  );
}

function StepSceneIcon({ type }: { type: "enter" | "orbit" | "effect" | "delivery" }) {
  if (type === "enter") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <ellipse className="stepIconGhost" cx="32" cy="51" rx="22" ry="7" />
        <path className="stepIconAccent" d="M12 51c4.5 4.7 12 7 20 7s15.5-2.3 20-7" />
        <circle className="stepIconSoftFill" cx="32" cy="24" r="5" />
        <path d="M23 44v-8.5a9 9 0 0 1 18 0V44M18 45h28" />
        <circle className="stepIconGhost" cx="18" cy="29" r="3.5" />
        <circle className="stepIconGhost" cx="46" cy="29" r="3.5" />
        <path className="stepIconGhost" d="M12 43v-5a6 6 0 0 1 9-5.2M52 43v-5a6 6 0 0 0-9-5.2" />
        <path className="stepIconAccent" d="m27 14 5-5 5 5M32 9v9" />
      </svg>
    );
  }

  if (type === "orbit") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <g className="stepIconOrbit">
          <path className="stepIconGhost stepIconDash" d="M11 32a21 21 0 1 1 7 15.7" />
          <path className="stepIconAccent" d="m12 43 6 5-1-8" />
        </g>
        <ellipse cx="32" cy="46" rx="14" ry="4.5" />
        <circle className="stepIconSoftFill" cx="32" cy="31" r="5" />
        <path d="M25 42v-5a7 7 0 0 1 14 0v5" />
        <path className="stepIconAccent" d="M46 13v13M46 13l8 4v8l-8 3M43 13h6" />
        <circle className="stepIconSolid" cx="46" cy="31" r="2" />
      </svg>
    );
  }

  if (type === "effect") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect x="11" y="17" width="42" height="32" rx="7" />
        <path className="stepIconGhost" d="M11 26h42M21 17v9M43 17v9" />
        <path d="M19 41h8M31 41h14" />
        <circle className="stepIconSoftFill" cx="31" cy="41" r="3" />
        <path className="stepIconAccent" d="m40 7 2.2 6.1L48 15l-5.8 1.9L40 23l-2.2-6.1L32 15l5.8-1.9L40 7Z" />
        <path className="stepIconAccent" d="m52 29 1.2 3.3 3.3 1.2-3.3 1.2L52 38l-1.2-3.3-3.3-1.2 3.3-1.2L52 29Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <rect x="18" y="8" width="28" height="48" rx="7" />
      <path className="stepIconGhost" d="M27 13h10M28 51h8" />
      <path d="M24 21h6v6h-6zM35 21h5v5h-5zM24 32h5v5h-5zM35 32h5v6h-6v-3" />
      <path className="stepIconAccent stepScanLine" d="M14 30h36" />
      <circle className="stepIconSoftFill" cx="48" cy="46" r="9" />
      <path className="stepIconAccent" d="m44 46 3 3 5-6" />
      <path className="stepIconGhost" d="M10 24v-5a5 5 0 0 1 5-5h2M54 24v-5a5 5 0 0 0-5-5h-2" />
    </svg>
  );
}

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reviewsRailRef = useRef<HTMLDivElement>(null);
  const [soundOn, setSoundOn] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.defaultMuted = true;
    video.muted = true;
    video.loop = true;

    const playVideo = () => {
      if (video.paused) void video.play().catch(() => undefined);
    };
    const resumeWhenVisible = () => {
      if (!document.hidden) playVideo();
    };

    playVideo();
    video.addEventListener("loadeddata", playVideo);
    video.addEventListener("canplay", playVideo);
    window.addEventListener("pageshow", playVideo);
    document.addEventListener("visibilitychange", resumeWhenVisible);

    return () => {
      video.removeEventListener("loadeddata", playVideo);
      video.removeEventListener("canplay", playVideo);
      window.removeEventListener("pageshow", playVideo);
      document.removeEventListener("visibilitychange", resumeWhenVisible);
    };
  }, []);

  const toggleSound = async () => {
    const video = videoRef.current;
    if (!video) return;
    const nextSoundState = !soundOn;
    video.muted = !nextSoundState;
    setSoundOn(nextSoundState);
    try {
      if (video.paused) await video.play();
    } catch {
      video.muted = true;
      setSoundOn(false);
      void video.play().catch(() => undefined);
    }
  };

  const scrollReviews = (direction: -1 | 1) => {
    const rail = reviewsRailRef.current;
    if (!rail) return;
    rail.scrollBy({ left: direction * Math.min(rail.clientWidth * 0.82, 860), behavior: "smooth" });
  };

  return (
    <main>
      <header className="siteHeader">
        <a className="brand" href="#start" aria-label="dlawas.fun, strona główna">
          <img className="brandLogo" src="/logo-dlawas-fun-nav.png" alt="dlawas.fun" />
        </a>

        <nav className="desktopNav" aria-label="Główna nawigacja">
          <a href="#jak-to-dziala">Jak to działa</a>
          <a href="#realizacje">Fotobudka 360</a>
          <a href="#wiecej-o-nas">Więcej o nas</a>
          <a href="#inne-atrakcje">Inne atrakcje</a>
          <a className="mobileHiddenNav" href="#opinie">Opinie</a>
          <a href="#kontakt">Kontakt</a>
        </nav>

        <div className="headerSocials" aria-label="Kontakt i media społecznościowe">
          <a href="tel:+48780059216" aria-label="Zadzwoń: 780 059 216" title="780 059 216">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.2 3.5 10 7.8 8.2 9.6c1.3 2.6 3.5 4.8 6.1 6.1l1.8-1.8 4.3 2.8c.4.3.6.8.5 1.3l-.5 2.2c-.1.5-.6.8-1.1.8C10.3 21 3 13.7 3 4.7c0-.5.3-1 .8-1.1L6 3.1c.5-.1 1 .1 1.2.4Z" /></svg>
          </a>
          <a className="emailShortcut" href="mailto:kontakt@dlawas.fun" aria-label="Napisz e-mail: kontakt@dlawas.fun" title="kontakt@dlawas.fun">
            <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg>
          </a>
          <a href="https://www.instagram.com/dlawas.fun/" target="_blank" rel="noreferrer" aria-label="Instagram dlawas.fun" title="Instagram">
            <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4.2" /><circle className="socialDot" cx="17.4" cy="6.7" r="1" /></svg>
          </a>
          <a href="https://www.facebook.com/p/Dlawasfun-61572704770269/" target="_blank" rel="noreferrer" aria-label="Facebook dlawas.fun" title="Facebook">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path className="socialFill" d="M13.6 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.4V13h2.8v8h3.4Z" /></svg>
          </a>
          <a className="websiteShortcut" href="https://www.dlawas.fun/" target="_blank" rel="noreferrer" aria-label="Otwórz stronę dlawas.fun" title="dlawas.fun">
            <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.3 2.5 3.5 5.5 3.5 9S14.3 18.5 12 21M12 3C9.7 5.5 8.5 8.5 8.5 12s1.2 6.5 3.5 9" /></svg>
          </a>
        </div>
      </header>

      <section className="hero" aria-label="Fotobudka 360, film z realizacji">
        <picture className="heroPoster">
          <source media="(max-width: 767px) and (orientation: portrait)" srcSet="/media/hero-poster-mobile.jpg" />
          <img src="/media/hero-poster-desktop.jpg" alt="" />
        </picture>

        <video ref={videoRef} className="heroVideo" autoPlay muted loop playsInline preload="auto" aria-hidden="true">
          <source media="(max-width: 767px) and (orientation: portrait)" src="/media/hero-mobile.mp4" type="video/mp4" />
          <source src="/media/hero-desktop.mp4" type="video/mp4" />
        </video>

        <div className="heroShade" aria-hidden="true" />
        <div className="heroGlow" aria-hidden="true" />
        <div className="heroGrain" aria-hidden="true" />

        <div className="heroContent" id="start">
          <p className="eyebrow"><span /> Fotobudka 360° • Mazury • Eventy • Wesela</p>
          <h1>Twoja impreza<br /><em>W pełnym obrocie</em></h1>
          <p className="heroLead">Dynamiczne klipy 360°, efektowne slow motion i gotowy film prosto na telefon jeszcze w trakcie imprezy. Obsługujemy Giżycko, Mikołajki, Ryn, Mrągowo i całe Mazury.</p>
          <div className="heroActions">
            <a className="primaryButton" href="#kontakt">
              <span>Zarezerwuj fotobudkę</span>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </a>
            <a className="textButton" href="#jak-to-dziala">Zobacz, jak to działa</a>
          </div>
        </div>

        <div className="heroMeta" aria-label="Najważniejsze informacje">
          <div><strong>360°</strong><span>pełny obrót kamery</span></div>
          <div><strong>SLOW</strong><span>efekt slow motion</span></div>
          <div><strong>QR</strong><span>szybki odbiór filmu</span></div>
        </div>

        <button className="soundToggle" type="button" onClick={toggleSound} aria-pressed={soundOn} aria-label={soundOn ? "Wycisz muzykę" : "Włącz muzykę"}>
          {soundOn ? (
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 9v6h4l5 4V5L9 9H5Z" /><path d="M17 9c1.4 1.5 1.4 4.5 0 6M19.5 6.5c3 3 3 8 0 11" /></svg>
          ) : (
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 9v6h4l5 4V5L9 9H5Z" /><path d="m17 10 5 5m0-5-5 5" /></svg>
          )}
          <span>{soundOn ? "Muzyka gra" : "Włącz muzykę"}</span>
        </button>

        <a className="scrollCue" href="#jak-to-dziala" aria-label="Przewiń niżej">
          <span>Przewiń</span>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v16M6 14l6 6 6-6" /></svg>
        </a>
      </section>

      <section className="howItWorks" id="jak-to-dziala" aria-labelledby="how-heading">
        <div className="howGlow" aria-hidden="true" />
        <div className="sectionShell">
          <div className="howIntro">
            <div>
              <p className="sectionKicker"><span>01</span> Jak to działa</p>
              <h2 id="how-heading">Nie stoi z boku<br /><em>Rozkręca imprezę</em></h2>
            </div>
            <p className="howLead">Fotobudka 360° nie prosi gości o grzeczne ustawienie się do zdjęcia. Wciąga ich do środka akcji z muzyką, ruchem, światłem i efektem, który od razu chce się pokazać dalej.</p>
          </div>

          <div className="experienceGrid">
            <figure className="experiencePhoto experiencePhotoMain">
              <div className="experienceReel" role="group" aria-label="Goście bawiący się na platformie fotobudki 360">
                <video autoPlay muted loop playsInline preload="metadata" poster="/media/how-it-works/experience-guest-a-poster.jpg" aria-label="Goście nagrywający klip w fotobudce 360">
                  <source src="/media/how-it-works/experience-guest-a.mp4" type="video/mp4" />
                </video>
                <video autoPlay muted loop playsInline preload="metadata" poster="/media/how-it-works/experience-queue-poster.jpg" aria-label="Goście tańczący na platformie fotobudki 360">
                  <source src="/media/how-it-works/experience-queue.mp4" type="video/mp4" />
                </video>
                <video className="experienceClipDesktop" autoPlay muted loop playsInline preload="metadata" poster="/media/how-it-works/experience-guest-b-poster.jpg" aria-label="Kolejny klip nagrywany w fotobudce 360">
                  <source media="(min-width: 768px)" src="/media/how-it-works/experience-guest-b.mp4" type="video/mp4" />
                </video>
              </div>
              <figcaption><strong>Moment, do którego ustawia się kolejka</strong></figcaption>
            </figure>
            <div className="experiencePitch">
              <span className="pitchNumber">360°</span>
              <h3>Każdy na chwilę staje się gwiazdą własnego klipu</h3>
              <p>Wchodzicie na platformę, wybieracie najlepszą pozę albo robicie totalny freestyle. Ramię kamery płynnie okrąża grupę i łapie energię z każdej strony.</p>
              <div className="pitchTags" aria-label="Rodzaje imprez">
                <span>Wesela</span><span>18-stki</span><span>Studniówki</span><span>Eventy firmowe</span>
              </div>
            </div>
          </div>

          <div className="stepsHeader">
            <p className="sectionKicker"><span>02</span> Cztery proste kroki</p>
            <p>Bez aplikacji, bez czekania na montaż, bez sztywnego pozowania.</p>
          </div>

          <div className="stepsGrid">
            <article className="stepCard">
              <div className="stepTop"><span className="stepIndex">01</span><div className="stepIcon"><StepSceneIcon type="enter" /></div></div>
              <h3>Wchodzicie</h3>
              <p>Solo, we dwoje albo całą ekipą. Obsługa podpowiada, jak ustawić się na platformie i odpala ujęcie.</p>
            </article>
            <article className="stepCard">
              <div className="stepTop"><span className="stepIndex">02</span><div className="stepIcon"><StepSceneIcon type="orbit" /></div></div>
              <h3>Kamera robi obrót</h3>
              <p>Ramię zatacza pełne 360°, a wy tańczycie, śmiejecie się, rzucacie konfetti albo robicie efektowne przejście.</p>
            </article>
            <article className="stepCard">
              <div className="stepTop"><span className="stepIndex">03</span><div className="stepIcon"><StepSceneIcon type="effect" /></div></div>
              <h3>Dodajemy efekt</h3>
              <p>Slow motion, dynamiczne tempo, muzyka i oprawa wydarzenia zamieniają zwykłe ujęcie w gotowy klip.</p>
            </article>
            <article className="stepCard stepCardAccent">
              <div className="stepTop"><span className="stepIndex">04</span><div className="stepIcon"><StepSceneIcon type="delivery" /></div></div>
              <h3>Skanujecie i macie</h3>
              <p>Gotowy film trafia prosto na telefon. Można go zapisać, wysłać znajomym albo wrzucić do social mediów jeszcze na imprezie.</p>
            </article>
          </div>

          <div className="partyProof" id="realizacje">
            <div className="partyCollage" aria-label="Energia podczas imprezy">
              <figure className="partyImage partyImageOne"><Image src="/media/how-it-works/platform-guests.webp" alt="Goście nagrywający wspólny klip na platformie 360" fill sizes="(max-width: 767px) 70vw, (max-width: 1200px) 65vw, 560px" /></figure>
              <figure className="partyVideo">
                <video autoPlay muted loop playsInline preload="metadata" poster="/media/how-it-works/party-loop-poster.jpg" aria-label="Krótki film z energetycznej imprezy">
                  <source src="/media/how-it-works/party-loop.mp4" type="video/mp4" />
                </video>
              </figure>
              <div className="orbitBadge" aria-hidden="true"><span>pełny obrót</span><b>360°</b></div>
            </div>
            <div className="partyCopy">
              <p className="sectionKicker"><span>03</span> Dlaczego robi robotę</p>
              <h2>Goście nie oglądają atrakcji<br /><em>Sami ją tworzą</em></h2>
              <p>Najlepsze momenty zaczynają się wtedy, gdy ktoś rzuca: „chodźcie, robimy to razem”. Fotobudka przełamuje pierwsze lody, łączy różne grupy gości i daje naturalny powód, żeby wrócić po kolejny klip.</p>
              <ul className="benefitList">
                <li><span>01</span><div><strong>Wciąga od pierwszego obrotu</strong><p>Ruch platformy przyciąga wzrok i natychmiast budzi ciekawość.</p></div></li>
                <li><span>02</span><div><strong>Łączy ludzi</strong><p>Rodzina, znajomi i współpracownicy szybko zamieniają się w jedną ekipę.</p></div></li>
                <li><span>03</span><div><strong>Zostaje na dłużej</strong><p>Z imprezy zabieracie nie tylko wspomnienie, ale też krótkie filmy pełne emocji.</p></div></li>
              </ul>
            </div>
          </div>

          <div className="featureRail" aria-label="Co otrzymują goście">
            <div><strong>360°</strong><span>pełny ruch kamery</span></div>
            <div><strong>SLOW</strong><span>kinowy efekt zwolnienia</span></div>
            <div><strong>QR</strong><span>film od razu na telefonie</span></div>
            <div><strong>FUN</strong><span>obsługa, która rozkręca ekipę</span></div>
          </div>

          <div className="offerIntro" id="wiecej-o-nas">
            <p className="sectionKicker"><span>04</span> Więcej o nas</p>
            <div className="offerIntroCopy">
              <h2>Od pierwszego bitu<br /><em>do ostatniego światła</em></h2>
              <p>dlawas.fun to nie tylko fotobudka. W Giżycku, Mikołajkach, Rynie, Mrągowie i całym regionie zapewniamy fotobudkę 360 oraz kompleksową oprawę imprez na Mazurach: DJ-a, wodzireja, nagłośnienie i oświetlenie. Każdy element dopasowujemy do miejsca, liczby gości i charakteru wydarzenia.</p>
            </div>
          </div>

          <div className="serviceGrid">
            <article className="serviceCard serviceCardFeatured">
              <div className="serviceMedia">
                <video autoPlay muted loop playsInline preload="metadata" poster="/media/services/wesela.jpg" aria-label="Goście bawiący się podczas wesela">
                  <source src="/media/services/wesela.mp4" type="video/mp4" />
                </video>
                <div className="serviceMediaTop">
                  <span className="serviceNumber">01</span>
                  <div className="serviceIcon" aria-hidden="true"><svg viewBox="0 0 32 32"><circle cx="12.5" cy="18" r="6.5" /><circle cx="19.5" cy="18" r="6.5" /><path d="m16 3 1.1 3 3 1.1-3 1.1-1.1 3-1.1-3-3-1.1 3-1.1L16 3Z" /></svg></div>
                </div>
              </div>
              <div className="serviceBody">
                <h3>Wesela</h3>
                <p>Dbamy o wyjątkową atmosferę dla Pary Młodej i wszystkich gości. Odpowiednio dobrana muzyka, dynamiczne prowadzenie oraz wyczucie parkietu pozwalają porwać do tańca nawet najbardziej opornych. Łączymy największe hity, klasyczne przeboje i nowoczesne brzmienia tak, aby każde pokolenie znalazło coś dla siebie.</p>
                <a href="#kontakt">Zapytaj o termin <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg></a>
              </div>
            </article>

            <article className="serviceCard">
              <div className="serviceMedia">
                <video autoPlay muted loop playsInline preload="metadata" poster="/media/services/eventy.jpg" aria-label="DJ prowadzący event dla pełnego parkietu">
                  <source src="/media/services/eventy.mp4" type="video/mp4" />
                </video>
                <div className="serviceMediaTop">
                  <span className="serviceNumber">02</span>
                  <div className="serviceIcon" aria-hidden="true"><svg viewBox="0 0 32 32"><path d="M5 26h22M8 26v-8h16v8M10 18l6-9 6 9" /><circle cx="7" cy="7" r="2" /><circle cx="25" cy="7" r="2" /><path d="m8.5 8.5 5 7M23.5 8.5l-5 7M16 4v5" /></svg></div>
                </div>
              </div>
              <div className="serviceBody">
                <h3>Eventy</h3>
                <p>Tworzymy oprawę eventów firmowych, urodzin, jubileuszy i festiwali. Zapewniamy muzykę, profesjonalne nagłośnienie oraz efektowne oświetlenie dopasowane do charakteru wydarzenia. Prowadzimy imprezę tak, aby goście czuli się swobodnie i mieli naturalny powód, żeby wejść na parkiet.</p>
                <a href="#kontakt">Zapytaj o termin <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg></a>
              </div>
            </article>

            <article className="serviceCard">
              <div className="serviceMedia">
                <video autoPlay muted loop playsInline preload="metadata" poster="/media/services/naglosnienie.jpg" aria-label="Profesjonalna konsoleta DJ i sprzęt nagłośnieniowy">
                  <source src="/media/services/naglosnienie.mp4" type="video/mp4" />
                </video>
                <div className="serviceMediaTop">
                  <span className="serviceNumber">03</span>
                  <div className="serviceIcon" aria-hidden="true"><svg viewBox="0 0 32 32"><rect x="8" y="3.5" width="16" height="25" rx="3" /><circle cx="16" cy="11" r="3" /><circle cx="16" cy="21" r="5" /><path d="M4.5 10c-2 3.5-2 8.5 0 12M27.5 10c2 3.5 2 8.5 0 12" /></svg></div>
                </div>
              </div>
              <div className="serviceBody">
                <h3>Nagłośnienie</h3>
                <p>Czysty i równomierny dźwięk dopasowujemy do przestrzeni oraz liczby uczestników. Profesjonalny sprzęt i właściwa konfiguracja ograniczają zakłócenia, pogłos oraz martwe strefy. Obsługujemy zarówno eleganckie wesela i eventy firmowe, jak również występy, prezentacje i spektakle.</p>
                <a href="#kontakt">Zapytaj o termin <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg></a>
              </div>
            </article>

            <article className="serviceCard serviceCardColor">
              <div className="serviceMedia">
                <video autoPlay muted loop playsInline preload="metadata" poster="/media/services/animacje.jpg" aria-label="Dynamiczna zabawa i taniec podczas imprezy">
                  <source src="/media/services/animacje.mp4" type="video/mp4" />
                </video>
                <div className="serviceMediaTop">
                  <span className="serviceNumber">04</span>
                  <div className="serviceIcon" aria-hidden="true"><svg viewBox="0 0 32 32"><circle cx="14" cy="7" r="3" /><path d="m14 11-4 5 5 3-2 9M14 12l5 4 5-3M16 19l5 8" /><path d="m25 4 .8 2.2L28 7l-2.2.8L25 10l-.8-2.2L22 7l2.2-.8L25 4ZM6 20l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7.7-2Z" /></svg></div>
                </div>
              </div>
              <div className="serviceBody">
                <h3>Animacje</h3>
                <p>Łączymy ruch, muzykę i interakcję w aktywności dla dzieci oraz dorosłych. Gry, tańce, zabawy tematyczne i wspólne sekwencje pomagają przełamać pierwsze lody i angażują całe grupy. Program dopasowujemy do wieku uczestników, tempa wydarzenia oraz dostępnej przestrzeni.</p>
                <a href="#kontakt">Zapytaj o termin <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg></a>
              </div>
            </article>
          </div>

          <div className="attractionsIntro" id="inne-atrakcje">
            <p className="sectionKicker"><span>05</span> Inne atrakcje</p>
            <div className="attractionsIntroCopy">
              <h2>Jeszcze więcej emocji<br /><em>W jednym wydarzeniu</em></h2>
              <p>Do muzyki i fotobudki możecie dobrać dodatki, które budują klimat od ceremonii aż po finał imprezy. Łączymy je w spójną oprawę, żeby każdy moment miał własny efekt wow.</p>
            </div>
          </div>

          <div className="attractionsGrid">
            <article className="musicAttraction">
              <div className="musicAttractionHero">
                <img src="/media/attractions/oprawa-muzyczna.webp" alt="DJ pracujący przy profesjonalnej konsolecie" loading="lazy" />
                <span className="attractionIndex">01</span>
                <div className="attractionIcon attractionIconMusic" aria-hidden="true">
                  <svg viewBox="0 0 40 40"><path d="M7 25V15M12 30V10M17 27V13M22 34V6M27 28V12M32 24V16" /><path d="M5 34h30M5 6h30" /></svg>
                </div>
                <div className="musicAttractionCopy">
                  <span className="attractionLabel">DJ-e i wodzireje</span>
                  <h3>Oprawa muzyczna</h3>
                  <p>dlawas.fun zapewnia kompleksową obsługę muzyczną wesel i eventów. Doświadczenie, wyczucie parkietu oraz światło i dźwięk dopasowane do miejsca budują energię od pierwszego utworu do finału.</p>
                  <a href="#kontakt">Zapytaj o oprawę <span><ArrowUpRightIcon /></span></a>
                </div>
              </div>

              <div className="musicTeam" aria-label="DJ-e i wodzireje dlawas.fun">
                {musicTeam.map((person) => (
                  <article className="musicPerson" key={person.name}>
                    <div className="musicPersonPhoto">
                      <Image src={person.image} alt={`${person.name}, DJ i wodzirej dlawas.fun`} fill sizes="(max-width: 767px) 42vw, (max-width: 1200px) 22vw, 260px" />
                    </div>
                    <div className="musicPersonCopy">
                      <span>Oprawa muzyczna</span>
                      <h4>{person.name}</h4>
                      <p>{person.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </article>

            <article className="attractionCard">
              <div className="attractionMedia">
                <img src="/media/attractions/iskry.webp" alt="Para Młoda tańcząca pomiędzy fontannami zimnych iskier" loading="lazy" />
                <span className="attractionIndex">02</span>
                <div className="attractionIcon attractionIconSpark" aria-hidden="true">
                  <svg viewBox="0 0 40 40"><path d="M20 4v10M20 26v10M4 20h10M26 20h10M8.7 8.7l7.1 7.1M24.2 24.2l7.1 7.1M31.3 8.7l-7.1 7.1M15.8 24.2l-7.1 7.1" /><circle cx="20" cy="20" r="4" /></svg>
                </div>
              </div>
              <div className="attractionBody">
                <span className="attractionLabel">Efekt wow</span>
                <h3>Fontanna iskier</h3>
                <p>Spektakularna oprawa pierwszego tańca, wejścia lub kulminacyjnego momentu. Zimne iskry dają widowiskowy efekt na żywo i świetnie wyglądają na filmach.</p>
                <a href="#kontakt">Dodaj do wydarzenia <span><ArrowUpRightIcon /></span></a>
              </div>
            </article>

            <article className="attractionCard">
              <div className="attractionMedia">
                <img src="/media/attractions/swiatlo.webp" alt="Oświetlony parkiet i sala podczas przyjęcia weselnego" loading="lazy" />
                <span className="attractionIndex">03</span>
                <div className="attractionIcon" aria-hidden="true">
                  <svg viewBox="0 0 40 40"><path d="M8 31h24M12 31l5-18h6l5 18M15 20h10M7 9l7 5M33 9l-7 5M20 3v7" /><path d="M11 35h18" /></svg>
                </div>
              </div>
              <div className="attractionBody">
                <span className="attractionLabel">Klimat</span>
                <h3>Dekoracja światłem</h3>
                <p>Kolorem i światłem podkreślamy architekturę sali, strefę Pary Młodej oraz parkiet. Całość dopasowujemy do motywu przewodniego i rytmu imprezy.</p>
                <a href="#kontakt">Dodaj do wydarzenia <span><ArrowUpRightIcon /></span></a>
              </div>
            </article>

            <article className="attractionCard">
              <div className="attractionMedia">
                <img src="/media/attractions/dym.webp" alt="Pierwszy taniec Pary Młodej w chmurach ciężkiego dymu" loading="lazy" />
                <span className="attractionIndex">04</span>
                <div className="attractionIcon attractionIconCloud" aria-hidden="true">
                  <svg viewBox="0 0 40 40"><path d="M10 27h19a6 6 0 0 0 .5-12A10 10 0 0 0 10.8 18 4.5 4.5 0 0 0 10 27Z" /><path d="M7 32h26M12 36h18" /></svg>
                </div>
              </div>
              <div className="attractionBody">
                <span className="attractionLabel">Pierwszy taniec</span>
                <h3>Ciężki dym</h3>
                <p>Gęsta chmura utrzymuje się nisko nad parkietem i tworzy efekt tańca w obłokach. To eleganckie tło dla pierwszego tańca oraz wyjątkowych ujęć.</p>
                <a href="#kontakt">Dodaj do wydarzenia <span><ArrowUpRightIcon /></span></a>
              </div>
            </article>

            <article className="attractionCard attractionCardHalf">
              <div className="attractionMedia">
                <img src="/media/attractions/saksofonista.webp" alt="Saksofonista grający podczas przyjęcia" loading="lazy" />
                <span className="attractionIndex">05</span>
                <div className="attractionIcon attractionIconSax" aria-hidden="true">
                  <svg viewBox="0 0 40 40"><path d="M15 5h8l-2 6v10c0 6 3 10 8 10 3 0 5-2 5-5 0-2-1-4-3-5" /><path d="M20 12h-5M20 17h-6M21 22h-5M29 21l3-3M27 17l3-3" /><circle cx="14" cy="12" r="1.3" /><circle cx="13" cy="18" r="1.3" /><path d="M10 7c4 0 6 2 6 5v10c0 8 4 13 11 13" /></svg>
                </div>
              </div>
              <div className="attractionBody">
                <span className="attractionLabel">Na żywo</span>
                <h3>Saksofonista</h3>
                <p>Brzmienie saksofonu dodaje elegancji ceremonii, kolacji i pierwszemu tańcowi, a później świetnie łączy się z setem DJ-a. Repertuar i charakter występu dopasowujemy do momentu wydarzenia.</p>
                <a href="#kontakt">Dodaj do wydarzenia <span><ArrowUpRightIcon /></span></a>
              </div>
            </article>

            <article className="attractionCard attractionCardHalf">
              <div className="attractionMedia">
                <img src="/media/attractions/love.webp" alt="Podświetlany napis LOVE na czarnym tle" loading="lazy" />
                <span className="attractionIndex">06</span>
                <div className="attractionIcon attractionIconHeart" aria-hidden="true">
                  <svg viewBox="0 0 40 40"><path d="M20 33S7 25 7 15.5C7 9.8 14.2 7 20 13c5.8-6 13-3.2 13 2.5C33 25 20 33 20 33Z" /><path d="m17 16 3 3 4-5" /></svg>
                </div>
              </div>
              <div className="attractionBody">
                <span className="attractionLabel">Dekoracja</span>
                <h3>Napis LOVE</h3>
                <p>Świetlny napis staje się mocnym punktem sali i naturalnym tłem do zdjęć. Dodaje ciepła aranżacji i jest widoczny przez całe przyjęcie.</p>
                <a href="#kontakt">Dodaj do wydarzenia <span><ArrowUpRightIcon /></span></a>
              </div>
            </article>

          </div>

          <div className="attractionsOutro">
            <div><span>6</span><p>atrakcji, z których ułożymy Wasz zestaw</p></div>
            <p>Nie musicie wybierać w ciemno. Powiedzcie nam, gdzie i dla ilu osób organizujecie wydarzenie, a podpowiemy atrakcje, które najlepiej zagrają razem.</p>
            <a className="primaryButton" href="#kontakt"><span>Ułóżmy Wasz pakiet</span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg></a>
          </div>

          <section className="reviewsSection" id="opinie" aria-labelledby="reviews-heading">
            <div className="reviewsIntro">
              <div>
                <p className="sectionKicker"><span>06</span> Opinie Google</p>
                <h2 id="reviews-heading">Najlepiej mówią o nas<br /><em>pełne parkiety</em></h2>
                <p>Pary Młode, goście i organizatorzy wracają do nas za atmosferę, kontakt i prowadzenie, które naprawdę angażuje ludzi.</p>
              </div>
              <a className="reviewsScore" href={googleReviewsUrl} target="_blank" rel="noreferrer" aria-label="Zobacz wszystkie opinie dlawas.fun w Google">
                <span className="reviewsGoogle" aria-hidden="true">G</span>
                <span><strong>5,0</strong><b aria-label="5 na 5 gwiazdek">★★★★★</b><small>16 opinii w Google</small></span>
                <ArrowUpRightIcon />
              </a>
            </div>

            <div className="reviewsControls">
              <p>Przesuwaj w prawo</p>
              <div>
                <button type="button" onClick={() => scrollReviews(-1)} aria-label="Poprzednie opinie"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6" /></svg></button>
                <button type="button" onClick={() => scrollReviews(1)} aria-label="Następne opinie"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg></button>
              </div>
            </div>

            <div className="reviewsRail" ref={reviewsRailRef} role="region" aria-label="Opinie klientów dlawas.fun" tabIndex={0}>
              {googleReviews.map((review, index) => (
                <article className="reviewCard" key={review.name}>
                  <div className="reviewCardTop"><span>{String(index + 1).padStart(2, "0")}</span><b aria-label="5 na 5 gwiazdek">★★★★★</b></div>
                  <blockquote>„{review.text}”</blockquote>
                  <footer><span>{review.name.charAt(0)}</span><p><strong>{review.name}</strong><small>Opinia Google</small></p></footer>
                </article>
              ))}
              <a className="reviewCard reviewCardMore" href={googleReviewsUrl} target="_blank" rel="noreferrer">
                <span className="reviewsGoogle" aria-hidden="true">G</span>
                <strong>Zobacz wszystkie opinie</strong>
                <p>Pełna lista i najnowsze wpisy znajdują się w profilu Google dlawas.fun.</p>
                <i><ArrowUpRightIcon /></i>
              </a>
            </div>
          </section>

          <section className="contactSection" id="kontakt" aria-labelledby="contact-heading">
            <div className="contactGlow" aria-hidden="true" />
            <div className="contactIntro">
              <p className="sectionKicker"><span>07</span> Kontakt</p>
              <div className="contactHeadline">
                <h2 id="contact-heading">Jeden kontakt<br /><em>Cała impreza ogarnięta</em></h2>
                <p>Opowiedzcie nam o swoim pomyśle. Sprawdzimy termin, dobierzemy fotobudkę 360, DJ-a i dodatki, a potem przedstawimy jasny plan bez przypadkowych elementów.</p>
              </div>
              <div className="contactHighlights" aria-label="Dlaczego warto się skontaktować">
                <span><b>01</b> Konkretny plan wydarzenia</span>
                <span><b>02</b> Pakiet dopasowany do miejsca</span>
                <span><b>03</b> Jedna ekipa, pełna realizacja</span>
              </div>
            </div>

            <div className="contactQuickActions" aria-label="Szybki kontakt">
              <a className="contactQuickAction contactQuickActionPrimary" href="tel:+48780059216" aria-label="Zadzwoń teraz pod numer 780 059 216">
                <i aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8.1 3.5H5.7a2 2 0 0 0-2 2.2c.8 7.7 6.9 13.8 14.6 14.6a2 2 0 0 0 2.2-2v-2.4a1.5 1.5 0 0 0-1.2-1.5l-3.1-.6a1.5 1.5 0 0 0-1.5.6l-.8 1a13 13 0 0 1-5.3-5.3l1-.8a1.5 1.5 0 0 0 .6-1.5l-.6-3.1a1.5 1.5 0 0 0-1.5-1.2Z" /></svg></i>
                <span><small>Najprościej i najszybciej</small><strong>Zadzwoń teraz</strong><em>780 059 216</em></span>
                <b aria-hidden="true"><ArrowUpRightIcon /></b>
              </a>
              <a className="contactQuickAction" href="mailto:kontakt@dlawas.fun?subject=Zapytanie%20o%20termin%20-%20dlawas.fun&body=Termin%3A%0AMiejsce%3A%0ARodzaj%20wydarzenia%3A%0ALiczba%20go%C5%9Bci%3A%0AInteresuj%C4%85ce%20us%C5%82ugi%3A%0A%0AKilka%20s%C5%82%C3%B3w%20o%20wydarzeniu%3A" aria-label="Napisz e-mail i zapytaj o termin">
                <i aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg></i>
                <span><small>Macie już datę?</small><strong>Zapytaj o termin</strong><em>kontakt@dlawas.fun</em></span>
                <b aria-hidden="true"><ArrowUpRightIcon /></b>
              </a>
            </div>

            <div className="contactGrid">
              <div className="contactMain">
                <p className="contactStatus"><i /> Porozmawiacie bezpośrednio z ekipą dlawas.fun</p>
                <div className="contactMainHeading">
                  <p>Wolicie od razu ustalić szczegóły?</p>
                  <h3>Zadzwońcie, pogadamy o Waszej imprezie</h3>
                </div>
                <div className="contactPeople">
                  <a href="tel:+48780059216" aria-label="Zadzwoń do Michała pod numer 780 059 216">
                    <Image className="contactPersonPhoto" src="/media/attractions/team/michal.webp" alt="" width={100} height={100} sizes="50px" />
                    <span><small>Michał • DJ i wodzirej</small><strong>780 059 216</strong></span>
                    <i aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8.1 3.5H5.7a2 2 0 0 0-2 2.2c.8 7.7 6.9 13.8 14.6 14.6a2 2 0 0 0 2.2-2v-2.4a1.5 1.5 0 0 0-1.2-1.5l-3.1-.6a1.5 1.5 0 0 0-1.5.6l-.8 1a13 13 0 0 1-5.3-5.3l1-.8a1.5 1.5 0 0 0 .6-1.5l-.6-3.1a1.5 1.5 0 0 0-1.5-1.2Z" /></svg></i>
                  </a>
                  <a href="tel:+48501314774" aria-label="Zadzwoń do Pawła pod numer 501 314 774">
                    <Image className="contactPersonPhoto" src="/media/attractions/team/pawel.webp" alt="" width={100} height={100} sizes="50px" />
                    <span><small>Paweł • DJ i wodzirej</small><strong>501 314 774</strong></span>
                    <i aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8.1 3.5H5.7a2 2 0 0 0-2 2.2c.8 7.7 6.9 13.8 14.6 14.6a2 2 0 0 0 2.2-2v-2.4a1.5 1.5 0 0 0-1.2-1.5l-3.1-.6a1.5 1.5 0 0 0-1.5.6l-.8 1a13 13 0 0 1-5.3-5.3l1-.8a1.5 1.5 0 0 0 .6-1.5l-.6-3.1a1.5 1.5 0 0 0-1.5-1.2Z" /></svg></i>
                  </a>
                </div>
                <div className="contactSocials" aria-label="dlawas.fun w internecie">
                  <span>Zobaczcie, jak pracujemy</span>
                  <div>
                    <a href="https://www.instagram.com/dlawas.fun/" target="_blank" rel="noreferrer">Instagram <b><ArrowUpRightIcon /></b></a>
                    <a href="https://www.facebook.com/p/Dlawasfun-61572704770269/" target="_blank" rel="noreferrer">Facebook <b><ArrowUpRightIcon /></b></a>
                    <a href="https://www.dlawas.fun/" target="_blank" rel="noreferrer">dlawas.fun <b><ArrowUpRightIcon /></b></a>
                  </div>
                </div>
              </div>

              <aside className="contactBrief" aria-label="Co podać w wiadomości">
                <div className="contactBriefIcon" aria-hidden="true">
                  <svg viewBox="0 0 40 40"><path d="M12 5h16a4 4 0 0 1 4 4v22a4 4 0 0 1-4 4H12a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4Z" /><path d="M14 3v5M26 3v5M8 13h24M14 20h5M14 26h12" /><circle cx="27" cy="20" r="1" /></svg>
                </div>
                <p className="contactBriefLabel">Wystarczy krótka wiadomość</p>
                <h3>Dajcie nam dobry punkt startu</h3>
                <ol>
                  <li><span>01</span><p><strong>Termin</strong>Data wydarzenia</p></li>
                  <li><span>02</span><p><strong>Miejsce i goście</strong>Miasto, sala i orientacyjna liczba osób</p></li>
                  <li><span>03</span><p><strong>Wasz pomysł</strong>Rodzaj imprezy i interesujące usługi</p></li>
                </ol>
                <a href="mailto:kontakt@dlawas.fun?subject=Zapytanie%20o%20termin%20-%20dlawas.fun&body=Termin%3A%0AMiejsce%3A%0ARodzaj%20wydarzenia%3A%0ALiczba%20go%C5%9Bci%3A%0AInteresuj%C4%85ce%20us%C5%82ugi%3A%0A%0AKilka%20s%C5%82%C3%B3w%20o%20wydarzeniu%3A" className="primaryButton contactWrite">
                  <span>Przygotuj wiadomość</span>
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </a>
              </aside>
            </div>

            <div className="contactMap">
              <div className="contactMapCopy">
                <p className="sectionKicker"><span>MAZURY</span> Nasz punkt na mapie</p>
                <h3>Z Giżycka<br /><em>na całe Mazury</em></h3>
                <p>Działamy lokalnie i znamy logistykę wydarzeń w regionie. Dojeżdżamy między innymi do Mikołajek, Rynu, Mrągowa, Węgorzewa, Ełku i okolic.</p>
                <div className="contactAreaTags" aria-label="Obsługiwane miejscowości">
                  <span>Giżycko</span><span>Mikołajki</span><span>Ryn</span><span>Mrągowo</span><span>Węgorzewo</span><span>Ełk</span>
                </div>
                <a className="mapLink" href="https://www.google.com/maps/search/?api=1&amp;query=3+Maja+11%2C+19-500+Gi%C5%BCycko" target="_blank" rel="noreferrer">Otwórz trasę w Mapach <ArrowUpRightIcon /></a>
              </div>
              <div className="contactMapFrame">
                <iframe title="Mapa Giżycka, siedziba dlawas.fun" src="https://www.openstreetmap.org/export/embed.html?bbox=21.724%2C54.006%2C21.826%2C54.075&amp;layer=mapnik&amp;marker=54.038%2C21.769" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                <div className="mapPinLabel" aria-hidden="true"><span>54°N</span><b>Giżycko</b><small>Serce Mazur</small></div>
              </div>
            </div>

            <footer className="siteFooter">
              <a href="#start" aria-label="Wróć na początek"><img src="/logo-dlawas-fun-nav.png" alt="dlawas.fun" /></a>
              <p>DJ • Fotobudka 360° • Oprawa wydarzeń</p>
              <div><Link href="/polityka-prywatnosci">Polityka prywatności</Link><span>© 2026 dlawas.fun</span><a href="#start">Wróć na górę <ArrowUpIcon /></a></div>
            </footer>
          </section>

          <aside className="hostCreditBar" aria-label="Autor projektu strony">
            <a className="hostCreditBrand" href="https://www.hostcontrol.pl/" target="_blank" rel="noreferrer" aria-label="Projekt strony: HostControl Krystian Stykowski">
              <Image className="hostCreditLogo" src="/hostcontrol-logo.svg" alt="" width={40} height={40} />
              <span className="hostCreditText">Zaprojektowano przez <strong>HostControl</strong> Krystian Stykowski</span>
            </a>
            <div className="hostCreditActions">
              <a href="tel:+48692746031" aria-label="Zadzwoń do HostControl: 692 746 031">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.2 3.5 10 7.8 8.2 9.6c1.3 2.6 3.5 4.8 6.1 6.1l1.8-1.8 4.3 2.8c.4.3.6.8.5 1.3l-.5 2.2c-.1.5-.6.8-1.1.8C10.3 21 3 13.7 3 4.7c0-.5.3-1 .8-1.1L6 3.1c.5-.1 1 .1 1.2.4Z" /></svg>
                <span>692 746 031</span>
              </a>
              <a className="hostCreditInstagram" href="https://www.instagram.com/much4ty" target="_blank" rel="noreferrer" aria-label="Instagram HostControl, much4ty">
                <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4.2" /><circle cx="17.4" cy="6.7" r="1" /></svg>
              </a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
