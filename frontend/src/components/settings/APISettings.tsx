import {
  Server,
  Database,
  Bot,
  CheckCircle,
  RefreshCw,
  Copy,
  Eye,
  EyeOff,
} from "lucide-react";

import { useState } from "react";
import { useSettings } from "../../context/SettingsContext";



const services = [

  {
    name: "FastAPI Server",
    key: "fastapi",
    status: "Connected",
    icon: Server,
  },

  {
    name: "PostgreSQL",
    key: "database",
    status: "Connected",
    icon: Database,
  },

  {
    name: "AI Engine",
    key: "ai",
    status: "Ready",
    icon: Bot,
  },

];




export default function APISettings() {


  const {
    settings,
    updateSettings,
  } = useSettings();


  const [testing,setTesting] =
    useState(false);


  const [apiKeyVisible,setApiKeyVisible] =
    useState(false);


  const [copied,setCopied] =
    useState(false);




  const testConnection = () => {


    setTesting(true);


    setTimeout(()=>{


      updateSettings({

        apiStatus:"Connected",

      });


      setTesting(false);


    },1500);



  };





  const copyAPIKey = () => {


    navigator.clipboard.writeText(
      settings.apiKey || "gp_live_892341"
    );


    setCopied(true);


    setTimeout(()=>{

      setCopied(false);

    },2000);


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

API Settings

</h2>





<div className="space-y-5">



{
services.map(service=>{


const Icon = service.icon;


return(


<div

key={service.name}

className="
flex
items-center
justify-between
rounded-xl
bg-slate-950
p-5
"

>


<div
className="
flex
items-center
gap-4
"
>

<Icon
className="text-cyan-400"
/>


<span className="text-white">

{service.name}

</span>


</div>





<div
className="
flex
items-center
gap-2
text-emerald-400
"
>


<CheckCircle size={18}/>


{

settings.apiStatus ||
service.status

}


</div>



</div>



)


})

}





</div>








{/* API KEY */}


<div
className="
mt-8
rounded-xl
bg-slate-950
p-5
"
>


<h3
className="
mb-3
font-semibold
text-white
"
>

AI API Key

</h3>




<div
className="
flex
items-center
gap-3
"
>


<div
className="
flex-1
rounded-xl
bg-slate-800
px-4
py-3
text-slate-300
"
>


{
apiKeyVisible

?
(settings.apiKey || "gp_live_892341")

:
"••••••••••••••••"

}


</div>





<button

onClick={()=>setApiKeyVisible(!apiKeyVisible)}

className="
rounded-xl
bg-slate-700
p-3
text-white
"

>

{

apiKeyVisible

?

<EyeOff size={18}/>

:

<Eye size={18}/>

}


</button>






<button

onClick={copyAPIKey}

className="
rounded-xl
bg-cyan-600
p-3
text-white
"

>

<Copy size={18}/>


</button>




</div>




{
copied && (

<p
className="
mt-3
text-sm
text-emerald-400
"
>

✓ API Key copied

</p>

)
}



</div>









{/* Test Connection */}


<button

onClick={testConnection}

className="
mt-6
flex
items-center
gap-3
rounded-xl
bg-gradient-to-r
from-cyan-500
to-blue-600
px-6
py-3
font-semibold
text-white
transition
hover:scale-105
"

>


<RefreshCw

size={18}

className={
testing
?
"animate-spin"
:
""
}

/>


{

testing

?

"Testing Connection..."

:

"Test API Connection"

}


</button>







</section>


);


}