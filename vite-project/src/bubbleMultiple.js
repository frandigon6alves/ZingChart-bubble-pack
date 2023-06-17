import React, { Component } from 'react';
import "zingchart/es6";
import ZingChart from "zingchart-react";
import 'zingchart/modules-es6/zingchart-bubble-pack.min.js';

class Multiple extends Component {
  chartData = [
    {
      id: "Diseases",
      text: "Diseases",
      parent: "",
      value: "01",
    },
    {
      id: "Infections",
      text: "Infections",
      parent: "Diseases",
      value: "01",
    },
    {
      id: "Aneurysm, Infected",
      text: "Aneurysm, Infected",
      parent: "Infections",
      value: "01.069",
    },
    {
      id: "Arthritis, Infectious",
      text: "Arthritis, Infectious",
      parent: "Infections",
      value: "01.100",
    },
    {
      id: "Asymptomatic Infections",
      text: "Asymptomatic Infections",
      parent: "Infections",
      value: "01.125",
    },
    {
      id: "Bacterial Infections and Mycoses",
      text: "Bacterial Infections and Mycoses",
      parent: "Infections",
      value: "01.150",
    },
    {
      id: "Bacterial Infections",
      text: "Bacterial Infections",
      parent: "Bacterial Infections and Mycoses",
      value: "01.150.252",
    },
    {
      id: "Mycoses",
      text: "Mycoses",
      parent: "Bacterial Infections and Mycoses",
      value: "01.150.703",
    },
    {
      id: "Bone Diseases, Infectious",
      text: "Bone Diseases, Infectious",
      parent: "Infections",
      value: "01.160",
    },
    {
      id: "Breakthrough Infections",
      text: "Breakthrough Infections",
      parent: "Infections",
      value: "01.175",
    },
    {
      id: "Cardiovascular Infections",
      text: "Cardiovascular Infections",
      parent: "Infections",
      value: "01.190",
    },
    {
      id: "Catheter-Related Infections",
      text: "Catheter-Related Infections",
      parent: "Infections",
      value: "01.195",
    },
    {
      id: "Central Nervous System Infections",
      text: "Central Nervous System Infections",
      parent: "Infections",
      value: "01.207",
    },
    {
      id: "Coinfection",
      text: "Coinfection",
      parent: "Infections",
      value: "01.218",
    },
    {
      id: "Neoplasms",
      text: "Neoplasms",
      parent: "Diseases",
      value: "04",
    },
    {
      id: "Cysts",
      text: "Cysts",
      parent: "Neoplasms",
      value: "04.182",
    },
    {
      id: "Arachnoid Cysts",
      text: "Arachnoid Cysts",
      parent: "Cysts",
      value: "04.182.044",
    },
    {
      id: "Bone Cysts",
      text: "Bone Cysts",
      parent: "Cysts",
      value: "04.182.089",
    },
    {
      id: "Branchioma",
      text: "Branchioma",
      parent: "Cysts",
      value: "04.182.117",
    },
    {
      id: "Breast Cyst",
      text: "Breast Cyst",
      parent: "Cysts",
      value: "04.182.156",
    },
    {
      id: "Bronchogenic Cyst",
      text: "Bronchogenic Cyst",
      parent: "Cysts",
      value: "04.182.195",
    },
    {
      id: "Chalazion",
      text: "Chalazion",
      parent: "Cysts",
      value: "04.182.197",
    },
    {
      id: "Choledochal Cyst",
      text: "Choledochal Cyst",
      parent: "Cysts",
      value: "04.182.198",
    },
    {
      id: "Colloid Cysts",
      text: "Colloid Cysts",
      parent: "Cysts",
      value: "04.182.199",
    },
    {
      id: "Dermoid Cyst",
      text: "Dermoid Cyst",
      parent: "Cysts",
      value: "04.182.201",
    },
    {
      id: "Epidermal Cyst",
      text: "Epidermal Cyst",
      parent: "Cysts",
      value: "04.182.254",
    },
    {
      id: "Esophageal Cyst",
      text: "Esophageal Cyst",
      parent: "Cysts",
      value: "04.182.281",
    },
    {
      id: "Follicular Cyst",
      text: "Follicular Cyst",
      parent: "Cysts",
      value: "04.182.300",
    },
    {
      id: "Ganglion Cysts",
      text: "Ganglion Cysts",
      parent: "Cysts",
      value: "04.182.347",
    },
    {
      id: "Hamartoma",
      text: "Hamartoma",
      parent: "Neoplasms",
      value: "04.445",
    },
    {
      id: "Musculoskeletal_Diseases",
      text: "Musculoskeletal_Diseases",
      parent: "Diseases",
      value: "05",
    },
    {
      id: "Bone Diseases",
      text: "Bone Diseases",
      parent: "Musculoskeletal_Diseases",
      value: "05.116",
    },
    {
      id: "Bone Cysts",
      text: "Bone Cysts",
      parent: "Bone Diseases",
      value: "05.116.070",
    },
    {
      id: "Bone Diseases, Developmental",
      text: "Bone Diseases, Developmental",
      parent: "Bone Diseases",
      value: "05.116.099",
    },
    {
      id: "Bone Diseases, Endocrine",
      text: "Bone Diseases, Endocrine",
      parent: "Bone Diseases",
      value: "05.116.132",
    },
    {
      id: "Bone Diseases, Infectious",
      text: "Bone Diseases, Infectious",
      parent: "Bone Diseases",
      value: "05.116.165",
    },
    {
      id: "Bone Diseases, Metabolic",
      text: "Bone Diseases, Metabolic",
      parent: "Bone Diseases",
      value: "05.116.198",
    },
    {
      id: "Bone Malalignment",
      text: "Bone Malalignment",
      parent: "Bone Diseases",
      value: "05.116.214",
    },
    {
      id: "Cartilage Diseases",
      text: "Cartilage Diseases",
      parent: "Musculoskeletal_Diseases",
      value: "05.182",
    },
    {
      id: "Fasciitis",
      text: "Fasciitis",
      parent: "Musculoskeletal_Diseases",
      value: "05.321",
    },
    {
      id: "Foot Deformities",
      text: "Foot Deformities",
      parent: "Musculoskeletal_Diseases",
      value: "05.330",
    },
    {
      id: "Foot Diseases",
      text: "Foot Diseases",
      parent: "Musculoskeletal_Diseases",
      value: "05.360",
    },
    {
      id: "Hand Deformities",
      text: "Hand Deformities",
      parent: "Musculoskeletal_Diseases",
      value: "05.390",
    },
  ];

  constructor(props) {
    super(props);
    this.state = {
      config: {
        type: 'bubble-pack',
        options: {
          containers: {
            Infections: {
              height: '50%',
              width: '33%',
              x: '0%',
              y: '0%',
            },
            Neoplasms: {
              height: '50%',
              width: '33%',
              x: '67%',
              y: '0%',
            },
            Musculoskeletal_Diseases: {
              height: '50%',
              width: '33%',
              x: '17%',
              y: '50%',
            },
          },
          filter: ['Infections', 'Neoplasms', 'Musculoskeletal_Diseases'],
          itemIdInfections: {
            borderColor: '#00B0E2',
            label: {
              color: 'red',
            },
          },
          itemIdNeoplasms: {
            borderColor: '#BA163B',
            label: {
              color: '#BA163B',
            },
          },
          itemIdMusculoskeletal_Diseases: {
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
          margin: '9 0 0 0',
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