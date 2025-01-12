"use client";

import CardPopularProducts from "./CardPopularProducts";
import CardPurchaseSummary from "./CardPurchaseSummary";
import CardSalesSummary from "./CardSalesSummary";
import CardExpenseSummary from "./CardExpenseSummary";
import StatCard from "./StatCard";
import { CheckCircle, Package, Tag, TrendingDown, TrendingUp } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 custom-grid-rows">
      <CardPopularProducts />
      <CardSalesSummary />
      <CardPurchaseSummary />
      <CardExpenseSummary />
      <StatCard 
        title="Custopmer & Expenses"
        primaryIcon={<Package className="text-blue-600 w-6 h-6" />}
        dateRange="22 -29 October 2023"
        details = {[
          {title: "Customer Growth", amount: "175.00", changePercentage: 134, IconComponent: TrendingUp},
          {title: "Expenses", amount: "1,200.00", changePercentage: -12, IconComponent: TrendingDown}
        ]}
      />
      <StatCard 
        title="Dues & Pending Orders"
        primaryIcon={<CheckCircle className="text-blue-600 w-6 h-6" />}
        dateRange="22 -29 October 2023"
        details = {[
          {title: "Dues", amount: "250.00", changePercentage: 142, IconComponent: TrendingUp},
          {title: "Pending Orders", amount: "20.00", changePercentage: -56, IconComponent: TrendingDown}
        ]}
      />
      <StatCard 
        title="Sales & Discount"
        primaryIcon={<Tag className="text-blue-600 w-6 h-6" />}
        dateRange="22 -29 October 2023"
        details = {[
          {title: "Sales", amount: "1290.00", changePercentage: 20, IconComponent: TrendingUp},
          {title: "Discount", amount: "200.00", changePercentage: -10, IconComponent: TrendingDown}
        ]}
      />

      
    </div>
  );
};

export default Dashboard;
