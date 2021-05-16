import React from 'react'
import "../../../node_modules/react-vis/dist/style.css"
import { XYPlot,
    LineSeries,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines
} from 'react-vis'


const Estatic = () => {
    const data = [
        { x: 0, y: 8},
        { x: 1, y: 5},
        { x: 2, y: 4},
        { x: 3, y: 9},
        { x: 4, y: 1},
        { x: 5, y: 7},
        { x: 6, y: 6},
        { x: 7, y: 3},
        { x: 8, y: 2},
        { x: 9, y: 0},
    ]
      return(
          <>
        <h1>Estatistica de contratos</h1>
        <div style={{ margin: "15px" }}>
            <XYPlot height={600} width={600}>
                <VerticalGridLines/>
                <HorizontalGridLines/>
                <XAxis/>
                <YAxis/>
                <LineSeries data={data} color="red"/>
                <LineSeries data={data} color="purple"/>
                <LineSeries data={data} color="pink"/>
            </XYPlot>
        </div>
        </>
      )
}
export default Estatic;