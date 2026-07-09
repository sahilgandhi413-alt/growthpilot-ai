import {
  Brain,
  AlertTriangle,
  TrendingUp,
  Package,
  ArrowRight,
  Sparkles,
  Zap,
} from "lucide-react";

import { motion } from "framer-motion";


const insights = [
  {
    title: "Restock Electronics",
    priority: "HIGH PRIORITY",
    description:
      "Laptop inventory may run out within 5 days based on current demand velocity.",
    color:
      "border-yellow-500/30 bg-yellow-500/10",
    badge:
      "text-yellow-400 bg-yellow-400/10",
    icon: AlertTriangle,
  },

  {
    title: "Healthy Furniture Stock",
    priority: "STABLE",
    description:
      "Furniture inventory is balanced and requires no immediate action.",
    color:
      "border-emerald-500/30 bg-emerald-500/10",
    badge:
      "text-emerald-400 bg-emerald-400/10",
    icon: Package,
  },

  {
    title: "Sales Trend Rising",
    priority: "GROWTH",
    description:
      "Electronics sales increased by 18% compared to last month.",
    color:
      "border-indigo-500/30 bg-indigo-500/10",
    badge:
      "text-indigo-400 bg-indigo-400/10",
    icon: TrendingUp,
  },
];


export default function InventoryRecommendations() {

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
rounded-3xl
border
border-slate-800
bg-gradient-to-br
from-slate-900
to-slate-950
p-6
shadow-xl
"

>


{/* Header */}

<div className="flex items-center justify-between">


<div className="flex items-center gap-3">


<div className="
rounded-2xl
bg-gradient-to-r
from-indigo-600
to-violet-600
p-3
shadow-lg
">

<Brain
className="text-white"
size={26}
/>

</div>


<div>

<h2 className="
text-2xl
font-bold
text-white
flex
items-center
gap-2
">

AI Inventory Copilot

<Sparkles
size={18}
className="text-indigo-400"
/>

</h2>


<p className="text-sm text-slate-400">

Smart recommendations generated from inventory activity.

</p>


</div>


</div>



<div className="
flex
items-center
gap-2
rounded-full
bg-emerald-500/20
px-4
py-2
text-sm
font-semibold
text-emerald-400
">


<span className="
h-2
w-2
rounded-full
bg-emerald-400
animate-pulse
"/>


98% Confidence


</div>


</div>




{/* Insights */}


<div className="mt-8 space-y-4">


{insights.map((item,index)=>{


const Icon=item.icon;


return (

<motion.div

key={index}

whileHover={{
scale:1.02
}}

className={`
rounded-2xl
border
p-4
transition
${item.color}
`}

>


<div className="flex gap-4">


<div className="
rounded-xl
bg-slate-900
p-3
h-fit
">

<Icon
size={22}
className="text-white"
/>

</div>



<div className="flex-1">


<div className="
flex
items-center
justify-between
">

<h3 className="
font-semibold
text-white
">

{item.title}

</h3>


<span
className={`
rounded-full
px-3
py-1
text-[10px]
font-bold
${item.badge}
`}
>

{item.priority}

</span>


</div>



<p className="
mt-2
text-sm
leading-6
text-slate-400
">

{item.description}

</p>


</div>


</div>


</motion.div>


)

})}


</div>





{/* AI Recommendation */}


<div className="
mt-8
rounded-2xl
border
border-indigo-500/20
bg-indigo-500/10
p-5
">


<div className="flex items-center gap-2">


<div className="
rounded-lg
bg-indigo-500/20
p-2
">

<Zap
size={18}
className="text-indigo-400"
/>

</div>


<h3 className="
font-semibold
text-white
">

AI Action Plan

</h3>


</div>



<p className="
mt-3
text-sm
leading-6
text-slate-300
">


Increase Electronics stock by

<span className="font-semibold text-indigo-400">
20%
</span>,


reduce slow-moving Fashion inventory by

<span className="font-semibold text-indigo-400">
10%
</span>,


and prioritize Warehouse A restocking.


</p>



<button

className="
mt-5
flex
items-center
gap-2
rounded-xl
bg-indigo-600
px-5
py-3
font-semibold
text-white
transition
hover:bg-indigo-700
"

>


Generate AI Report


<ArrowRight size={18}/>


</button>


</div>



</motion.div>

);

}