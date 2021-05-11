import React, { Component } from 'react'
import { Graph,Shape } from '@antv/x6';
class Hello extends Component {
    constructor(props){
      super(props);
      this.state = {
        data:{
            // 节点
            nodes: [
              {
                id: 'node1', // String，可选，节点的唯一标识
                shape: 'ellipse', // 使用 rect 渲染
                x: 40,       // Number，必选，节点位置的 x 值
                y: 40,       // Number，必选，节点位置的 y 值
                width: 80,   // Number，可选，节点大小的 width 值
                height: 40,  // Number，可选，节点大小的 height 值
                attrs: {
                    body: {
                        fill: '#2ECC71',
                        stroke: '#000',
                        strokeDasharray: '10,2',
                    },
                    label: {
                        text: 'Hqello',
                        fill: '#333',
                        fontSize: 13,
                    }
                }
              },
              {
                id: 'node2', // String，节点的唯一标识
                shape: 'rect', // 使用 ellipse 渲染
                x: 160,      // Number，必选，节点位置的 x 值
                y: 180,      // Number，必选，节点位置的 y 值
                width: 80,   // Number，可选，节点大小的 width 值
                height: 40,  // Number，可选，节点大小的 height 值
                attrs: {
                body: {
                    fill: '#F39C12',
                    stroke: '#000',
                    rx: 16,
                    ry: 16,
                },
                label: {
                    text: 'World',
                    fill: '#333',
                    fontSize: 18,
                    fontWeight: 'bold',
                    fontVariant: 'small-caps',
                },
                },
              },
            ],
            // 边
            edges: [
              {
                source: 'node1', // String，必须，起始节点 id
                target: 'node2', // String，必须，目标节点 id
                shape: 'double-edge',
                attrs: {
                    line: {
                        stroke: 'orange',
                    },
                },
              },
            ],
          }
      }
    }
    componentDidMount() {
        console.log('欢迎使用后台管理平台欢迎使用后台管理平台')
        const graph = new Graph({
            container: document.getElementById('container'),
            width: 400,
            height: 400,
            background: {
                color: '#fffbe6', // 设置画布背景颜色
            },
            grid: {
                size: 10,      // 网格大小 10px
                visible: true, // 渲染网格背景
            },
            translating: { // 禁止节点移动到群组外部
                restrict(view) {
                    const cell = view.cell
                    if (cell.isNode()) {
                    const parent = cell.getParent()
                    if (parent) {
                        return parent.getBBox()
                    }
                    }
            
                    return null
                },
            },
        });
        graph.fromJSON(this.state.data)
        // graph.zoom(-0.5)
        // graph.translate(80, 40)
        // 创建节点并添加到画布
        const rect = new Shape.Rect({
            x: 100,
            y: 300,
            width: 80,
            height: 40,
            angle: 30, // 节点旋转的角度
            attrs: {
                body: {
                    fill: 'blue',
                },
                label: {
                    text: 'Hello',
                    fill: 'white',
                },
            },
        })
        graph.addNode(rect)
        // 创建节点2并添加到画布
        const rect2 = new Shape.Rect()
        rect2
        // 设置节点位置
        .position(200, 300)
        // 设置节点大小
        .resize(80, 40)
        // 旋转节点
        .rotate(30)
        // 设置节点样式
        .attr({
            body: {
                fill: 'blue',
            },
            label: {
                text: 'Hello',
                fill: 'white',
            },
        })
        graph.addNode(rect2)
        // 创建节点并添加到群组
        const childen = graph.addNode({
            id:'childen',
            shape: 'rect', // 指定使用何种图形，默认值为 'rect'
            x: 200,
            y: 0,
            width: 30,
            height: 30,
            zIndex: 10,
            attrs: {
                body: {
                fill: 'blue',
                },
                label: {
                    text: 'C1',
                    fill: 'white',
                },
            },
        })
        const childen2 = graph.addNode({
            id:'childen2',
            shape: 'rect', // 指定使用何种图形，默认值为 'rect'
            x: 250,
            y: 0,
            width: 30,
            height: 30,
            zIndex: 10,
            attrs: {
                body: {
                fill: 'blue',
                },
                label: {
                    text: 'C2',
                    fill: 'white',
                },
            },
        })
        const parent = graph.addNode({
            x: 200,
            y: 0,
            width: 110,
            height: 90,
            zIndex: 1,
            // label: 'Parent\n(try to move me)',
            attrs: {
                body: {
                    fill: 'blue',
                    opacity:'0',
                    strokeDasharray: '10,2',
                },
                label: {
                    text: 'Hello',
                    fill: 'white',
                },
            },
        })
        
        parent.addChild(childen)
        parent.addChild(childen2)
        graph.addEdge({
            source:'node1',
            target:'childen',
            attrs: {
                line: {
                    stroke: 'orange',
                },
            },
        })
        graph.addEdge({
            source:'childen',
            target:'childen2',
            attrs: {
                line: {
                    stroke: 'orange',
                },
            },
        })
        graph.addEdge({
            source:'childen2',
            target:'node2',
            attrs: {
                line: {
                    stroke: 'orange',
                },
            },
        })
    }
    render() {
      return (
        <div>
            <div className='welcomeDiv'>使用全局样式</div>
          <div id="container"></div>
        </div>
      );
    }
  }
   
  export default Hello;