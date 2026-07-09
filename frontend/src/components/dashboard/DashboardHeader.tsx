import {
  CalendarDays,
  Brain,
} from "lucide-react";
import { motion } from "framer-motion";


export default function DashboardHeader() {


const today = new Date().toLocaleDateString("en-IN", {
  weekday:"long",
  day:"numeric",
  month:"long",
  year:"numeric",
});


const hour = new Date().getHours();


const greeting =
hour < 12
? "Good Morning ☀️"
: hour < 18
? "Good Afternoon 🌤️"
: "Good Evening 🌙";



return (

<motion.div

initial={{
opacity:0,
y:-20
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:0.6
}}

className="
relative
overflow-hidden
rounded-3xl
bg-gradient-to-br
from-slate-950
via-slate-900
to-indigo-950
border
border-slate-800
p-8
shadow-2xl
"


>


{/* Background Glow */}

<div className="
absolute
-top-24
-right-24
w-80
h-80
bg-indigo-500/20
blur-3xl
rounded-full
"/>



<div className="
relative
">


<p className="
text-indigo-400
font-semibold
tracking-wide
flex
items-center
gap-2
">

<Brain size={18}/>

{greeting}

</p>




<h1 className="
text-5xl
font-black
text-white
mt-4
tracking-tight
">

GrowthPilot
<span className="
text-indigo-400
">
 AI
</span>

</h1>




<p className="
text-slate-400
mt-4
max-w-3xl
leading-relaxed
text-lg
">

AI-powered business intelligence platform designed to
monitor business operations, analyze performance,
manage inventory, and help you make smarter decisions.

</p>




<div className="
flex
items-center
gap-2
mt-7
text-slate-500
text-sm
">

<CalendarDays size={18}/>

<span>
{today}
</span>


</div>



</div>


</motion.div>


);

}