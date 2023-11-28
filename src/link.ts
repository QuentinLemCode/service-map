import Konva from 'konva';
import { Graph } from './graph';

export class Link {
  from: number;
  to: number;

  private line: Konva.Line;

  constructor(from: number, to: number, graph: Graph) {
    this.from = from;
    this.to = to;

    const fromX = graph.services.get(from)?.group.x();
    const fromY = graph.services.get(from)?.group.y();
    const toX = graph.services.get(to)?.group.x();
    const toY = graph.services.get(to)?.group.y();

    if (!fromX || !fromY || !toX || !toY) throw new Error("Invalid service id");

    this.line = new Konva.Line({
      points: [fromX, fromY, toX, toY],
      stroke: 'black',
      strokeWidth: 3,
      lineCap: 'round',
      lineJoin: 'round',
    });
  }

  addToLayer(layer: Konva.Layer) {
    layer.add(this.line);
  }
}
