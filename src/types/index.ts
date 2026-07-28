

export type BannerType = 'popular' | 'new' | 'sale';

export interface BannerConfig {
  label: string;
  className: string;
  position: 'left' | 'right';
}

export const BANNER_CONFIG: Record<BannerType, BannerConfig> = {
  popular: {
    label: 'Popular',
    className: 'bg-primary-container text-on-primary-fixed neon-glow',
    position: 'left',
  },
  new: {
    label: 'Nuevo',
    className: 'bg-tertiary-fixed text-on-tertiary-fixed',
    position: 'left',
  },
  sale: {
    label: '¡Oferta!',
    className: 'bg-error text-on-error',
    position: 'right',
  },
};

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  available: boolean;
  imageUrl: string;
  description: string;
  banner?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  itemNote?: string;
}


export interface Order {
  storeId: string;
  items: {
    productId: string;
    quantity: number;
    itemNote?: string;
  }[];
  deliveryType: 'HOME_DELIVERY' | 'STORE_PICKUP';
  paymentMethod: 'CASH' | 'TRANSFER';
  customerNote?: string;
  }


export interface NavItem {
  path: string;
  label: string;
  icon: string;
}