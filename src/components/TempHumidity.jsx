import React, { useRef, useEffect, useState } from 'react'
import styles from '../css/TempHumidity.module.css'
import { select, line, curveCardinal, scaleLinear, scaleBand, axisBottom, axisRight, axisLeft } from 'd3'

function TempHumidity({data}) {
    
    const [minTempData, setMinTempData] = useState([28.3, 26.5, 26.8, 25.7, 23.9, 23.2, 21.2])
    const [maxTempData] = useState([32.2, 37.3, 33.5, 32.6, 33.5, 32.9, 24.6])
    const [humData] = useState([76, 80, 86, 87, 76, 75, 82])
    const svgRef = useRef()
    
    useEffect(() => {
        if (data){setMinTempData(data['daily']['temperature_2m_min'])}
    },[data])


    useEffect(() => {

        console.log(minTempData)
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

        let tickLabels = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'] 

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