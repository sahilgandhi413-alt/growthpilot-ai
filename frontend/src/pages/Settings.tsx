import { useState } from "react";

import SettingsHeader from "../components/settings/SettingsHeader";
import ProfileCard from "../components/settings/ProfileCard";
import AppearanceSettings from "../components/settings/AppearanceSettings";
import NotificationSettings from "../components/settings/NotificationSettings";
import SecuritySettings from "../components/settings/SecuritySettings";
import APISettings from "../components/settings/APISettings";
import Preferences from "../components/settings/Preferences";
import SettingsAI from "../components/settings/settingsai";

import { useSettings } from "../context/SettingsContext";


export default function Settings() {

  const { saveSettings } = useSettings();

  const [saved, setSaved] = useState(false);


  const handleSave = () => {

    saveSettings();

    setSaved(true);


    setTimeout(() => {
      setSaved(false);
    }, 3000);

  };


  return (

    <div className="min-h-screen bg-slate-950 relative overflow-hidden">


      {/* Background Glow */}

      <div className="fixed inset-0 pointer-events-none overflow-hidden">


        <div
          className="
          absolute
          -top-40
          -left-32
          h-[500px]
          w-[500px]
          rounded-full
          bg-cyan-500/10
          blur-[150px]
          "
        />


        <div
          className="
          absolute
          bottom-0
          right-0
          h-[450px]
          w-[450px]
          rounded-full
          bg-purple-500/10
          blur-[150px]
          "
        />


      </div>



      <main
        className="
        relative
        mx-auto
        max-w-[1700px]
        space-y-8
        px-8
        py-8
        "
      >


        {/* Header */}

        <SettingsHeader />



        {/* Profile */}

        <ProfileCard />



        {/* Appearance + Notifications */}

        <section
          className="
          grid
          gap-8
          xl:grid-cols-2
          "
        >

          <AppearanceSettings />

          <NotificationSettings />


        </section>




        {/* Security + API */}

        <section
          className="
          grid
          gap-8
          xl:grid-cols-2
          "
        >

          <SecuritySettings />

          <APISettings />


        </section>




        {/* Preferences */}

        <Preferences />





        {/* Save Button */}

        <section
          className="
          flex
          justify-end
          items-center
          gap-5
          "
        >



          {
            saved && (

              <div
                className="
                rounded-xl
                border
                border-emerald-500/30
                bg-emerald-500/10
                px-5
                py-3
                text-emerald-400
                font-medium
                animate-pulse
                "
              >

                ✓ Settings saved successfully

              </div>

            )
          }





          <button

            onClick={handleSave}

            className="
            rounded-2xl
            bg-gradient-to-r
            from-cyan-500
            to-blue-600
            px-8
            py-4
            text-lg
            font-semibold
            text-white
            shadow-lg
            transition-all
            duration-300
            hover:scale-105
            hover:shadow-cyan-500/30
            active:scale-95
            "

          >

            Save All Changes

          </button>



        </section>



      </main>




      {/* Floating AI */}

      <SettingsAI/>


    </div>

  );

}