import {
  CheckCircle,
  Clock3,
  Truck,
  Package,
} from "lucide-react";
import { motion } from "framer-motion";

const orders = [
  {
    id: "#ORD-1001",
    customer: "Aarav Sharma",
    product: "MacBook Pro",
    amount: "₹1,89,999",
    status: "Completed",
    date: "Today",
  },
  {
    id: "#ORD-1002",
    customer: "Priya Patel",
    product: "iPhone 16",
    amount: "₹89,999",
    status: "Processing",
    date: "Today",
  },
  {
    id: "#ORD-1003",
    customer: "Rahul Verma",
    product: "AirPods Pro",
    amount: "₹24,999",
    status: "Pending",
    date: "Yesterday",
  },
  {
    id: "#ORD-1004",
    customer: "Neha Singh",
    product: "Apple Watch",
    amount: "₹45,999",
    status: "Completed",
    date: "Yesterday",
  },
];


function StatusBadge({ status }: { status: string }) {

  const styles = {
    Completed:
      "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    Processing:
      "bg-blue-500/10 text-blue-400 border-blue-500/20",
    Pending:
      "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  };

  const icons = {
    Completed: <CheckCircle size={14}/>,
    Processing: <Truck size={14}/>,
    Pending: <Clock3 size={14}/>,
  };


  return (
    <span
      className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs border ${styles[status as keyof typeof styles]}`}
    >
      {icons[status as keyof typeof icons]}
      {status}
    </span>
  );
}


export default function RecentOrders() {

  return (

    <motion.div

      initial={{opacity:0,y:20}}
      animate={{opacity:1,y:0}}

      className="
      bg-gradient-to-br 
      from-slate-900 
      via-slate-900 
      to-indigo-950
      border border-slate-800
      rounded-3xl
      p-6
      shadow-2xl
      "

    >


      {/* Header */}

      <div className="flex items-center justify-between mb-7">

        <div>

          <div className="flex items-center gap-2">

            <Package 
              className="text-indigo-400"
              size={24}
            />

            <h2 className="text-2xl font-bold text-white">
              Recent Orders
            </h2>

          </div>


          <p className="text-sm text-slate-400 mt-1">
            Latest customer transactions
          </p>

        </div>


        <button
          className="
          px-4 py-2
          rounded-xl
          text-sm
          text-indigo-300
          bg-indigo-500/10
          hover:bg-indigo-500/20
          transition
          "
        >
          View All
        </button>

      </div>



      {/* Table */}

      <div className="overflow-x-auto">


        <table className="w-full">


          <thead>

            <tr
            className="
            text-xs uppercase
            tracking-wider
            text-slate-500
            border-b border-slate-800
            "
            >

              <th className="text-left py-4">
                Order
              </th>

              <th className="text-left">
                Customer
              </th>

              <th className="text-left">
                Product
              </th>

              <th className="text-left">
                Amount
              </th>

              <th className="text-left">
                Status
              </th>

            </tr>

          </thead>



          <tbody>


          {orders.map((order,index)=>(

            <motion.tr

              key={order.id}

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
              group
              border-b 
              border-slate-800/80
              hover:bg-white/5
              transition
              "

            >


              <td className="py-5">


                <p className="
                text-white
                font-semibold
                ">
                  {order.id}
                </p>

                <span className="
                text-xs
                text-slate-500
                ">
                  {order.date}
                </span>


              </td>



              <td>


                <div className="flex items-center gap-3">


                  <div
                  className="
                  w-9 h-9
                  rounded-full
                  bg-indigo-500/20
                  flex
                  items-center
                  justify-center
                  text-indigo-300
                  font-bold
                  "
                  >

                    {order.customer.charAt(0)}

                  </div>


                  <span className="text-slate-300">
                    {order.customer}
                  </span>


                </div>


              </td>



              <td className="text-slate-400">

                {order.product}

              </td>



              <td className="
              text-white
              font-semibold
              ">

                {order.amount}

              </td>



              <td>

                <StatusBadge 
                status={order.status}
                />

              </td>



            </motion.tr>


          ))}


          </tbody>


        </table>


      </div>


    </motion.div>

  );
}