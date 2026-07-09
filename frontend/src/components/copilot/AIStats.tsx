import {
  IndianRupee,
  ShoppingCart,
  Users,
  Boxes,
} from "lucide-react";

const stats = [
  {
    title: "Revenue",
    value: "₹24.8L",
    icon: IndianRupee,
    color: "bg-emerald-500",
  },
  {
    title: "Orders",
    value: "4,284",
    icon: ShoppingCart,
    color: "bg-blue-500",
  },
  {
    title: "Customers",
    value: "2,846",
    icon: Users,
    color: "bg-cyan-500",
  },
  {
    title: "Products",
    value: "1,248",
    icon: Boxes,
    color: "bg-violet-500",
  },
];

export default function AIQuickStats() {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

      {stats.map((item) => {

        const Icon = item.icon;

        return (

          <div
            key={item.title}
            className="rounded-3xl border border-slate-800 bg-slate-900 p-5"
          >

            <div className="flex items-center justify-between">

              <div>

                <p className="text-slate-400">
                  {item.title}
                </p>

                <h2 className="mt-2 text-3xl font-bold text-white">
                  {item.value}
                </h2>

              </div>

              <div className={`${item.color} rounded-2xl p-3`}>

                <Icon className="text-white"/>

              </div>

            </div>

          </div>

        );

      })}

    </div>
  );
}