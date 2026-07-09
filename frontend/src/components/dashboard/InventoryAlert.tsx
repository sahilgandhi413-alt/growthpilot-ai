import {
  Package,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";


const inventory = [
  {
    product: "MacBook Pro",
    stock: 92,
    status: "In Stock",
    category: "Laptop",
  },
  {
    product: "iPhone 16",
    stock: 38,
    status: "Low Stock",
    category: "Smartphone",
  },
  {
    product: "AirPods Pro",
    stock: 0,
    status: "Out of Stock",
    category: "Audio",
  },
  {
    product: "Apple Watch",
    stock: 65,
    status: "In Stock",
    category: "Wearable",
  },
];


function StatusDetails(status: string) {

  const data = {

    "In Stock":{
      icon:<CheckCircle2 size={15}/>,
      style:
      "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
    },

    "Low Stock":{
      icon:<AlertTriangle size={15}/>,
      style:
      "text-yellow-400 bg-yellow-500/10 border-yellow-500/20"
    },

    "Out of Stock":{
      icon:<XCircle size={15}/>,
      style:
      "text-red-400 bg-red-500/10 border-red-500/20"
    }

  };


  return data[status as keyof typeof data];

}



function ProgressColor(stock:number){

  if(stock > 60)
    return "bg-emerald-500";

  if(stock > 20)
    return "bg-yellow-500";

  return "bg-red-500";

}



export default function InventoryAlerts(){


return (

<motion.div

initial={{
 opacity:0,
 y:20
}}

animate={{
 opacity:1,
 y:0
}}

className="
bg-gradient-to-br
from-slate-950
via-slate-900
to-indigo-950
border border-slate-800
rounded-3xl
p-6
shadow-2xl
"


>


{/* Header */}

<div className="flex justify-between items-start mb-7">


<div>


<div className="flex items-center gap-2">


<TrendingUp
className="text-indigo-400"
/>


<h2 className="
text-2xl
font-bold
text-white
">

Inventory Health

</h2>


</div>


<p className="
text-slate-400
text-sm
mt-1
">

AI powered stock monitoring

</p>


</div>



<div className="
w-12
h-12
rounded-2xl
bg-indigo-500/20
border
border-indigo-500/30
flex
items-center
justify-center
">


<Package
className="text-indigo-300"
/>


</div>


</div>




{/* Inventory Items */}


<div className="space-y-4">


{
inventory.map((item,index)=>(


<motion.div

key={item.product}

initial={{
opacity:0,
x:-20
}}

animate={{
opacity:1,
x:0
}}

transition={{
delay:index*0.1
}}

className="
bg-white/5
border
border-slate-800
rounded-2xl
p-4
hover:bg-white/10
transition
"


>


<div className="flex justify-between items-center">


<div>


<h3 className="
text-white
font-semibold
">

{item.product}

</h3>


<p className="
text-xs
text-slate-500
mt-1
">

{item.category}

</p>


</div>



<span
className={`
flex
items-center
gap-1
px-3
py-1
rounded-full
text-xs
border
${StatusDetails(item.status).style}
`}
>

{StatusDetails(item.status).icon}

{item.status}

</span>


</div>





<div className="
flex
justify-between
mt-5
mb-2
">


<span className="
text-xs
text-slate-400
">

Stock Level

</span>


<span className="
text-white
font-semibold
text-sm
">

{item.stock}%

</span>


</div>



<div className="
h-2
bg-slate-800
rounded-full
overflow-hidden
">


<motion.div

initial={{
width:0
}}

animate={{
width:`${item.stock}%`
}}

transition={{
duration:1,
delay:index*0.15
}}

className={`
h-full
rounded-full
${ProgressColor(item.stock)}
`}

/>


</div>


</motion.div>


))

}


</div>





{/* AI Card */}


<motion.div

initial={{
opacity:0,
scale:0.95
}}

animate={{
opacity:1,
scale:1
}}

transition={{
delay:0.5
}}

className="
mt-7
rounded-2xl
p-5
bg-gradient-to-r
from-indigo-500/20
to-purple-500/10
border
border-indigo-500/30
"


>


<div className="
flex
items-center
gap-2
">


<Sparkles
size={20}
className="text-indigo-300"
/>


<h3 className="
text-white
font-semibold
">

AI Inventory Insight

</h3>


</div>



<p className="
text-slate-300
text-sm
leading-6
mt-3
">

AirPods Pro stock is currently depleted.
AI predicts possible lost sales.
Consider restocking within the next
24 hours to maintain customer demand.

</p>



<button

className="
mt-4
text-sm
px-4
py-2
rounded-xl
bg-indigo-500/20
text-indigo-300
hover:bg-indigo-500/30
transition
"

>

Create Restock Plan

</button>



</motion.div>



</motion.div>

);

}