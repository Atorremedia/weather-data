import React, { useRef, useEffect, useState } from 'react'
import styles from '../css/TempHumidity.module.css'
import { select, line, curveCardinal, scaleLinear, scaleBand, axisBottom, axisRight, axisLeft } from 'd3'

function TempHumidity() {
    
    const [minTempData] = useState([22, 23, 22, 19, 21, 23, 22, 24])
    const [maxTempData] = useState([28, 29, 29, 26, 27, 28, 27, 30])
    const [humData] = useState([83, 76, 80, 86, 87, 76, 75, 82])
    const svgRef = useRef()
    

    useEffect(() => {

        const height = 230
        const width = 450
        const background = '#d3d3d3'
            
        const svg = select(svgRef.current)
            .attr("width", width)
            .attr("height", height)
            .style("background", background)

        // // Humidity barchart
        
        const xScaleHum = scaleBand()
        .domain(humData.map((value, index)=>index))
        .range([0, width])
        .padding(0.2)

        const yScaleHum = scaleLinear()
        .domain([30, 100])
        .range([0, height])

        const yScaleHumAxis = scaleLinear()
        .domain([100, 30])
        .range([0, height])

        svg.selectAll("rect")
            .data(humData)
            .join("rect")
                .attr("x" , (value, index)=>xScaleHum(index))
                .attr("y" , (value, index)=>height - yScaleHum(value))
                .attr("height", yScaleHum)
                .attr("width", xScaleHum.bandwidth())
                .style("fill", "#33F6FF")
                .style("stroke", "blue")
                .style("strokeWeight", 2)


        // Temperature Scale

        const xScale = scaleLinear()
            .domain([0, maxTempData.length-1])
            .range([0, width])
        const yScale = scaleLinear()
            .domain([(Math.min(...minTempData)-10), (Math.max(...maxTempData)+10)])
            .range([230, 0])


    // Temperature Chart

        const myLine = line()
            .x((value, index) => xScale(index))
            .y(yScale)
            .curve(curveCardinal)

        svg.selectAll("line")
            .data([maxTempData])
            .join("path")
                .attr("class", "linemax")
                .attr("d", myLine)
                .attr('fill', 'none')
                .attr('stroke', 'red')
                .attr("classed", "maxtemp")


            const myLine2 = line()
            .x((value, index) => xScale(index))
            .y(yScale)
            .curve(curveCardinal)

        svg.selectAll("line")
            .data([minTempData])
            .join("path")
                .attr("class", "linemin")
                .attr("d", myLine)
                .attr('fill', 'none')
                .attr('stroke', 'blue')

        // Axis

        let tickLabels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'] 

        const xScaleHumAxis = scaleBand()
        .domain(humData.map((value, index)=>index))
        .range([0, width])

        const xAxis = axisBottom(xScaleHumAxis)
        .ticks(minTempData.length)
        .tickFormat((d, i)=>tickLabels[i])
      svg
        .select(".x-axis")
        .style("transform", `translateY(${height}px)`)
        .call(xAxis);
        
        const yAxis = axisRight(yScale)
        svg
          .select(".y-axis")
          .style("transform", `translateX(${width}px)`)
          .call(yAxis);

          const yAxisLeft = axisLeft(yScaleHumAxis);
        svg
          .select(".y-axis-left")
          .call(yAxisLeft);


    }, [maxTempData, minTempData, humData])

  return (
    <div className={`${styles.chartContainer}`}>
        <h3 className={`${styles.chartTitle}`}>Temperature and Humidity</h3>
        <svg ref={svgRef} className={styles.svg}>
            <g className="x-axis" />
            <g className="y-axis" />
            <g className="y-axis-left" />
        </svg>
    </div>
  )
}

export default TempHumidity