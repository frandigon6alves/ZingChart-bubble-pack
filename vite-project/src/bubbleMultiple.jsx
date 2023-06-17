import React, { Component } from 'react';
import "zingchart/es6";
import ZingChart from "zingchart-react";
import 'zingchart/modules-es6/zingchart-bubble-pack.min.js'; //modulo especifico para bubble pack chart

class Multiple extends Component {
  chartData = [
    {
      id: 'theworld',
      parent: '',
      name: 'The World',
      value: 1,
    },
    {
      id: 'africa',
      parent: 'theworld',
      name: 'Africa',
      value: 1,
    },
    {
      id: 'america',
      parent: 'theworld',
      name: 'America',
      value: 1,
    },
    {
      id: 'europe',
      parent: 'theworld',
      name: 'Europe',
      value: 1,
    },
    {
      id: 'easternafrica',
      parent: 'africa',
      name: 'Eastern Africa',
      value: 1,
    },
    {
      id: 'southamerica',
      parent: 'america',
      name: 'South America',
      value: 1,
    },
    {
      id: 'brazil',
      parent: 'southamerica',
      name: 'Brazil',
      value: 209288278.71,
    },

  ];

  constructor(props) {
    super(props);
    this.state = {
      config: {
        type: 'bubble-pack',
        options: {
          containers: {
            europe: {
              height: '50%',
              width: '33%',
              x: '0%',
              y: '0%',
            },
            africa: {
              height: '50%',
              width: '33%',
              x: '67%',
              y: '0%',
            },
            america: {
              height: '50%',
              width: '33%',
              x: '17%',
              y: '50%',
            },
          },
          filter: ['europe', 'africa', 'america'],
          itemIdAfrica: {
            borderColor: '#00B0E2',
            label: {
              color: 'red',
            },
          },
          itemIdEurope: {
            borderColor: '#BA163B',
            label: {
              color: '#BA163B',
            },
          },
          itemIdAmerica: {
            borderColor: '#00CC00',
            label: {
              color: '#00CC00',
            },
          },
          itemLevel1: {
  
            backgroundColor: '#ddd',
            borderWidth: '3px',
            alpha: 1,
            label: {
              text: '%fullname',
              fontSize: '13px',
              fontWeight: 'bold',
              padding: '2px',
              offsetY: '-111px',
            },
          },
          minLevel: 1,
          minSize: 3,
          padding: '1px',
        },
        plotarea: {
          margin: '10 0 0 0',
        },
        series: this.chartData,
      },
    };
  }

  render() {
    return (
      <div>
        <ZingChart data={this.state.config} />
      </div>
    );
  }
}

export default Multiple;