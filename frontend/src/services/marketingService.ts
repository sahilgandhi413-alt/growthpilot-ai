import api from "./api";

/* ===========================
   Marketing Summary
=========================== */
export const getMarketingSummary = async () => {
  const { data } = await api.get("/marketing/summary");
  return data;
};

/* ===========================
   Marketing Performance Chart
=========================== */
export const getMarketingChart = async () => {
  const { data } = await api.get("/marketing/chart");
  return data;
};

/* ===========================
   Marketing Campaigns
=========================== */
export const getMarketingCampaigns = async () => {
  const { data } = await api.get("/marketing/campaigns");
  return data;
};

/* ===========================
   AI Insights
=========================== */
export const getMarketingInsights = async () => {
  const { data } = await api.get("/marketing/insights");
  return data;
};

/* ======================================================
   Compatibility Wrappers
   (Allows old Marketing.tsx to work without changes)
====================================================== */

// Old name -> Chart
export const getMarketingChannels = getMarketingChart;

// Old name -> Campaigns
export const getCampaignTable = getMarketingCampaigns;