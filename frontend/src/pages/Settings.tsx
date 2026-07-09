import SettingsHeader from "../components/settings/Header";
import ProfileCard from "../components/settings/ProfileCard";
import BusinessSettings from "../components/settings/BusinessSettings";
import NotificationSettings from "../components/settings/alert";
import SecuritySettings from "../components/settings/SecuritySettings";
import AISettings from "../components/settings/ai";
import AppearanceSettings from "../components/settings/AppearanceSettings";
import IntegrationSettings from "../components/settings/IntegrationSettings";
import DangerZone from "../components/settings/DangerZone";

export default function Settings() {
  return (
    <div className="mx-auto max-w-[1700px] space-y-8 px-8 py-8">

      <SettingsHeader />

      <ProfileCard />

      <div className="grid gap-8 xl:grid-cols-2">
        <BusinessSettings />
        <NotificationSettings />
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <SecuritySettings />
        <AISettings />
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <AppearanceSettings />
        <IntegrationSettings />
      </div>

      <DangerZone />

    </div>
  );
}