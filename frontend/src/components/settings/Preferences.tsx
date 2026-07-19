import { RotateCcw } from "lucide-react";
import { useSettings } from "../../context/SettingsContext";



export default function Preferences() {


  const {
    settings,
    updateSettings,
  } = useSettings();





  const resetPreferences = () => {


    updateSettings({

      currency: "Indian Rupee (₹)",

      language: "English",

      timezone: "Asia/Kolkata",

      dateFormat: "DD/MM/YYYY",

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

Preferences

</h2>





<div
className="
grid
gap-6
md:grid-cols-2
"
>





{/* Currency */}

<div>


<label
className="
mb-2
block
text-slate-400
"
>

Currency

</label>



<select

value={
settings.currency ||
"Indian Rupee (₹)"
}

onChange={(e)=>

updateSettings({

currency:e.target.value

})

}

className="
w-full
rounded-xl
bg-slate-950
p-3
text-white
outline-none
"

>


<option>
Indian Rupee (₹)
</option>


<option>
US Dollar ($)
</option>


<option>
Euro (€)
</option>


</select>



</div>









{/* Language */}

<div>


<label
className="
mb-2
block
text-slate-400
"
>

Language

</label>




<select

value={
settings.language ||
"English"
}

onChange={(e)=>

updateSettings({

language:e.target.value

})

}

className="
w-full
rounded-xl
bg-slate-950
p-3
text-white
outline-none
"

>


<option>
English
</option>


<option>
Hindi
</option>


</select>



</div>









{/* Timezone */}

<div>


<label
className="
mb-2
block
text-slate-400
"
>

Timezone

</label>




<select

value={
settings.timezone ||
"Asia/Kolkata"
}

onChange={(e)=>

updateSettings({

timezone:e.target.value

})

}

className="
w-full
rounded-xl
bg-slate-950
p-3
text-white
outline-none
"

>


<option>
Asia/Kolkata
</option>


<option>
UTC
</option>


</select>



</div>









{/* Date Format */}

<div>


<label
className="
mb-2
block
text-slate-400
"
>

Date Format

</label>




<select

value={
settings.dateFormat ||
"DD/MM/YYYY"
}

onChange={(e)=>

updateSettings({

dateFormat:e.target.value

})

}

className="
w-full
rounded-xl
bg-slate-950
p-3
text-white
outline-none
"

>


<option>
DD/MM/YYYY
</option>


<option>
MM/DD/YYYY
</option>


</select>



</div>




</div>









{/* Reset Button */}


<button

onClick={resetPreferences}

className="
mt-8
flex
items-center
gap-3
rounded-xl
border
border-slate-700
bg-slate-800
px-5
py-3
text-white
transition
hover:bg-slate-700
"

>


<RotateCcw size={18}/>


Reset Preferences


</button>







</section>


  );

}