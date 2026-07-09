export interface DashboardData {
  revenue: number;
  orders: number;
  products: number;
  categories: number;
  growth: number;
}

export interface RevenueChartData {
  month: string;
  revenue: number;
}

export interface CategoryData {
  name: string;
  value: number;
}

export interface Order {
  id: number;
  customer: string;
  amount: number;
  status: string;
}

export interface InventoryAlert {
  product: string;
  stock: number;
  status: string;
}

export interface Activity {
  title: string;
  time: string;
}

export interface Insight {
  summary: string;
}