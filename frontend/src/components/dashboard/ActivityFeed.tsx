import {
  ShoppingCart,
  Package,
  TrendingUp,
  Bot,
  Activity,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";


const activities = [
  {
    title: "New Order Received",
    description: "Customer placed a new purchase order",
    time: "2 min ago",
    icon: ShoppingCart,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    title: "Inventory Updated",
    description: "Stock levels synchronized successfully",
    time: "15 min ago",
    icon: Package,
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/20",
  },
  {
    title: "Revenue Increased",
    description: "Sales performance improved by 18%",
    time: "1 hour ago",
    icon: TrendingUp,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
  },
  {
    title: "AI Generated Forecast",
    description: "Predictive model updated future trends",
    time: "3 hours ago",
    icon: Bot,
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20",
  },
];


export default function ActivityFeed() {


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
border
border-slate-800
rounded-3xl
p-6
shadow-2xl
"


>


{/* Header */}

<div className="
flex
items-center
justify-between
mb-7
">


<div>


<div className="
flex
items-center
gap-2
">


<Activity
className="text-indigo-400"
/>


<h2 className="
text-2xl
font-bold
text-white
">

Activity Feed

</h2>


</div>


<p className="
text-sm
text-slate-400
mt-1
">

Real-time business updates

</p>


</div>



<div className="
p-3
rounded-2xl
bg-indigo-500/10
border
border-indigo-500/20
">


<Sparkles
className="text-indigo-300"
/>


</div>


</div>





{/* Activity Timeline */}


<div className="relative">


{/* Vertical Line */}

<div className="
absolute
left-6
top-5
bottom-5
w-px
bg-slate-800
"/>



<div className="space-y-5">


{
activities.map((item,index)=>{


const Icon=item.icon;


return (

<motion.div

key={index}

initial={{
opacity:0,
x:-20
}}

animate={{
opacity:1,
x:0
}}

transition={{
delay:index*0.12
}}

className="
relative
flex
gap-4
group
"


>


{/* Icon */}


<div className={`
relative
z-10
w-12
h-12
rounded-2xl
flex
items-center
justify-center
border
${item.bg}
${item.border}
${item.color}
group-hover:scale-110
transition
`}>

<Icon size={21}/>

</div>





{/* Content */}


<div className="
flex-1
bg-white/5
border
border-slate-800
rounded-2xl
p-4
hover:bg-white/10
transition
">


<div className="
flex
justify-between
items-start
gap-3
">


<div>

<p className="
text-white
font-semibold
">

{item.title}

</p>


<p className="
text-sm
text-slate-400
mt-1
">

{item.description}

</p>


</div>



<span className="
text-xs
text-slate-500
whitespace-nowrap
">

{item.time}

</span>


</div>


</div>



</motion.div>


)

})

}


</div>


</div>




{/* AI Summary */}


<div className="
mt-7
rounded-2xl
p-4
bg-gradient-to-r
from-indigo-500/20
to-purple-500/10
border
border-indigo-500/20
">


<p className="
text-sm
text-indigo-200
flex
items-center
gap-2
">

<Bot size={16}/>

AI Summary:

</p>


<p className="
text-sm
text-slate-300
mt-2
leading-6
">

Business activity is trending upward.
AI detected increased sales momentum
and healthy inventory movement.

</p>


</div>



</motion.div>


);

}