import RevenueChart from "../dashboard/RevenueChart";
import CategoryChart from "../dashboard/CategoryChart";

interface Props {
  summary: any;
  revenue: any[];
  category: any[];
  insights: any;
}

export default function BusinessReport({
  summary,
  revenue,
  category,
  insights,
}: Props) {
  return (
    <div
      id="business-report"
      className="bg-white text-black p-12 w-[1100px]"
    >
      {/* Cover */}

      <div className="text-center border-b pb-10">
        <h1 className="text-5xl font-bold text-blue-700">
          GrowthPilot AI
        </h1>

        <h2 className="text-3xl mt-4">
          Business Intelligence Report
        </h2>

        <p className="mt-8 text-gray-600">
          Generated on {new Date().toLocaleString()}
        </p>
      </div>

      {/* KPI */}

      <div className="mt-12">

        <h2 className="text-3xl font-bold mb-6">
          Executive Dashboard
        </h2>

        <div className="grid grid-cols-2 gap-8">

          <div className="border rounded-xl p-6">
            <h3 className="text-gray-500">Revenue</h3>

            <p className="text-3xl font-bold">
              ₹{summary?.revenue}
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="text-gray-500">Orders</h3>

            <p className="text-3xl font-bold">
              {summary?.orders}
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="text-gray-500">Customers</h3>

            <p className="text-3xl font-bold">
              {summary?.customers}
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="text-gray-500">Products</h3>

            <p className="text-3xl font-bold">
              {summary?.products}
            </p>
          </div>

        </div>

      </div>

      {/* AI */}

      <div className="mt-12">

        <h2 className="text-3xl font-bold">
          AI Executive Summary
        </h2>

        <div className="bg-blue-50 border-l-8 border-blue-600 p-6 rounded-xl mt-5">

          <p className="leading-8 text-lg">
            {insights?.summary}
          </p>

        </div>

      </div>

      {/* Charts */}

      <div className="mt-16">

        <h2 className="text-3xl font-bold mb-6">
          Sales Analytics
        </h2>

        <div className="grid grid-cols-2 gap-8">

          <RevenueChart data={revenue} />

          <CategoryChart data={category} />

        </div>

      </div>

      {/* Footer */}

      <div className="mt-20 border-t pt-6 text-center text-gray-500">

        Generated automatically by GrowthPilot AI

      </div>

    </div>
  );
}