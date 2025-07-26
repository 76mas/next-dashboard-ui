"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

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

export const description = "An area chart with gradient fill"

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

export default function FinanceChart() {
  return (
    <Card  className=" bg-[#ffffff06]  h-full backdrop-blur-2xl border shadow-white shadow-inner border-[#ffffff6e]  rounded-xl">
      <CardHeader>
        <CardTitle className="text-[#fff]">Area Chart - Gradient</CardTitle>
        <CardDescription className="text-[#737373] ">
          Showing total visitors for the last 6 months
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer className="w-full sm:h-full lg:pb-20 " config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="#22f2ef"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="#3ee97d"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                   stopColor="#22f2ef"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                stopColor="#3ee97d"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <Area
              dataKey="mobile"
              type="natural"
              fill="#22f2ef"
              fillOpacity={0.4}
              stroke="#22f2ef"
              stackId="a"
            />
            <Area
              dataKey="desktop"
              type="natural"
              fill="#3ee97d"
              fillOpacity={0.4}
              stroke="#3ee97d"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className=" mb-[100px] bottom-[-22%] absolute">
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 leading-none text-[#fff] font-medium">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="text-[#737373] flex  items-center gap-2 leading-none">
              January - June 2024
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}




// 'use client'

// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import Image from 'next/image';

// const data = [
//   {
//     name: "Jan",
//     income: 4000,
//     expense: 2400,
//   },
//   {
//     name: "Feb",
//     income: 3000,
//     expense: 1398,
//   },
//   {
//     name: "Mar",
//     income: 2000,
//     expense: 9800,
//   },
//   {
//     name: "Apr",
//     income: 2780,
//     expense: 3908,
//   },
//   {
//     name: "May",
//     income: 1890,
//     expense: 4800,
//   },
//   {
//     name: "Jun",
//     income: 2390,
//     expense: 3800,
//   },
//   {
//     name: "Jul",
//     income: 3490,
//     expense: 4300,
//   },
//   {
//     name: "Aug",
//     income: 3490,
//     expense: 4300,
//   },
//   {
//     name: "Sep",
//     income: 3490,
//     expense: 4300,
//   },
//   {
//     name: "Oct",
//     income: 3490,
//     expense: 4300,
//   },
//   {
//     name: "Nov",
//     income: 3490,
//     expense: 4300,
//   },
//   {
//     name: "Dec",
//     income: 3490,
//     expense: 4300,
//   },
// ];




// const FinanceChart=()=>{


//     return(
    
//     <div className="flex bg-white rounded-xl min-w-full h-full py-4 flex-col"  >
    
//     <div className='flex justify-between p-5 items-center' >
//         <h1 className="text-lg font-semibold">Finance</h1>
//     <Image src="/moreDark.png" alt="" width={20} height={20} />
//     </div>


//         <div className='flex w-[95%] h-[100%] justify-center items-center p-3'>
//         <ResponsiveContainer width="100%" height="100%">
//                     <LineChart
//                         width={500}
//                         height={300}
//                         data={data}
//                         margin={{
//                         top: 5,
//                         right: 30,
//                         left: 20,
//                         bottom: 5,
//                         }}
//                     > 
//                     <Legend
//                             // align="left"
//                             // verticalAlign="top"
//                             wrapperStyle={{ paddingTop: "10px", paddingBottom: "20px" }}
//                         />
//                         <CartesianGrid   strokeDasharray="3 3" />
//                 <XAxis tickLine={false} dataKey="name"  axisLine={false} tick={{ fill: "#d1d5db" }}  tickMargin={20} />
//                 <YAxis tickLine={false}  axisLine={false} tick={{ fill: "#d1d5db" }}  tickMargin={20}/>
//                 <Tooltip   contentStyle={{ color:"#fff", borderRadius: "15px", backgroundColor:"#000",borderColor: "#000" }}/>
               
//                 <Line strokeWidth={3} type="monotone" dataKey="income" stroke="#8884d8" activeDot={{ r: 4 }} />
//                 <Line  strokeWidth={3} type="monotone" dataKey="expense" stroke="#82ca9d" activeDot={{ r: 4 }} />
//             </LineChart>
//          </ResponsiveContainer>
//         </div>

//     </div>)


// }


// export default FinanceChart;

