import {
  MoreVertical,
  Search,
  Pencil,
  Trash2,
  Package,
  Sparkles,
} from "lucide-react";

import { motion } from "framer-motion";


const products = [
  {
    id:1,
    name:"MacBook Pro M4",
    category:"Electronics",
    stock:82,
    total:100,
    value:"₹1,84,000",
    status:"Healthy",
    ai:"High Demand"
  },

  {
    id:2,
    name:"Gaming Mouse",
    category:"Accessories",
    stock:18,
    total:100,
    value:"₹3,200",
    status:"Low",
    ai:"Restock Soon"
  },

  {
    id:3,
    name:"Office Chair",
    category:"Furniture",
    stock:0,
    total:100,
    value:"₹14,500",
    status:"Out",
    ai:"Purchase Required"
  },

  {
    id:4,
    name:"Mechanical Keyboard",
    category:"Accessories",
    stock:64,
    total:100,
    value:"₹7,500",
    status:"Healthy",
    ai:"Stable"
  },

  {
    id:5,
    name:"Monitor 27 Inch",
    category:"Electronics",
    stock:41,
    total:100,
    value:"₹28,000",
    status:"Healthy",
    ai:"Growing Demand"
  }
];



export default function InventoryTable(){


return (

<div className="
rounded-3xl
border
border-slate-800
bg-gradient-to-br
from-slate-900
to-slate-950
shadow-xl
overflow-hidden
">


{/* Header */}

<div className="
flex
flex-col
gap-4
md:flex-row
md:items-center
md:justify-between
border-b
border-slate-800
p-6
">


<div>


<h2 className="
text-2xl
font-bold
text-white
flex
items-center
gap-2
">

Inventory Management

<Sparkles
size={18}
className="text-indigo-400"
/>

</h2>


<p className="
mt-1
text-sm
text-slate-400
">

Track products, stock health and AI recommendations.

</p>


</div>




<div className="relative w-full md:w-80">


<Search

size={18}

className="
absolute
left-4
top-3.5
text-slate-500
"

/>


<input

placeholder="Search products..."

className="
w-full
rounded-xl
border
border-slate-700
bg-slate-900
py-3
pl-11
pr-4
text-white
outline-none
focus:border-indigo-500
"

/>


</div>


</div>





<div className="overflow-x-auto">


<table className="w-full">


<thead className="bg-slate-900">


<tr className="
text-left
text-sm
text-slate-400
">


<th className="px-6 py-4">
Product
</th>

<th className="px-6 py-4">
Category
</th>

<th className="px-6 py-4">
Stock Health
</th>

<th className="px-6 py-4">
Value
</th>

<th className="px-6 py-4">
AI Status
</th>

<th className="px-6 py-4">
</th>


</tr>


</thead>




<tbody>


{products.map((item,index)=>{


const percentage =
(item.stock/item.total)*100;


return (


<motion.tr

key={item.id}

initial={{
opacity:0,
y:10
}}

animate={{
opacity:1,
y:0
}}

transition={{
delay:index*.1
}}

whileHover={{
backgroundColor:"#111827"
}}

className="
border-t
border-slate-800
transition
"


>


{/* Product */}


<td className="px-6 py-5">


<div className="
flex
items-center
gap-4
">


<div className="
flex
h-12
w-12
items-center
justify-center
rounded-2xl
bg-indigo-600
">

<Package
size={22}
className="text-white"
/>

</div>



<div>


<h3 className="
font-semibold
text-white
">

{item.name}

</h3>


<p className="
text-sm
text-slate-500
">

Product #{item.id}

</p>


</div>


</div>


</td>





{/* Category */}


<td className="px-6">


<span className="
rounded-full
bg-slate-800
px-3
py-1
text-sm
text-slate-300
">

{item.category}

</span>


</td>






{/* Stock */}


<td className="px-6">


<div className="w-44">


<div className="
mb-2
flex
justify-between
text-sm
text-slate-300
">

<span>
{item.stock}
</span>


<span>
{item.total}
</span>


</div>



<div className="
h-2
rounded-full
bg-slate-800
overflow-hidden
">


<div

style={{
width:`${percentage}%`
}}

className={`
h-full
rounded-full

${
percentage>60
?
"bg-emerald-500"
:
percentage>20
?
"bg-yellow-500"
:
"bg-red-500"
}

`}

/>


</div>


</div>


</td>






{/* Value */}


<td className="
px-6
font-semibold
text-white
">

{item.value}

</td>







{/* AI */}


<td className="px-6">


<span

className={`

rounded-full
px-3
py-1
text-sm
font-semibold


${
item.status==="Healthy"

?
"bg-emerald-500/20 text-emerald-400"

:

item.status==="Low"

?
"bg-yellow-500/20 text-yellow-400"

:

"bg-red-500/20 text-red-400"

}

`}

>

{item.ai}

</span>


</td>







{/* Actions */}


<td className="px-6">


<div className="
flex
gap-2
">


<button className="
rounded-lg
p-2
hover:bg-slate-800
">

<Pencil size={18}/>

</button>


<button className="
rounded-lg
p-2
hover:bg-slate-800
">

<Trash2 size={18}/>

</button>


<button className="
rounded-lg
p-2
hover:bg-slate-800
">

<MoreVertical size={18}/>

</button>


</div>


</td>



</motion.tr>


)

})}


</tbody>


</table>


</div>


</div>

)

}