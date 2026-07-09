import type { LucideIcon } from "lucide-react";

import {
  ArrowUpRight,
  ArrowDownRight,
  TrendingUp,
  Sparkles,
} from "lucide-react";

import { motion } from "framer-motion";
import Surface from "../ui/Surface";


interface Props {

  title:string;
  value:string | number;
  icon:LucideIcon;
  color:string;
  change:string;
  progress?:number;

}



export default function StatCard({

title,
value,
icon:Icon,
color,
change,
progress=84,

}:Props){



const positive = !change.startsWith("-");



const numericValue =
typeof value === "string"
?
Number(
value
.replace(/[₹,%]/g,"")
.replace(/,/g,"")
)
:
Number(value);



const prefix =
typeof value==="string" && value.includes("₹")
?
"₹"
:
"";


const suffix =
typeof value==="string" && value.includes("%")
?
"%"
:
"";



return (


<motion.div

whileHover={{
y:-6
}}

transition={{
duration:.25
}}

>


<Surface

className="
relative
overflow-hidden
p-5
bg-gradient-to-br
from-slate-950
via-slate-900
to-indigo-950
border
border-slate-800
"

>



{/* Glow */}

<div
className="
absolute
-right-10
-top-10
h-44
w-44
rounded-full
bg-indigo-500/20
blur-3xl
"
/>




<div className="
relative
flex
items-start
justify-between
">


<div>


<p className="
text-sm
font-medium
tracking-wide
text-slate-400
">

{title}

</p>



<motion.h2

initial={{
opacity:0,
scale:.9
}}

animate={{
opacity:1,
scale:1
}}

transition={{
duration:.5
}}

className="
mt-4
text-3xl
font-black
tracking-tight
text-white
"

>

{prefix}
{numericValue.toLocaleString()}
{suffix}

</motion.h2>



<div className="
flex
items-center
gap-2
mt-2
">

<Sparkles
size={14}
className="text-indigo-400"
/>

<p className="
text-xs
text-slate-500
">

AI tracked metric

</p>


</div>



</div>






{/* Icon */}


<div
className={`
relative
h-14
w-14
rounded-2xl
${color}
flex
items-center
justify-center
shadow-xl
`}
>


<motion.div

animate={{
scale:[1,1.15,1]
}}

transition={{
duration:2,
repeat:Infinity
}}

className="
absolute
inset-0
rounded-2xl
bg-white/10
"

/>



<Icon

size={26}

className="
relative
z-10
text-white
"

/>


</div>


</div>






{/* Change */}


<div className="
mt-7
flex
items-center
justify-between
">


<div className="
flex
items-center
gap-3
">


<div

className={`
flex
items-center
gap-1
rounded-full
px-3
py-1
text-sm
font-semibold

${
positive
?
"bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
:
"bg-red-500/10 text-red-400 border border-red-500/20"
}

`}

>


{
positive
?
<ArrowUpRight size={15}/>
:
<ArrowDownRight size={15}/>
}


{change}


</div>




<span className="
text-xs
text-slate-500
">

vs last month

</span>



</div>



<TrendingUp

size={18}

className="
text-indigo-400
"

/>


</div>







{/* Progress */}


<div className="
mt-5
">


<div className="
mb-2
flex
justify-between
text-xs
text-slate-500
">


<span>
Monthly Goal
</span>


<span>
{progress}%
</span>


</div>



<div className="
h-2
rounded-full
bg-slate-800
overflow-hidden
">


<motion.div

initial={{
width:0
}}

animate={{
width:`${progress}%`
}}

transition={{
duration:1.2
}}

className="
h-full
rounded-full
bg-gradient-to-r
from-indigo-500
via-purple-500
to-cyan-400
"

/>


</div>



</div>




</Surface>


</motion.div>


);


}