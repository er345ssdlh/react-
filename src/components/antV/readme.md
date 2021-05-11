<!--
 * @Descripttion: 
 * @version: 
 * @Author: lzy
 * @Date: 2021-04-25 09:44:31
 * @LastEditors: Andy
 * @LastEditTime: 2021-04-25 11:32:45
-->
## antV 产品区别比较

### @antv/g2

声明使用：

```
import { Chart } from '@antv/g2';
const chart = new Chart({
    container: 'container',
});

```
### @antv/x6 与 @antv/g6

声明使用相同：

```
import { Graph } from '@antv/x6'
// import { Graph } from '@antv/g6'
const chart = new Graph({
    container: 'container',
});

```

区别：
> @antv/x6适合重图编辑应用，因为他提供了许多适合重编辑的api，比如graph.addNode(),graph.addEdge()...
@antv/g6适合图可视化与分析应用

啥是重编辑？
>如果只是改改节点颜色、拖拽节点、拖拽画布，这只算探索数据的辅助功能，不算是「编辑数据」。
如果是拖拽加入节点、从锚点拖拽创建边、编辑边的形状、编辑过程中对齐……，妥妥的重编辑。

是否支持移动端:
> x6与G6虽是孪生兄弟，首先他们呢都可以再移动端使用
但是考虑性能，G6 是基于 Canvas 的，在较大规模图上可以保持流畅交互。在移动端，需要支持展示和简单交互，对性能的要求更高，因此这种需求优选 G6。
antv推出专注移动端的产品F2|F2Native，可以替代G2在移动端的使用，官网说了：AntV F2是定位于移动端需求的和G2基本同样功能的一个完备的通用图表库
在小程序中使用https://www.jianshu.com/p/1d0fb1256c68


概述：
>AntV 官网：https://antv.vision/

G2：https://github.com/antvis/g2G2 是一套基于可视化编码的图形语法，以数据驱动，具有高度的易用性和扩展性，用户无需关注各种繁琐的实现细节，一条语句即可构建出各种各样的可交互的统计图表。

G2Plot：https://github.com/antvis/g2plot
G2Plot 的定位是开箱即用、易于配置、具有良好视觉和交互体验的通用图表库。

F2：https://github.com/antvis/f2F2 是一个专注于移动，开箱即用的可视化解决方案，完美支持 H5 环境同时兼容多种环境（node, 小程序，weex）。完备的图形语法理论，满足各种可视化需求。专业的移动设计指引为你带来最佳的移动端图表体验。

F2Native：https://github.com/antvis/F2NativeF2Native 是一个专注于客户端，开箱即用、高性能的可视化解决方案，完备的图形语法理论，满足你的各种需求，专业的移动设计指引为你带来最佳的移动端图表体验。

G6：https://github.com/antvis/g6G6 是 AntV 旗下的图可视化与图分析引擎，G 来自于 Graphic、Graph ，意味着我们要基于图分析技术做图可视化；6 来自于《六度分隔理论》，表达了我们对关系数据、关系网络的敬畏和着迷。

Graphin：https://github.com/antvis/graphinGraphin 是一个基于 G6 封装的关系可视分析工具 ，简单，高效，开箱即用，取自 Graph Insight，图的分析洞察。

X6：https://github.com/antvis/X6X6 是 AntV 旗下的图编辑引擎，提供了一系列开箱即用的交互组件和简单易用的节点定制能力，方便我们快速搭建 DAG 图、ER 图、流程图等应用。

L7：https://github.com/antvis/l7L7 是一个基于 WebGL 的开源大规模地理空间数据可视分析开发框架。L7 中的 L 代表 Location，7 代表世界七大洲，寓意能为全球位置数据提供可视分析的能力。

AVA：https://github.com/antvis/AVAAVA 是为了更简便的可视分析而生的智能可视化框架。

G：https://github.com/antvis/gG 是 AntV 几个产品共同的底层 2D 渲染引擎，高效易用，专注于图形的渲染、拾取、事件以及动画机制，给上层 G2、F2、G6 提供统一的渲染机制。

ChartCube：https://chartcube.alipay.comChartCube 是一个可以快速完成图表制作的在线工具，只需要三步就可以创建出高品质的图表。
