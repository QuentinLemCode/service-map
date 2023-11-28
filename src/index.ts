import Konva from 'konva';
import { Service } from './service';
import { Graph } from './graph';

const stage = new Konva.Stage({
  container: 'container',
  width: window.innerWidth,
  height: window.innerHeight,
});

const layer = new Konva.Layer();
stage.add(layer);

const graph = new Graph(layer);

const idService1 = graph.addService(100, 100, 'Service 1');
const idService2 = graph.addService(300, 100, 'Service 2');
graph.createLink(idService1, idService2);

graph.render();