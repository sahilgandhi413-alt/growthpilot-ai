import { useState } from "react";
import {
  Search,
  RefreshCw,
  Download,
  Plus,
  
} from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  "All Categories",
  "Electronics",
  "Accessories",
  "Furniture",
];

const warehouses = [
  "All Warehouses",
  "Warehouse A",
  "Warehouse B",
  "Warehouse C",
];

const status = [
  "All Status",
  "In Stock",
  "Low Stock",
  "Out of Stock",
];

export default function InventoryToolbar() {
  const [category, setCategory] = useState(categories[0]);
  const [warehouse, setWarehouse] = useState(warehouses[0]);
  const [stockStatus, setStockStatus] = useState(status[0]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6"
    >
      {/* Left Side */}

      <div className="flex flex-wrap items-center gap-4">

        {/* Search */}

        <div className="relative w-full md:w-80">

          <Search
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
          />

          <input
            placeholder="Search products..."
            className="
              w-full
              rounded-2xl
              border
              border-slate-700
              bg-slate-900
              py-3
              pl-12
              pr-4
              text-white
              placeholder:text-slate-500
              outline-none
              transition
              focus:border-indigo-500
              focus:ring-2
              focus:ring-indigo-500/20
            "
          />

        </div>

        {/* Category */}

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-300 outline-none focus:border-indigo-500"
        >
          {categories.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>

        {/* Warehouse */}

        <select
          value={warehouse}
          onChange={(e) => setWarehouse(e.target.value)}
          className="rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-300 outline-none focus:border-indigo-500"
        >
          {warehouses.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>

        {/* Status */}

        <select
          value={stockStatus}
          onChange={(e) => setStockStatus(e.target.value)}
          className="rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-300 outline-none focus:border-indigo-500"
        >
          {status.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>

      </div>

      {/* Right Side */}

      <div className="flex flex-wrap gap-3">

        <button
          className="
            flex items-center gap-2
            rounded-2xl
            border border-slate-700
            bg-slate-900
            px-5 py-3
            text-slate-300
            transition
            hover:bg-slate-800
          "
        >
          <RefreshCw size={18} />
          Refresh
        </button>

        <button
          className="
            flex items-center gap-2
            rounded-2xl
            bg-indigo-600
            px-5 py-3
            font-medium
            text-white
            shadow-lg
            transition
            hover:bg-indigo-700
          "
        >
          <Download size={18} />
          Export CSV
        </button>

        <button
          className="
            flex items-center gap-2
            rounded-2xl
            bg-violet-600
            px-5 py-3
            font-medium
            text-white
            shadow-lg
            transition
            hover:bg-violet-700
          "
        >
          <Plus size={18} />
          Add Product
        </button>

      </div>
    </motion.div>
  );
}