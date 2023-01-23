import * as d3 from "d3";
import React, { useRef, useEffect } from "react";

export type DataForChart = {
  time: Date;
  value: number;
};

export type LineChartProps = {
  data: DataForChart[];
};

var data: DataForChart[];
data = [
  { time: new Date(2023, 1, 1), value: 10 },
  { time: new Date(2023, 1, 2), value: 15 },
  { time: new Date(2023, 1, 3), value: 40 },
];

const LineChart: React.FC<LineChartProps> = ({ data }) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    if (!svgRef.current) return;
    const width = +svg.attr("width");
    const height = +svg.attr("height");

    const filteredData = data.filter((d) => d.time !== undefined);
    const x = d3
      .scaleTime()
      .domain([
        d3.min(filteredData, (d) => d.time) as Date,
        d3.max(filteredData, (d) => d.time) as Date,
      ])
      .range([0, width]);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(filteredData, (d) => d.value) as number])
      .range([height, 0]);

    const line = d3
      .line<DataForChart>()
      .x((d) => x(d.time))
      .y((d) => y(d.value));

    // console.log("axis = " + d3.axisBottom(x));

    svg
      .append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(x))
      .select(".domain")
      .remove();

    svg
      .append("g")
      .call(d3.axisLeft(y))
      .append("text")
      .attr("fill", "#000")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", "0.71em")
      .attr("text-anchor", "end")
      .text("Value (kWh)");

    svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("stroke-width", 1.5)
      .attr("d", line);
  }, [data, svgRef]);

  return <svg ref={svgRef} width={500} height={300}></svg>;
};

export default LineChart;
