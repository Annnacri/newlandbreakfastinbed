import { BreakfastBox, MenuItemAddon, MorningScenario } from '../types';
import { Language } from '../i18n/translations';

import heroPlane from '../assets/images/hero_plane_arrival_1787298950276.jpg';
import lisbonAerial from '../assets/images/lisbon_aerial_sunrise_1787298963334.jpg';
import lisbonRoom from '../assets/images/lisbon_room_morning_1787298977080.jpg';
import portugueseBreakfast from '../assets/images/portuguese_breakfast_bed_1787298996710.jpg';
import lisbonBalcony from '../assets/images/lisbon_morning_moment_1787299013238.jpg';
import classicBoxImg from '../assets/images/menu_classic_box_1787299034697.jpg';
import deluxeBrunchImg from '../assets/images/menu_deluxe_brunch_1787299051374.jpg';

export const STORY_IMAGES = {
  heroPlane,
  lisbonAerial,
  lisbonRoom,
  portugueseBreakfast,
  lisbonBalcony,
  classicBox: classicBoxImg,
  deluxeBrunch: deluxeBrunchImg,
};

export const BREAKFAST_BOXES: BreakfastBox[] = [
  {
    id: 'menu-vitamina-c',
    name: 'Menu Vitamina C',
    portugueseSubtitle: 'Frescura, Energia & Vitalidade',
    tagline: 'Sumo de laranja fresco, torta caseira e croissants recheados',
    price: 10.90,
    serves: '1–2 Pessoas',
    category: 'vitality',
    image: classicBoxImg,
    popular: true,
    description: 'Um despertar cheio de frescura e sabor com sumo de laranja natural, torta de laranja caseira húmida, quiche artesanal de cogumelos e croissants recheados com queijo cottage e kiwi.',
    highlights: ['Sumo de Laranja Natural', 'Torta de Laranja Caseira', 'Quiche de Cogumelos', 'Croissants recheados c/ Queijo Cottage e Kiwi'],
    items: [
      { name: 'Sumo de Laranja Natural', description: 'Espremido na manhã com laranjas frescas e doces' },
      { name: 'Torta de Laranja Caseira', description: 'Receita tradicional húmida e aromática' },
      { name: 'Quiche de Cogumelos', description: 'Massa estaladiça com recheio cremoso de cogumelos frescos' },
      { name: 'Croissants com Queijo Cottage e Kiwi', description: 'Croissants folhados recheados com kiwi fresco e queijo cottage suave' },
    ],
  },
  {
    id: 'menu-portugues',
    name: 'Menu Português',
    portugueseSubtitle: 'O Clássico Tradicional',
    tagline: 'Tradição pura com pastel de nata e pastel de bacalhau',
    price: 9.90,
    serves: '1 Pessoa',
    category: 'heritage',
    image: portugueseBreakfast,
    popular: true,
    description: 'A essência dos pequenos-almoços e lanches portugueses: leite com chocolate reconfortante, pão de mistura fresco com presunto selecionado, pastel de bacalhau dourado e o icónico pastel de nata.',
    highlights: ['Leite com Chocolate', 'Pão de Mistura c/ Presunto', 'Pastel de Bacalhau Tradicional', 'Pastel de Nata'],
    items: [
      { name: 'Leite com Chocolate', description: 'Bebida reconfortante e clássica' },
      { name: 'Pão de Mistura com Presunto', description: 'Pão rústico de padaria com fatias finas de presunto' },
      { name: 'Pastel de Bacalhau', description: 'Frito na hora, dourado e estaladiço com bacalhau e salsa' },
      { name: 'Pastel de Nata', description: 'Massa folhada estaladiça com creme caramelizado' },
    ],
  },
  {
    id: 'menu-brunch',
    name: 'Menu Brunch',
    portugueseSubtitle: 'Banquete Completo & Generoso',
    tagline: 'Ovos com farinheira, salgadinhos artesanais e tarte de maçã',
    price: 15.90,
    serves: '1–2 Pessoas',
    category: 'luxury',
    image: deluxeBrunchImg,
    popular: true,
    description: 'Um banquete completo para um despertar sem pressa: sumo de laranja natural, ovos mexidos cremosos com farinheira tradicional, mini tostas com patê de sardinha, rissol de camarão, rissol de leitão e tarte caseira de maçã.',
    highlights: ['Ovos Mexidos c/ Farinheira', 'Rissol de Camarão & Rissol de Leitão', 'Patê de Sardinha c/ Mini Tostas', 'Tarte Caseira de Maçã + Sumo'],
    items: [
      { name: 'Sumo de Laranja Natural', description: 'Sumo fresco espremido ao acordar' },
      { name: 'Ovos Mexidos com Farinheira', description: 'Ovos cremosos preparados com farinheira tradicional portuguesa' },
      { name: 'Mini Tostas & Patê de Sardinha', description: 'Tostas estaladiças com patê de sardinha artesanal' },
      { name: 'Rissol de Camarão & Rissol de Leitão', description: 'Salgados tradicionais com recheio rico e casquinha crocante' },
      { name: 'Tarte Caseira de Maçã', description: 'Fatia generosa de tarte de maçã com canela' },
    ],
  },
  {
    id: 'menu-summer',
    name: 'Menu Summer',
    portugueseSubtitle: 'Leve, Cítrico & Refrescante',
    tagline: 'Sumo de limão fresco, pasta de atum e torta de limão',
    price: 10.90,
    serves: '1 Pessoa',
    category: 'summer',
    image: lisbonBalcony,
    popular: false,
    description: 'Perfeito para manhãs soalheiras de verão: sumo de limão fresco e revigorante, queijo fresco temperado, torrada crocante com pasta caseira de atum e alface fresca, finalizado com torta de limão.',
    highlights: ['Sumo de Limão Fresco', 'Queijo Fresco Temperado', 'Torrada c/ Pasta de Atum e Alface', 'Torta Caseira de Limão'],
    items: [
      { name: 'Sumo de Limão Fresco', description: 'Limonada natural refrescante e revigorante' },
      { name: 'Queijo Fresco Temperado', description: 'Queijo fresco com fio de azeite, pimenta e ervas' },
      { name: 'Torrada com Pasta de Atum e Alface', description: 'Pão torrado com pasta cremosa de atum e folhas de alface fresca' },
      { name: 'Torta de Limão Caseira', description: 'Sobremesa cítrica, fresca e equilibrada' },
    ],
  },
];

// Helper to get localized boxes
export const getLocalizedBoxes = (lang: Language): BreakfastBox[] => {
  if (lang === 'en') {
    return [
      {
        ...BREAKFAST_BOXES[0],
        portugueseSubtitle: 'Freshness, Energy & Vitality',
        tagline: 'Fresh orange juice, homemade tart & stuffed croissants',
        serves: '1–2 Guests',
        description: 'A vibrant wake-up with freshly squeezed orange juice, moist homemade orange tart, artisan mushroom quiche, and flaky croissants filled with cottage cheese and fresh kiwi.',
        highlights: ['Fresh Algarve Orange Juice', 'Homemade Orange Tart', 'Mushroom Quiche', 'Croissants w/ Cottage Cheese & Kiwi'],
      },
      {
        ...BREAKFAST_BOXES[1],
        portugueseSubtitle: 'The Traditional Lisbon Classic',
        tagline: 'Pure tradition with pastel de nata & codfish fritter',
        serves: '1 Guest',
        description: 'The true soul of Portuguese breakfast: comforting chocolate milk, rustic sourdough with cured ham, golden codfish fritter, and the iconic warm pastel de nata.',
        highlights: ['Comforting Chocolate Milk', 'Rustic Bread w/ Cured Ham', 'Golden Codfish Fritter', 'Warm Pastel de Nata'],
      },
      {
        ...BREAKFAST_BOXES[2],
        portugueseSubtitle: 'Grand Feast & Brunch Spread',
        tagline: 'Scrambled eggs, artisan savouries & spiced apple tart',
        serves: '1–2 Guests',
        description: 'A generous banquet for a slow Lisbon morning: fresh orange juice, creamy scrambled eggs with Portuguese farinheira sausage, sardine pâté crisps, shrimp & suckling pig pastries, and homemade apple tart.',
        highlights: ['Scrambled Eggs w/ Farinheira', 'Shrimp & Roasted Pig Rissóis', 'Sardine Pâté on Mini Toasts', 'Homemade Spiced Apple Tart'],
      },
      {
        ...BREAKFAST_BOXES[3],
        portugueseSubtitle: 'Light, Citrus & Refreshing',
        tagline: 'Fresh lemonade, seasoned fresh cheese & lemon tart',
        serves: '1 Guest',
        description: 'Ideal for sunny mornings: freshly pressed lemonade, artisan seasoned fresh cheese, sourdough toast with homemade tuna spread and crisp lettuce, finished with a zesty lemon tart.',
        highlights: ['Fresh Squeezed Lemonade', 'Herbed Portuguese Fresh Cheese', 'Tuna Spread Toast w/ Crisp Greens', 'Homemade Lemon Tart'],
      },
    ];
  }

  if (lang === 'fr') {
    return [
      {
        ...BREAKFAST_BOXES[0],
        portugueseSubtitle: 'Fraîcheur, Énergie & Vitalité',
        tagline: 'Jus d’orange pressé, gâteau maison et croissants garnis',
        serves: '1–2 Personnes',
        description: 'Un réveil plein de fraîcheur avec pur jus d’orange pressé, gâteau moelleux à l’orange, quiche artisanale aux champignons et croissants au fromage frais et kiwi.',
        highlights: ['Jus d’Orange Frais', 'Gâteau Moelleux à l’Orange', 'Quiche aux Champignons', 'Croissants au Fromage Frais et Kiwi'],
      },
      {
        ...BREAKFAST_BOXES[1],
        portugueseSubtitle: 'Le Classique Traditionnel',
        tagline: 'La tradition pure avec pastel de nata et beignet de morue',
        serves: '1 Personne',
        description: 'L’essence du matin portugais : chocolat au lait réconfortant, pain rustique au jambon de pays, beignet de morue doré et l’emblématique pastel de nata tiède.',
        highlights: ['Chocolat au Lait Chaud', 'Pain Artisanal au Jambon Cru', 'Beignet de Morue Croustillant', 'Pastel de Nata'],
      },
      {
        ...BREAKFAST_BOXES[2],
        portugueseSubtitle: 'Banquet Complet & Généreux',
        tagline: 'Œufs brouillés à la farinheira, beignets salés et tarte aux pommes',
        serves: '1–2 Personnes',
        description: 'Un banquet généreux pour les matins sans réveil : jus d’orange frais, œufs brouillés à la farinheira, toasts au pâté de sardine, beignets de crevettes et tarte aux pommes maison.',
        highlights: ['Œufs Brouillés à la Farinheira', 'Beignets de Crevettes & Porcelet', 'Toasts au Pâté de Sardine', 'Tarte aux Pommes Maison'],
      },
      {
        ...BREAKFAST_BOXES[3],
        portugueseSubtitle: 'Léger, Citronné & Rafraîchissant',
        tagline: 'Citronnade fraîche, fromage frais assaisonné et tarte citron',
        serves: '1 Personne',
        description: 'Idéal pour les matins ensoleillés : citronnade fraîche, fromage blanc fermier aux herbes, tartines au thon et salade croquante, tartelette citronnée.',
        highlights: ['Citronnade Fraîche', 'Fromage Frais aux Fines Herbes', 'Tartine au Thon et Salade', 'Tarte Maison au Citron'],
      },
    ];
  }

  if (lang === 'es') {
    return [
      {
        ...BREAKFAST_BOXES[0],
        portugueseSubtitle: 'Frescura, Energía y Vitalidad',
        tagline: 'Zumo de naranja fresco, tarta casera y cruasanes rellenos',
        serves: '1–2 Personas',
        description: 'Un despertar lleno de frescura con zumo de naranja natural, tarta de naranja casera, quiche artesanal de champiñones y cruasanes con requesón y kiwi.',
        highlights: ['Zumo de Naranja Natural', 'Tarta de Naranja Casera', 'Quiche de Champiñones', 'Cruasanes con Requesón y Kiwi'],
      },
      {
        ...BREAKFAST_BOXES[1],
        portugueseSubtitle: 'El Clásico Tradicional',
        tagline: 'Tradición portuguesa con pastel de nata y buñuelo de bacalao',
        serves: '1 Persona',
        description: 'La esencia de los desayunos portugueses: leche con chocolate, pan rústico con jamón curado, buñuelo de bacalao dorado y pastel de nata recién horneado.',
        highlights: ['Leche con Chocolate', 'Pan Rústico con Jamón', 'Buñuelo de Bacalao Tradicional', 'Pastel de Nata Crujiente'],
      },
      {
        ...BREAKFAST_BOXES[2],
        portugueseSubtitle: 'Banquete Completo y Generoso',
        tagline: 'Huevos revueltos con farinheira, empanadillas y tarta de manzana',
        serves: '1–2 Personas',
        description: 'Un banquete completo para una mañana relajada: zumo natural, huevos revueltos con farinheira, tostas con paté de sardina, rissóis de gambas y tarta de manzana casera.',
        highlights: ['Huevos Revueltos con Farinheira', 'Rissol de Gambas y Cochinillo', 'Paté de Sardina con Tostas', 'Tarta Casera de Manzana'],
      },
      {
        ...BREAKFAST_BOXES[3],
        portugueseSubtitle: 'Ligero, Cítrico y Refrescante',
        tagline: 'Limonada natural, queso fresco aliñado y tarta de limón',
        serves: '1 Persona',
        description: 'Perfecto para mañanas soleadas de verano: limonada fresca, queso fresco portugués aliñado con aceite de oliva y hierbas, tostada con crema de atún y tarta de limón.',
        highlights: ['Limonada Natural Fresca', 'Queso Fresco Aliñado', 'Tostada con Crema de Atún', 'Tarta Casera de Limón'],
      },
    ];
  }

  if (lang === 'de') {
    return [
      {
        ...BREAKFAST_BOXES[0],
        portugueseSubtitle: 'Frische, Energie & Vitalität',
        tagline: 'Frischer Orangensaft, hausgemachter Kuchen & gefüllte Croissants',
        serves: '1–2 Personen',
        description: 'Ein vitaler Start mit frisch gepresstem Orangensaft, saftigem Orangenkuchen, handgemachter Pilz-Quiche und Croissants mit Frischkäse und Kiwi.',
        highlights: ['Frischer Algarve-Orangensaft', 'Hausgemachter Orangenkuchen', 'Pilz-Quiche', 'Croissants mit Frischkäse & Kiwi'],
      },
      {
        ...BREAKFAST_BOXES[1],
        portugueseSubtitle: 'Der Traditionelle Lissabon-Klassiker',
        tagline: 'Reine Tradition mit Pastel de Nata und Kabeljau-Bällchen',
        serves: '1 Person',
        description: 'Die Seele des portugiesischen Frühstücks: cremige Schokomilch, Sauerteigbrot mit Schinken, goldene Kabeljaukrokette und ofenfrisches Pastel de Nata.',
        highlights: ['Schokoladenmilch', 'Frisches Brot mit Schinken', 'Traditionelles Pastéis de Bacalhau', 'Knuspriges Pastel de Nata'],
      },
      {
        ...BREAKFAST_BOXES[2],
        portugueseSubtitle: 'Vollwertiges & Großzügiges Festmahl',
        tagline: 'Rührei mit Farinheira, herzhafte Teigtaschen & Apfelkuchen',
        serves: '1–2 Personen',
        description: 'Ein Festmahl für einen entspannten Morgen: frischer Saft, cremiges Rührei mit portugiesischer Farinheira, Sardinenpastete, Garnelen-Rissóis und Apfelkuchen.',
        highlights: ['Rührei mit Farinheira', 'Garnelen- & Spanferkel-Rissóis', 'Sardinenpastete mit Toast', 'Hausgemachter Apfelkuchen'],
      },
      {
        ...BREAKFAST_BOXES[3],
        portugueseSubtitle: 'Leicht, Zitrusfrisch & Erfrischend',
        tagline: 'Frische Limonade, gewürzter Frischkäse & Zitronenkuchen',
        serves: '1 Person',
        description: 'Perfekt für sonnige Tage: frisch gepresste Limonade, handwerklicher Frischkäse mit Olivenöl und Kräutern, Röstbrot mit Thunfischcreme und Zitronenkuchen.',
        highlights: ['Frische Limonade', 'Gewürzter Frischkäse', 'Röstbrot mit Thunfischcreme', 'Hausgemachter Zitronenkuchen'],
      },
    ];
  }

  if (lang === 'it') {
    return [
      {
        ...BREAKFAST_BOXES[0],
        portugueseSubtitle: 'Freschezza, Energia & Vitalità',
        tagline: 'Spremuta d’arancia fresca, torta fatta in casa e croissant farciti',
        serves: '1–2 Persone',
        description: 'Un risveglio fresco e gustoso con spremuta d’arancia fresca, torta all’arancia casalinga, quiche ai funghi e croissant con fiocchi di latte e kiwi.',
        highlights: ['Spremuta d’Arancia Fresca', 'Torta all’Arancia Fatta in Casa', 'Quiche ai Funghi', 'Croissant con Formaggio Fresco e Kiwi'],
      },
      {
        ...BREAKFAST_BOXES[1],
        portugueseSubtitle: 'Il Classico Tradizionale Portoghese',
        tagline: 'Pura tradizione con pastel de nata e polpetta di baccalà',
        serves: '1 Persona',
        description: 'L’essenza della colazione a Lisbona: latte al cioccolato, pane rustico con prosciutto crudo, polpetta di baccalà dorata e il famoso pastel de nata.',
        highlights: ['Latte al Cioccolato Caldo', 'Pane Rustico con Prosciutto', 'Pastel de Bacalhau Dorato', 'Pastel de Nata Caldo'],
      },
      {
        ...BREAKFAST_BOXES[2],
        portugueseSubtitle: 'Banchetto Completo e Generoso',
        tagline: 'Uova strapazzate con farinheira, stuzzichini artigianali e torta di mele',
        serves: '1–2 Persone',
        description: 'Un banchetto ricco per iniziare la giornata senza fretta: spremuta fresca, uova con salsiccia farinheira, crostini con paté di sarde, rissóis ai gamberi e crostata di mele.',
        highlights: ['Uova Strapazzate con Farinheira', 'Rissol di Gamberi e Maialino', 'Paté di Sarde con Crostini', 'Torta di Mele Fatta in Casa'],
      },
      {
        ...BREAKFAST_BOXES[3],
        portugueseSubtitle: 'Leggero, Agrumato & Rinfrescante',
        tagline: 'Limonata fresca, formaggio fresco speziato e torta al limone',
        serves: '1 Persona',
        description: 'Ideale per le mattine d’estate: limonata naturale rinfrescante, formaggio fresco condito con olio ed erbe, toast con crema di tonno e torta al limone.',
        highlights: ['Limonata Fresca Naturale', 'Formaggio Fresco Condito', 'Toast con Crema di Tonno', 'Torta Casalinga al Limone'],
      },
    ];
  }

  return BREAKFAST_BOXES;
};

export const MENU_ADDONS: MenuItemAddon[] = [
  {
    id: 'pastel-bacalhau',
    name: 'Pastel de Bacalhau Extra',
    description: 'Pastel de bacalhau tradicional estaladiço',
    price: 2.20,
    category: 'food',
  },
  {
    id: 'pastel-nata',
    name: 'Pastel de Nata Quentinho',
    description: 'Polvilhado com canela e açúcar em pó',
    price: 1.80,
    category: 'bakery',
  },
  {
    id: 'rissol-camarao',
    name: 'Rissol de Camarão',
    description: 'Recheio cremoso com camarão',
    price: 2.00,
    category: 'food',
  },
  {
    id: 'rissol-leitao',
    name: 'Rissol de Leitão',
    description: 'Recheio rico de leitão assado',
    price: 2.20,
    category: 'food',
  },
  {
    id: 'croissant-misto',
    name: 'Croissant Misto Quente',
    description: 'Com queijo flamengo e fiambre',
    price: 2.90,
    category: 'bakery',
  },
  {
    id: 'quiche-cogumelos',
    name: 'Quiche de Cogumelos',
    description: 'Fatia de quiche artesanal',
    price: 3.50,
    category: 'food',
  },
  {
    id: 'sumo-laranja',
    name: 'Sumo de Laranja do Algarve (500ml)',
    description: '100% natural, espremido na manhã',
    price: 3.80,
    category: 'beverage',
  },
  {
    id: 'leite-chocolate',
    name: 'Leite com Chocolate (250ml)',
    description: 'Embalagem individual fresca',
    price: 1.80,
    category: 'beverage',
  },
  {
    id: 'coca-cola',
    name: 'Coca-Cola Zero',
    description: 'Lata 330ml fresca',
    price: 1.90,
    category: 'beverage',
  },
  {
    id: 'fanta',
    name: 'Fanta',
    description: 'Lata 330ml fresca',
    price: 1.90,
    category: 'beverage',
  },
  {
    id: 'agua',
    name: 'Água Mineral',
    description: 'Garrafa 500ml',
    price: 1.50,
    category: 'beverage',
  },
];

export const MORNING_SCENARIOS: MorningScenario[] = [
  {
    id: 'romantic-escape',
    title: 'The Romantic Getaway',
    category: 'Para Casais',
    quote: 'Sem despertador. Apenas o sol nos telhados de Lisboa e pequeno-almoço na cama.',
    story: 'Ficou a ouvir Fado em Alfama até tarde. Hoje não há razão para sair dos lençóis. Partilhem pastéis de nata quentinhos, sumo de laranja fresco e aproveitem a vista sobre o Tejo.',
    idealFor: 'Casais em escapadas românticas, luas-de-mel e fins de semana em Lisboa',
    recommendedBoxId: 'menu-brunch',
    image: lisbonBalcony,
    locationTip: 'Perfeito para saborear na varanda em Alfama, Chiado ou Príncipe Real.',
  },
  {
    id: 'airbnb-slow-living',
    title: 'O Despertar Tranquilo no Airbnb',
    category: 'Viajantes Independentes',
    quote: 'O luxo de acordar como um local sem ter de ir à procura de padarias.',
    story: 'Acordar num apartamento soalheiro com o som do Elétrico 28 ao longe. Em vez de filas na pastelaria, o seu banquete português chega discretamente à porta.',
    idealFor: 'Hóspedes em apartamentos turísticos e Airbnbs que procuram conforto total',
    recommendedBoxId: 'menu-portugues',
    image: lisbonRoom,
    locationTip: 'Entregamos diretamente à porta do seu apartamento através do código de acesso.',
  },
  {
    id: 'celebration-milestone',
    title: 'Manhãs de Celebração e Aniversário',
    category: 'Ocasiões Especiais',
    quote: 'Comece o dia especial antes mesmo de pôr os pés no chão.',
    story: 'Surpreenda quem mais ama com um brunch generoso, salgados tradicionais, tarte de maçã caseira e sumos naturais de fruta portuguesa.',
    idealFor: 'Aniversários, celebrações a dois e datas marcantes em Lisboa',
    recommendedBoxId: 'menu-brunch',
    image: deluxeBrunchImg,
    locationTip: 'Inclui mensagem de felicitações personalizada sem custos adicionais.',
  },
  {
    id: 'remote-work-wellness',
    title: 'Nomadas Digitais & Energia Matinal',
    category: 'Trabalho Remoto & Bem-Estar',
    quote: 'Energia limpa, nutrição saudável e zero perda de tempo.',
    story: 'Comece as suas reuniões matinais alimentado com sumo natural do Algarve, quiche artesanal de cogumelos, croissants com queijo fresco e fruta.',
    idealFor: 'Nomadas digitais, criadores e viajantes em trabalho remoto',
    recommendedBoxId: 'menu-vitamina-c',
    image: classicBoxImg,
    locationTip: 'Janelas de entrega precisas para coincidir com os seus intervalos de reuniões.',
  },
];

export const LISBON_NEIGHBORHOODS = [
  { id: 'alfama', name: 'Alfama & Graça', description: 'Historic cobblestones, Fado hills & river views' },
  { id: 'chiado', name: 'Chiado & Bairro Alto', description: 'Bohemian heart, chic apartments & opera squares' },
  { id: 'baixa', name: 'Baixa & Rossio', description: 'Grand Pombaline avenues & central boutique hotels' },
  { id: 'principe-real', name: 'Príncipe Real & Santos', description: 'Leafy gardens, concept lofts & antique mansions' },
  { id: 'avenida', name: 'Avenida da Liberdade', description: 'Luxury boulevard hotels & 5-star suites' },
  { id: 'estrada', name: 'Estrela & Lapa', description: 'Quiet embassy quarters, palace gardens & townhouses' },
  { id: 'belem', name: 'Belém & Restelo', description: 'Monumental riverside promenade & historic villas' },
  { id: 'parque-nacoes', name: 'Parque das Nações', description: 'Modern waterfront apartments & river towers' },
  { id: 'cascais', name: 'Cascais & Estoril (Express)', description: 'Atlantic coast villas & luxury seaside suites' },
];

export const GUEST_REVIEWS = [
  {
    name: 'Emma & Charlotte',
    origin: 'London, UK',
    stay: 'Boutique Airbnb in Alfama',
    rating: 5,
    comment: 'Waking up to warm pastéis de nata and fresh orange juice on our balcony overlooking the red rooftops was the absolute highlight of our Lisbon trip. Truly exceptional service.',
  },
  {
    name: 'Marc & Helena',
    origin: 'Munich, Germany',
    stay: 'Hotel Heritage Avenida Liberdade',
    rating: 5,
    comment: 'The Menu Brunch was perfection. Freshly made scrambled eggs with farinheira and delicate pastries right in our room. Zero stress, 100% gourmet luxury.',
  },
  {
    name: 'Sofia & Lucas',
    origin: 'São Paulo, Brasil',
    stay: 'Apartamento no Príncipe Real',
    rating: 5,
    comment: 'Sem filas nas pastelarias. Seguiram o código da porta do prédio à risca e o pequeno-almoço estava à porta às 08h30 em ponto. Serviço impecável.',
  },
];
