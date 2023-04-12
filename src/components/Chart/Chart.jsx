import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
  return (
    <div className='chart'>
      {props.dataPoints.map((dataPoints) => {
        return (
          <ChartBar
            key={dataPoints.id}
            value={dataPoints.data}
            maxValue={null}
            label={dataPoints.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;
