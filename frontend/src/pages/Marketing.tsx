import { motion } from "framer-motion";

import MarketingHeader from "../components/marketing/Header";
import MarketingToolbar from "../components/marketing/Toolbar";
import MarketingStats from "../components/marketing/Stats";
import MarketingSpendChart from "../components/marketing/SpendChart";
import MarketingChannelChart from "../components/marketing/ChannelChart";
import MarketingAIInsights from "../components/marketing/AIInsights";
import CampaignTable from "../components/marketing/CampaignTable";
import TopCampaigns from "../components/marketing/TopCampaigns";
import AudienceInsights from "../components/marketing/AudienceInsights";
import MarketingFloatingAI from "../components/marketing/FloatingAI";

export default function Marketing() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="mx-auto max-w-[1700px] space-y-8 px-8 py-8"
    >
      {/* Header */}
      <MarketingHeader />

      {/* Toolbar */}
      <MarketingToolbar />

      {/* Stats */}
      <MarketingStats />

      {/* Charts */}
      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <MarketingSpendChart />
        </div>

        <MarketingChannelChart />
      </div>

      {/* AI */}
      <MarketingAIInsights />

      {/* Campaign Table */}
      <CampaignTable />

      {/* Bottom */}
      <div className="grid gap-8 xl:grid-cols-2">
        <TopCampaigns />

        <AudienceInsights />
      </div>

      {/* Floating AI */}
      <MarketingFloatingAI />
    </motion.div>
  );
}