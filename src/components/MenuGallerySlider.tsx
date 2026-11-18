import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, Utensils, Check, ArrowRight } from 'lucide-react';
import { ambientSound } from '../utils/audio';
import { useTranslation } from '../hooks';

export interface MenuGalleryItem {
  id: string;
  image: string;
  priceTag: string;
  titles: Record<string, string>;
  categories: Record<string, string>;
  descriptions: Record<string, string>;
  highlights: Record<string, string[]>;
  pairings: Record<string, string>;
}

export const MENU_GALLERY_DATA: MenuGalleryItem[] = [
  {
    id: 'prego-mafra',
    image: '/images/gallery/breakprego.jpg',
    priceTag: 'Prego Box (€13,90)',
    titles: {
      pt: 'Prego em Pão Rústico de Mafra',
      en: 'Tender Garlic Steak Sandwich in Mafra Bread',
      fr: 'Prego de Bœuf dans un Pain Rustique de Mafra',
      es: 'Prego de Ternera en Pan Rústico de Mafra',
      de: 'Zartes Rindersteak im rustikalen Mafra-Brot',
      it: 'Prego di Manzo in Pane Rustico di Mafra',
    },
    categories: {
      pt: 'Especialidade de Lisboa',
      en: 'Lisbon Specialty',
      fr: 'Spécialité de Lisbonne',
      es: 'Especialidad de Lisboa',
      de: 'Lissabonner Spezialität',
      it: 'Specialità di Lisbona',
    },
    descriptions: {
      pt: 'Bife tenro grelhado no ponto com suculência incomparável, manteiga de alho dourada e mostarda aromática servido no tradicional pão de Mafra de fermentação lenta.',
      en: 'Tender grilled steak infused with golden garlic butter and mild mustard, served warm inside traditional slow-fermented crusty Mafra bread.',
      fr: 'Steak de bœuf tendre grillé à point au beurre d’ail doré et moutarde douce, servi dans un authentique pain de Mafra au levain.',
      es: 'Filete de ternera tierno con mantequilla de ajo dorado y mostaza suave, servido en el tradicional pan crujiente de Mafra.',
      de: 'Zart gegrilltes Rindersteak mit goldener Knoblauchbutter und feinem Senf im traditionellen knusprigen Mafra-Sauerteigbrot.',
      it: 'Tenero filetto di manzo alla griglia con burro all’aglio dorato e senape delicata nel tipico pane rustico di Mafra.',
    },
    highlights: {
      pt: ['Pão rústico de Mafra com côdea estaladiça', 'Carne tenra e molho suave de alho', 'Ideal para um brunch reforçado'],
      en: ['Slow-fermented artisan Mafra bread', 'Tender steak with warm garlic butter', 'Perfect hearty morning fuel'],
      fr: ['Pain de Mafra croustillant à croûte dorée', 'Bœuf tendre au beurre d’ail parfumé', 'Parfait pour un brunch généreux'],
      es: ['Pan rústico de Mafra con corteza crujiente', 'Carne tierna con suave salsa de ajo', 'Ideal para un brunch consistente'],
      de: ['Rustikales Sauerteigbrot mit krosser Kruste', 'Zartes Fleisch mit Knoblauchnote', 'Perfekt für ein kräftiges Brunch'],
      it: ['Pane di Mafra fragrante e croccante', 'Carne tenera al burro d’aglio', 'Perfetto per un brunch ricco'],
    },
    pairings: {
      pt: 'Excelente com Sumo de Laranja Natural & Café de Especialidade',
      en: 'Pairs beautifully with Fresh Algarve Orange Juice & Espresso',
      fr: 'Excellent avec un Jus d’Orange Frais & Café de Spécialité',
      es: 'Excelente con Zumo de Naranja Natural y Café Espresso',
      de: 'Hervorragend mit frischem Algarve-Orangensaft & Espresso',
      it: 'Ottimo abbinato a Spremuta Fresca e Caffè Espresso',
    },
  },
  {
    id: 'brunch-banquete',
    image: '/images/gallery/brunch.jpg',
    priceTag: 'Grand Brunch (€16,90)',
    titles: {
      pt: 'Grande Banquete Brunch na Cama',
      en: 'Grand Bed-Brunch Feast',
      fr: 'Grand Festin de Brunch au Lit',
      es: 'Gran Banquete de Brunch en la Cama',
      de: 'Großes Brunch-Festmahl im Bett',
      it: 'Grande Banchetto di Brunch a Letto',
    },
    categories: {
      pt: 'Para 2 Pessoas',
      en: 'For 2 People',
      fr: 'Pour 2 Personnes',
      es: 'Para 2 Personas',
      de: 'Für 2 Personen',
      it: 'Per 2 Persone',
    },
    descriptions: {
      pt: 'A experiência de pequeno-almoço mais farta de Lisboa: panquecas douradas com açúcar em pó, ovos mexidos aveludados, bacon estaladiço, travessa de frutas frescas cortadas (meloa, morangos e laranjas) e croissants folhados.',
      en: 'The most indulgent morning experience in Lisbon: fluffy golden pancakes dusted with icing sugar, velvety scrambled eggs, crispy bacon, freshly sliced fruit platter, and flaky butter croissants.',
      fr: 'L’expérience la plus généreuse de Lisbonne : pancakes dorés saupoudrés de sucre glace, œufs brouillés crémeux, bacon croustillant, plateau de fruits frais et croissants pur beurre.',
      es: 'El banquete más generoso de Lisboa: tortitas doradas con azúcar glas, huevos revueltos cremosos, bacon crujiente, tabla de frutas frescas y croissants hojaldrados.',
      de: 'Das üppigste Frühstückserlebnis in Lissabon: goldene Pfannkuchen mit Puderzucker, sahniges Rührei, krosser Bacon, frische Obstplatte und feine Buttercroissants.',
      it: 'La colazione più ricca di Lisbona: soffici pancake spolverati di zucchero a velo, uova strapazzate cremose, bacon croccante, tagliere di frutta fresca e croissant fragranti.',
    },
    highlights: {
      pt: ['Panquecas fofas com açúcar em pó', 'Ovos mexidos cremosos no ponto', 'Travessa de frutas da época frescas'],
      en: ['Fluffy golden pancakes & powdered sugar', 'Velvety slow-cooked scrambled eggs', 'Fresh seasonal fruit platter'],
      fr: ['Pancakes moelleux saupoudrés de sucre glace', 'Œufs brouillés fondants', 'Plateau de fruits frais de saison'],
      es: ['Tortitas esponjosas con azúcar glas', 'Huevos revueltos suaves y cremosos', 'Bandeja de frutas frescas de temporada'],
      de: ['Fluffige Pfannkuchen mit Puderzucker', 'Frisch zubereitetes cremiges Rührei', 'Bunte Platte frischer saisonaler Früchte'],
      it: ['Pancake soffici con zucchero a velo', 'Uova strapazzate cremose e vellutate', 'Piatto di frutta fresca di stagione'],
    },
    pairings: {
      pt: 'Perfeito para manhãs a dois em suítes e varandas com vista',
      en: 'Ideal for romantic mornings in suites and scenic balcony views',
      fr: 'Parfait pour un réveil romantique sur balcon avec vue sur le Tage',
      es: 'Ideal para mañanas en pareja con vistas al río Tajo',
      de: 'Perfekt für romantische Zweisamkeit auf sonnigen Balkonen',
      it: 'Ideale per risvegli romantici in camera o sul balcone',
    },
  },
  {
    id: 'pastéis-nata',
    image: '/images/gallery/pasteldenata.jpg',
    priceTag: 'Sunshine Box (€9,90)',
    titles: {
      pt: 'Pastéis de Nata Estaladiços',
      en: 'Crispy Warm Pastéis de Nata',
      fr: 'Pastéis de Nata Chauds & Croustillants',
      es: 'Pastéis de Nata Calientes y Crujientes',
      de: 'Knusprig warme Pastéis de Nata',
      it: 'Pastéis de Nata Caldi e Fragranti',
    },
    categories: {
      pt: 'Tradição Secular de Lisboa',
      en: 'Lisbon Iconic Heritage',
      fr: 'Patrimoine Iconique de Lisbonne',
      es: 'Patrimonio Icónico de Lisboa',
      de: 'Traditionelles Lissabon-Kultgebäck',
      it: 'Tradizione Iconica di Lisbona',
    },
    descriptions: {
      pt: 'Folhado crocante em camadas finíssimas com creme de nata caramelizado no ponto certo, tépido e polvilhado de canela.',
      en: 'Multi-layered flaky puff pastry filled with silky caramelised custard cream, baked at high heat at dawn and lightly dusted with cinnamon.',
      fr: 'Pâte feuilletée ultra croustillante garnie d’une crème onctueuse délicatement caramélisée et parfumée à la cannelle.',
      es: 'Hojaldre finísimo y crujiente relleno de crema caramelizada suave, horneado al amanecer con un toque de canela.',
      de: 'Feinblättriger, krosser Blätterteig gefüllt mit karamellisierter Vanillecreme und verfeinert mit Zimt.',
      it: 'Pasta sfoglia croccante e leggera farcita con crema caramelizzata, sfornata al mattino e cosparsa di cannella.',
    },
    highlights: {
      pt: ['Fornadas matinais diárias', 'Massa folhada estaladiça', 'Creme aveludado e canela'],
      en: ['Baked fresh at dawn every morning', 'Crispy sound on the first bite', 'Silky custard with Ceylon cinnamon'],
      fr: ['Cuits au four chaque matin à l’aube', 'Feuilletage doré et ultra croustillant', 'Crème fondante à la cannelle'],
      es: ['Horneados cada mañana al amanecer', 'Hojaldre crujiente desde el primer bocado', 'Crema suave con canela de Ceilán'],
      de: ['Jeden Morgen frisch gebacken', 'Herrlich knusprig bei jedem Bissen', 'Cremig und aromatisch mit Zimt'],
      it: ['Sfornati freschi ogni mattina', 'Sfoglia croccante e friabile', 'Crema vellutata alla cannella'],
    },
    pairings: {
      pt: 'Harmoniza com café de especialidade ou galão cremoso',
      en: 'Best enjoyed with Portuguese espresso or creamy galão latte',
      fr: 'Se marie à merveille avec un espresso ou un café au lait galão',
      es: 'Inmejorable con café espresso o galão portugués',
      de: 'Harmoniert perfekt mit portugiesischem Espresso oder Galão',
      it: 'Sublime con caffè espresso o galão al latte',
    },
  },
  {
    id: 'pastéis-bacalhau',
    image: '/images/gallery/pastelinhodebacalhau.jpg',
    priceTag: 'Opção Tradicional',
    titles: {
      pt: 'Pastéis de Bacalhau Dourados',
      en: 'Golden Salt-Cod Croquettes',
      fr: 'Beignets de Morue Dorés (Pastéis de Bacalhau)',
      es: 'Buñuelos de Bacalao Dorados',
      de: 'Goldene Kabeljau-Krapfen (Pastéis de Bacalhau)',
      it: 'Frittelle Dorate di Baccalà',
    },
    categories: {
      pt: 'Petisco Artesanal Português',
      en: 'Artisan Portuguese Savory',
      fr: 'Délice Salé Traditionnel',
      es: 'Aperitivo Artesanal Portugués',
      de: 'Portugiesische Herzhafte Spezialität',
      it: 'Specialità Salata Portoghese',
    },
    descriptions: {
      pt: 'Receita caseira com bacalhau nobre desfiado à mão, batata aveludada e salsa fresca picada, fritos ao tom dourado perfeito.',
      en: 'Authentic recipe made with wild-caught codfish shredded by hand, mashed potatoes, and fresh garden parsley, fried to golden perfection.',
      fr: 'Recette authentique à base de morue effilochée à la main, purée de pommes de terre onctueuse et persil frais.',
      es: 'Receta tradicional con bacalao desmigado a mano, patata cremosa y perejil fresco frito en su punto.',
      de: 'Hausgemachtes Rezept mit feinem Kabeljau, samtigen Kartoffeln und frischer Petersilie, goldbraun gebacken.',
      it: 'Ricetta autentica con baccalà sfilacciato a mano, purea di patate e prezzemolo fresco, dorati alla perfezione.',
    },
    highlights: {
      pt: ['Bacalhau nobre e batata fresca', 'Salsa aromática colhida no dia', 'Textura estaladiça por fora e macia por dentro'],
      en: ['Hand-shredded wild cod & potato', 'Fresh aromatic herbs', 'Crisp exterior with fluffy center'],
      fr: ['Morue noble et pommes de terre fraîches', 'Persil aromatique frais du jour', 'Croustillant dehors, moelleux dedans'],
      es: ['Bacalao noble y patata fresca', 'Hierbas frescas aromáticas', 'Crujiente por fuera y tierno por dentro'],
      de: ['Edler Kabeljau und frische Kartoffeln', 'Aromatische Kräuter', 'Außen knusprig, innen samtig-weich'],
      it: ['Baccalà di qualità e patate fresche', 'Erbe aromatiche profumate', 'Croccante fuori e morbido dentro'],
    },
    pairings: {
      pt: 'Ideal como entrada ou acompanhamento salgado matinal',
      en: 'Great savory companion to your morning pastry assortment',
      fr: 'Idéal comme accompagnement salé pour un brunch équilibré',
      es: 'Acompañamiento salado ideal para tu desayuno',
      de: 'Perfekte herzhafte Ergänzung zum süßen Frühstück',
      it: 'Ottimo tocco salato da gustare al mattino',
    },
  },
  {
    id: 'sumo-vitamina-c',
    image: '/images/gallery/menuvitaminaC.jpg',
    priceTag: '100% Algarve',
    titles: {
      pt: 'Sumo 100% Laranja do Algarve',
      en: '100% Cold-Pressed Algarve Orange Juice',
      fr: 'Pur Jus d’Orange d’Algarve 100% Frais',
      es: 'Zumo 100% Naranja Natural del Algarve',
      de: '100% frisch gepresster Algarve-Orangensaft',
      it: 'Spremuta 100% d’Arancia dell’Algarve',
    },
    categories: {
      pt: 'Puro Sol de Portugal',
      en: 'Sun-Drenched Citrus',
      fr: 'Soleil du Portugal',
      es: 'Sol de Portugal',
      de: 'Sonne Portugals',
      it: 'Puro Sole del Portogallo',
    },
    descriptions: {
      pt: 'Laranjas colhidas no pomar do Algarve e espremidas na manhã da sua entrega às 06h00. Sem adição de água nem açúcares.',
      en: 'Sun-ripened oranges picked in Algarve groves and cold-pressed fresh at 06:00 AM on your delivery morning. 100% pure fruit.',
      fr: 'Oranges mûries sous le soleil d’Algarve, pressées à froid à 06h00 le matin de votre livraison. Sans eau ni sucre ajouté.',
      es: 'Naranjas recolectadas en el Algarve y exprimidas a primera hora de la mañana. 100% fruta pura sin añadidos.',
      de: 'Sonnengereifte Algarve-Orangen, am Liefermorgen um 06:00 Uhr kaltgepresst. Ohne Wasser- oder Zuckerzusatz.',
      it: 'Arance maturate al sole dell’Algarve e spremute a freddo alle 06:00 del mattino. 100% pura frutta naturale.',
    },
    highlights: {
      pt: ['100% fruta pura e natural', 'Espremido a frio diariamente', 'Vitamina C e frescura imediata'],
      en: ['100% pure natural citrus', 'Freshly pressed on delivery day', 'Instant burst of Vitamin C'],
      fr: ['100% pur fruit naturel', 'Pressé à froid chaque matin', 'Cure de vitamine C et de fraîcheur'],
      es: ['100% fruta natural y pura', 'Exprimido en frío al amanecer', 'Vitamina C y frescura inmediata'],
      de: ['100% reine Naturfrucht', 'Täglich frisch kaltgepresst', 'Voller Vitamin-C-Kick'],
      it: ['100% frutta fresca e naturale', 'Spremuto a freddo al mattino', 'Ricarica immediata di Vitamina C'],
    },
    pairings: {
      pt: 'O despertar matinal essencial em todas as caixas',
      en: 'The essential morning refresh included in every delivery',
      fr: 'Le réveil vitaminé indispensable dans chaque livraison',
      es: 'El despertar cítrico imprescindible en tu bandeja',
      de: 'Der unverzichtbare Frischekick in jeder unserer Boxen',
      it: 'Il risveglio vitaminico immancabile per iniziare la giornata',
    },
  },
  {
    id: 'summer-baguette',
    image: '/images/gallery/menusummer.jpg',
    priceTag: 'Summer Box (€11,90)',
    titles: {
      pt: 'Baguete Summer & Abacate Fresco',
      en: 'Summer Artisan Baguette & Fresh Avocado',
      fr: 'Baguette Summer & Avocat Frais',
      es: 'Baguette Summer y Aguacate Fresco',
      de: 'Sommer-Baguette mit frischer Avocado',
      it: 'Baguette Summer & Avocado Fresco',
    },
    categories: {
      pt: 'Opção Leve & Saudável',
      en: 'Light & Energizing Option',
      fr: 'Option Légère & Équilibrée',
      es: 'Opción Ligera y Saludable',
      de: 'Leichte & gesunde Morgenwahl',
      it: 'Scelta Leggera & Salutare',
    },
    descriptions: {
      pt: 'Baguete artesanal crocante com fatias generosas de abacate fresco, rábano roxo crocante, folhas verdes selecionadas e molho suave de ervas finas.',
      en: 'Artisan crusty baguette filled with ripe avocado slices, crunchy radish, delicate garden greens, and a drizzle of aromatic herb olive oil.',
      fr: 'Baguette artisanale croustillante garnie de tranches d’avocat mûr, radis croquant, jeunes pousses et vinaigrette légère aux herbes.',
      es: 'Baguette crujiente con aguacate fresco, rábano crujiente, brotes verdes y suave aliño de hierbas finas.',
      de: 'Knuspriges Baguette mit frischer Avocado, knackigem Rettich, feinen Salatblättern und Kräuter-Olivenöl.',
      it: 'Baguette fragrante con fette di avocado fresco, ravanello croccante, foglie verdi e filo d’olio alle erbe.',
    },
    highlights: {
      pt: ['Abacate fresco fatiado', 'Rábano crocante e verdes selecionados', 'Nutritivo, leve e equilibrado'],
      en: ['Fresh sliced ripe avocado', 'Crispy radish & organic greens', 'Nutritious, light, and energizing'],
      fr: ['Tranches d’avocat frais', 'Radis croquant et jeunes pousses', 'Nourrissant, frais et léger'],
      es: ['Aguacate fresco seleccionado', 'Rábano crujiente y brotes verdes', 'Nutritivo, fresco y ligero'],
      de: ['Frisch geschnittene Avocado', 'Knackiger Rettich & Bio-Kräuter', 'Leicht, bekömmlich & nährstoffreich'],
      it: ['Avocado fresco a fette', 'Ravanello e foglie selezionate', 'Nutriente, fresco e leggero'],
    },
    pairings: {
      pt: 'Excelente com Sumo Detox e Granola Artesanal',
      en: 'Pairs delightfully with Natural Citrus Juice & Granola',
      fr: 'Idéal avec un jus d’agrumes pressé et du granola maison',
      es: 'Perfecto con zumo natural y granola artesanal',
      de: 'Ideal mit natürlichem Zitrussaft und Müsli',
      it: 'Ottimo con spremuta naturale e granola artigianale',
    },
  },
];

interface MenuGallerySliderProps {
  onOpenBooking: () => void;
}

export const MenuGallerySlider: React.FC<MenuGallerySliderProps> = ({ onOpenBooking }) => {
  const { language, t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const currentItem = MENU_GALLERY_DATA[currentIndex];
  const langKey = language || 'pt';

  const title = currentItem.titles[langKey] || currentItem.titles.pt;
  const category = currentItem.categories[langKey] || currentItem.categories.pt;
  const description = currentItem.descriptions[langKey] || currentItem.descriptions.pt;
  const highlights = currentItem.highlights[langKey] || currentItem.highlights.pt;
  const pairing = currentItem.pairings[langKey] || currentItem.pairings.pt;

  const handleNext = () => {
    ambientSound.playCupClick();
    setCurrentIndex((prev) => (prev + 1) % MENU_GALLERY_DATA.length);
  };

  const handlePrev = () => {
    ambientSound.playCupClick();
    setCurrentIndex((prev) => (prev - 1 + MENU_GALLERY_DATA.length) % MENU_GALLERY_DATA.length);
  };

  const handleSelect = (index: number) => {
    ambientSound.playCupClick();
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % MENU_GALLERY_DATA.length);
    }, 4500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isAutoPlaying]);

  return (
    <div
      className="bg-white border border-amber-900/15 rounded-3xl p-6 sm:p-10 mb-16 shadow-md"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Top Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 border-b border-amber-900/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 bg-amber-100 border border-amber-300 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider text-amber-900 font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>{t.navMenus} • {t.audioTag}</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#221a14]">
            {t.menuSectionTitle}
          </h3>
          <p className="text-sm text-[#5a4d43] mt-1 font-normal">
            {t.menuSectionSubtitle}
          </p>
        </div>

        {/* Carousel Navigation Buttons */}
        <div className="flex items-center gap-2 self-start md:self-auto">
          <button
            onClick={handlePrev}
            aria-label="Previous"
            className="p-2.5 rounded-full border border-amber-900/20 bg-[#faf7f2] hover:bg-amber-600 hover:text-white text-[#221a14] transition-all cursor-pointer shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="text-xs font-mono font-bold text-amber-900 px-2">
            0{currentIndex + 1} / 0{MENU_GALLERY_DATA.length}
          </span>
          <button
            onClick={handleNext}
            aria-label="Next"
            className="p-2.5 rounded-full border border-amber-900/20 bg-[#faf7f2] hover:bg-amber-600 hover:text-white text-[#221a14] transition-all cursor-pointer shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Slide Presentation */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Large Image Showcase */}
        <div className="lg:col-span-7 relative group">
          <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-amber-50 border border-amber-900/15 shadow-md">
            <img
              key={currentItem.id}
              src={currentItem.image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 animate-in fade-in zoom-in-95 duration-400"
            />
            {/* Category Pill */}
            <div className="absolute top-4 left-4 bg-[#221a14]/90 backdrop-blur-md text-amber-300 text-xs font-mono font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-sm border border-amber-500/30">
              {category}
            </div>

            {/* Price Pill */}
            <div className="absolute bottom-4 right-4 bg-amber-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
              {currentItem.priceTag}
            </div>
          </div>
        </div>

        {/* Slide Info & Booking Trigger */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-amber-800 font-bold block mb-1">
              {category}
            </span>
            <h4 className="font-serif text-2xl sm:text-3xl font-bold text-[#221a14] mb-3 leading-tight">
              {title}
            </h4>
            <p className="text-sm sm:text-base text-[#5a4d43] leading-relaxed font-normal mb-5">
              {description}
            </p>

            {/* Bullet Highlights */}
            <div className="space-y-2 mb-5">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#4a3f36]">
                  <Check className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Pairing Note */}
            <div className="bg-[#faf7f2] border border-amber-900/10 p-3.5 rounded-xl flex items-start gap-2.5">
              <Utensils className="w-4 h-4 text-amber-700 mt-0.5 shrink-0" />
              <p className="text-xs text-[#5a4d43]">
                <strong className="text-[#221a14]">Pairing:</strong> {pairing}
              </p>
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-2">
            <button
              onClick={() => {
                ambientSound.playGoldenChime();
                onOpenBooking();
              }}
              className="bg-amber-600 hover:bg-amber-500 text-white font-semibold text-xs sm:text-sm py-3 px-6 rounded-full transition-all duration-200 uppercase tracking-wider shadow-md cursor-pointer whitespace-nowrap flex items-center gap-2"
            >
              <span>{t.btnOrderBox}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Thumbnails Row */}
      <div className="mt-8 pt-6 border-t border-amber-900/10 grid grid-cols-3 sm:grid-cols-6 gap-3">
        {MENU_GALLERY_DATA.map((photo, idx) => {
          const isSelected = idx === currentIndex;
          const thumbTitle = photo.titles[langKey] || photo.titles.pt;
          return (
            <button
              key={photo.id}
              onClick={() => handleSelect(idx)}
              className={`group relative rounded-xl overflow-hidden aspect-4/3 border-2 transition-all cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                isSelected
                  ? 'border-amber-600 ring-2 ring-amber-300 shadow-md scale-102'
                  : 'border-amber-900/10 opacity-70 hover:opacity-100 hover:border-amber-400'
              }`}
            >
              <img
                src={photo.image}
                alt={thumbTitle}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-1.5">
                <span className="text-[10px] font-bold text-white line-clamp-1">
                  {thumbTitle}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
