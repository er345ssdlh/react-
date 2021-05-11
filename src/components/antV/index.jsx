import React, { Component } from 'react'
import { Chart } from '@antv/g2';
import { Button } from 'antd';
class Hello extends Component {
    constructor(props){
      super(props);
      this.state = {
            data: [
                { name: 'London', '月份': 'Jan.', '月均降雨量': 18.9 },
                { name: 'London', '月份': 'Feb.', '月均降雨量': 28.8 },
                { name: 'London', '月份': 'Mar.', '月均降雨量': 39.3 },
                { name: 'London', '月份': 'Apr.', '月均降雨量': 81.4 },
                { name: 'London', '月份': 'May', '月均降雨量': 47 },
                { name: 'London', '月份': 'Jun.', '月均降雨量': 20.3 },
                { name: 'London', '月份': 'Jul.', '月均降雨量': 24 },
                { name: 'London', '月份': 'Aug.', '月均降雨量': 35.6 },
                { name: 'Berlin', '月份': 'Jan.', '月均降雨量': 12.4 },
                { name: 'Berlin', '月份': 'Feb.', '月均降雨量': 23.2 },
                { name: 'Berlin', '月份': 'Mar.', '月均降雨量': 34.5 },
                { name: 'Berlin', '月份': 'Apr.', '月均降雨量': 99.7 },
                { name: 'Berlin', '月份': 'May', '月均降雨量': 52.6 },
                { name: 'Berlin', '月份': 'Jun.', '月均降雨量': 35.5 },
                { name: 'Berlin', '月份': 'Jul.', '月均降雨量': 37.4 },
                { name: 'Berlin', '月份': 'Aug.', '月均降雨量': 42.4 },
            ],
            pieData:[
                { item: '事例一', count: 40, percent: 0.4 },
                { item: '事例二', count: 21, percent: 0.21 },
                { item: '事例三', count: 17, percent: 0.17 },
                { item: '事例四', count: 13, percent: 0.13 },
                { item: '事例五', count: 9, percent: 0.09 },
            ],
            tDate:[
                { type: '汽车', value: 34 },
                { type: '建材家居', value: 85 },
                { type: '住宿旅游', value: 103 },
                { type: '交通运输与仓储邮政', value: 142 },
                { type: '建筑房地产', value: 251 },
                { type: '教育', value: 367 },
                { type: 'IT 通讯电子', value: 491 },
                { type: '社会公共管理', value: 672 },
                { type: '医疗卫生', value: 868 },
                { type: '金融保险', value: 1234 },
            ]
      }
    }
    componentDidMount(){
        this.readHistogram()
        this.readPieChart()
        this.readt()
    }
    readHistogram(){
        const chart = new Chart({
            container: 'container',
            autoFit: true,
        });
        chart.data(this.state.data);
        chart.scale('月均降雨量', {
          nice: true,
        });
        chart.tooltip({
          showMarkers: false,
          shared: true,
        });
        
        chart
          .interval()
          .position('月份*月均降雨量')
          .color('name')
          .adjust([
            {
              type: 'dodge',
              marginRatio: 0,
            },
          ]);
        
        chart.interaction('active-region');
        chart.render();
    }
    readPieChart(){
        const chart = new Chart({
            container: 'container2',
            autoFit: true,
        });
        chart.data(this.state.pieData);

        chart.coordinate('theta', {
          radius: 0.85
        });
        
        chart.scale('percent', {
          formatter: (val) => {
            val = val * 100 + '%';
            return val;
          },
        });
        chart.tooltip({
          showTitle: false,
          showMarkers: false,
        });
        chart.axis(false); // 关闭坐标轴
        const interval = chart
          .interval()
          .adjust('stack')
          .position('percent')
          .color('item')
          .label('percent', {
            offset: -40,
            style: {
              textAlign: 'center',
              shadowBlur: 2,
              shadowColor: 'rgba(0, 0, 0, .45)',
              fill: '#fff',
            },
          })
          .tooltip('item*percent', (item, percent) => {
            percent = percent * 100 + '%';
            return {
              name: item,
              value: percent,
            };
          })
          .style({
            lineWidth: 1,
            stroke: '#fff',
          });
        chart.interaction('element-single-selected');
        chart.render();
        
        // 默认选择
        interval.elements[0].setState('selected', true);
    }
    readt(){
        const chart = new Chart({
            container: 'container3',
            autoFit: true,
            height: 500,
        });
        chart.data(this.state.tDate);
        chart.scale({
            value: {
            max: 1400,
            min: 0,
            alias: '销量（百万）',
            },
        });
        chart.axis('type', {
            title: null,
            tickLine: null,
            line: null,
        });
        
        chart.axis('value', {
            label: null,
            title: {
            offset: 30,
            style: {
                fontSize: 12,
                fontWeight: 300,
            },
            },
        });
        chart.legend(false);
        chart.coordinate().transpose();
        chart
            .interval()
            .position('type*value')
            .size(26)
            .label('value', {
            style: {
                fill: '#8d8d8d',
            },
            offset: 10,
            });
        chart.interaction('element-active');
        chart.render(); 
    }
    render() {
      const itemStyle = {width: '50%',height:'50%',border:'1px solid #ccc'};
      const itemStyle3 = {width: '100%',height:'50%',border:'1px solid #ccc'};
      const divStyle = {display:'flex',flexWrap:'wrap',justifyContent:'space-between',width:'100%',height:'100%'};
      return (
        <div style = {divStyle}>
          <div style = {itemStyle} id="container"></div>
          <div style = {itemStyle} id="container2"></div>
          <div style = {itemStyle3} id="container3"></div>
        </div>
      );
    }
  }
   
  export default Hello;