export interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  status: boolean;
  img: string;
  description?: string;
}

export interface Order {
  id: string;
  client: string;
  status: 'Preparando' | 'En Ruta' | 'Entregado';
  statusColor: 'tertiary' | 'amber' | 'green';
  timeline: number;
  total: string;
  pulse?: boolean;
}

export interface NavItem {
  path: string;
  label: string;
  icon: string;
}