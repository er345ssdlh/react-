import React, { Component } from 'react'
import G6 from '@antv/g6';
class Hello extends Component {
    constructor(props){
      super(props);
      this.state = {
        data: {
            nodes: [
              { id: 'node0', size: 50 },
              { id: 'node1', size: 30 },
              { id: 'node2', size: 30 },
              { id: 'node3', size: 30 },
              { id: 'node4', size: 30, isLeaf: true },
              { id: 'node5', size: 30, isLeaf: true },
              { id: 'node6', size: 15, isLeaf: true },
              { id: 'node7', size: 15, isLeaf: true },
              { id: 'node8', size: 15, isLeaf: true },
              { id: 'node9', size: 15, isLeaf: true },
              { id: 'node10', size: 15, isLeaf: true },
              { id: 'node11', size: 15, isLeaf: true },
              { id: 'node12', size: 15, isLeaf: true },
              { id: 'node13', size: 15, isLeaf: true },
              { id: 'node14', size: 15, isLeaf: true },
              { id: 'node15', size: 15, isLeaf: true },
              { id: 'node16', size: 15, isLeaf: true },
            ],
            edges: [
              { source: 'node0', target: 'node1' },
              { source: 'node0', target: 'node2' },
              { source: 'node0', target: 'node3' },
              { source: 'node0', target: 'node4' },
              { source: 'node0', target: 'node5' },
              { source: 'node1', target: 'node6' },
              { source: 'node1', target: 'node7' },
              { source: 'node2', target: 'node8' },
              { source: 'node2', target: 'node9' },
              { source: 'node2', target: 'node10' },
              { source: 'node2', target: 'node11' },
              { source: 'node2', target: 'node12' },
              { source: 'node2', target: 'node13' },
              { source: 'node3', target: 'node14' },
              { source: 'node3', target: 'node15' },
              { source: 'node3', target: 'node16' },
            ],
        }
      }
    }
    componentDidMount(){
        const nodes = this.state.data.nodes;

        const container = document.getElementById('container');
        const width = container.scrollWidth;
        const height = (container.scrollHeight || 500) - 20;
        // https://antv-g6.gitee.io/zh/docs/api/Graph
        const graph = new G6.Graph({
            container: 'container',
            width, // 画布宽度
            height, // 画布高度
            modes: { // 交互模式
                default: ['drag-canvas', 'zoom-canvas', 'drag-node', 'lasso-select'],
            },
            layout: {
                type: 'force', // random, radial, mds, circular, fruchterman, force, dagre, concentric, grid
            },
        });
        graph.data({
            nodes,
            edges: this.state.data.edges.map(function (edge, i) {
                edge['id'] = 'edge' + i;
                return Object.assign({}, edge);
            }),
        });
        graph.render();
        let centerNodes = graph.getNodes().filter((node) => !node.getModel().isLeaf); // getModel获取元素的数据模型
        graph.on('afterlayout', () => {
            const hull1 = graph.createHull({ // createHull聚类轮廓包裹
                id: 'centerNode-hull',
                type: 'bubble', // 形状round-convex / smooth-convex / bubble
                members: centerNodes, // 包括的节点数组
                padding: 10,
            });
            const hull3 = graph.createHull({
                id: 'leafNode-hull2',
                members: ['node8', 'node9', 'node10', 'node11', 'node12', 'node13'],
                padding: 10,
                style: {
                    fill: 'lightgreen',
                    stroke: 'green',
                },
            });
            graph.on('afterupdateitem', (e) => { // 拖动缩放的时候重新上传
                hull1.updateData(hull1.members);
                hull3.updateData(hull3.members);
            });
        });
    }
    render() {
        const itemStyle = {width:'600px',height:'400px'};
      return (
        <div>
            <div style={itemStyle} id="container"></div>
        </div>
      );
    }
  }
  export default Hello;