import { Bell } from "lucide-react";
import { useSettings } from "../../context/SettingsContext";


const notificationItems = [
  {
    key: "inventory",
    label: "Inventory Alerts",
  },
  {
    key: "forecast",
    label: "Forecast Alerts",
  },
  {
    key: "marketing",
    label: "Marketing Alerts",
  },
  {
    key: "reports",
    label: "Weekly Reports",
  },
  {
    key: "security",
    label: "Security Notifications",
  },
];



export default function NotificationSettings() {


  const {
    settings,
    updateSettings,
  } = useSettings();



  const notifications = {
    ...{
      inventory: true,
      forecast: true,
      marketing: false,
      reports: true,
      security: true,
    },

    ...settings.notifications,

  };




  const toggleNotification = (
    key: string
  ) => {


    updateSettings({

      notifications: {

        ...notifications,

        [key]:
          !notifications[key as keyof typeof notifications],

      },


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
        flex
        items-center
        gap-3
        text-2xl
        font-bold
        text-white
        "
      >

        <Bell
          className="text-cyan-400"
        />

        Notifications

      </h2>





      <div className="space-y-5">


        {
          notificationItems.map((item)=>(


            <div

              key={item.key}

              className="
              flex
              items-center
              justify-between
              "

            >



              <span className="text-white">

                {item.label}

              </span>





              <button

                onClick={() =>
                  toggleNotification(item.key)
                }

                className={`
                relative
                h-7
                w-14
                rounded-full
                transition
                duration-300

                ${
                  notifications[
                    item.key as keyof typeof notifications
                  ]

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
                    notifications[
                      item.key as keyof typeof notifications
                    ]

                    ? "left-8"

                    : "left-1"
                  }

                  `}

                />


              </button>




            </div>


          ))
        }



      </div>



    </section>

  );

}