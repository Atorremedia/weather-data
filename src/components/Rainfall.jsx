import React, { useRef, useEffect, useState } from 'react'
import styles from '../css/rainfall.module.css'
import { select, line, curveCardinal, scaleLinear, scaleBand, axisBottom, axisRight, axisLeft } from 'd3'

function Rainfall() {
    
    const [rainData] = useState([0, 10, 0, 20, 15, 2, 0, 0])
    const svgRef = useRef()
    

    useEffect(() => {

        const height = 120
        const width = 450
        const background = '#d3d3d3'
            
        const svg = select(svgRef.current)
            .attr("width", width)
            .attr("height", height)
            .style("background", background)

        // // Humidity barchart
        
        const xScaleRain = scaleBand()
        .domain(rainData.map((value, index)=>index))
        .range([0, width])
        .padding(0.2)

        const yScaleRain = scaleLinear()
        .domain([0, (Math.max(...rainData)+20)])
        .range([0, height])

        const yScaleRainAxis = scaleLinear()
        .domain([(Math.max(...rainData)),(Math.min(...rainData))])
        .range([0, height])

        svg.selectAll("rect")
            .data(rainData)
            .join("rect")
                .attr("x" , (value, index)=>xScaleRain(index))
                .attr("y" , (value, index)=>height - yScaleRain(value))
                .attr("height", yScaleRain)
                .attr("width", xScaleRain.bandwidth())
                .style("fill", "#3386FF")
                .style("stroke", "blue")
                .style("strokeWeight", 2)

        // Axis

        let tickLabels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'] 

        const xScaleRainAxis = scaleBand()
        .domain(rainData.map((value, index)=>index))
        .range([0, width])

        const xAxis = axisBottom(xScaleRainAxis)
        .ticks(rainData)
        .tickFormat((d, i)=>tickLabels[i])
      svg
        .select(".x-axis")
        .style("transform", `translateY(${height}px)`)
        .call(xAxis);
        
    const yAxisLeft = axisLeft(yScaleRainAxis);
        svg
          .select(".y-axis-left")
          .call(yAxisLeft);


    }, [rainData])

  return (
    <div className={`${styles.chartContainer}`}>
        <h3 className={`${styles.chartTitle}`}>Rainfall</h3>
        <svg ref={svgRef} className={styles.svg}>
            <g className="x-axis" />
            <g className="y-axis-left" />
        </svg>
    </div>
  )
}

export default Rainfall