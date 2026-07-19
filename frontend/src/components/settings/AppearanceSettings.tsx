import { Moon, Palette } from "lucide-react";
import { useSettings } from "../../context/SettingsContext";


export default function AppearanceSettings() {


  const {
    settings,
    updateSettings,
  } = useSettings();



  const toggleDarkMode = () => {

    updateSettings({

      darkMode: !settings.darkMode,

    });

  };



  return (

    <section
      className="
      rounded-3xl
      border
      border-slate-800
      bg-slate-900
      p-8
      "
    >


      <h2
        className="
        mb-8
        text-2xl
        font-bold
        text-white
        "
      >

        Appearance

      </h2>




      <div className="space-y-6">



        {/* Dark Mode Toggle */}

        <div
          className="
          flex
          items-center
          justify-between
          "
        >


          <div
            className="
            flex
            items-center
            gap-3
            "
          >

            <Moon
              className="text-cyan-400"
            />


            <span className="text-white">

              Dark Mode

            </span>


          </div>




          <button

            onClick={toggleDarkMode}

            className={`
              relative
              h-7
              w-14
              rounded-full
              transition
              duration-300
              ${
                settings.darkMode
                  ? "bg-cyan-500"
                  : "bg-slate-700"
              }
            `}

          >


            <span

              className={`
                absolute
                top-1
                h-5
                w-5
                rounded-full
                bg-white
                transition-all
                duration-300
                ${
                  settings.darkMode
                  ? "left-8"
                  : "left-1"
                }
              `}

            />


          </button>


        </div>






        {/* Accent Color */}

        <div
          className="
          flex
          items-center
          justify-between
          "
        >



          <div
            className="
            flex
            items-center
            gap-3
            "
          >


            <Palette
              className="text-pink-400"
            />


            <span className="text-white">

              Accent Color

            </span>


          </div>





          <select

            value={
              settings.responseStyle === "Purple"
              ? "Purple"
              : "Cyan"
            }

            onChange={(e)=>{

              updateSettings({

                responseStyle:e.target.value

              });

            }}

            className="
            rounded-xl
            bg-slate-800
            px-4
            py-2
            text-white
            outline-none
            "

          >


            <option>
              Cyan
            </option>


            <option>
              Blue
            </option>


            <option>
              Purple
            </option>


            <option>
              Pink
            </option>



          </select>



        </div>



      </div>



    </section>

  );

}