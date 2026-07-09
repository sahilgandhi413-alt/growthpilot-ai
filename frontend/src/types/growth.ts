export interface DashboardData {

    revenue:number;

    growth:string;

    customers:number;

    inventory_health:string;

}



export interface ForecastItem {

    month:string;

    sales:number;

}



export interface ForecastResponse {

    prediction:ForecastItem[];

    confidence:number;

}



export interface InsightResponse {

    insights:string[];

}



export interface CopilotResponse {

    reply:string;

}