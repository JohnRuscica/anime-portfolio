import React, { createContext, useContext, useState, ReactNode } from 'react';

/**
 * TRANSLATION SYSTEM OVERVIEW
 * ==========================
 * This file implements a comprehensive internationalization (i18n) system using React Context API.
 * It provides translation support for 8+ languages across the entire portfolio application.
 * 
 * Key Features:
 * - Multi-language support with easy language switching
 * - Fallback mechanism (defaults to English if translation missing)
 * - Type-safe translation keys with TypeScript
 * - Global state management via React Context
 * - Nested translation key structure (e.g., 'nav.home', 'hero.greeting')
 */

// Translation data structure - defines the shape of our translation object
// Each language code maps to an object containing translation key-value pairs
interface Translations {
  [key: string]: {        // Language code (e.g., 'en', 'jp', 'es')
    [key: string]: string; // Translation key -> translated text
  };
}

// Available languages configuration
// Each language object contains: code (for internal use), name (display), flag (emoji)
export const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'jp', name: '日本語', flag: '🇯🇵' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
];

/**
 * TRANSLATION DATA STRUCTURE
 * ==========================
 * Organized by sections for maintainability:
 * - Navigation: nav.*
 * - Hero Section: hero.*
 * - About Section: about.*
 * - Projects Section: projects.*
 * - Project Content: project.*
 * - Contact System: contact.*
 */
export const translations: Translations = {
  en: {
    // Navigation items for the main menu
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.about': 'About Me',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.greeting': "Hi, I'm",
    'hero.name': 'John',
    'hero.role': 'Full-stack developer/Designer',
    'hero.description': `"Hi, I'm John — a web developer passionate about creating responsive and user-friendly websites. I work with HTML, CSS, JavaScript, and React, and I'm currently diving deeper into front-end development. I love solving problems, experimenting with new technologies, and turning design concepts into interactive experiences. My goal is to keep growing as a developer while building projects that make a real impact."`,
    'hero.quote': '"If you never accept the frustration of losing You\'ll never grow"',
    'hero.quote.author': '- Seishiro Nagi',
    'hero.cta': 'Contact me!!',
    
    // Contact Tooltip
    'contact.tooltip': '👈 Contact me here!',
    
    // About Section
    'about.title': 'About Me',
    'about.subtitle': 'Get to know more about me and my journey',
    'about.story.title': 'My Story',
    'about.story.content': `Hey there! I'm John, a passionate web developer who loves creating digital experiences that matter. My journey into coding started with curiosity and has grown into a genuine passion for problem-solving and innovation.

I believe that great code isn't just functional—it should be elegant, maintainable, and user-focused. When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or gaming with friends.

My goal is to create web applications that not only look amazing but also provide meaningful solutions to real-world problems.`,
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
    'projects.link.code': 'Code',
    'projects.link.demo': 'Live Demo',
    'projects.view-more': 'View All Projects on GitHub',
    
    // Project Content
    'project.pokemon.title': 'Pokemon Search & Virtual Binder',
    'project.pokemon.description': 'A pokemon search engine and virtual binder app that lets users search for pokemon, view details, and save favorites to their personal binder.',
    'project.portfolio.title': 'Current WebPage Portfolio!',
    'project.portfolio.description': 'A fun interactive portfolio website with glassmorphism effects and smooth animations.',
    'project.icebot.title': 'Ice Bot',
    'project.icebot.description': 'A discord bot that can retrieve gaming info for daily releases of games and send them to your discord server.',
  },
  
  jp: {
    // Navigation
    'nav.home': 'ホーム',
    'nav.projects': 'プロジェクト',
    'nav.about': '私について',
    'nav.contact': 'お問い合わせ',
    
    // Hero Section
    'hero.greeting': 'こんにちは、私は',
    'hero.name': 'ジョン',
    'hero.role': 'フルスタック開発者/デザイナー',
    'hero.description': `"こんにちは、私はジョンです。レスポンシブでユーザーフレンドリーなウェブサイトの作成に情熱を注ぐウェブ開発者です。HTML、CSS、JavaScript、Reactを使って働き、現在はフロントエンド開発により深く取り組んでいます。問題解決、新しい技術の実験、デザインコンセプトをインタラクティブな体験に変えることが大好きです。私の目標は、実際に影響を与えるプロジェクトを構築しながら、開発者として成長し続けることです。"`,
    'hero.quote': '「負けの悔しさを受け入れられなければ成長はない」',
    'hero.quote.author': '- 凪誠士郎',
    'hero.cta': 'お問い合わせください!!',
    
    // Contact Tooltip
    'contact.tooltip': '👈 こちらからご連絡ください！',
    
    // About Section
    'about.title': '私について',
    'about.subtitle': '私のことと私の旅路についてもっと知ってください',
    'about.story.title': '私のストーリー',
    'about.story.content': `こんにちは！私は意味のあるデジタル体験を作ることが大好きな情熱的なウェブ開発者、ジョンです。コーディングへの私の旅は好奇心から始まり、問題解決と革新への真の情熱に成長しました。

優れたコードは単に機能的であるだけでなく、エレガントで保守可能、そしてユーザー中心でなければならないと信じています。コーディングをしていない時は、新しい技術を探求したり、オープンソースプロジェクトに貢献したり、友達とゲームを楽しんだりしています。

私の目標は、見た目が素晴らしいだけでなく、現実世界の問題に対する意味のある解決策も提供するウェブアプリケーションを作ることです。`,
    'about.facts.title': '面白い事実',
    'about.facts.coffee': '飲んだコーヒーカップ数',
    'about.facts.coding': '毎朝6時に起きてコーディングしています',
    'about.facts.gym': 'ジムに行くのが好きです',
    'about.facts.anime': '私の好きなアニメは東京喰種です',
    'about.facts.projects': '完成したプロジェクト',
    'about.facts.languages': 'プログラミング言語',
    'about.skills.title': '技術スキル',
    'about.learning.title': '現在学習中',
    
    // Projects Section
    'projects.title': '私のプロジェクト',
    'projects.subtitle': 'アニメにインスパイアされたプロジェクトとウェブアプリケーションのコレクション',
    'projects.filter.all': 'すべてのプロジェクト',
    'projects.filter.anime': 'アニメ',
    'projects.filter.web': 'ウェブ開発',
    'projects.filter.game': 'ゲーム',
    'projects.filter.mobile': 'モバイル',
    'projects.status.completed': '完成',
    'projects.status.in-progress': '進行中',
    'projects.status.planned': '計画中',
    'projects.link.code': 'コード',
    'projects.link.demo': 'ライブデモ',
    'projects.view-more': 'GitHubですべてのプロジェクトを見る',
    
    // Project Content
    'project.pokemon.title': 'ポケモン検索 & バーチャルバインダー',
    'project.pokemon.description': 'ポケモンを検索し、詳細を表示し、お気に入りを個人のバインダーに保存できるポケモン検索エンジンとバーチャルバインダーアプリです。',
    'project.portfolio.title': '現在のウェブページポートフォリオ！',
    'project.portfolio.description': 'グラスモーフィズム効果とスムーズなアニメーションを持つ楽しいインタラクティブなポートフォリオウェブサイト。',
    'project.icebot.title': 'アイス ボット',
    'project.icebot.description': 'ゲームの毎日のリリース情報を取得し、Discordサーバーに送信することができるDiscordボットです。',
  },
  
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.projects': 'Proyectos',
    'nav.about': 'Sobre Mí',
    'nav.contact': 'Contacto',
    
    // Hero Section
    'hero.greeting': 'Hola, soy',
    'hero.name': 'John',
    'hero.role': 'Desarrollador Full-stack/Diseñador',
    'hero.description': `"Hola, soy John — un desarrollador web apasionado por crear sitios web responsivos y fáciles de usar. Trabajo con HTML, CSS, JavaScript y React, y actualmente me estoy adentrando más en el desarrollo front-end. Me encanta resolver problemas, experimentar con nuevas tecnologías y convertir conceptos de diseño en experiencias interactivas. Mi objetivo es seguir creciendo como desarrollador mientras construyo proyectos que generen un impacto real."`,
    'hero.quote': '"Si nunca aceptas la frustración de perder, nunca crecerás"',
    'hero.quote.author': '- Seishiro Nagi',
    'hero.cta': '¡¡Contáctame!!',
    
    // Contact Tooltip
    'contact.tooltip': '👈 ¡Contáctame aquí!',
    
    // About Section
    'about.title': 'Sobre Mí',
    'about.subtitle': 'Conoce más sobre mí y mi trayectoria',
    'about.story.title': 'Mi Historia',
    'about.story.content': `¡Hola! Soy John, un desarrollador web apasionado que ama crear experiencias digitales que importan. Mi viaje en la programación comenzó con curiosidad y ha crecido hasta convertirse en una verdadera pasión por la resolución de problemas y la innovación.

Creo que el gran código no es solo funcional—debe ser elegante, mantenible y centrado en el usuario. Cuando no estoy programando, me encuentro explorando nuevas tecnologías, contribuyendo a proyectos de código abierto, o jugando con amigos.

Mi objetivo es crear aplicaciones web que no solo se vean increíbles sino que también proporcionen soluciones significativas a problemas del mundo real.`,
    'about.facts.title': 'Datos Curiosos',
    'about.facts.coffee': 'Tazas de café consumidas ',
    'about.facts.coding': 'Me levanto cada mañana a las 6am para programar',
    'about.facts.gym': 'Disfruto ir al gimnasio',
    'about.facts.anime': 'Mi anime favorito es Tokyo Ghoul',
    'about.facts.projects': 'Proyectos completados',
    'about.facts.languages': 'Lenguajes de programación',
    'about.skills.title': 'Habilidades Técnicas',
    'about.learning.title': 'Aprendiendo Actualmente',
    
    // Projects Section
    'projects.title': 'Mis Proyectos',
    'projects.subtitle': 'Una colección de proyectos inspirados en anime y aplicaciones web',
    'projects.filter.all': 'Todos los Proyectos',
    'projects.filter.anime': 'Anime',
    'projects.filter.web': 'Desarrollo Web',
    'projects.filter.game': 'Juegos',
    'projects.filter.mobile': 'Móvil',
    'projects.status.completed': 'completado',
    'projects.status.in-progress': 'en progreso',
    'projects.status.planned': 'planificado',
    'projects.link.code': 'Código',
    'projects.link.demo': 'Demo en Vivo',
    'projects.view-more': 'Ver Todos los Proyectos en GitHub',
    
    // Project Content
    'project.pokemon.title': 'Búsqueda de Pokemon y Carpeta Virtual',
    'project.pokemon.description': 'Un motor de búsqueda de pokemon y aplicación de carpeta virtual que permite a los usuarios buscar pokemon, ver detalles y guardar favoritos en su carpeta personal.',
    'project.portfolio.title': '¡Portafolio de Página Web Actual!',
    'project.portfolio.description': 'Un sitio web de portafolio interactivo divertido con efectos de glassmorphism y animaciones suaves.',
    'project.icebot.title': 'Bot Ice',
    'project.icebot.description': 'Un bot de Discord que puede obtener información de juegos sobre lanzamientos diarios y enviarlos a tu servidor de Discord.',
  },
  
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.projects': 'Projets',
    'nav.about': 'À Propos',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.greeting': 'Salut, je suis',
    'hero.name': 'John',
    'hero.role': 'Développeur Full-stack/Designer',
    'hero.description': `"Salut, je suis John — un développeur web passionné par la création de sites web réactifs et conviviaux. Je travaille avec HTML, CSS, JavaScript et React, et j'approfondis actuellement le développement front-end. J'adore résoudre des problèmes, expérimenter avec de nouvelles technologies et transformer des concepts de design en expériences interactives. Mon objectif est de continuer à grandir en tant que développeur tout en construisant des projets qui ont un impact réel."`,
    'hero.quote': '"Si tu n\'acceptes jamais la frustration de perdre, tu ne grandiras jamais"',
    'hero.quote.author': '- Seishiro Nagi',
    'hero.cta': 'Contactez-moi!!',
    
    // Contact Tooltip
    'contact.tooltip': '👈 Contactez-moi ici!',
    
    // About Section
    'about.title': 'À Propos de Moi',
    'about.subtitle': 'En savoir plus sur moi et mon parcours',
    'about.story.title': 'Mon Histoire',
    'about.story.content': `Salut ! Je suis John, un développeur web passionné qui aime créer des expériences numériques qui comptent. Mon voyage dans le codage a commencé par la curiosité et s'est transformé en une véritable passion pour la résolution de problèmes et l'innovation.

Je crois que le grand code n'est pas seulement fonctionnel—il doit être élégant, maintenable et centré sur l'utilisateur. Quand je ne code pas, vous me trouverez en train d'explorer de nouvelles technologies, de contribuer à des projets open source, ou de jouer avec des amis.

Mon objectif est de créer des applications web qui non seulement ont l'air incroyables mais fournissent aussi des solutions significatives aux problèmes du monde réel.`,
    'about.facts.title': 'Faits Amusants',
    'about.facts.coffee': 'Tasses de café consommées',
    'about.facts.coding': 'Je me lève chaque matin à 6h pour coder',
    'about.facts.gym': 'J\'aime aller à la salle de sport',
    'about.facts.anime': 'Mon anime préféré est Tokyo Ghoul',
    'about.facts.projects': 'Projets terminés',
    'about.facts.languages': 'Langages de programmation',
    'about.skills.title': 'Compétences Techniques',
    'about.learning.title': 'En Train d\'Apprendre',
    
    // Projects Section
    'projects.title': 'Mes Projets',
    'projects.subtitle': 'Une collection de projets inspirés par l\'anime et d\'applications web',
    'projects.filter.all': 'Tous les Projets',
    'projects.filter.anime': 'Anime',
    'projects.filter.web': 'Développement Web',
    'projects.filter.game': 'Jeux',
    'projects.filter.mobile': 'Mobile',
    'projects.status.completed': 'terminé',
    'projects.status.in-progress': 'en cours',
    'projects.status.planned': 'planifié',
    'projects.link.code': 'Code',
    'projects.link.demo': 'Démo Live',
    'projects.view-more': 'Voir Tous les Projets sur GitHub',
    
    // Project Content
    'project.pokemon.title': 'Recherche Pokemon et Reliure Virtuelle',
    'project.pokemon.description': 'Un moteur de recherche pokemon et application de reliure virtuelle qui permet aux utilisateurs de rechercher des pokemon, voir les détails et sauvegarder les favoris dans leur reliure personnelle.',
    'project.portfolio.title': 'Portfolio de Page Web Actuel!',
    'project.portfolio.description': 'Un site web de portfolio interactif amusant avec des effets de glassmorphisme et des animations fluides.',
    'project.icebot.title': 'Bot Ice',
    'project.icebot.description': 'Un bot Discord qui peut récupérer des informations de jeux pour les sorties quotidiennes et les envoyer à votre serveur Discord.',
  },
  
  ko: {
    // Navigation
    'nav.home': '홈',
    'nav.projects': '프로젝트',
    'nav.about': '소개',
    'nav.contact': '연락처',
    
    // Hero Section
    'hero.greeting': '안녕하세요, 저는',
    'hero.name': '존',
    'hero.role': '풀스택 개발자/디자이너',
    'hero.description': `"안녕하세요, 저는 존입니다 — 반응형이고 사용자 친화적인 웹사이트 만들기에 열정적인 웹 개발자입니다. HTML, CSS, JavaScript, React로 작업하며, 현재 프론트엔드 개발을 더 깊이 파고들고 있습니다. 문제 해결, 새로운 기술 실험, 디자인 개념을 인터랙티브한 경험으로 바꾸는 것을 좋아합니다. 제 목표는 실질적인 영향을 미치는 프로젝트를 만들면서 개발자로서 계속 성장하는 것입니다."`,
    'hero.quote': '"패배의 좌절을 받아들이지 않으면 성장할 수 없다"',
    'hero.quote.author': '- 나기 세이시로',
    'hero.cta': '연락주세요!!',
    
    // Contact Tooltip
    'contact.tooltip': '👈 여기서 연락주세요!',
    
    // About Section
    'about.title': '저에 대해',
    'about.subtitle': '저와 제 여정에 대해 더 알아보세요',
    'about.story.title': '내 이야기',
    'about.story.content': `안녕하세요! 저는 의미 있는 디지털 경험을 만드는 것을 좋아하는 열정적인 웹 개발자 존입니다. 코딩에 대한 제 여정은 호기심에서 시작되어 문제 해결과 혁신에 대한 진정한 열정으로 성장했습니다.

훌륭한 코드는 단순히 기능적이어야 하는 것이 아니라—우아하고, 유지 관리 가능하며, 사용자 중심적이어야 한다고 믿습니다. 코딩을 하지 않을 때는 새로운 기술을 탐구하거나 오픈 소스 프로젝트에 기여하거나 친구들과 게임을 하며 시간을 보냅니다.

제 목표는 놀랍게 보일 뿐만 아니라 현실 세계의 문제에 대한 의미 있는 해결책도 제공하는 웹 애플리케이션을 만드는 것입니다.`,
    'about.facts.title': '재미있는 사실',
    'about.facts.coffee': '마신 커피 컵 수',
    'about.facts.coding': '매일 아침 6시에 일어나서 코딩을 합니다',
    'about.facts.gym': '헬스장 가는 것을 좋아합니다',
    'about.facts.anime': '제가 좋아하는 애니메이션은 도쿄 구울입니다',
    'about.facts.projects': '완료한 프로젝트',
    'about.facts.languages': '프로그래밍 언어',
    'about.skills.title': '기술 스킬',
    'about.learning.title': '현재 학습 중',
    
    // Projects Section
    'projects.title': '내 프로젝트',
    'projects.subtitle': '애니메이션에서 영감받은 프로젝트와 웹 애플리케이션 모음',
    'projects.filter.all': '모든 프로젝트',
    'projects.filter.anime': '애니메이션',
    'projects.filter.web': '웹 개발',
    'projects.filter.game': '게임',
    'projects.filter.mobile': '모바일',
    'projects.status.completed': '완료됨',
    'projects.status.in-progress': '진행 중',
    'projects.status.planned': '계획됨',
    'projects.link.code': '코드',
    'projects.link.demo': '라이브 데모',
    'projects.view-more': 'GitHub에서 모든 프로젝트 보기',
    
    // Project Content
    'project.pokemon.title': '포켓몬 검색 & 가상 바인더',
    'project.pokemon.description': '사용자가 포켓몬을 검색하고, 세부 정보를 보고, 즐겨찾기를 개인 바인더에 저장할 수 있는 포켓몬 검색 엔진 및 가상 바인더 앱입니다.',
    'project.portfolio.title': '현재 웹페이지 포트폴리오!',
    'project.portfolio.description': '글래스모피즘 효과와 부드러운 애니메이션을 가진 재미있는 인터랙티브 포트폴리오 웹사이트.',
    'project.icebot.title': '아이스 봇',
    'project.icebot.description': '게임의 일일 출시 정보를 가져와서 Discord 서버로 전송할 수 있는 Discord 봇입니다.',
  },
  
  de: {
    // Navigation
    'nav.home': 'Startseite',
    'nav.projects': 'Projekte',
    'nav.about': 'Über mich',
    'nav.contact': 'Kontakt',
    
    // Hero Section
    'hero.greeting': 'Hallo, ich bin',
    'hero.name': 'John',
    'hero.role': 'Full-Stack-Entwickler/Designer',
    'hero.description': `"Hallo, ich bin John — ein Webentwickler mit Leidenschaft für die Erstellung reaktionsfähiger und benutzerfreundlicher Websites. Ich arbeite mit HTML, CSS, JavaScript und React und vertiefe mich derzeit in die Frontend-Entwicklung. Ich liebe es, Probleme zu lösen, mit neuen Technologien zu experimentieren und Designkonzepte in interaktive Erfahrungen zu verwandeln. Mein Ziel ist es, als Entwickler zu wachsen und gleichzeitig Projekte zu erstellen, die einen echten Einfluss haben."`,
    'hero.quote': '"Wenn du die Frustration des Verlierens nie akzeptierst, wirst du nie wachsen"',
    'hero.quote.author': '- Seishiro Nagi',
    'hero.cta': 'Kontaktiere mich!!',
    
    // Contact Tooltip
    'contact.tooltip': '👈 Kontaktiere mich hier!',
    
    // About Section
    'about.title': 'Über mich',
    'about.subtitle': 'Erfahren Sie mehr über mich und meinen Werdegang',
    'about.story.title': 'Meine Geschichte',
    'about.story.content': `Hallo! Ich bin John, ein leidenschaftlicher Webentwickler, der gerne digitale Erfahrungen schafft, die wichtig sind. Meine Reise ins Programmieren begann mit Neugier und hat sich zu einer echten Leidenschaft für Problemlösung und Innovation entwickelt.

Ich glaube, dass großartiger Code nicht nur funktional sein sollte—er muss elegant, wartbar und benutzerzentriert sein. Wenn ich nicht programmiere, finden Sie mich beim Erkunden neuer Technologien, beim Beitrag zu Open-Source-Projekten oder beim Spielen mit Freunden.

Mein Ziel ist es, Webanwendungen zu erstellen, die nicht nur fantastisch aussehen, sondern auch sinnvolle Lösungen für reale Probleme bieten.`,
    'about.facts.title': 'Interessante Fakten',
    'about.facts.coffee': 'Getrunkene Kaffeetassen',
    'about.facts.coding': 'Ich stehe jeden Morgen um 6 Uhr auf, um zu programmieren',
    'about.facts.gym': 'Ich gehe gerne ins Fitnessstudio',
    'about.facts.anime': 'Mein Lieblings-Anime ist Tokyo Ghoul',
    'about.facts.projects': 'Abgeschlossene Projekte',
    'about.facts.languages': 'Programmiersprachen',
    'about.skills.title': 'Technische Fähigkeiten',
    'about.learning.title': 'Derzeit lerne ich',
    
    // Projects Section
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
    'projects.link.code': 'Code',
    'projects.link.demo': 'Live-Demo',
    'projects.view-more': 'Alle Projekte auf GitHub ansehen',
    
    // Project Content
    'project.pokemon.title': 'Pokemon-Suche & Virtueller Ordner',
    'project.pokemon.description': 'Eine Pokemon-Suchmaschine und virtuelle Ordner-App, die es Benutzern ermöglicht, Pokemon zu suchen, Details anzuzeigen und Favoriten in ihrem persönlichen Ordner zu speichern.',
    'project.portfolio.title': 'Aktuelles Webseiten-Portfolio!',
    'project.portfolio.description': 'Eine unterhaltsame interaktive Portfolio-Website mit Glassmorphismus-Effekten und glatten Animationen.',
    'project.icebot.title': 'Ice Bot',
    'project.icebot.description': 'Ein Discord-Bot, der Gaming-Informationen für tägliche Spielveröffentlichungen abrufen und an Ihren Discord-Server senden kann.',
  },
  
  it: {
    // Navigation
    'nav.home': 'Home',
    'nav.projects': 'Progetti',
    'nav.about': 'Chi Sono',
    'nav.contact': 'Contatti',
    
    // Hero Section
    'hero.greeting': 'Ciao, sono',
    'hero.name': 'John',
    'hero.role': 'Sviluppatore Full-Stack/Designer',
    'hero.description': `"Ciao, sono John — uno sviluppatore web appassionato nella creazione di siti web responsive e user-friendly. Lavoro con HTML, CSS, JavaScript e React, e attualmente mi sto approfondendo nello sviluppo front-end. Amo risolvere problemi, sperimentare con nuove tecnologie e trasformare concetti di design in esperienze interattive. Il mio obiettivo è continuare a crescere come sviluppatore costruendo progetti che abbiano un impatto reale."`,
    'hero.quote': '"Se non accetti mai la frustrazione di perdere, non crescerai mai"',
    'hero.quote.author': '- Seishiro Nagi',
    'hero.cta': 'Contattami!!',
    
    // Contact Tooltip
    'contact.tooltip': '👈 Contattami qui!',
    
    // About Section
    'about.title': 'Chi Sono',
    'about.subtitle': 'Scopri di più su di me e il mio percorso',
    'about.story.title': 'La Mia Storia',
    'about.story.content': `Ciao! Sono John, uno sviluppatore web appassionato che ama creare esperienze digitali che contano. Il mio viaggio nella programmazione è iniziato con la curiosità ed è cresciuto fino a diventare una vera passione per la risoluzione di problemi e l'innovazione.

Credo che il grande codice non dovrebbe essere solo funzionale—deve essere elegante, manutenibile e centrato sull'utente. Quando non programmo, mi trovi a esplorare nuove tecnologie, contribuire a progetti open source, o giocare con gli amici.

Il mio obiettivo è creare applicazioni web che non solo appaiano fantastiche ma forniscano anche soluzioni significative ai problemi del mondo reale.`,
    'about.facts.title': 'Curiosità',
    'about.facts.coffee': 'Tazze di caffè bevute',
    'about.facts.coding': 'Mi sveglio ogni mattina alle 6 per programmare',
    'about.facts.gym': 'Mi piace andare in palestra',
    'about.facts.anime': 'Il mio anime preferito è Tokyo Ghoul',
    'about.facts.projects': 'Progetti completati',
    'about.facts.languages': 'Linguaggi di programmazione',
    'about.skills.title': 'Competenze Tecniche',
    'about.learning.title': 'Attualmente Sto Imparando',
    
    // Projects Section
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
    'projects.link.code': 'Codice',
    'projects.link.demo': 'Demo Live',
    'projects.view-more': 'Vedi Tutti i Progetti su GitHub',
    
    // Project Content
    'project.pokemon.title': 'Ricerca Pokemon e Raccoglitore Virtuale',
    'project.pokemon.description': 'Un motore di ricerca pokemon e app raccoglitore virtuale che permette agli utenti di cercare pokemon, visualizzare dettagli e salvare i preferiti nel loro raccoglitore personale.',
    'project.portfolio.title': 'Portfolio Pagina Web Attuale!',
    'project.portfolio.description': 'Un sito web portfolio interattivo divertente con effetti glassmorphism e animazioni fluide.',
    'project.icebot.title': 'Bot Ice',
    'project.icebot.description': 'Un bot Discord che può recuperare informazioni sui giochi per le uscite quotidiane e inviarle al tuo server Discord.',
  },
  
  pt: {
    // Navigation
    'nav.home': 'Início',
    'nav.projects': 'Projetos',
    'nav.about': 'Sobre Mim',
    'nav.contact': 'Contato',
    
    // Hero Section
    'hero.greeting': 'Olá, eu sou',
    'hero.name': 'John',
    'hero.role': 'Desenvolvedor Full-Stack/Designer',
    'hero.description': `"Olá, eu sou John — um desenvolvedor web apaixonado por criar sites responsivos e amigáveis ao usuário. Trabalho com HTML, CSS, JavaScript e React, e atualmente estou me aprofundando no desenvolvimento front-end. Amo resolver problemas, experimentar com novas tecnologias e transformar conceitos de design em experiências interativas. Meu objetivo é continuar crescendo como desenvolvedor enquanto construo projetos que fazem um impacto real."`,
    'hero.quote': '"Se você nunca aceitar a frustração de perder, nunca crescerá"',
    'hero.quote.author': '- Seishiro Nagi',
    'hero.cta': 'Entre em contato!!',
    
    // Contact Tooltip
    'contact.tooltip': '👈 Entre em contato aqui!',
    
    // About Section
    'about.title': 'Sobre Mim',
    'about.subtitle': 'Saiba mais sobre mim e minha jornada',
    'about.story.title': 'Minha História',
    'about.story.content': `Olá! Eu sou John, um desenvolvedor web apaixonado que ama criar experiências digitais que importam. Minha jornada na programação começou com curiosidade e cresceu para se tornar uma verdadeira paixão por resolução de problemas e inovação.

Acredito que um código excelente não deve ser apenas funcional—deve ser elegante, manutenível e centrado no usuário. Quando não estou programando, você me encontra explorando novas tecnologias, contribuindo para projetos open source, ou jogando com amigos.

Meu objetivo é criar aplicações web que não apenas pareçam incríveis, mas também forneçam soluções significativas para problemas do mundo real.`,
    'about.facts.title': 'Fatos Curiosos',
    'about.facts.coffee': 'Xícaras de café consumidas',
    'about.facts.coding': 'Acordo todas as manhãs às 6h para programar',
    'about.facts.gym': 'Gosto de ir à academia',
    'about.facts.anime': 'Meu anime favorito é Tokyo Ghoul',
    'about.facts.projects': 'Projetos concluídos',
    'about.facts.languages': 'Linguagens de programação',
    'about.skills.title': 'Habilidades Técnicas',
    'about.learning.title': 'Atualmente Aprendendo',
    
    // Projects Section
    'projects.title': 'Meus Projetos',
    'projects.subtitle': 'Uma coleção de projetos inspirados em anime e aplicações web',
    'projects.filter.all': 'Todos os Projetos',
    'projects.filter.anime': 'Anime',
    'projects.filter.web': 'Desenvolvimento Web',
    'projects.filter.game': 'Jogos',
    'projects.filter.mobile': 'Mobile',
    'projects.status.completed': 'concluído',
    'projects.status.in-progress': 'em andamento',
    'projects.status.planned': 'planejado',
    'projects.link.code': 'Código',
    'projects.link.demo': 'Demo Ao Vivo',
    'projects.view-more': 'Ver Todos os Projetos no GitHub',
    
    // Project Content
    'project.pokemon.title': 'Busca Pokemon e Pasta Virtual',
    'project.pokemon.description': 'Um motor de busca pokemon e aplicativo de pasta virtual que permite aos usuários buscar pokemon, ver detalhes e salvar favoritos em sua pasta pessoal.',
    'project.portfolio.title': 'Portfolio de Página Web Atual!',
    'project.portfolio.description': 'Um site de portfolio interativo divertido com efeitos de glassmorfismo e animações suaves.',
    'project.icebot.title': 'Bot Ice',
    'project.icebot.description': 'Um bot do Discord que pode recuperar informações de jogos sobre lançamentos diários e enviá-las para seu servidor Discord.',
  },
};

/**
 * REACT CONTEXT SETUP
 * ===================
 * Creates a context for managing translation state across the entire app
 */

// Define the shape of our translation context
interface TranslationContextType {
  language: string;                    // Current selected language code
  setLanguage: (lang: string) => void; // Function to change language
  t: (key: string) => string;          // Translation function (t = translate)
}

// Create the React Context - initially undefined to enforce provider usage
const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

/**
 * TRANSLATION PROVIDER COMPONENT
 * ==============================
 * Wraps the entire app to provide translation functionality to all components
 * Manages the current language state and provides the translation function
 */
interface TranslationProviderProps {
  children: ReactNode; // React children components
}

export const TranslationProvider: React.FC<TranslationProviderProps> = ({ children }) => {
  // State to track the currently selected language (defaults to English)
  const [language, setLanguage] = useState('en');

  /**
   * TRANSLATION FUNCTION
   * ===================
   * The core translation function that converts keys to localized text
   * 
   * @param key - Translation key (e.g., 'nav.home', 'hero.greeting')
   * @returns Translated text for the current language
   * 
   * Fallback Logic:
   * 1. Try current language translation
   * 2. Fall back to English if not found
   * 3. Return the key itself if nothing found (for debugging)
   */
  const t = (key: string): string => {
    return translations[language]?.[key] || translations.en[key] || key;
  };

  // Provide the translation state and functions to all child components
  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
};

/**
 * CUSTOM HOOK FOR TRANSLATIONS
 * ============================
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