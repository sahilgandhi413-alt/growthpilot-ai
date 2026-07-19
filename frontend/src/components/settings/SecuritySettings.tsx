import {
  Shield,
  KeyRound,
  Smartphone,
  LogOut,
  X,
} from "lucide-react";

import { useState } from "react";
import { useSettings } from "../../context/SettingsContext";


export default function SecuritySettings() {


  const {
    settings,
    updateSettings,
  } = useSettings();


  const [showPassword, setShowPassword] =
    useState(false);

  const [message, setMessage] =
    useState("");



  const [password, setPassword] =
    useState("");




  const changePassword = () => {

    if(!password){

      setMessage(
        "Please enter a new password"
      );

      return;

    }


    setMessage(
      "✓ Password updated successfully"
    );


    setPassword("");

    setShowPassword(false);


  };





  const logoutDevices = () => {

    setMessage(
      "✓ Logged out from all devices"
    );

  };






  const toggle2FA = () => {

    updateSettings({

      twoFactor:
        !settings.twoFactor,

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



      <div
        className="
        mb-8
        flex
        items-center
        gap-3
        "
      >

        <Shield
          size={28}
          className="text-red-400"
        />


        <h2
          className="
          text-2xl
          font-bold
          text-white
          "
        >

          Security

        </h2>


      </div>





      <div className="space-y-6">





        {/* Change Password */}


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

            <KeyRound
              className="text-cyan-400"
            />


            <div>

              <h3 className="font-semibold text-white">

                Change Password

              </h3>


              <p className="text-sm text-slate-400">

                Update your account password.

              </p>


            </div>


          </div>




          <button

            onClick={() =>
              setShowPassword(true)
            }

            className="
            rounded-xl
            bg-cyan-600
            px-5
            py-2
            text-white
            hover:bg-cyan-500
            "

          >

            Change

          </button>



        </div>







        {/* Two Factor */}


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


            <Smartphone
              className="text-emerald-400"
            />


            <div>

              <h3 className="font-semibold text-white">

                Two Factor Authentication

              </h3>


              <p className="text-sm text-slate-400">

                Protect your account.

              </p>


            </div>


          </div>





          <button

            onClick={toggle2FA}

            className={`
              relative
              h-7
              w-14
              rounded-full
              transition

              ${
                settings.twoFactor
                ? "bg-emerald-500"
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

              ${
                settings.twoFactor
                ? "left-8"
                : "left-1"
              }

              `}

            />


          </button>



        </div>







        {/* Logout */}


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


            <LogOut
              className="text-red-400"
            />



            <div>


              <h3 className="font-semibold text-white">

                Logout All Devices

              </h3>


              <p className="text-sm text-slate-400">

                End all active sessions.

              </p>


            </div>


          </div>





          <button

            onClick={logoutDevices}

            className="
            rounded-xl
            bg-red-600
            px-5
            py-2
            text-white
            hover:bg-red-500
            "

          >

            Logout

          </button>



        </div>





        {
          message && (

            <div
              className="
              rounded-xl
              border
              border-cyan-500/30
              bg-cyan-500/10
              px-4
              py-3
              text-cyan-300
              "
            >

              {message}

            </div>

          )
        }





      </div>







      {/* Password Modal */}


      {
        showPassword && (

          <div
            className="
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            bg-black/60
            "
          >


            <div
              className="
              w-[400px]
              rounded-3xl
              border
              border-slate-700
              bg-slate-900
              p-8
              "
            >


              <div
                className="
                mb-6
                flex
                justify-between
                "
              >

                <h2 className="text-xl font-bold text-white">

                  Change Password

                </h2>


                <button
                  onClick={() =>
                    setShowPassword(false)
                  }
                >

                  <X className="text-white"/>

                </button>


              </div>




              <input

                type="password"

                value={password}

                onChange={(e)=>
                  setPassword(e.target.value)
                }

                placeholder="New password"

                className="
                w-full
                rounded-xl
                bg-slate-800
                px-4
                py-3
                text-white
                outline-none
                "

              />




              <button

                onClick={changePassword}

                className="
                mt-5
                w-full
                rounded-xl
                bg-cyan-600
                py-3
                text-white
                "

              >

                Update Password

              </button>



            </div>


          </div>

        )
      }




    </section>

  );

}