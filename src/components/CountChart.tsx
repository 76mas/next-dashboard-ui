
"use client"

import { TrendingUp } from "lucide-react"
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts"

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

export const description = "A radial chart with stacked sections"

const chartData = [{ month: "january", desktop: 1260, mobile: 570 }]

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





export default function CountChart() {
  const totalVisitors = chartData[0].desktop + chartData[0].mobile

  return (
    <Card className="flex flex-col h-full  bg-[#ffffff06] backdrop-blur-2xl  shadow-white shadow-inner  border-[#ffffff6e] ">
      <CardHeader className="items-center pb-0">
        <CardTitle  className="text-white">Radial Chart - Stacked</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-1 items-center pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square w-full max-w-[250px]"
        >
          <RadialBarChart
            data={chartData}
            endAngle={180}
            innerRadius={80}
            outerRadius={130}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 16}
                          className="fill-[#fff] text-2xl font-bold text-[#fff] "
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 4}
                          className="fill-muted-foreground"
                        >
                          Visitors
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </PolarRadiusAxis>
            <RadialBar
              dataKey="desktop"
              stackId="a"
              cornerRadius={5}
              fill="#3ee97d"
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              dataKey="mobile"
              fill="#22f2ef"
              stackId="a"
              cornerRadius={5}
              className="stroke-transparent stroke-2"
            />
          </RadialBarChart>

        </ChartContainer>

      </CardContent>

      <CardFooter className="flex-col gap-2 text-sm">
        <div  className="flex text-[#FFF] items-center gap-2 leading-none font-medium">
          Trendingwsws up by 5.2% this month <TrendingUp className="h-4 w-4 text-[#fff]" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}







// "use client"
// import Image from 'next/image';
// import React, { PureComponent } from 'react';
// import { RadialBarChart, RadialBar,Bar, Legend, ResponsiveContainer } from 'recharts';

// const data = [

//       {
//     name: 'Tottal',
//     count: 106,
//      fill: '#fff',
//   },
//   {
//     name: 'Boys',
//     count: 53,
//      fill: '#FAE27C',
//   },
//   {
//   name: 'Girals',
//     count: 55,
//       fill: '#C3EBFA',
//   },

  
 
 
// ];

// const style = {
//   top: '50%',
//   right: 0,
//   transform: 'translate(0, -50%)',
//   lineHeight: '24px',
// };

// export default function CountChart(){



//     return (
    
// <div className="flex flex-col bg-white  h-full rounded-xl p-4 relative">

//          <div className="flex justify-between items-center">
//                  <h1 className="text-lg font-semibold">Students</h1>
//                  <Image src="/moreDark.png" alt="" width={20} height={20} />
//            </div>

//         <div className=" relative w-full h-[75%]  ">
//                 <ResponsiveContainer   width="100%" height="100%" >
//                         <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="100%" barSize={28} data={data}>
//                                 <RadialBar                  
//                                     // background={{fill:"#3d3a4f"}}
//                                     background
//                                     dataKey="count"
//                                     cornerRadius={"100%"}
//                                 />
                         
//                         </RadialBarChart>
//                 </ResponsiveContainer>

//            <Image src='/maleFemale.png' alt='' width={40} height={40} className="absolute w-11  md:w-8 lg:w-12 top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 "/>

//          </div>

//          <div className="flex  justify-between gap-2 p-4">
            
//             <div className='flex flex-col justify-between gap-2'>
    
//                 <span className='w-8 h-8 rounded-full bg-LamaSky'></span>
//                 <h2 className='text-gray-900'>1,322</h2>
//                 <h2 className='text-gray-400'>Boys</h2>
//             </div>

//          <div className='flex flex-col justify-between gap-2'>

//             <span className='w-8 h-8 rounded-full bg-lamaYellow'></span>
//             <h2 className='text-gray-900'>1,322</h2>
//             <h2 className='text-gray-400'>Girals</h2>
//          </div>
         




//          </div>
      
      
      
//       </div>)
// }

