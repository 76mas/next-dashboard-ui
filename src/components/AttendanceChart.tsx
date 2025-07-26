
"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A multiple bar chart"

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export default function AttendanceChart() {
  return (
    <Card  className="bg-[#ffffff06] backdrop-blur-2xl border shadow-white shadow-inner  border-[#ffffff6e] p-4 rounded-xl">
      <CardHeader>
        <CardTitle className="text-white">Bar Chart - Multiple</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="desktop" fill="#3ee97d"radius={4} />
            <Bar dataKey="mobile" fill="#22f2ef" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col text-[#fff] items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4 text-[#fff]" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}





// "use client";
// import Image from "next/image";
// import {
//   BarChart,
//   Bar,
//   Rectangle,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";

// const data = [
//   {
//     name: "Sun",
//     present: 60,
//     absent: 40,
//   },
//   {
//     name: "Mon",
//     present: 70,
//     absent: 60,
//   },
//   {
//     name: "Tue", 
//     present: 90,
//     absent: 75,
//   },
//   {
//     name: "Wed", 
//     present: 90,
//     absent: 75,
//   },
//   {
//     name: "Thu", 
//     present: 65,
//     absent: 55,
//   },
// ];
// const AttendanceChart = () => {
//   return (
    
//     <div className="bg-white rounded-lg p-4 h-full">

//       <div className="flex justify-between items-center">
//             <h1 className="text-lg font-semibold">Attendance</h1>
//             <Image src="/moreDark.png" alt="" width={20} height={20} />
//       </div>

//       <ResponsiveContainer width="100%" height="90%">
//         <BarChart width={500} height={300} data={data} barSize={20}>
//           <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
//           <XAxis
//             dataKey="name"
//             axisLine={false}
//             tick={{ fill: "#d1d5db" }}
//             tickLine={false}
//           />
//           <YAxis 
//           axisLine={false} 
//           tick={{ fill: "#d1d5db" }} 
//           tickLine={false} />


//           <Tooltip
//             contentStyle={{ color:"#fff", borderRadius: "15px", backgroundColor:"#000",borderColor: "#000" }}
//           />
  
  
//           <Legend
//             align="left"
//             verticalAlign="top"
//             wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
//           />
//           <Bar
//             dataKey="present"
//             fill="#FAE27C"
//             legendType="circle"
//             radius={[10, 10, 0, 0]}
//           />
//           <Bar
//             dataKey="absent"
//             fill="#C3EBFA"
//             legendType="circle"
//             radius={[10, 10, 0, 0]}
//           />
//         </BarChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };



// export default AttendanceChart;