
import React, { createContext, useContext, useState, ReactNode } from 'react';
export const languages = [
  { code: 'en', flag: '🇺🇸', name: 'English' },
  { code: 'fr', flag: '🇫🇷', name: 'Français' },
  { code: 'de', flag: '🇩🇪', name: 'Deutsch' },
  { code: 'it', flag: '🇮🇹', name: 'Italiano' },
  { code: 'es', flag: '🇪🇸', name: 'Español' },
  { code: 'ko', flag: '🇰🇷', name: '한국어' }
];
// Spanish translations
const esTranslations: { [key: string]: string } = {
  'nav.home': 'Inicio',
  'nav.projects': 'Proyectos',
  'nav.about': 'Sobre mí',
  'nav.contact': 'Contacto',
  'hero.greeting': 'Hola, soy',
  'hero.name': 'John',
  'hero.role': 'Desarrollador Full-stack/Diseñador',
  'hero.description': 'Hola, soy John, un desarrollador web apasionado por crear sitios web responsivos y fáciles de usar. Trabajo con HTML, CSS, JavaScript y React, y actualmente estoy profundizando en el desarrollo front-end. Me encanta resolver problemas, experimentar con nuevas tecnologías y convertir conceptos de diseño en experiencias interactivas. Mi objetivo es seguir creciendo como desarrollador mientras construyo proyectos que realmente marquen la diferencia.',
  'hero.quote': 'Si nunca aceptas la frustración de perder, nunca crecerás',
  'hero.quote.author': '- Seishiro Nagi',
  'hero.cta': '¡Contáctame!',
  'hero.viewProjects': 'Ver proyectos',
  'contact.tooltip': '👈 ¡Contáctame aquí!',
  'about.title': 'Sobre mí',
  'about.subtitle': 'Conoce más sobre mí y mi trayectoria',
  'about.story.title': 'Mi historia',
  'about.story.content': '¡Hola! Soy John, un desarrollador web apasionado que disfruta creando experiencias digitales significativas. Mi camino en la programación comenzó por curiosidad y se ha convertido en una verdadera pasión por la resolución de problemas y la innovación.\n\nCreo que un gran código no solo debe ser funcional, sino también elegante, mantenible y centrado en el usuario. Cuando no estoy programando, exploro nuevas tecnologías, contribuyo a proyectos de código abierto o juego con amigos.\n\nMi objetivo es crear aplicaciones web que no solo se vean increíbles, sino que también ofrezcan soluciones significativas a problemas reales.',
  'about.facts.title': 'Curiosidades',
  'about.facts.coffee': 'Tazas de café consumidas',
  'about.facts.coding': 'Me levanto todos los días a las 6am para programar',
  'about.facts.gym': 'Me gusta ir al gimnasio',
  'about.facts.anime': 'Mi anime favorito es Tokyo Ghoul',
  'about.facts.projects': 'Proyectos completados',
  'about.facts.languages': 'Lenguajes de programación',
  'about.skills.title': 'Habilidades técnicas',
  'about.learning.title': 'Aprendiendo actualmente',
  'projects.title': 'Mis proyectos',
  'projects.subtitle': 'Una colección de proyectos inspirados en anime y aplicaciones web',
  'projects.filter.all': 'Todos los proyectos',
  'projects.filter.anime': 'Anime',
  'projects.filter.web': 'Desarrollo web',
  'projects.filter.game': 'Juegos',
  'projects.filter.mobile': 'Móvil',
  'projects.status.completed': 'completado',
  'projects.status.in-progress': 'en progreso',
  'projects.status.planned': 'planificado',
  'project.pokemon.title': 'Búsqueda de Pokémon & Carpeta Virtual',
  'project.pokemon.description': 'Una aplicación de búsqueda de Pokémon y carpeta virtual que permite a los usuarios buscar, ver detalles y guardar favoritos en su carpeta personal.',
  'project.portfolio.title': '¡Portafolio web actual!',
  'project.portfolio.description': 'Un sitio web de portafolio interactivo y divertido con efectos de glassmorphism y animaciones suaves.',
  'project.icebot.title': 'Ice Bot',
  'project.icebot.description': 'Un bot de Discord que obtiene información diaria de lanzamientos de juegos y la envía a tu servidor de Discord.',
};
// Korean translations (accurate and natural)
const koTranslations: { [key: string]: string } = {
  'nav.home': '홈',
  'nav.projects': '프로젝트',
  'nav.about': '소개',
  'nav.contact': '연락처',
  'hero.greeting': '안녕하세요, 저는',
  'hero.name': 'John',
  'hero.role': '풀스택 개발자/디자이너',
  'hero.description': '안녕하세요, 저는 반응형이고 사용자 친화적인 웹사이트를 만드는 데 열정을 가진 웹 개발자 John입니다. HTML, CSS, JavaScript, React를 사용하며, 프론트엔드 개발을 더 깊이 공부하고 있습니다. 문제 해결과 새로운 기술 실험, 디자인을 인터랙티브한 경험으로 바꾸는 것을 좋아합니다. 저의 목표는 개발자로서 계속 성장하며 실제로 의미 있는 프로젝트를 만드는 것입니다.',
  'hero.quote': '패배의 좌절을 받아들이지 않으면 결코 성장할 수 없다',
  'hero.quote.author': '- 세이시로 나기',
  'hero.cta': '연락하기!!',
  'contact.tooltip': '👈 여기로 연락하세요!',
  'about.title': '소개',
  'about.subtitle': '저와 저의 여정에 대해 더 알아보세요',
  'about.story.title': '나의 이야기',
  'about.story.content': '안녕하세요! 저는 의미 있는 디지털 경험을 만드는 것을 좋아하는 열정적인 웹 개발자 John입니다. 호기심에서 시작된 코딩이 문제 해결과 혁신에 대한 진정한 열정으로 발전했습니다. 훌륭한 코드는 단순히 동작하는 것뿐만 아니라, 우아하고 유지보수하기 쉬우며 사용자 중심이어야 한다고 믿습니다. 코딩하지 않을 때는 새로운 기술을 탐구하거나, 오픈소스에 기여하거나, 친구들과 게임을 즐깁니다. 저의 목표는 멋진 웹 애플리케이션을 만들고, 실제 문제에 의미 있는 해결책을 제공하는 것입니다.',
  'about.facts.title': '재미있는 사실',
  'about.facts.coffee': '마신 커피 잔 수',
  'about.facts.coding': '매일 아침 6시에 일어나 코딩합니다',
  'about.facts.gym': '헬스장 가는 것을 좋아합니다',
  'about.facts.anime': '제가 가장 좋아하는 애니메이션은 도쿄구울입니다',
  'about.facts.projects': '완료한 프로젝트',
  'about.facts.languages': '프로그래밍 언어',
  'about.skills.title': '기술 스킬',
  'about.learning.title': '현재 배우는 중',
  'projects.title': '나의 프로젝트',
  'projects.subtitle': '애니메이션에서 영감을 받은 프로젝트와 웹 애플리케이션 모음',
  'projects.filter.all': '전체 프로젝트',
  'projects.filter.anime': '애니메이션',
  'projects.filter.web': '웹 개발',
  'projects.filter.game': '게임',
  'projects.filter.mobile': '모바일',
  'projects.status.completed': '완료',
  'projects.status.in-progress': '진행 중',
  'projects.status.planned': '계획됨',
  // 프로젝트 내용 (원하는 대로 수정하세요)
  'project.pokemon.title': '포켓몬 검색 & 가상 바인더',
  'project.pokemon.description': '사용자가 포켓몬을 검색하고, 세부 정보를 보고, 즐겨찾기를 개인 바인더에 저장할 수 있는 포켓몬 검색 엔진 및 가상 바인더 앱입니다.',
  'project.portfolio.title': '현재 웹페이지 포트폴리오!',
  'project.portfolio.description': '글래스모피즘 효과와 부드러운 애니메이션이 있는 재미있는 인터랙티브 포트폴리오 웹사이트.',
  'project.icebot.title': '아이스 봇',
  'project.icebot.description': '게임의 일일 출시 정보를 가져와서 Discord 서버로 전송할 수 있는 Discord 봇입니다.',
};
// French translations (example)
const frTranslations: { [key: string]: string } = {
  'hero.viewProjects': 'Voir les projets',
  'nav.home': 'Accueil',
  'nav.projects': 'Projets',
  'nav.about': 'À propos',
  'nav.contact': 'Contact',
  'hero.greeting': "Salut, je suis",
  'hero.name': 'John',
  'hero.role': 'Développeur Full-stack/Designer',
  'hero.description': `Salut, je suis John — un développeur web passionné par la création de sites web réactifs et conviviaux. J'utilise HTML, CSS, JavaScript et React, et j'approfondis actuellement le développement front-end. J'aime résoudre des problèmes, expérimenter de nouvelles technologies et transformer des concepts de design en expériences interactives. Mon objectif est de continuer à progresser en tant que développeur tout en réalisant des projets qui ont un véritable impact.`,
  'hero.quote': "Si tu n'acceptes jamais la frustration de perdre, tu ne grandiras jamais",
  'hero.quote.author': '- Seishiro Nagi',
  'hero.cta': 'Contactez-moi!!',
  'contact.tooltip': '👈 Contactez-moi ici!',
  'about.title': 'À propos de moi',
  'about.subtitle': 'En savoir plus sur moi et mon parcours',
  'about.story.title': 'Mon histoire',
  'about.story.content': `Bonjour ! Je suis John, un développeur web passionné qui aime créer des expériences numériques qui comptent. Mon aventure dans le code a commencé par curiosité et s'est transformée en une véritable passion pour la résolution de problèmes et l'innovation.\n\nJe crois qu'un bon code ne doit pas seulement être fonctionnel, il doit aussi être élégant, maintenable et centré sur l'utilisateur. Quand je ne code pas, j'explore de nouvelles technologies, je contribue à des projets open source ou je joue avec des amis.\n\nMon objectif est de créer des applications web qui non seulement sont superbes, mais apportent aussi des solutions concrètes à des problèmes réels.`,
  'about.facts.title': 'Anecdotes',
  'about.facts.coffee': 'Tasses de café consommées',
  'about.facts.coding': 'Je me lève tous les matins à 6h pour coder',
  'about.facts.gym': 'J’aime aller à la salle de sport',
  'about.facts.anime': 'Mon anime préféré est Tokyo Ghoul',
  'about.facts.projects': 'Projets réalisés',
  'about.facts.languages': 'Langages de programmation',
  'about.skills.title': 'Compétences techniques',
  'about.learning.title': 'J’apprends actuellement',
  'projects.title': 'Mes projets',
  'projects.subtitle': 'Une collection de projets inspirés par l’anime et d’applications web',
  'projects.filter.all': 'Tous les projets',
  'projects.filter.anime': 'Anime',
  'projects.filter.web': 'Développement Web',
  'projects.filter.game': 'Jeux',
  'projects.filter.mobile': 'Mobile',
  'projects.status.completed': 'terminé',
  'projects.status.in-progress': 'en cours',
  'projects.status.planned': 'prévu',
  // Project Content (à remplir)
  'project.pokemon.title': 'Recherche Pokémon & Classeur Virtuel',
  'project.pokemon.description': 'Une application de recherche Pokémon et classeur virtuel permettant de rechercher, voir les détails et sauvegarder ses favoris.',
  'project.portfolio.title': 'Portfolio Web Actuel !',
  'project.portfolio.description': 'Un site portfolio interactif et amusant avec des effets glassmorphism et des animations fluides.',
  'project.icebot.title': 'Ice Bot',
  'project.icebot.description': 'Un bot Discord qui récupère les sorties de jeux du jour et les envoie sur votre serveur Discord.',
};

// German translations (example)
const deTranslations: { [key: string]: string } = {
  'hero.viewProjects': 'Projekte ansehen',
  'nav.home': 'Startseite',
  'nav.projects': 'Projekte',
  'nav.about': 'Über mich',
  'nav.contact': 'Kontakt',
  'hero.greeting': 'Hallo, ich bin',
  'hero.name': 'John',
  'hero.role': 'Full-Stack-Entwickler/Designer',
  'hero.description': `Hallo, ich bin John — ein Webentwickler mit Leidenschaft für die Erstellung von responsiven und benutzerfreundlichen Websites. Ich arbeite mit HTML, CSS, JavaScript und React und vertiefe mich derzeit noch mehr in die Frontend-Entwicklung. Ich liebe es, Probleme zu lösen, neue Technologien auszuprobieren und Designkonzepte in interaktive Erlebnisse zu verwandeln. Mein Ziel ist es, als Entwickler stetig zu wachsen und Projekte zu realisieren, die wirklich etwas bewirken.`,
  'hero.quote': 'Wenn du die Frustration des Verlierens nie akzeptierst, wirst du nie wachsen',
  'hero.quote.author': '- Seishiro Nagi',
  'hero.cta': 'Kontaktiere mich!!',
  'contact.tooltip': '👈 Kontaktiere mich hier!',
  'about.title': 'Über mich',
  'about.subtitle': 'Erfahren Sie mehr über mich und meinen Werdegang',
  'about.story.title': 'Meine Geschichte',
  'about.story.content': `Hallo! Ich bin John, ein leidenschaftlicher Webentwickler, der es liebt, digitale Erlebnisse zu schaffen, die einen Unterschied machen. Mein Weg zum Programmieren begann aus Neugier und entwickelte sich zu einer echten Leidenschaft für Problemlösung und Innovation.\n\nIch bin überzeugt, dass großartiger Code nicht nur funktionieren, sondern auch elegant, wartbar und benutzerorientiert sein sollte. Wenn ich nicht programmiere, erkunde ich neue Technologien, trage zu Open-Source-Projekten bei oder spiele mit Freunden.\n\nMein Ziel ist es, Webanwendungen zu entwickeln, die nicht nur großartig aussehen, sondern auch sinnvolle Lösungen für reale Probleme bieten.`,
  'about.facts.title': 'Interessante Fakten',
  'about.facts.coffee': 'Getrunkene Kaffeetassen',
  'about.facts.coding': 'Ich stehe jeden Morgen um 6 Uhr auf, um zu programmieren',
  'about.facts.gym': 'Ich gehe gerne ins Fitnessstudio',
  'about.facts.anime': 'Mein Lieblings-Anime ist Tokyo Ghoul',
  'about.facts.projects': 'Abgeschlossene Projekte',
  'about.facts.languages': 'Programmiersprachen',
  'about.skills.title': 'Technische Fähigkeiten',
  'about.learning.title': 'Derzeit lerne ich',
  'projects.title': 'Meine Projekte',
  'projects.subtitle': 'Eine Sammlung von anime-inspirierten Projekten und Webanwendungen',
  'projects.filter.all': 'Alle Projekte',
  'projects.filter.anime': 'Anime',
  'projects.filter.web': 'Webentwicklung',
  'projects.filter.game': 'Spiele',
  'projects.filter.mobile': 'Mobil',
  'projects.status.completed': 'abgeschlossen',
  'projects.status.in-progress': 'in Bearbeitung',
  'projects.status.planned': 'geplant',
  // Projektinhalte (bitte ausfüllen)
  'project.pokemon.title': 'Pokémon-Suche & Virtueller Ordner',
  'project.pokemon.description': 'Eine Pokémon-Suchmaschine und virtuelle Ordner-App, mit der Nutzer suchen, Details ansehen und Favoriten speichern können.',
  'project.portfolio.title': 'Aktuelles Web-Portfolio!',
  'project.portfolio.description': 'Eine unterhaltsame, interaktive Portfolio-Website mit Glassmorphism-Effekten und sanften Animationen.',
  'project.icebot.title': 'Ice Bot',
  'project.icebot.description': 'Ein Discord-Bot, der tägliche Spiele-Releases abruft und an deinen Discord-Server sendet.',
};

// Italian translations (example)
const itTranslations: { [key: string]: string } = {
  'hero.viewProjects': 'Guarda i progetti',
  'nav.home': 'Home',
  'nav.projects': 'Progetti',
  'nav.about': 'Chi Sono',
  'nav.contact': 'Contatti',
  'hero.greeting': 'Ciao, sono',
  'hero.name': 'John',
  'hero.role': 'Sviluppatore Full-Stack/Designer',
  'hero.description': `Ciao, sono John — uno sviluppatore web appassionato di creare siti web reattivi e user-friendly. Lavoro con HTML, CSS, JavaScript e React, e attualmente sto approfondendo lo sviluppo front-end. Amo risolvere problemi, sperimentare nuove tecnologie e trasformare i concept di design in esperienze interattive. Il mio obiettivo è continuare a crescere come sviluppatore realizzando progetti che abbiano un vero impatto.`,
  'hero.quote': 'Se non accetti mai la frustrazione di perdere, non crescerai mai',
  'hero.quote.author': '- Seishiro Nagi',
  'hero.cta': 'Contattami!!',
  'contact.tooltip': '👈 Contattami qui!',
  'about.title': 'Chi Sono',
  'about.subtitle': 'Scopri di più su di me e il mio percorso',
  'about.story.title': 'La Mia Storia',
  'about.story.content': `Ciao! Sono John, uno sviluppatore web appassionato che ama creare esperienze digitali significative. Il mio percorso nella programmazione è iniziato per curiosità ed è diventato una vera passione per la risoluzione dei problemi e l'innovazione.\n\nCredo che un ottimo codice non debba solo funzionare, ma anche essere elegante, manutenibile e orientato all'utente. Quando non programmo, esploro nuove tecnologie, contribuisco a progetti open source o gioco con gli amici.\n\nIl mio obiettivo è creare applicazioni web che non solo siano belle da vedere, ma offrano anche soluzioni concrete a problemi reali.`,
  'about.facts.title': 'Curiosità',
  'about.facts.coffee': 'Tazze di caffè bevute',
  'about.facts.coding': 'Mi sveglio ogni mattina alle 6 per programmare',
  'about.facts.gym': 'Mi piace andare in palestra',
  'about.facts.anime': 'Il mio anime preferito è Tokyo Ghoul',
  'about.facts.projects': 'Progetti completati',
  'about.facts.languages': 'Linguaggi di programmazione',
  'about.skills.title': 'Competenze Tecniche',
  'about.learning.title': 'Attualmente Sto Imparando',
  'projects.title': 'I Miei Progetti',
  'projects.subtitle': 'Una raccolta di progetti ispirati agli anime e applicazioni web',
  'projects.filter.all': 'Tutti i Progetti',
  'projects.filter.anime': 'Anime',
  'projects.filter.web': 'Sviluppo Web',
  'projects.filter.game': 'Giochi',
  'projects.filter.mobile': 'Mobile',
  'projects.status.completed': 'completato',
  'projects.status.in-progress': 'in corso',
  'projects.status.planned': 'pianificato',
  // Contenuto progetti (da completare)
  'project.pokemon.title': 'Ricerca Pokémon & Raccoglitore Virtuale',
  'project.pokemon.description': 'Un motore di ricerca Pokémon e raccoglitore virtuale per cercare, vedere dettagli e salvare i preferiti.',
  'project.portfolio.title': 'Portfolio Web Attuale!',
  'project.portfolio.description': 'Un sito portfolio interattivo e divertente con effetti glassmorphism e animazioni fluide.',
  'project.icebot.title': 'Ice Bot',
  'project.icebot.description': 'Un bot Discord che recupera le uscite giornaliere dei giochi e le invia al tuo server Discord.',
};


interface TranslationContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

interface TranslationProviderProps {
  children: ReactNode;
}

export const TranslationProvider: React.FC<TranslationProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const t = (key: string): string => {
    return translations[language]?.[key] || translations.en[key] || key;
  };
  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
};

// English translations as a separate constant
const enTranslations: { [key: string]: string } = {
  'hero.viewProjects': 'View Projects',
  'nav.home': 'Home',
  'nav.projects': 'Projects',
  'nav.about': 'About Me',
  'nav.contact': 'Contact',
  // Hero Section
  'hero.greeting': "Hi, I'm",
  'hero.name': 'John',
  'hero.role': 'Full-stack developer/Designer',
  'hero.description': `Hi, I'm John — a web developer passionate about creating responsive and user-friendly websites. I work with HTML, CSS, JavaScript, and React, and I'm currently diving deeper into front-end development. I love solving problems, experimenting with new technologies, and turning design concepts into interactive experiences. My goal is to keep growing as a developer while building projects that make a real impact.`,
  'hero.quote': "If you never accept the frustration of losing You'll never grow",
  'hero.quote.author': '- Seishiro Nagi',
  'hero.cta': 'Contact me!!',
  // Contact Tooltip
  'contact.tooltip': '👈 Contact me here!',
  // About Section
  'about.title': 'About Me',
  'about.subtitle': 'Get to know more about me and my journey',
  'about.story.title': 'My Story',
  'about.story.content': `Hey there! I'm John, a passionate web developer who loves creating digital experiences that matter. My journey into coding started with curiosity and has grown into a genuine passion for problem-solving and innovation.\n\nI believe that great code isn't just functional—it should be elegant, maintainable, and user-focused. When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or gaming with friends.\n\nMy goal is to create web applications that not only look amazing but also provide meaningful solutions to real-world problems.`,
  'about.facts.title': 'Fun Facts',
  'about.facts.coffee': 'Cups of coffee consumed',
  'about.facts.coding': 'I wake up every morning at 6am to code',
  'about.facts.gym': 'I enjoy Going to the gym',
  'about.facts.anime': 'My favorite anime is Tokyo Ghoul',
  'about.facts.projects': 'Projects completed',
  'about.facts.languages': 'Programming languages',
  'about.skills.title': 'Technical Skills',
  'about.learning.title': 'Currently Learning',
  // Projects Section
  'projects.title': 'My Projects',
  'projects.subtitle': 'A collection of anime-inspired projects and web applications',
  'projects.filter.all': 'All Projects',
  'projects.filter.anime': 'Anime',
  'projects.filter.web': 'Web Dev',
  'projects.filter.game': 'Games',
  'projects.filter.mobile': 'Mobile',
  'projects.status.completed': 'completed',
  'projects.status.in-progress': 'in progress',
  'projects.status.planned': 'planned',
  // Project Content (fill in your originals below)
  'project.pokemon.title': 'Pokemon Search & Virtual Binder',
  'project.pokemon.description': 'A Pokemon search engine and virtual binder app that lets users search, view details, and save favorites to their personal binder.',
  'project.portfolio.title': 'Current Web Page Portfolio!',
  'project.portfolio.description': 'A fun interactive portfolio website with glassmorphism effects and smooth animations.',
  'project.icebot.title': 'Ice Bot',
  'project.icebot.description': 'A Discord bot that fetches daily game release info and sends it to your Discord server.',
};


export const translations: { [lang: string]: { [key: string]: string } } = {
  en: enTranslations,
  fr: frTranslations,
  de: deTranslations,
  it: itTranslations,
  es: esTranslations,
  ko: koTranslations,
};

    
/**
 * A custom React hook that provides easy access to translation functionality
 * Must be used within a TranslationProvider component
 * 
 * Usage: const { t, language, setLanguage } = useTranslation();
 * 
 * @returns Translation context with current language and functions
 * @throws Error if used outside TranslationProvider
 */
export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};

export default TranslationProvider;