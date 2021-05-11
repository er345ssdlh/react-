import React, { Component } from 'react'
import { Graph, Node, Point } from '@antv/x6'
class antv extends Component {
    constructor(props){
      super(props);
    }
    componentDidMount() {
        Graph.registerNode(
          'org-node',
          {
            width: 180,
            height: 60,
            markup: [
              {
                tagName: 'rect',
                selector: 'body',
              },
              {
                tagName: 'image',
                selector: 'avatar',
              },
              {
                tagName: 'text',
                selector: 'rank',
              },
              {
                tagName: 'text',
                selector: 'name',
              },
            ],
            attrs: {
              body: {
                refWidth: '100%',
                refHeight: '100%',
                fill: '#FFFFFF',
                stroke: '#000000',
                strokeWidth: 2,
                rx: 10,
                ry: 10,
                pointerEvents: 'visiblePainted',
              },
              avatar: {
                width: 48,
                height: 48,
                refX: 8,
                refY: 6,
              },
              rank: {
                refX: 0.9,
                refY: 0.2,
                fontFamily: 'Courier New',
                fontSize: 14,
                textAnchor: 'end',
                textDecoration: 'underline',
              },
              name: {
                refX: 0.9,
                refY: 0.6,
                fontFamily: 'Courier New',
                fontSize: 14,
                fontWeight: '800',
                textAnchor: 'end',
              },
            },
          },
          true,
        )
        
        Graph.registerEdge(
          'org-edge',
          {
            zIndex: -1,
            attrs: {
              line: {
                fill: 'none',
                strokeLinejoin: 'round',
                strokeWidth: '2',
                stroke: '#4b4a67',
                sourceMarker: null,
                targetMarker: null,
              },
            },
          },
          true,
        )
        
        const graph = new Graph({
          container: document.getElementById('container'),
          width: 600,
          height: 400,
          grid: true,
          connecting: {
            anchor: 'orth',
          },
        })
        graph.zoom(-0.5)
        function member(x,y,rank,name,image,background,textColor,) {
          return graph.addNode({
            x,
            y,
            shape: 'org-node',
            attrs: {
              body: {
                fill: background,
                stroke: 'none',
              },
              avatar: {
                opacity: 0.7,
                'xlink:href': image,
              },
              rank: {
                text: rank,
                fill: textColor,
                wordSpacing: '-5px',
                letterSpacing: 0,
              },
              name: {
                text: name,
                fill: textColor,
                fontSize: 13,
                fontFamily: 'Arial',
                letterSpacing: 0,
              },
            },
          })
        }
        
        function link(source, target, vertices) {
          return graph.addEdge({
            vertices,
            source: { cell: source },
            target: { cell: target },
            shape: 'org-edge',
          })
        }
        const male =
          'https://gw.alipayobjects.com/mdn/rms_43231b/afts/img/A*kUy8SrEDp6YAAAAAAAAAAAAAARQnAQ'
        const female =
          'https://gw.alipayobjects.com/mdn/rms_43231b/afts/img/A*f6hhT75YjkIAAAAAAAAAAAAAARQnAQ'
        
        const bart = member(300, 70, '一级', '王狗蛋', male, '#30d0c6')
        const homer = member(90,200,'二级','李狗蛋',male,'#7c68fd','#f1f1f1',
        )
        const marge = member(300,200,'二级','李狗蛋',female,'#7c68fd','#f1f1f1',
        )
        const lisa = member(500,200,'二级','李狗蛋',female,'#7c68fd','#f1f1f1',
        )
        const maggie = member(400, 350, '三级', '张狗蛋', female, '#feb563')
        const lenny = member(190, 350, '三级', '张狗蛋', male, '#feb563')
        const carl = member(190, 500, '四级', '刘狗蛋', male, '#feb563')
        
        link(bart, marge, [{ x: 385, y: 180 }])
        link(bart, homer, [
          { x: 385, y: 180 },
          { x: 175, y: 180 },
        ])
        link(bart, lisa, [
          { x: 385, y: 180 },
          { x: 585, y: 180 },
        ])
        link(homer, lenny, [{ x: 175, y: 380 }])
        link(homer, carl, [{ x: 175, y: 530 }])
        link(marge, maggie, [{ x: 385, y: 380 }])
    }
    render() {
      return (
        <div>
          <div id="container"></div>
        </div>
      );
    }
  }
   
  export default antv;