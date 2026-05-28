// import { SalesAndRefundDashboardStats } from "@/components/admin/charts/SalesAndRefundDashboardStats.tsx";
// import WebsiteVisitorsChart from "../../components/admin/charts/WebsiteVisitorsChart";
// import { ChartPieDonutText } from "../../components/admin/charts/ChartPieDonutText";
// import { TopSellingBrand } from "../../components/admin/charts/TopSellingBrand";
import {
  ArrowUpDown,
  Box,
  Database,
  DollarSign,
  Filter,
  Grid,
  HatGlasses,
  History,
  HistoryIcon,
  MapPin,
  ShoppingCart,
  Star,
  Users,
  Users2,
} from "lucide-react";
import StatCard from "@/components/admin/StatCard";
// import DashboardPriceRangeAnalytics from "@/components/admin/DashboardPriceRangeAnalytics";
// import TopProductCardAdmin from "@/components/admin/TopProductCardAdmin";
import NoData from "@/components/admin/NoData";
// import { useGetDashboardStats } from "@/lib/tanstack/queries/dashboard/query";
// import LoadingComponent from "../LoadingComponent";
// import { formatNGN } from "@/lib/utils";
import Image from "next/image";

import RecentPropertyCardAdmin from "./RecentPropertyCardAdmin";
import { ListingType } from "./ListingType";
import { locationsApi } from "@/lib/api/locations";
import LLCCard from "./LLCCard";
import Link from "next/link";
import { URLS } from "@/constants/enum";
import { categoriesApi } from "@/lib/api/categories";
import { usersApi } from "@/lib/api/users";
import { cookies } from "next/headers";
import RecentUsers from "./RecentUsers";
import { propertiesApi } from "@/lib/api/properties";
import TransitionLink from "../TransitionLink";
import { analyticsApi } from "@/lib/api/analytics";

// const apiMockData = {
//   stats: {
//     inventoryWorth: {
//       label: "Inventory Worth",
//       value: "₦20.52M",
//     },
//     totalRevenue: {
//       label: "Total Revenue",
//       value: "₦20.52M",
//     },
//     totatProduct: {
//       label: "Total Products",
//       value: "524",
//     },
//     totalOrder: {
//       label: "Total Orders",
//       value: "₦11.9K",
//     },

//     totalUser: {
//       label: "Total Users",
//       value: "100",
//     },

//     totalBrands: {
//       label: "Total Brands",
//       value: "30",
//     },
//     totalCategory: {
//       label: "Total Category",
//       value: "54",
//     },
//   },
//   salesAndRefund: [
//     { month: "January", sales: 186, return: 80 },
//     { month: "February", sales: 305, return: 200 },
//     { month: "March", sales: 237, return: 120 },
//     { month: "April", sales: 73, return: 190 },
//     { month: "May", sales: 209, return: 130 },
//     { month: "June", sales: 214, return: 140 },
//   ],
//   priceRange: [
//     { range: "₦5K-15K", products: 8, sales: 245, revenue: 1470000 },
//     { range: "₦15K-25K", products: 15, sales: 478, revenue: 3824000 },
//     { range: "₦25K-50K", products: 7, sales: 234, revenue: 2340000 },
//     { range: "₦50K+", products: 4, sales: 110, revenue: 1320000 },
//   ],
//   topSellingBrand: [
//     { brand: "apple", sales: 275, fill: "var(--color-apple)" },
//     { brand: "samsung", sales: 200, fill: "var(--color-samsung)" },
//     { brand: "adidas", sales: 187, fill: "var(--color-adidas)" },
//     { brand: "hikers", sales: 173, fill: "var(--color-hikers)" },
//     { brand: "techno", sales: 90, fill: "var(--color-techno)" },
//     ,
//   ],

//   topPerformingProduct: [
//     {
//       name: "Classy Female jean",
//       slug: "classy-female-jean-40cbf07d",
//       brand: "hikers",
//       sales: 0,
//       revenue: 0,
//       stock: 65,
//       rating: 0,
//       views: 0,
//       img: "https://res.cloudinary.com/dieh6dvmk/image/upload/v1760488921/digo/products-images/pg9glxzroy5eiaew3rwu.jpg",
//     },
//     {
//       name: "Strong, classy and rugged men shoes",
//       slug: "strong-classy-and-rugged-men-shoes-843e0592",
//       brand: "hikers",
//       sales: 0,
//       revenue: 0,
//       stock: 74,
//       rating: 0,
//       views: 75,
//       img: "https://res.cloudinary.com/dieh6dvmk/image/upload/v1760487291/digo/products-images/r9ho8vutg3slr0tdgw7t.jpg",
//     },
//     {
//       name: "Classy Female jean",
//       slug: "classy-female-jean-40cbf07d",
//       brand: "hikers",
//       sales: 0,
//       revenue: 0,
//       stock: 65,
//       rating: 0,
//       views: 0,
//       img: "https://res.cloudinary.com/dieh6dvmk/image/upload/v1760488921/digo/products-images/pg9glxzroy5eiaew3rwu.jpg",
//     },
//     {
//       name: "Strong, classy and rugged men shoes",
//       slug: "strong-classy-and-rugged-men-shoes-843e0592",
//       brand: "hikers",
//       sales: 0,
//       revenue: 0,
//       stock: 74,
//       rating: 0,
//       views: 75,
//       img: "https://res.cloudinary.com/dieh6dvmk/image/upload/v1760487291/digo/products-images/r9ho8vutg3slr0tdgw7t.jpg",
//     },
//   ],

//   customerInsigt: {
//     totalCustomers: "2,400",
//     repeatRate: "60%",
//     avgOrderValue: "9,700",
//   },
// };

// visitors: [
//   { month: "January", visitors: 186 },
//   { month: "February", visitors: 105 },
//   { month: "March", visitors: 237 },
//   { month: "April", visitors: 173 },
//   { month: "May", visitors: 209 },
//   { month: "June", visitors: 184 },
// ],

// const stats = {
//   inventoryWorth: {
//     label: "Inventory Worth",
//     value: "₦20.52M",
//   },
//   totalRevenue: {
//     label: "Total Revenue",
//     value: "₦20.52M",
//   },
//   totatProduct: {
//     label: "Total Products",
//     value: "524",
//   },
//   totalOrder: {
//     label: "Total Orders",
//     value: "₦11.9K",
//   },

//   totalUser: {
//     label: "Total Users",
//     value: "100",
//   },

//   totalBrands: {
//     label: "Total Brands",
//     value: "30",
//   },
//   totalCategory: {
//     label: "Total Category",
//     value: "54",
//   },
// };

// const salesAndRefund = [
//   { month: "January", sales: 186, return: 80 },
//   { month: "February", sales: 305, return: 200 },
//   { month: "March", sales: 237, return: 120 },
//   { month: "April", sales: 73, return: 190 },
//   { month: "May", sales: 209, return: 130 },
//   { month: "June", sales: 214, return: 140 },
// ];

// const priceRangeData = [
//   { range: "₦5K-15K", products: 8, sales: 245, revenue: 1470000 },
//   { range: "₦15K-25K", products: 15, sales: 478, revenue: 3824000 },
//   { range: "₦25K-50K", products: 7, sales: 234, revenue: 2340000 },
//   { range: "₦50K+", products: 4, sales: 110, revenue: 1320000 },
// ];

// const topSellingBrand = [
//   { brand: "apple", sales: 275, fill: "var(--color-apple)" },
//   { brand: "samsung", sales: 200, fill: "var(--color-samsung)" },
//   { brand: "adidas", sales: 187, fill: "var(--color-adidas)" },
//   { brand: "hikers", sales: 173, fill: "var(--color-hikers)" },
//   { brand: "techno", sales: 90, fill: "var(--color-techno)" },
// ];
// const topPerformingProduct = [
//   {
//     name: "Classy Female jean",
//     slug: "classy-female-jean-40cbf07d",
//     brand: "hikers",
//     sales: 0,
//     revenue: 0,
//     stock: 65,
//     rating: 0,
//     views: 0,
//     img: "https://res.cloudinary.com/dieh6dvmk/image/upload/v1760488921/digo/products-images/pg9glxzroy5eiaew3rwu.jpg",
//   },
//   {
//     name: "Strong, classy and rugged men shoes",
//     slug: "strong-classy-and-rugged-men-shoes-843e0592",
//     brand: "hikers",
//     sales: 0,
//     revenue: 0,
//     stock: 74,
//     rating: 0,
//     views: 75,
//     img: "https://res.cloudinary.com/dieh6dvmk/image/upload/v1760487291/digo/products-images/r9ho8vutg3slr0tdgw7t.jpg",
//   },
//   {
//     name: "Classy Female jean",
//     slug: "classy-female-jean-40cbf07d",
//     brand: "hikers",
//     sales: 0,
//     revenue: 0,
//     stock: 65,
//     rating: 0,
//     views: 0,
//     img: "https://res.cloudinary.com/dieh6dvmk/image/upload/v1760488921/digo/products-images/pg9glxzroy5eiaew3rwu.jpg",
//   },
//   {
//     name: "Strong, classy and rugged men shoes",
//     slug: "strong-classy-and-rugged-men-shoes-843e0592",
//     brand: "hikers",
//     sales: 0,
//     revenue: 0,
//     stock: 74,
//     rating: 0,
//     views: 75,
//     img: "https://res.cloudinary.com/dieh6dvmk/image/upload/v1760487291/digo/products-images/r9ho8vutg3slr0tdgw7t.jpg",
//   },
// ];

// const customerInsigt = {
//   totalCustomers: "2,400",
//   repeatRate: "60%",
//   avgOrderValue: "9,700",
// };

const DashboardDetails = async () => {
  const cookie = await cookies();
  const auth_cookie = cookie.get("auth_token");
  const locations = await locationsApi.getAll();
  const categories = await categoriesApi.getAll();
  const properties = await propertiesApi.getAll({
    sort: "-created_at",
    limit: "10",
  });

  const visitors = await analyticsApi.getAnalyticsMetrics();

  const users = await usersApi.getAll(
    `${auth_cookie?.name}=${auth_cookie?.value}`,
  );

  const data = {
    stats: {
      totalProperties: {
        label: "Total Properties",
        value: "524",
      },

      totalUser: {
        label: "Total Users",
        value: "100",
      },

      totalLocations: {
        label: "Total Locations",
        value: "54",
      },

      totalVisitors: {
        label: "Total Visitors",
        value: visitors.data.totalUniqueVisitors.toString(),
      },
    },
  };

  return data ? (
    <div className="px-2">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 mt-4 mb-8 gap-4">
        <StatCard
          Icon={Database}
          stat={data.stats.totalProperties}
          color="text-emerald-100"
          bg="bg-blue-500"
        />

        <StatCard
          Icon={Users}
          stat={data.stats.totalUser}
          color="text-amber-100"
          bg="bg-amber-500"
        />
        <StatCard
          Icon={MapPin}
          stat={data.stats.totalLocations}
          color="text-purple-100"
          bg="bg-purple-500"
        />
        <StatCard
          Icon={HatGlasses}
          stat={data.stats.totalVisitors}
          color="text-cyan-100"
          bg="bg-cyan-500"
        />

        {/* <StatCard
          Icon={DollarSign}
          stat={data.stats.inventoryWorth}
          color="text-green-100"
          bg="bg-green-500"
        /> */}

        {/* <StatCard
          Icon={DollarSign}
          stat={data.stats.totalRevenue}
          color="text-emerald-100"
          bg="bg-emerald-500"
        /> */}

        {/* <StatCard
          Icon={ShoppingCart}
          stat={data.stats.totalOrder}
          color="text-amber-100"
          bg="bg-amber-500"
        /> */}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 gap-4 h-screen">
        {/* Top Performing Products */}
        <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2">
          <div className="bg-card border border-border rounded-xl p-6 ">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Star className="w-5 h-5 text-amber-500" />
                Recently Added Properties
              </h3>

              <TransitionLink
                href={URLS.allLocationPage}
                className="text-green-600"
              >
                See all
              </TransitionLink>
            </div>
            {properties.data && properties.data.length > 0 ? (
              <div className="space-y-3 max-h-125 overflow-y-scroll hide-scrollbar">
                {properties.data.map((property, i) => (
                  <RecentPropertyCardAdmin property={property} key={i} />
                ))}
              </div>
            ) : (
              <NoData />
            )}
          </div>

          {/* <TopSelling /> */}
        </div>

        <div className="bg-primary-foreground p-4 rounded-lg">
          <ListingType />
        </div>

        {/* Sale and refund dashboard stat */}
        <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-1">
          <div className="bg-card border border-border rounded-xl p-6 ">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-semibold flex items-center gap-2">
                <MapPin className="w-5 h-5 text-amber-500" />
                Recent Locations
              </h3>
              <TransitionLink
                href={URLS.allLocationPage}
                className="text-green-600"
              >
                See all
              </TransitionLink>
            </div>
            {locations.data.length > 0 ? (
              <div className="space-y-3 max-h-125 overflow-y-scroll hide-scrollbar">
                {locations.data.map((item) => (
                  <LLCCard item={item} key={item.id} />
                ))}
              </div>
            ) : (
              <NoData />
            )}
          </div>
        </div>
        <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-1">
          <div className="bg-card border border-border rounded-xl p-6 ">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-semibold flex items-center gap-2">
                <HistoryIcon className="w-5 h-5 text-amber-500" />
                Recent Categories
              </h3>
              <TransitionLink
                href={URLS.allCategoryPage}
                className="text-green-600"
              >
                See all
              </TransitionLink>
            </div>
            {categories.data.length > 0 ? (
              <div className="space-y-3 max-h-125 overflow-y-scroll hide-scrollbar">
                {categories.data.map((item) => (
                  <LLCCard item={item} key={item.id} />
                ))}
              </div>
            ) : (
              <NoData />
            )}
          </div>
        </div>

        <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-1">
          <div className="bg-card border border-border rounded-xl p-6 ">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-semibold flex items-center gap-2">
                <Users2 className="w-5 h-5 text-amber-500" />
                Recent Users
              </h3>
              <TransitionLink
                href={URLS.allusersPage}
                className="text-green-600"
              >
                See all
              </TransitionLink>
            </div>
            {users.data.length > 0 ? (
              <div className="space-y-3 max-h-125 overflow-y-scroll hide-scrollbar">
                {users.data.map((user, i) => (
                  <RecentUsers user={user} key={user.id} />
                ))}
              </div>
            ) : (
              <NoData />
            )}
          </div>
        </div>

        {/* Customers insight */}
        {/* <div className="bg-primary-foreground p-4 rounded-lg">
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              Customer Insights
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <span className="text-muted-foreground text-sm">
                  Total Customers
                </span>
                <span className="font-bold text-lg">
                  {data.customerInsigt.totalCustomers}
                </span>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <span className="text-muted-foreground text-sm">
                  Repeat Rate
                </span>
                <span className="font-bold text-lg text-emerald-600 dark:text-emerald-400">
                  {data.customerInsigt.repeatRate}
                </span>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <span className="text-muted-foreground text-sm">
                  Avg. Order Value
                </span>
                <span className="font-bold text-lg">
                  {data.customerInsigt.avgOrderValue}
                </span>
              </div>
            </div>
          </div>
        </div> */}

        {/* Price Range Analysis */}
        {/* <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2">
          <DashboardPriceRangeAnalytics priceRangeData={data.priceRange} />
        </div> */}

        {/* <div className="bg-primary-foreground p-4 rounded-lg ">
          <ChartPieDonutText />
        </div> */}

        {/* TopSellingBrand */}
        {/* <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2">
          <TopSellingBrand chartData={data?.topSellingBrand} />
        </div> */}

        {/* Recent Orders */}
        {/* <div className="bg-primary-foreground p-4 rounded-lg">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <History className="w-5 h-5 text-amber-500" />
              recent Orders
            </h3>

            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-accent rounded-lg transition-all">
                <Filter className="w-4 h-4 text-muted-foreground" />
              </button>
              <button className="p-2 hover:bg-accent rounded-lg transition-all">
                <ArrowUpDown className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>
          </div>

          {data && data?.recentOrders.length > 0 ? (
            <div className="max-h-[500px] overflow-y-scroll">
              {data.recentOrders.map((order, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-accent transition-all group border border-border"
                >
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-muted relative">
                    <Image
                      src={order.userImg}
                      fill
                      alt={order.fullName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm group-hover:text-primary transition-colors">
                      {order.fullName}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {order.userEmail}
                    </p>
                    <div className="flex items-center gap-4 mt-2"></div>
                  </div>
                  <div className="text-right">
                    <p className=" font-semibold text-sm text-muted-foreground">
                      {order.qty} Qty
                    </p>
                    <p className="font-semibold text-sm text-muted-foreground mt-1">
                      {formatNGN(order.subtotal)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <NoData />
          )}
        </div> */}

        {/* Top Performing Products */}
        {/* <div className="bg-primary-foreground p-4 rounded-lg  lg:col-span-2">
          <div className="bg-card border border-border rounded-xl p-6 ">
     
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Star className="w-5 h-5 text-amber-500" />
                Top Performing Products
              </h3>
              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-accent rounded-lg transition-all">
                  <Filter className="w-4 h-4 text-muted-foreground" />
                </button>
                <button className="p-2 hover:bg-accent rounded-lg transition-all">
                  <ArrowUpDown className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>
            </div>
            {data.topPerformingProduct &&
            data.topPerformingProduct.length > 0 ? (
              <div className="space-y-3 max-h-[500px] overflow-y-scroll hide-scrollbar">
                {data.topPerformingProduct.map((product, i) => (
                  <TopProductCardAdmin product={product} key={i} />
                ))}
              </div>
            ) : (
              <NoData />
            )}
          </div>
          <TopSelling />
        </div> */}

        {/* Visitors */}
        {/* <div className="bg-primary-foreground p-4 rounded-lg">
          <WebsiteVisitorsChart />
        </div> */}
      </div>
    </div>
  ) : (
    <div className="h-screen flex items-center justify-center">
      Error returning stats
    </div>
  );
};

export default DashboardDetails;
