import {
  DollarSign,
  ShoppingCart,
  Package,
  TrendingUp,
} from "lucide-react";

import { motion } from "framer-motion";
import StatCard from "./StatCard";


interface DashboardData {
  revenue:number;
  orders:number;
  products:number;
  growth:number;
}


interface Props {
  data:DashboardData;
}



export default function KPIGrid({data}:Props){


const stats = [

  {
    title:"Total Revenue",
    value:`₹${data.revenue.toLocaleString()}`,
    icon:DollarSign,
    color:"emerald",
    change:"+18%",
    description:"Compared to last month"
  },


  {
    title:"Total Orders",
    value:data.orders,
    icon:ShoppingCart,
    color:"blue",
    change:"+12%",
    description:"New orders received"
  },


  {
    title:"Products",
    value:data.products,
    icon:Package,
    color:"violet",
    change:"+6%",
    description:"Active inventory items"
  },


  {
    title:"Business Growth",
    value:`${data.growth}%`,
    icon:TrendingUp,
    color:"orange",
    change:"+4%",
    description:"Growth prediction"
  }

];



return (

<div className="
grid
grid-cols-1
sm:grid-cols-2
xl:grid-cols-4
gap-6
">


{
stats.map((item,index)=>(


<motion.div

key={item.title}

initial={{
opacity:0,
y:20
}}

animate={{
opacity:1,
y:0
}}

transition={{
delay:index*0.12
}}

whileHover={{
y:-6
}}

>

<StatCard

title={item.title}

value={item.value}

icon={item.icon}

color={
item.color === "emerald"
? "bg-emerald-500"
: item.color === "blue"
? "bg-blue-500"
: item.color === "violet"
? "bg-violet-500"
: "bg-orange-500"
}

change={item.change}


/>

</motion.div>


))

}


</div>

);

}