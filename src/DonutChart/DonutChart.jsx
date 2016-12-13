import React from 'react';
import './donut-chart.scss';


var DonutChart = React.createClass({
  getInitialState(){
    return{
      donutval:83
    }
  },
  render(){
    return(
      <div>
        <Donuts value={this.state.donutval} />
      </div>
    )
  }
});


const Donuts = React.createClass({
  propTypes: {
    value: React.PropTypes.number,        // value the chart should show
    valuelabel: React.PropTypes.string,   // label for the chart
    size: React.PropTypes.number,         // diameter of chart
    strokewidth: React.PropTypes.number   // width of chart line
  },
  getDefaultProps() {
    return {
      value:0,
      size:136,
      strokewidth:16
    };
  },
  render() {

    const halfsize = (this.props.size * 0.5);
    const radius = halfsize - (this.props.strokewidth * 0.5);
    const circumference = 2 * Math.PI * radius;
    const strokeval = ((this.props.value * circumference) / 100);
    const dashval = (strokeval + ' ' + circumference);

    const trackstyle = {strokeWidth: this.props.strokewidth};
    const indicatorstyle = {strokeWidth: this.props.strokewidth, strokeDasharray: dashval}
    const rotateval = 'rotate(-90 '+halfsize+','+halfsize+')';

    return (
      <svg width={this.props.size} height={this.props.size} className="donutchart">
        <circle r={radius} cx={halfsize} cy={halfsize} transform={rotateval} style={trackstyle} className="donutchart-track"/>
        <circle r={radius} cx={halfsize} cy={halfsize} transform={rotateval} style={indicatorstyle} className="donutchart-indicator"/>
        <text className="donutchart-text" x={"52%"} y={"57%"} style={{textAnchor:'middle'}} >
          <tspan className="donutchart-text-val">{this.props.value}</tspan>
          <tspan className="donutchart-text-percent">%</tspan>
          {/* <tspan className="donutchart-text-label" x={halfsize} y={halfsize+10}>{this.props.valuelabel}</tspan> */}
        </text>
      </svg>
    );
  }
})

export default DonutChart;
