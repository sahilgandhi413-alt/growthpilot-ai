import {
  Mail,
  Phone,
  MapPin,
  Shield,
  Edit3,
  X,
} from "lucide-react";

import { useState } from "react";
import { useSettings } from "../../context/SettingsContext";



interface UserData {

  name:string;
  email:string;
  phone:string;
  location:string;
  role:string;

}




const defaultUser:UserData = {

  name:"Admin User",

  email:"admin@growthpilot.ai",

  phone:"+91 9876543210",

  location:"Ahmedabad, India",

  role:"Administrator",

};






export default function ProfileCard(){


  const {
    settings,
    updateSettings,
  } = useSettings();



  const [open,setOpen] =
    useState(false);



  const [user,setUser] =
    useState<UserData>({

      name:
      settings.name ||
      defaultUser.name,

      email:
      settings.email ||
      defaultUser.email,

      phone:
      settings.phone ||
      defaultUser.phone,

      location:
      settings.location ||
      defaultUser.location,

      role:
      settings.role ||
      defaultUser.role,

    });







  const updateField = (
    field:keyof UserData,
    value:string
  )=>{


    setUser(prev=>({

      ...prev,

      [field]:value,

    }));


  };






  const saveProfile = ()=>{


    updateSettings({

      name:user.name,

      email:user.email,

      phone:user.phone,

      location:user.location,

      role:user.role,


    });


    setOpen(false);


  };






return(


<div
className="
overflow-hidden
rounded-3xl
border
border-slate-800
bg-slate-900
shadow-xl
"
>





{/* Header */}


<div
className="
bg-gradient-to-r
from-blue-600
via-cyan-600
to-indigo-700
p-8
"
>


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
gap-5
"
>


<div
className="
flex
h-20
w-20
items-center
justify-center
rounded-full
bg-white
text-3xl
font-bold
text-blue-600
shadow-lg
"
>


{
user.name
.charAt(0)
.toUpperCase()
}


</div>





<div>

<h2
className="
text-3xl
font-bold
text-white
"
>

{user.name}

</h2>


<p
className="
mt-1
text-blue-100
"
>

{user.role}

</p>


</div>


</div>






<button

onClick={()=>setOpen(true)}

className="
flex
items-center
gap-2
rounded-xl
bg-white/20
px-5
py-3
text-white
transition
hover:bg-white/30
"

>


<Edit3 size={18}/>

Edit Profile


</button>



</div>


</div>








{/* Details */}


<div
className="
grid
gap-6
p-8
md:grid-cols-2
"
>





<Card
icon={<Mail className="text-blue-400"/>}
title="Email"
value={user.email}
/>



<Card
icon={<Phone className="text-green-400"/>}
title="Phone"
value={user.phone}
/>



<Card
icon={<MapPin className="text-red-400"/>}
title="Location"
value={user.location}
/>



<Card
icon={<Shield className="text-yellow-400"/>}
title="Access Level"
value={user.role}
/>





</div>









{/* Edit Modal */}


{
open && (

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
w-[450px]
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


<h2
className="
text-xl
font-bold
text-white
"
>

Edit Profile

</h2>


<button
onClick={()=>setOpen(false)}
>

<X className="text-white"/>

</button>


</div>






{
Object.entries(user).map(([key,value])=>(


<input

key={key}

value={value}

onChange={(e)=>
updateField(
key as keyof UserData,
e.target.value
)
}

className="
mb-4
w-full
rounded-xl
bg-slate-800
px-4
py-3
text-white
outline-none
"

placeholder={key}

/>


))
}







<button

onClick={saveProfile}

className="
w-full
rounded-xl
bg-cyan-600
py-3
font-semibold
text-white
hover:bg-cyan-500
"

>

Save Profile

</button>




</div>


</div>

)
}



</div>


);


}








function Card({

icon,

title,

value,

}:{

icon:React.ReactNode;

title:string;

value:string;

}){


return(

<div
className="
rounded-2xl
bg-slate-800
p-5
"
>

<div
className="
flex
items-center
gap-3
"
>

{icon}


<div>

<p
className="
text-sm
text-slate-400
"
>

{title}

</p>


<p
className="
mt-1
font-medium
text-white
"
>

{value}

</p>


</div>


</div>


</div>

);


}