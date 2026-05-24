"use client";

import { TrendingUp } from "lucide-react";
import { LabelList, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

export const description = "A pie chart with properties listing types";

const chartData = [
  { browser: "forSale", visitors: 360 / 3, fill: "var(--color-forSale)" },
  { browser: "forRent", visitors: 360 / 3, fill: "var(--color-forRent)" },
  { browser: "firefox", visitors: 360 / 3, fill: "var(--color-firefox)" },
  // { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  // { browser: "other", visitors: 90, fill: "var(--color-other)" },
];

const chartConfig = {
  visitors: {
    label: "listing type",
  },
  forSale: {
    label: "For sale",
    color: "var(--chart-1)",
  },
  forRent: {
    label: "For rent",
    color: "var(--chart-2)",
  },
  firefox: {
    label: "Shortlet",
    color: "var(--chart-3)",
  },
  // edge: {
  //   label: "Edge",
  //   color: "var(--chart-4)",
  // },
  // other: {
  //   label: "Other",
  //   color: "var(--chart-5)",
  // },
} satisfies ChartConfig;

export function ListingType() {
  return (
    <Card className="flex flex-col relative">
      <CardHeader className="items-center pb-0">
        <CardTitle>Properties - Listings</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="[&_.recharts-text]:fill-background mx-auto aspect-square max-h-62.5"
        >
          <PieChart>
            <ChartTooltip
              content={<ChartTooltipContent nameKey="visitors" hideLabel />}
            />
            <Pie data={chartData} dataKey="visitors">
              <LabelList
                dataKey="browser"
                className="fill-background"
                stroke="none"
                fontSize={12}
                formatter={(value: keyof typeof chartConfig) =>
                  chartConfig[value]?.label
                }
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
