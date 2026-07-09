import API from "../api/api";


import type {

DashboardData,

ForecastResponse,

InsightResponse,

CopilotResponse

} from "../types/growth";




// Dashboard API

export const getDashboardData =
async():Promise<DashboardData>=>{


const response =
await API.get("/dashboard/");


return response.data;


};




// Forecast API

export const getForecastData =
async():Promise<ForecastResponse>=>{


const response =
await API.get("/forecast/");


return response.data;


};




// Insights API

export const getInsights =
async():Promise<InsightResponse>=>{


const response =
await API.get("/insights/");


return response.data;


};




// AI Copilot

export const askCopilot =
async(message:string):Promise<CopilotResponse>=>{


const response =
await API.post(

`/copilot/?message=${message}`

);


return response.data;


};