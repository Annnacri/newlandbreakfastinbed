export interface BreakfastBox {
  id: string;
  name: string;
  portugueseSubtitle: string;
  tagline: string;
  price: number;
  serves: string;
  category: 'heritage' | 'luxury' | 'vegan' | 'family' | 'solo' | 'vitality' | 'summer';
  image: string;
  description: string;
  highlights: string[];
  items: {
    name: string;
    description: string;
    origin?: string;
  }[];
  popular?: boolean;
}

export interface MenuItemAddon {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'bakery' | 'beverage' | 'special' | 'fruit' | 'food';
}

export interface MorningScenario {
  id: string;
  title: string;
  category: string;
  quote: string;
  story: string;
  idealFor: string;
  recommendedBoxId: string;
  image: string;
  locationTip: string;
}

export interface BookingFormData {
  boxId: string;
  boxQuantity: number;
  addons: { [addonId: string]: number };
  deliveryDate: string;
  deliveryTime: string;
  locationType: 'hotel' | 'airbnb' | 'apartment' | 'guesthouse';
  accommodationName: string;
  address: string;
  neighborhood: string;
  roomOrFloor: string;
  doorCode: string;
  guestCount: number;
  guestName: string;
  email: string;
  phone: string;
  morningGreeting: 'doorbell' | 'quiet_dropoff' | 'balcony_setup';
  specialRequests: string;
  giftCardMessage: string;
}
