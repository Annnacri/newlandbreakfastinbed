export type Language = 'pt' | 'en' | 'fr' | 'es' | 'de' | 'it';

export interface LanguageOption {
  code: Language;
  label: string;
  flag: string;
  nativeName: string;
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  { code: 'pt', label: 'Português', flag: '🇵🇹', nativeName: 'Português' },
  { code: 'en', label: 'English', flag: '🇬🇧', nativeName: 'English' },
  { code: 'fr', label: 'Français', flag: '🇫🇷', nativeName: 'Français' },
  { code: 'es', label: 'Español', flag: '🇪🇸', nativeName: 'Español' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪', nativeName: 'Deutsch' },
  { code: 'it', label: 'Italiano', flag: '🇮🇹', nativeName: 'Italiano' },
];

export const translations = {
  pt: {
    // TopBar & Nav
    navExperience: 'Experiência',
    navMenus: 'Menus & Caixas',
    navHowItWorks: 'Como Funciona',
    navFAQ: 'Perguntas Frequentes',
    navQRCode: 'QR Code',
    btnBookBreakfast: 'Reservar Pequeno-Almoço',
    btnSoundMute: 'Silenciar Som de Lisboa',
    btnSoundPlay: 'Ouvir Guitarra de Lisboa',
    audioTag: 'Guitarra Portuguesa Matinal',

    // Hero / Cinematic Scroller
    heroBadge: 'Entregas Matinais em Lisboa • 08:00 – 11:30',
    heroTagline: 'Manhãs de Luxo na Cama em Lisboa',
    heroTitleLine1: 'Pequenos-Almoços e Brunch Artesanais,',
    heroTitleLine2: 'Entregues na Sua Cama em Lisboa.',
    heroSubtitle: 'Pão de fermentação lenta, pastéis de nata quentinhos, sumo de laranja natural do Algarve e café de especialidade português. Entregue no seu hotel boutique, suíte ou Airbnb.',
    btnExploreBoxes: 'Explorar Caixas (€9,90 – €15,90)',
    btnOurStory: 'O Nosso Ritual Matinal',
    trust1: 'Caixas de Madeira 100% Eco-Sustentáveis',
    trust2: 'Janela de Entrega Garantida de 30 Minutos',
    trust3: 'De Alfama a Cascais e Centro Histórico',

    // Cinematic Chapters
    ch1Tag: '01 / O HORIZONTE',
    ch1Time: '06:45',
    ch1Loc: 'Sobre a Costa Atlântica e Rio Tejo',
    ch1Quote: 'A viagem começa antes da cidade acordar.',
    ch1Title: 'A sua manhã em Lisboa começa aqui.',
    ch1Sub: 'Pequeno-almoço artesanal português, entregue diretamente no seu hotel ou Airbnb.',

    ch2Tag: '02 / A CHEGADA',
    ch2Time: '07:30',
    ch2Loc: 'Alfama & Colinas Históricas',
    ch2Quote: 'Telhados de terracota banhados pela primeira luz dourada.',
    ch2Title: 'Chegou a Lisboa.',
    ch2Sub: 'Uma cidade nova. Uma manhã luminosa. E nenhum motivo para ter pressa.',

    ch3Tag: '03 / O DESPERTAR',
    ch3Time: '08:15',
    ch3Loc: 'No Seu Quarto ou Apartamento',
    ch3Quote: 'Lençóis frescos e o sol suave a entrar pela varanda.',
    ch3Title: 'Acorde sem pressa.',
    ch3Sub: 'Está de férias. O pequeno-almoço vem ter consigo à cama.',

    ch4Tag: '04 / A EXPERIÊNCIA',
    ch4Time: '08:45',
    ch4Loc: 'Servido na Cama',
    ch4Quote: 'Café fumegante, pastéis de nata estaladiços e citrinos do Algarve.',
    ch4Title: 'Lisboa servida na cama.',
    ch4Sub: 'Fresco. Local. Preparado com paixão. Entregue à sua porta.',

    ch5Tag: '05 / O MOMENTO',
    ch5Time: '09:15',
    ch5Loc: 'Varanda com Vista Tejo',
    ch5Quote: 'Veio a Lisboa. Deixe Lisboa vir ao pequeno-almoço.',
    ch5Title: 'Isto não é apenas pequeno-almoço.',
    ch5Sub: 'É a forma perfeita de começar o seu dia em Lisboa.',

    // Interactive Scroller Controls
    btnPlayTour: 'REPRODUZIR TOUR CINEMATOGRÁFICO',
    btnPauseTour: 'PAUSAR TOUR',
    btnBookNowScroller: 'RESERVAR PEQUENO-ALMOÇO',
    btnExploreMenuScroller: 'EXPLORAR O MENU',
    scrollHint: 'Faça scroll para acordar em Lisboa ↓',

    // Scenarios / Story
    scenarioTitle: 'Feito Para Cada Manhã em Lisboa',
    scenarioSubtitle: 'Escolha a experiência perfeita para o seu despertar',
    tabCouples: 'Escapada Romântica',
    tabSolo: 'Viajantes a Solo',
    tabFamily: 'Grupos e Famílias',
    tabEarly: 'Tours Cedo / Aeroporto',

    // Menus & Boxes
    menuSectionTitle: 'Caixas de Pequeno-Almoço & Brunch',
    menuSectionSubtitle: 'Preparadas diariamente de madrugada com ingredientes locais de produtores portugueses.',
    btnViewFullMenu: 'Ver Menu Completo e Adicionais',
    btnOrderBox: 'Escolher e Encomendar Caixa',
    priceFrom: 'desde',
    includes: 'Inclui',
    reviewsBadge: 'Avaliações de Hóspedes em Lisboa',
    reviewsTitle: 'O Que Dizem Os Nossos Viajantes',
    badgeFeatured: 'Mais Popular',
    deliveryCoverageTitle: 'Cobertura em Lisboa:',
    deliveryCoverageText: 'Alfama, Chiado, Baixa, Príncipe Real, Avenida da Liberdade, Estrela, Belém, Parque das Nações & Cascais Express.',

    // How it works
    howTitle: 'Como Funciona em 3 Passos Simples',
    step1Title: '1. Escolha a Caixa e a Hora',
    step1Desc: 'Selecione o seu menu artesanal e o horário exato de entrega entre as 08:00 e as 11:30.',
    step2Title: '2. Cozinhamos de Madrugada',
    step2Desc: 'Pastéis e pães frescos na nossa padaria em Lisboa, laranjas do Algarve espremidas na hora e café quente selado termicamente.',
    step3Title: '3. Entrega Cuidadosa à Sua Porta',
    step3Desc: 'O nosso estafeta entrega discretamente na receção do seu hotel ou à porta do seu apartamento sem quebrar a sua tranquilidade.',

    // QR Code Section
    qrSectionBadge: 'Leitura Rápida no Telemóvel & Kit de Alojamento',
    qrSectionTitle: 'Faça a Leitura e Encomende no Telemóvel',
    qrSectionDesc: 'Está a ver esta página no computador ou tablet? Aponte a câmara do seu telemóvel ao QR Code para abrir a experiência de encomenda diretamente na cama.',
    qrInstantTitle: 'Acesso Imediato para Hóspedes',
    qrInstantDesc: 'Sem necessidade de descarregar apps. Abre instantaneamente os menus, música de fado e reservas em 1 minuto.',
    qrHostTitle: 'Kit Para Anfitriões de Airbnb & Hotéis',
    qrHostDesc: 'Descarregue o autocolante em formato 8x8cm de alta resolução para colocar no livro de boas-vindas, porta-chaves ou frigorífico.',
    btnOrderNow: 'Encomendar Pequeno-Almoço',
    btnViewSticker: 'Ver Autocolante Completo',

    // Sticker text
    stickerBadge: 'BREAKFAST IN BED LX • LISBOA',
    stickerHook: 'Psst... Quer pequeno-almoço na cama?',
    stickerSub: 'Pastéis artesanais, sumo fresco e café entregues à sua porta em Lisboa 🥐☕',
    stickerScanBtn: 'LEIA O QR CODE PARA ENCOMENDAR',
    btnDownloadSticker: 'Download Autocolante 8x8cm',
    btnCopyLink: 'Copiar Link',
    linkCopied: 'Link Copiado!',
    btnPrint: 'Imprimir',

    // Modal QR
    modalQRTitle: 'QR Code Oficial & Autocolante 8x8cm',
    modalQRSubtitle: 'Breakfast in Bed LX • Lisboa',
    modalQRKitBadge: 'Kit Para Hóspedes & Alojamentos',
    modalQRHeading: 'Acesso Imediato no Telemóvel do Hóspede',
    modalQRText: 'Este QR Code liga diretamente à landing page oficial do Breakfast in Bed LX com menus interativos, cálculo de totais e som de guitarra portuguesa.',
    modalQRTip1: 'Para Turistas no Computador: Aponte a câmara do seu smartphone para encomendar logo na cama.',
    modalQRTip2: 'Para Anfitriões de Airbnb & Hotéis: Descarregue o ficheiro PNG em 8x8cm para imprimir autocolantes ou cartões de boas-vindas.',

    // Audio Controller
    audioTitle: 'Serenata Matinal de Lisboa',
    audioModeFull: 'Completo',
    audioModeGuitar: 'Guitarra Só',
    audioModeBreeze: 'Brisa do Tejo',
    btnPluckGuitar: '🎸 Dedilhado',
    btnTrillGuitar: '✨ Trinado de Fado',

    // Booking Modal
    bookModalTitle: 'Reservar Pequeno-Almoço na Cama',
    bookModalSub: 'Entrega Matinal Cuidadosa em Lisboa',
    inputBoxLabel: 'Caixa de Pequeno-Almoço',
    inputQtyLabel: 'Quantidade de Caixas',
    inputDateLabel: 'Data de Entrega',
    inputTimeLabel: 'Janela de Horário Matinal',
    inputNameLabel: 'Nome Completo',
    inputPhoneLabel: 'WhatsApp / Telemóvel',
    inputAddressLabel: 'Nome do Hotel ou Morada do Airbnb (Lisboa)',
    inputNotesLabel: 'Alergias / Nº do Quarto / Código da Porta',
    totalLabel: 'Total Estimado',
    btnConfirmBooking: 'Confirmar e Enviar Pedido por WhatsApp',
    bookingSuccessNote: 'Sem pagamento antecipado online. Pague na entrega em dinheiro, MBWay ou cartão.',

    // Footer
    footerTagline: 'A arte de acordar devagar em Lisboa.',
    footerLegal: '© 2026 Breakfast in Bed LX. Criado com paixão em Lisboa, Portugal.',
  },

  en: {
    // TopBar & Nav
    navExperience: 'Experience',
    navMenus: 'Boxes & Menus',
    navHowItWorks: 'How It Works',
    navFAQ: 'Concierge FAQ',
    navQRCode: 'QR Code',
    btnBookBreakfast: 'Book Breakfast',
    btnSoundMute: 'Mute Lisbon Morning Ambiance',
    btnSoundPlay: 'Play Lisbon Morning Ambiance',
    audioTag: 'Lisbon Morning Guitar',

    // Hero / Cinematic Scroller
    heroBadge: 'Morning Delivery in Lisbon • 08:00 – 11:30 AM',
    heroTagline: 'Lisbon Luxury Mornings in Bed',
    heroTitleLine1: 'Artisan Breakfast & Brunch,',
    heroTitleLine2: 'Delivered to Your Lisbon Bed.',
    heroSubtitle: 'Freshly baked sourdough, warm pastéis de nata, pressed citrus juice & specialty Portuguese coffee. Hand-delivered to your boutique hotel, terrace suite or Airbnb.',
    btnExploreBoxes: 'Explore Boxes (€9,90 – €15,90)',
    btnOurStory: 'Our Morning Ritual',
    trust1: '100% Eco-Sustainable Wooden Boxes',
    trust2: 'Guaranteed 30-Min Delivery Window',
    trust3: 'Alfama to Cascais & Historic Center',

    // Cinematic Chapters
    ch1Tag: '01 / THE HORIZON',
    ch1Time: '06:45 AM',
    ch1Loc: 'Above Atlantic Coast & River Tejo',
    ch1Quote: 'The journey begins before the city stirs.',
    ch1Title: 'Your Lisbon morning starts here.',
    ch1Sub: 'Fresh Portuguese breakfast, delivered directly to your hotel or Airbnb.',

    ch2Tag: '02 / THE ARRIVAL',
    ch2Time: '07:30 AM',
    ch2Loc: 'Alfama & Historic Hills',
    ch2Quote: 'Terracotta roofs catching the first golden light.',
    ch2Title: 'You’ve arrived in Lisbon.',
    ch2Sub: 'A new city. A beautiful morning. And no reason to rush.',

    ch3Tag: '03 / WAKE UP',
    ch3Time: '08:15 AM',
    ch3Loc: 'Your Hotel or Airbnb Suite',
    ch3Quote: 'Crisp white linens, warm sunlight through French balconies.',
    ch3Title: 'Wake up slowly.',
    ch3Sub: 'You’re on holiday. Breakfast can come to you.',

    ch4Tag: '04 / THE EXPERIENCE',
    ch4Time: '08:45 AM',
    ch4Loc: 'Served in Bed',
    ch4Quote: 'Steaming espresso, warm pastéis de nata, Algarve citrus.',
    ch4Title: 'Lisbon, served in bed.',
    ch4Sub: 'Fresh. Local. Beautifully prepared. Delivered directly to you.',

    ch5Tag: '05 / THE MOMENT',
    ch5Time: '09:15 AM',
    ch5Loc: 'Golden Hour View',
    ch5Quote: 'You came to Lisbon. Let Lisbon come to breakfast.',
    ch5Title: 'This is not just breakfast.',
    ch5Sub: 'It’s how your day in Lisbon begins.',

    // Interactive Scroller Controls
    btnPlayTour: 'PLAY CINEMATIC TOUR',
    btnPauseTour: 'PAUSE TOUR',
    btnBookNowScroller: 'BOOK YOUR BREAKFAST',
    btnExploreMenuScroller: 'EXPLORE THE MENU',
    scrollHint: 'Scroll to wake up in Lisbon ↓',

    // Scenarios / Story
    scenarioTitle: 'Made for Every Morning in Lisbon',
    scenarioSubtitle: 'Choose the mood that matches your Lisbon wake-up',
    tabCouples: 'Romantic Escape',
    tabSolo: 'Solo Travelers',
    tabFamily: 'Groups & Families',
    tabEarly: 'Early Airport / Tour',

    // Menus & Boxes
    menuSectionTitle: 'Artisan Breakfast & Brunch Boxes',
    menuSectionSubtitle: 'Hand-crafted daily with local Portuguese farm ingredients and freshly baked bread.',
    btnViewFullMenu: 'View Full Menu & Add-ons',
    btnOrderBox: 'Select & Order Box',
    priceFrom: 'from',
    includes: 'Includes',
    reviewsBadge: 'Guest Reviews in Lisbon',
    reviewsTitle: 'What Our Travelers Say',
    badgeFeatured: 'Most Popular',
    deliveryCoverageTitle: 'Lisbon Delivery Coverage:',
    deliveryCoverageText: 'Alfama, Chiado, Baixa, Príncipe Real, Avenida da Liberdade, Estrela, Belém, Parque das Nações & Cascais Express.',

    // How it works
    howTitle: 'How It Works in 3 Simple Steps',
    step1Title: '1. Select Your Box & Time',
    step1Desc: 'Pick your artisan menu and choose your exact 30-minute delivery slot between 08:00 and 11:30 AM.',
    step2Title: '2. We Bake at Dawn',
    step2Desc: 'Pastries are baked fresh in our Lisbon bakery with freshly squeezed Algarve oranges and thermal-sealed coffee.',
    step3Title: '3. Hand-Delivered to Your Door',
    step3Desc: 'Our concierge delivers quietly to your hotel reception or apartment door without interrupting your morning peace.',

    // QR Code Section
    qrSectionBadge: 'Quick Mobile Scan & Hotel Host Kit',
    qrSectionTitle: 'Scan & Order Directly on Your Phone',
    qrSectionDesc: 'Reading this on your laptop or tablet? Point your phone’s camera at the QR code to open the full mobile ordering experience right by your bed.',
    qrInstantTitle: 'Instant Guest Access',
    qrInstantDesc: 'No apps to download. Opens instant menus, audio soundscape, and seamless 1-minute booking in Lisbon.',
    qrHostTitle: 'Airbnb & Boutique Host Kit',
    qrHostDesc: 'Download our 8x8cm sticker print format for your apartment welcome book, keycard folders, or fridge.',
    btnOrderNow: 'Order Breakfast Now',
    btnViewSticker: 'View Full Sticker',

    // Sticker text
    stickerBadge: 'BREAKFAST IN BED LX • LISBON',
    stickerHook: 'Psst... Hey! Do you need breakfast in bed?',
    stickerSub: 'Fresh artisan pastries, juice & coffee delivered to your door in Lisbon 🥐☕',
    stickerScanBtn: 'SCAN ME TO ORDER NOW',
    btnDownloadSticker: 'Download 8x8cm Sticker',
    btnCopyLink: 'Copy Link',
    linkCopied: 'Link Copied!',
    btnPrint: 'Print',

    // Modal QR
    modalQRTitle: 'Official QR Code & 8x8cm Sticker',
    modalQRSubtitle: 'Breakfast in Bed LX • Lisbon',
    modalQRKitBadge: 'Guest & Accommodation Kit',
    modalQRHeading: 'Instant Access on Guest Mobile Devices',
    modalQRText: 'This QR Code connects directly to the official Breakfast in Bed LX landing page with interactive menus, order calculation, and authentic Portuguese guitar soundscape.',
    modalQRTip1: 'For Tourists on Desktop: Point your smartphone camera at the screen to order directly in bed.',
    modalQRTip2: 'For Airbnb & Hotel Hosts: Download the 8x8cm high-res PNG to print stickers, welcome cards, or room key tags.',

    // Audio Controller
    audioTitle: 'Lisbon Morning Serenade',
    audioModeFull: 'Full Band',
    audioModeGuitar: 'Guitar Only',
    audioModeBreeze: 'Tagus Breeze',
    btnPluckGuitar: '🎸 Pluck String',
    btnTrillGuitar: '✨ Fado Trill',

    // Booking Modal
    bookModalTitle: 'Book Your Breakfast in Bed',
    bookModalSub: 'Lisbon Morning Hand-Delivery',
    inputBoxLabel: 'Selected Breakfast Box',
    inputQtyLabel: 'Number of Boxes',
    inputDateLabel: 'Delivery Date',
    inputTimeLabel: 'Morning Time Slot',
    inputNameLabel: 'Full Name',
    inputPhoneLabel: 'WhatsApp / Phone Number',
    inputAddressLabel: 'Hotel Name or Airbnb Address (Lisbon)',
    inputNotesLabel: 'Dietary Notes / Room Number / Bell Code',
    totalLabel: 'Total Estimated',
    btnConfirmBooking: 'Confirm & Send Order via WhatsApp',
    bookingSuccessNote: 'No upfront online payment required. Pay upon delivery via cash, MBWay, or card reader.',

    // Footer
    footerTagline: 'The art of waking up slow in Lisbon.',
    footerLegal: '© 2026 Breakfast in Bed LX. Handcrafted with passion in Lisbon, Portugal.',
  },

  fr: {
    // TopBar & Nav
    navExperience: 'Expérience',
    navMenus: 'Menus & Box',
    navHowItWorks: 'Comment ça marche',
    navFAQ: 'FAQ Conciergerie',
    navQRCode: 'QR Code',
    btnBookBreakfast: 'Réserver le Petit-Déjeuner',
    btnSoundMute: 'Couper le Son de Lisbonne',
    btnSoundPlay: 'Écouter la Guitare de Lisbonne',
    audioTag: 'Guitare Portugaise du Matin',

    // Hero / Cinematic Scroller
    heroBadge: 'Livraison Matinale à Lisbonne • 08:00 – 11:30',
    heroTagline: 'Matinées de Luxe au Lit à Lisbonne',
    heroTitleLine1: 'Petit-Déjeuner et Brunch Artisanaux,',
    heroTitleLine2: 'Livrés Directement dans Votre Lit.',
    heroSubtitle: 'Pain au levain frais, pastéis de nata tièdes, jus d’oranges d’Algarve pressé et café de spécialité portugais. Livrés dans votre hôtel boutique, suite ou Airbnb.',
    btnExploreBoxes: 'Découvrir les Box (€9,90 – €15,90)',
    btnOurStory: 'Notre Rituel Matinal',
    trust1: 'Boîtes en Bois 100% Éco-Responsables',
    trust2: 'Créneau de Livraison Garanti 30 Min',
    trust3: 'D’Alfama à Cascais et Centre Historique',

    // Cinematic Chapters
    ch1Tag: '01 / L’HORIZON',
    ch1Time: '06:45',
    ch1Loc: 'Au-dessus de la Côte Atlantique et du Tage',
    ch1Quote: 'Le voyage commence avant le réveil de la ville.',
    ch1Title: 'Votre matinée à Lisbonne commence ici.',
    ch1Sub: 'Petit-déjeuner artisanal portugais, livré directement dans votre hôtel ou Airbnb.',

    ch2Tag: '02 / L’ARRIVÉE',
    ch2Time: '07:30',
    ch2Loc: 'Alfama & Collines Historiques',
    ch2Quote: 'Les toits de terre cuite captent les premières lueurs dorées.',
    ch2Title: 'Vous êtes arrivé à Lisbonne.',
    ch2Sub: 'Une nouvelle ville. Un matin radieux. Aucune raison de se presser.',

    ch3Tag: '03 / LE RÉVEIL',
    ch3Time: '08:15',
    ch3Loc: 'Votre Chambre ou Suite',
    ch3Quote: 'Draps frais et soleil doux entrant par le balcon.',
    ch3Title: 'Réveillez-vous en douceur.',
    ch3Sub: 'Vous êtes en vacances. Le petit-déjeuner vient jusqu’à votre lit.',

    ch4Tag: '04 / L’EXPÉRIENCE',
    ch4Time: '08:45',
    ch4Loc: 'Servi au Lit',
    ch4Quote: 'Café fumant, pastéis de nata croustillants et agrumes d’Algarve.',
    ch4Title: 'Lisbonne, servie au lit.',
    ch4Sub: 'Frais. Local. Confectionné avec passion. Livré à votre porte.',

    ch5Tag: '05 / LE MOMENT',
    ch5Time: '09:15',
    ch5Loc: 'Vue sur le Tage',
    ch5Quote: 'Vous êtes venu à Lisbonne. Laissez Lisbonne venir au petit-déjeuner.',
    ch5Title: 'Ce n’est pas qu’un petit-déjeuner.',
    ch5Sub: 'C’est la plus belle façon de commencer votre journée à Lisbonne.',

    // Interactive Scroller Controls
    btnPlayTour: 'LANCER LA VISITE CINÉMATIQUE',
    btnPauseTour: 'PAUSE',
    btnBookNowScroller: 'RÉSERVER LE PETIT-DÉJEUNER',
    btnExploreMenuScroller: 'DÉCOUVRIR LE MENU',
    scrollHint: 'Faites défiler pour vous réveiller à Lisbonne ↓',

    // Scenarios / Story
    scenarioTitle: 'Pensé pour Chaque Matin à Lisbonne',
    scenarioSubtitle: 'Choisissez l’ambiance qui correspond à votre réveil',
    tabCouples: 'Escapade Romantique',
    tabSolo: 'Voyageur Solo',
    tabFamily: 'Groupes & Familles',
    tabEarly: 'Départs & Visites Tôt',

    // Menus & Boxes
    menuSectionTitle: 'Box Petit-Déjeuner & Brunch Artisanaux',
    menuSectionSubtitle: 'Confectionnées chaque matin avec des produits frais de fermes portugaises.',
    btnViewFullMenu: 'Voir le Menu Complet et Suppléments',
    btnOrderBox: 'Choisir et Commander',
    priceFrom: 'à partir de',
    includes: 'Comprend',
    reviewsBadge: 'Avis des Voyageurs à Lisbonne',
    reviewsTitle: 'Ce Que Disent Nos Voyageurs',
    badgeFeatured: 'Plus Populaire',
    deliveryCoverageTitle: 'Zones de Livraison à Lisbonne :',
    deliveryCoverageText: 'Alfama, Chiado, Baixa, Príncipe Real, Avenida da Liberdade, Estrela, Belém, Parque das Nações & Cascais Express.',

    // How it works
    howTitle: 'Comment ça marche en 3 étapes simples',
    step1Title: '1. Choisissez Votre Box et l’Heure',
    step1Desc: 'Sélectionnez votre menu artisanal et votre créneau de 30 minutes entre 08h00 et 11h30.',
    step2Title: '2. Préparé à l’Aube',
    step2Desc: 'Viennoiseries cuites à l’aube à Lisbonne, oranges fraîches pressées et café maintenu au chaud.',
    step3Title: '3. Livré avec Soin à Votre Porte',
    step3Desc: 'Notre coursier dépose discrètement votre commande à la réception ou à la porte de votre appartement.',

    // QR Code Section
    qrSectionBadge: 'Scan Mobile Rapide & Kit Hôte d’Hôtel',
    qrSectionTitle: 'Scannez et Commandez sur Votre Smartphone',
    qrSectionDesc: 'Vous consultez ce site sur votre ordinateur ? Pointez votre téléphone vers le QR Code pour commander directement depuis votre lit.',
    qrInstantTitle: 'Accès Immédiat pour les Voyageurs',
    qrInstantDesc: 'Aucune application à installer. Accès direct aux menus, à la guitare portugaise et réservation en 1 minute.',
    qrHostTitle: 'Kit pour Hôtes Airbnb & Hôtels',
    qrHostDesc: 'Téléchargez l’autocollant 8x8cm haute résolution pour votre livret d’accueil ou le réfrigérateur.',
    btnOrderNow: 'Commander le Petit-Déjeuner',
    btnViewSticker: 'Voir l’Autocollant Complet',

    // Sticker text
    stickerBadge: 'BREAKFAST IN BED LX • LISBONNE',
    stickerHook: 'Psst... Vous voulez le petit-déjeuner au lit ?',
    stickerSub: 'Pastéis artisanaux, jus frais & café livrés à votre porte à Lisbonne 🥐☕',
    stickerScanBtn: 'SCANNEZ POUR COMMANDER',
    btnDownloadSticker: 'Télécharger Autocollant 8x8cm',
    btnCopyLink: 'Copier le Lien',
    linkCopied: 'Lien Copié !',
    btnPrint: 'Imprimer',

    // Modal QR
    modalQRTitle: 'QR Code Officiel & Autocollant 8x8cm',
    modalQRSubtitle: 'Breakfast in Bed LX • Lisbonne',
    modalQRKitBadge: 'Kit Voyageurs & Hébergements',
    modalQRHeading: 'Accès Immédiat sur Smartphone',
    modalQRText: 'Ce QR Code mène à la landing page officielle avec menus interactifs, calcul des commandes et guitare portugaise.',
    modalQRTip1: 'Pour les Voyageurs sur PC : Scannez le code avec votre smartphone pour commander au lit.',
    modalQRTip2: 'Pour les Hôtes Airbnb : Téléchargez le PNG 8x8cm pour imprimer des stickers ou cartes d’accueil.',

    // Audio Controller
    audioTitle: 'Sérénade Matinale de Lisbonne',
    audioModeFull: 'Complet',
    audioModeGuitar: 'Guitare Seule',
    audioModeBreeze: 'Brise du Tage',
    btnPluckGuitar: '🎸 Pincer Corde',
    btnTrillGuitar: '✨ Trille de Fado',

    // Booking Modal
    bookModalTitle: 'Réserver Votre Petit-Déjeuner au Lit',
    bookModalSub: 'Livraison Matinale Délicate à Lisbonne',
    inputBoxLabel: 'Box Sélectionnée',
    inputQtyLabel: 'Nombre de Boîtes',
    inputDateLabel: 'Date de Livraison',
    inputTimeLabel: 'Créneau Horaire Matinal',
    inputNameLabel: 'Nom et Prénom',
    inputPhoneLabel: 'WhatsApp / Numéro de Téléphone',
    inputAddressLabel: 'Nom de l’Hôtel ou Adresse Airbnb (Lisbonne)',
    inputNotesLabel: 'Allergies / N° de Chambre / Code de la Porte',
    totalLabel: 'Total Estimé',
    btnConfirmBooking: 'Confirmer et Envoyer par WhatsApp',
    bookingSuccessNote: 'Aucun paiement en ligne requis. Réglez à la livraison en espèces ou par carte.',

    // Footer
    footerTagline: 'L’art de se réveiller en douceur à Lisbonne.',
    footerLegal: '© 2026 Breakfast in Bed LX. Fait avec passion à Lisbonne, Portugal.',
  },

  es: {
    // TopBar & Nav
    navExperience: 'Experiencia',
    navMenus: 'Menús y Cajas',
    navHowItWorks: 'Cómo Funciona',
    navFAQ: 'Preguntas Frecuentes',
    navQRCode: 'Código QR',
    btnBookBreakfast: 'Reservar Desayuno',
    btnSoundMute: 'Silenciar Sonido de Lisboa',
    btnSoundPlay: 'Escuchar Guitarra de Lisboa',
    audioTag: 'Guitarra Portuguesa Matutina',

    // Hero / Cinematic Scroller
    heroBadge: 'Entregas Matinales en Lisboa • 08:00 – 11:30',
    heroTagline: 'Mañanas de Lujo en la Cama en Lisboa',
    heroTitleLine1: 'Desayuno y Brunch Artesanales,',
    heroTitleLine2: 'Entregados Directamente en tu Cama.',
    heroSubtitle: 'Pan de masa madre recién horneado, pastéis de nata calientes, zumo de naranja natural de Algarve y café especial portugués. En tu hotel boutique, suite o Airbnb.',
    btnExploreBoxes: 'Explorar Cajas (€9,90 – €15,90)',
    btnOurStory: 'Nuestro Ritual Matutino',
    trust1: 'Cajas de Madera 100% Eco-Sostenibles',
    trust2: 'Franja de Entrega Garantizada de 30 Min',
    trust3: 'De Alfama a Cascais y Centro Histórico',

    // Cinematic Chapters
    ch1Tag: '01 / EL HORIZONTE',
    ch1Time: '06:45',
    ch1Loc: 'Sobre la Costa Atlántica y el Río Tajo',
    ch1Quote: 'El viaje comienza antes de que despierte la ciudad.',
    ch1Title: 'Tu mañana en Lisboa empieza aquí.',
    ch1Sub: 'Desayuno artesanal portugués, entregado directamente en tu hotel o Airbnb.',

    ch2Tag: '02 / LA LLEGADA',
    ch2Time: '07:30',
    ch2Loc: 'Alfama y Colinas Históricas',
    ch2Quote: 'Tejados de terracota bañados por la primera luz dorada.',
    ch2Title: 'Has llegado a Lisboa.',
    ch2Sub: 'Una ciudad nueva. Una mañana luminosa. Ningún motivo para apresurarse.',

    ch3Tag: '03 / EL DESPERTAR',
    ch3Time: '08:15',
    ch3Loc: 'Tu Habitación o Suite',
    ch3Quote: 'Sábanas frescas y el suave sol entrando por el balcón.',
    ch3Title: 'Despierta sin prisas.',
    ch3Sub: 'Estás de vacaciones. El desayuno llega directo a tu cama.',

    ch4Tag: '04 / LA EXPERIENCIA',
    ch4Time: '08:45',
    ch4Loc: 'Servido en la Cama',
    ch4Quote: 'Café humeante, pastéis de nata crujientes y cítricos de Algarve.',
    ch4Title: 'Lisboa, servida en la cama.',
    ch4Sub: 'Fresco. Local. Elaborado con pasión. Entregado en tu puerta.',

    ch5Tag: '05 / EL MOMENTO',
    ch5Time: '09:15',
    ch5Loc: 'Vistas al Río Tajo',
    ch5Quote: 'Viniste a Lisboa. Deja que Lisboa venga al desayuno.',
    ch5Title: 'Esto no es solo desayuno.',
    ch5Sub: 'Es la mejor manera de comenzar tu día en Lisboa.',

    // Interactive Scroller Controls
    btnPlayTour: 'VER TOUR CINEMATOGRÁFICO',
    btnPauseTour: 'PAUSAR TOUR',
    btnBookNowScroller: 'RESERVAR DESAYUNO',
    btnExploreMenuScroller: 'EXPLORAR EL MENÚ',
    scrollHint: 'Haz scroll para despertar en Lisboa ↓',

    // Scenarios / Story
    scenarioTitle: 'Diseñado para Cada Mañana en Lisboa',
    scenarioSubtitle: 'Elige la atmósfera que mejor se adapte a tu despertar',
    tabCouples: 'Escapada Romántica',
    tabSolo: 'Viajeros Solitarios',
    tabFamily: 'Grupos y Familias',
    tabEarly: 'Tours Tempranos / Vuelos',

    // Menus & Boxes
    menuSectionTitle: 'Cajas de Desayuno y Brunch Artesanales',
    menuSectionSubtitle: 'Elaboradas cada madrugada con productos locales de granjas portuguesas.',
    btnViewFullMenu: 'Ver Menú Completo y Adicionales',
    btnOrderBox: 'Seleccionar y Pedir Caja',
    priceFrom: 'desde',
    includes: 'Incluye',
    reviewsBadge: 'Opiniones de Huéspedes en Lisboa',
    reviewsTitle: 'Lo Que Dicen Nuestros Viajeros',
    badgeFeatured: 'Más Popular',
    deliveryCoverageTitle: 'Zonas de Entrega en Lisboa:',
    deliveryCoverageText: 'Alfama, Chiado, Baixa, Príncipe Real, Avenida da Liberdade, Estrela, Belém, Parque das Nações & Cascais Express.',

    // How it works
    howTitle: 'Cómo Funciona en 3 Sencillos Pasos',
    step1Title: '1. Elige tu Caja y Hora',
    step1Desc: 'Selecciona tu menú artesanal y tu intervalo de 30 minutos entre las 08:00 e 11:30.',
    step2Title: '2. Horneado de Madrugada',
    step2Desc: 'Repostería recién salida del horno en Lisboa, zumo recién exprimido y café caliente termo-sellado.',
    step3Title: '3. Entrega Cuidadosa en tu Puerta',
    step3Desc: 'Nuestro conserje entrega discretamente en la recepción del hotel o en la puerta de tu apartamento.',

    // QR Code Section
    qrSectionBadge: 'Escaneo Rápido en Móvil y Kit para Anfitriones',
    qrSectionTitle: 'Escanea y Pide Directamente en tu Móvil',
    qrSectionDesc: '¿Estás viendo esto en tu ordenador o tablet? Apunta con la cámara de tu móvil al código QR para ordenar directamente desde la cama.',
    qrInstantTitle: 'Acceso Inmediato para Huéspedes',
    qrInstantDesc: 'Sin descargar aplicaciones. Abre menús interactivos, guitarra portuguesa y reserva en 1 minuto.',
    qrHostTitle: 'Kit para Anfitriones de Airbnb y Hoteles',
    qrHostDesc: 'Descarga la pegatina de 8x8cm en alta resolución para colocarla en tu libro de bienvenida o nevera.',
    btnOrderNow: 'Pedir Desayuno Ahora',
    btnViewSticker: 'Ver Pegatina Completa',

    // Sticker text
    stickerBadge: 'BREAKFAST IN BED LX • LISBOA',
    stickerHook: 'Psst... ¿Quieres desayuno en la cama?',
    stickerSub: 'Pasteles artesanos, zumo fresco y café entregados en tu puerta en Lisboa 🥐☕',
    stickerScanBtn: 'ESCANEA PARA PEDIR',
    btnDownloadSticker: 'Descargar Pegatina 8x8cm',
    btnCopyLink: 'Copiar Enlace',
    linkCopied: '¡Enlace Copiado!',
    btnPrint: 'Imprimir',

    // Modal QR
    modalQRTitle: 'Código QR Oficial y Pegatina 8x8cm',
    modalQRSubtitle: 'Breakfast in Bed LX • Lisboa',
    modalQRKitBadge: 'Kit para Huéspedes y Alojamientos',
    modalQRHeading: 'Acceso Inmediato en el Móvil del Huésped',
    modalQRText: 'Este código QR conecta directamente con la landing page oficial de Breakfast in Bed LX con menús, cálculo de pedidos y fado portugués.',
    modalQRTip1: 'Para Huéspedes en PC: Escanea el código con tu móvil para pedir sin levantarte de la cama.',
    modalQRTip2: 'Para Anfitriones de Airbnb: Descarga el PNG 8x8cm para imprimir pegatinas o tarjetas de bienvenida.',

    // Audio Controller
    audioTitle: 'Serenata Matutina de Lisboa',
    audioModeFull: 'Completo',
    audioModeGuitar: 'Solo Guitarra',
    audioModeBreeze: 'Brisa del Tajo',
    btnPluckGuitar: '🎸 Punteo de Cuerda',
    btnTrillGuitar: '✨ Trinado de Fado',

    // Booking Modal
    bookModalTitle: 'Reservar Desayuno en la Cama',
    bookModalSub: 'Entrega Matinal Cuidadosa en Lisboa',
    inputBoxLabel: 'Caja Seleccionada',
    inputQtyLabel: 'Cantidad de Cajas',
    inputDateLabel: 'Fecha de Entrega',
    inputTimeLabel: 'Franja Horaria Matutina',
    inputNameLabel: 'Nombre y Apellidos',
    inputPhoneLabel: 'WhatsApp / Teléfono',
    inputAddressLabel: 'Nombre del Hotel o Dirección Airbnb (Lisboa)',
    inputNotesLabel: 'Alergias / Nº de Habitación / Código de Entrada',
    totalLabel: 'Total Estimado',
    btnConfirmBooking: 'Confirmar y Enviar Pedido por WhatsApp',
    bookingSuccessNote: 'Sin pago previo online. Paga a la entrega en efectivo o con tarjeta.',

    // Footer
    footerTagline: 'El arte de despertar despacio en Lisboa.',
    footerLegal: '© 2026 Breakfast in Bed LX. Hecho con pasión en Lisboa, Portugal.',
  },

  de: {
    // TopBar & Nav
    navExperience: 'Erlebnis',
    navMenus: 'Menüs & Boxen',
    navHowItWorks: 'So funktioniert’s',
    navFAQ: 'Concierge FAQ',
    navQRCode: 'QR-Code',
    btnBookBreakfast: 'Frühstück Buchen',
    btnSoundMute: 'Lissabon Morgen-Klang Stummschalten',
    btnSoundPlay: 'Lissabon Gitarre Abspielen',
    audioTag: 'Portugiesische Morgengitarre',

    // Hero / Cinematic Scroller
    heroBadge: 'Morgen-Lieferung in Lissabon • 08:00 – 11:30 Uhr',
    heroTagline: 'Luxuriöse Morgen im Bett in Lissabon',
    heroTitleLine1: 'Handgemachtes Frühstück & Brunch,',
    heroTitleLine2: 'Direkt an Ihr Bett in Lissabon Geliefert.',
    heroSubtitle: 'Frisches Sauerteigbrot, warme Pastéis de Nata, frisch gepresster Algarve-Orangensaft und portugiesischer Spezialitätenkaffee. In Ihr Boutique-Hotel, Ihre Suite oder Ihr Airbnb.',
    btnExploreBoxes: 'Morgen-Boxen Entdecken (€9,90 – €15,90)',
    btnOurStory: 'Unser Morgen-Ritual',
    trust1: '100% Nachhaltige Holzboxen',
    trust2: 'Garantiertes 30-Minuten-Lieferzeitfenster',
    trust3: 'Von Alfama bis Cascais & Historisches Zentrum',

    // Cinematic Chapters
    ch1Tag: '01 / DER HORIZONT',
    ch1Time: '06:45',
    ch1Loc: 'Über der Atlantikküste & dem Tejo',
    ch1Quote: 'Die Reise beginnt, bevor die Stadt erwacht.',
    ch1Title: 'Ihr Morgen in Lissabon beginnt hier.',
    ch1Sub: 'Frisches portugiesisches Frühstück, direkt in Ihr Hotel oder Airbnb geliefert.',

    ch2Tag: '02 / DIE ANKUNFT',
    ch2Time: '07:30',
    ch2Loc: 'Alfama & Historische Hügel',
    ch2Quote: 'Terrakotta-Dächer im ersten goldenen Morgenlicht.',
    ch2Title: 'Sie sind in Lissabon angekommen.',
    ch2Sub: 'Eine neue Stadt. Ein strahlender Morgen. Kein Grund zur Eile.',

    ch3Tag: '03 / DAS ERWACHEN',
    ch3Time: '08:15',
    ch3Loc: 'In Ihrem Zimmer oder Apartment',
    ch3Quote: 'Frische Bettwäsche und sanfter Sonnenschein durch den Balkon.',
    ch3Title: 'Erwachen Sie langsam.',
    ch3Sub: 'Sie sind im Urlaub. Das Frühstück kommt direkt zu Ihnen ans Bett.',

    ch4Tag: '04 / DAS ERLEBNIS',
    ch4Time: '08:45',
    ch4Loc: 'Im Bett Serviert',
    ch4Quote: 'Dampfender Espresso, warme Pastéis de Nata, frische Algarve-Zitrusfrüchte.',
    ch4Title: 'Lissabon, im Bett serviert.',
    ch4Sub: 'Frisch. Regional. Mit Liebe zubereitet. Direkt an Ihre Tür geliefert.',

    ch5Tag: '05 / DER MOMENT',
    ch5Time: '09:15',
    ch5Loc: 'Balkon mit Blick auf den Tejo',
    ch5Quote: 'Sie sind nach Lissabon gekommen. Lassen Sie Lissabon zum Frühstück kommen.',
    ch5Title: 'Das ist nicht einfach nur Frühstück.',
    ch5Sub: 'Es ist der schönste Start in Ihren Tag in Lissabon.',

    // Interactive Scroller Controls
    btnPlayTour: 'CINEMATISCHE TOUR STARTEN',
    btnPauseTour: 'TOUR PAUSIEREN',
    btnBookNowScroller: 'FRÜHSTÜCK JETZT BUCHEN',
    btnExploreMenuScroller: 'MENÜ ENTDECKEN',
    scrollHint: 'Scrollen Sie, um in Lissabon zu erwachen ↓',

    // Scenarios / Story
    scenarioTitle: 'Für Jeden Morgen in Lissabon Geschaffen',
    scenarioSubtitle: 'Wählen Sie die perfekte Stimmung für Ihr Erwachen',
    tabCouples: 'Romantischer Kurzurlaub',
    tabSolo: 'Alleinreisende',
    tabFamily: 'Gruppen & Familien',
    tabEarly: 'Frühe Touren / Flughafen',

    // Menus & Boxes
    menuSectionTitle: 'Handgemachte Frühstücks- & Brunch-Boxen',
    menuSectionSubtitle: 'Täglich im Morgengrauen zubereitet mit frischen Zutaten von portugiesischen Höfen.',
    btnViewFullMenu: 'Vollständiges Menü & Extras ansehen',
    btnOrderBox: 'Box Auswählen & Bestellen',
    priceFrom: 'ab',
    includes: 'Enthält',
    reviewsBadge: 'Gästebewertungen in Lissabon',
    reviewsTitle: 'Was Unsere Reisenden Sagen',
    badgeFeatured: 'Beliebteste',
    deliveryCoverageTitle: 'Liefergebiete in Lissabon:',
    deliveryCoverageText: 'Alfama, Chiado, Baixa, Príncipe Real, Avenida da Liberdade, Estrela, Belém, Parque das Nações & Cascais Express.',

    // How it works
    howTitle: 'So funktioniert es in 3 einfachen Schritten',
    step1Title: '1. Box & Uhrzeit Wählen',
    step1Desc: 'Wählen Sie Ihr handgemachtes Menü und Ihr gewünschtes 30-Minuten-Zeitfenster zwischen 08:00 und 11:30 Uhr.',
    step2Title: '2. Frisch Gebacken im Morgengrauen',
    step2Desc: 'Gebäck frisch aus unserer Backstube in Lissabon, frisch gepresste Orangen und heißer Kaffee.',
    step3Title: '3. Liebevoll an Ihre Tür Geliefert',
    step3Desc: 'Unser Concierge liefert leise an die Hotelrezeption oder Wohnungstür, ohne Ihre Morgenruhe zu stören.',

    // QR Code Section
    qrSectionBadge: 'Schneller Smartphone-Scan & Gastgeber-Kit',
    qrSectionTitle: 'Scannen & Direkt auf dem Smartphone Bestellen',
    qrSectionDesc: 'Lesen Sie dies auf Ihrem Laptop oder Tablet? Richten Sie Ihre Smartphone-Kamera auf den QR-Code, um bequem im Bett zu bestellen.',
    qrInstantTitle: 'Sofortiger Gäste-Zugang',
    qrInstantDesc: 'Keine App nötig. Öffnet Menüs, portugiesische Gitarrenmusik und 1-Minuten-Buchung.',
    qrHostTitle: 'Kit für Airbnb- & Hotel-Gastgeber',
    qrHostDesc: 'Laden Sie den hochauflösenden 8x8cm Sticker für Ihre Gästemappe oder den Kühlschrank herunter.',
    btnOrderNow: 'Jetzt Frühstück Bestellen',
    btnViewSticker: 'Kompletten Sticker Ansehen',

    // Sticker text
    stickerBadge: 'BREAKFAST IN BED LX • LISSABON',
    stickerHook: 'Psst... Möchten Sie Frühstück im Bett?',
    stickerSub: 'Frisches Gebäck, Saft & Kaffee direkt an Ihre Tür in Lissabon 🥐☕',
    stickerScanBtn: 'ZUM BESTELLEN SCANNEN',
    btnDownloadSticker: '8x8cm Sticker Herunterladen',
    btnCopyLink: 'Link Kopieren',
    linkCopied: 'Link Kopiert!',
    btnPrint: 'Drucken',

    // Modal QR
    modalQRTitle: 'Offizieller QR-Code & 8x8cm Sticker',
    modalQRSubtitle: 'Breakfast in Bed LX • Lissabon',
    modalQRKitBadge: 'Gäste- & Unterkunfts-Kit',
    modalQRHeading: 'Sofortiger Zugriff auf dem Smartphone',
    modalQRText: 'Dieser QR-Code führt zur offiziellen Seite mit interaktiven Menüs, Bestellrechner und Gitarren-Soundscape.',
    modalQRTip1: 'Für Gäste am PC: Code scannen und bequem im Bett bestellen.',
    modalQRTip2: 'Für Airbnb-Gastgeber: 8x8cm PNG herunterladen und Sticker drucken.',

    // Audio Controller
    audioTitle: 'Morgendliche Lissabon-Serenade',
    audioModeFull: 'Vollständig',
    audioModeGuitar: 'Nur Gitarre',
    audioModeBreeze: 'Tejo-Brise',
    btnPluckGuitar: '🎸 Saite Zupfen',
    btnTrillGuitar: '✨ Fado-Triller',

    // Booking Modal
    bookModalTitle: 'Frühstück im Bett Buchen',
    bookModalSub: 'Sanfte Morgenlieferung in Lissabon',
    inputBoxLabel: 'Ausgewählte Box',
    inputQtyLabel: 'Anzahl der Boxen',
    inputDateLabel: 'Lieferdatum',
    inputTimeLabel: 'Morgen-Zeitfenster',
    inputNameLabel: 'Vollständiger Name',
    inputPhoneLabel: 'WhatsApp / Telefonnummer',
    inputAddressLabel: 'Hotelname oder Airbnb-Adresse (Lissabon)',
    inputNotesLabel: 'Allergien / Zimmernummer / Türcode',
    totalLabel: 'Geschätzter Gesamtbetrag',
    btnConfirmBooking: 'Bestätigen & Per WhatsApp Senden',
    bookingSuccessNote: 'Keine Online-Vorauszahlung nötig. Zahlen Sie bei Lieferung bar oder mit Karte.',

    // Footer
    footerTagline: 'Die Kunst, in Lissabon langsam zu erwachen.',
    footerLegal: '© 2026 Breakfast in Bed LX. Mit Leidenschaft in Lissabon, Portugal kreiert.',
  },

  it: {
    // TopBar & Nav
    navExperience: 'Esperienza',
    navMenus: 'Menu e Box',
    navHowItWorks: 'Come Funziona',
    navFAQ: 'FAQ Concierge',
    navQRCode: 'Codice QR',
    btnBookBreakfast: 'Prenota Colazione',
    btnSoundMute: 'Disattiva Suono di Lisbona',
    btnSoundPlay: 'Ascolta Chitarra di Lisbona',
    audioTag: 'Chitarra Portoghese del Mattino',

    // Hero / Cinematic Scroller
    heroBadge: 'Consegna Mattutina a Lisbona • 08:00 – 11:30',
    heroTagline: 'Mattinate di Lusso a Letto a Lisbona',
    heroTitleLine1: 'Colazione & Brunch Artigianali,',
    heroTitleLine2: 'Consegnati Direttamente nel Tuo Letto.',
    heroSubtitle: 'Pane a lievitazione naturale, pastéis de nata caldi, succo d’arancia dell’Algarve appena spremuto e caffè speciale portoghese. Consegnato nel tuo boutique hotel, suite o Airbnb.',
    btnExploreBoxes: 'Esplora le Box (€9,90 – €15,90)',
    btnOurStory: 'Il Nostro Rituale del Mattino',
    trust1: 'Scatole in Legno 100% Eco-Sostenibili',
    trust2: 'Fascia Oraria di Consegna Garantita di 30 Min',
    trust3: 'Da Alfama a Cascais e Centro Storico',

    // Cinematic Chapters
    ch1Tag: '01 / L’ORIZZONTE',
    ch1Time: '06:45',
    ch1Loc: 'Sopra la Costa Atlantica e il Fiume Tago',
    ch1Quote: 'Il viaggio inizia prima che la città si svegli.',
    ch1Title: 'La tua mattina a Lisbona inizia qui.',
    ch1Sub: 'Colazione artigianale portoghese, consegnata direttamente nel tuo hotel o Airbnb.',

    ch2Tag: '02 / L’ARRIVO',
    ch2Time: '07:30',
    ch2Loc: 'Alfama & Colline Storiche',
    ch2Quote: 'Tetti di terracotta baciati dalla prima luce dorata.',
    ch2Title: 'Sei arrivato a Lisbona.',
    ch2Sub: 'Una nuova città. Una mattina luminosa. Nessun motivo per avere fretta.',

    ch3Tag: '03 / IL RISVEGLIO',
    ch3Time: '08:15',
    ch3Loc: 'Nella Tua Camera o Appartamento',
    ch3Quote: 'Lenzuola fresche e sole morbido che entra dal balcone.',
    ch3Title: 'Svegliati con calma.',
    ch3Sub: 'Sei in vacanza. La colazione viene da te direttamente a letto.',

    ch4Tag: '04 / L’ESPERIENZA',
    ch4Time: '08:45',
    ch4Loc: 'Servito a Letto',
    ch4Quote: 'Caffè fumante, pastéis de nata caldi e agrumi dell’Algarve.',
    ch4Title: 'Lisbona, servita a letto.',
    ch4Sub: 'Fresco. Locale. Preparato con passione. Consegnato alla tua porta.',

    ch5Tag: '05 / IL MOMENTO',
    ch5Time: '09:15',
    ch5Loc: 'Vista sul Fiume Tago',
    ch5Quote: 'Sei venuto a Lisbona. Lascia che Lisbona venga a colazione.',
    ch5Title: 'Non è solo una colazione.',
    ch5Sub: 'È il modo perfetto per iniziare la tua giornata a Lisbona.',

    // Interactive Scroller Controls
    btnPlayTour: 'RIPRODUCI TOUR CINEMATOGRAFICO',
    btnPauseTour: 'PAUSA TOUR',
    btnBookNowScroller: 'PRENOTA LA COLAZIONE',
    btnExploreMenuScroller: 'ESPLORA IL MENU',
    scrollHint: 'Scorri verso il basso per svegliarti a Lisbona ↓',

    // Scenarios / Story
    scenarioTitle: 'Creato per Ogni Mattina a Lisbona',
    scenarioSubtitle: 'Scegli l’atmosfera che preferisci per il tuo risveglio',
    tabCouples: 'Fuga Romantica',
    tabSolo: 'Viaggiatori Singoli',
    tabFamily: 'Gruppi e Famiglie',
    tabEarly: 'Tour Mattutini / Voli',

    // Menus & Boxes
    menuSectionTitle: 'Box Colazione & Brunch Artigianali',
    menuSectionSubtitle: 'Preparate ogni mattina all’alba con prodotti locali di fattorie portoghesi.',
    btnViewFullMenu: 'Vedi Menu Completo e Aggiunte',
    btnOrderBox: 'Seleziona e Ordina la Box',
    priceFrom: 'da',
    includes: 'Include',
    reviewsBadge: 'Recensioni degli Ospiti a Lisbona',
    reviewsTitle: 'Cosa Dicono i Nostri Viaggiatori',
    badgeFeatured: 'Più Popolare',
    deliveryCoverageTitle: 'Zone di Consegna a Lisbona:',
    deliveryCoverageText: 'Alfama, Chiado, Baixa, Príncipe Real, Avenida da Liberdade, Estrela, Belém, Parque das Nações & Cascais Express.',

    // How it works
    howTitle: 'Come Funziona in 3 Semplici Passaggi',
    step1Title: '1. Scegli Box e Orario',
    step1Desc: 'Seleziona il tuo menu artigianale e la fascia oraria di 30 minuti tra le 08:00 e le 11:30.',
    step2Title: '2. Cotto Fresco all’Alba',
    step2Desc: 'Pasticceria fresca dalla nostra panetteria a Lisbona, spremuta fresca e caffè caldo termosigillato.',
    step3Title: '3. Consegnato con Cura alla Tua Porta',
    step3Desc: 'Il nostro concierge consegna discretamente alla reception dell’hotel o alla porta del tuo appartamento.',

    // QR Code Section
    qrSectionBadge: 'Scansione Rapida su Smartphone & Kit Host',
    qrSectionTitle: 'Scansiona e Ordina Direttamente dal Telefono',
    qrSectionDesc: 'Stai visualizzando il sito su computer o tablet? Inquadra il codice QR con lo smartphone per ordinare comodamente dal letto.',
    qrInstantTitle: 'Accesso Immediato per gli Ospiti',
    qrInstantDesc: 'Nessuna app da scaricare. Apre subito menu, chitarra portoghese e prenotazione in 1 minuto.',
    qrHostTitle: 'Kit per Host di Airbnb e Hotel',
    qrHostDesc: 'Scarica l’adesivo 8x8cm in alta risoluzione per il libro di benvenuto o il frigorifero.',
    btnOrderNow: 'Ordina la Colazione Ora',
    btnViewSticker: 'Vedi Adesivo Completo',

    // Sticker text
    stickerBadge: 'BREAKFAST IN BED LX • LISBONA',
    stickerHook: 'Psst... Vuoi la colazione a letto?',
    stickerSub: 'Dolci artigianali, spremuta fresca & caffè consegnati alla tua porta a Lisbona 🥐☕',
    stickerScanBtn: 'INQUADRA PER ORDINARE',
    btnDownloadSticker: 'Scarica Adesivo 8x8cm',
    btnCopyLink: 'Copia Link',
    linkCopied: 'Link Copiato!',
    btnPrint: 'Stampa',

    // Modal QR
    modalQRTitle: 'Codice QR Ufficiale & Adesivo 8x8cm',
    modalQRSubtitle: 'Breakfast in Bed LX • Lisbona',
    modalQRKitBadge: 'Kit per Ospiti e Strutture Ricettive',
    modalQRHeading: 'Accesso Immediato sullo Smartphone dell’Ospite',
    modalQRText: 'Questo codice QR collega direttamente alla landing page ufficiale con menu interattivi, calcolo ordini e fado portoghese.',
    modalQRTip1: 'Per Ospiti su PC: Inquadra il codice con lo smartphone per ordinare dal letto.',
    modalQRTip2: 'Per Host Airbnb: Scarica il PNG 8x8cm per stampare adesivi o cartoline di benvenuto.',

    // Audio Controller
    audioTitle: 'Serenata Mattutina di Lisbona',
    audioModeFull: 'Completo',
    audioModeGuitar: 'Solo Chitarra',
    audioModeBreeze: 'Brezza del Tago',
    btnPluckGuitar: '🎸 Pizzica Corda',
    btnTrillGuitar: '✨ Trillo di Fado',

    // Booking Modal
    bookModalTitle: 'Prenota la Colazione a Letto',
    bookModalSub: 'Delicata Consegna Mattutina a Lisbona',
    inputBoxLabel: 'Box Selezionata',
    inputQtyLabel: 'Numero di Box',
    inputDateLabel: 'Data di Consegna',
    inputTimeLabel: 'Fascia Oraria Mattutina',
    inputNameLabel: 'Nome e Cognome',
    inputPhoneLabel: 'WhatsApp / Numero di Telefono',
    inputAddressLabel: 'Nome Hotel o Indirizzo Airbnb (Lisbona)',
    inputNotesLabel: 'Allergies / N° di Camera / Codice Citofono',
    totalLabel: 'Totale Stimato',
    btnConfirmBooking: 'Conferma e Invia Ordine via WhatsApp',
    bookingSuccessNote: 'Nessun pagamento online anticipato. Paga alla consegna in contanti o con carta.',

    // Footer
    footerTagline: 'L’arte di svegliarsi con calma a Lisbona.',
    footerLegal: '© 2026 Breakfast in Bed LX. Creato con passione a Lisbona, Portogallo.',
  },
};
