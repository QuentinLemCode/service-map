import Konva from 'konva';
import { Link } from './link';
import { Graph } from './graph';

export class Service {
  rectangle: Konva.Rect;
  text: Konva.Text;
  group: Konva.Group;
  private id: number;

  private incomingLinks: Set<number> = new Set();
  private outgoingLinks: Set<number> = new Set();

  public get Id(): number {
    return this.id;
  }

  constructor(x: number, y: number, name: string, id: number) {
    this.id = id;

    this.group = new Konva.Group({
        x: x,
        y: y,
      draggable: true,
    });
    this.rectangle = new Konva.Rect({
      x: x,
      y: y,
      width: 100,
      height: 50,
      fill: '#00D2FF',
      stroke: 'black',
      strokeWidth: 4,
      //   draggable: true,
    });

    this.text = new Konva.Text({
      x: x,
      y: y,
      text: name,
      fontSize: 30,
      fontFamily: 'Calibri',
      fill: 'black',
    });

    this.group.add(this.rectangle, this.text);

    this.group.on('dragend', () => {
      this.text.x(this.rectangle.x());
      this.text.y(this.rectangle.y());
    });
  }

  addIncomingLink(serviceId: number) {
    this.incomingLinks.add(serviceId);
  }

  addOutgoingLink(serviceId: number) {
    this.outgoingLinks.add(serviceId);
  }

  removeIncomingLink(serviceId: number) {
    this.incomingLinks.delete(serviceId);
  }

  removeOutgoingLink(serviceId: number) {
    this.outgoingLinks.delete(serviceId);
  }

  addToLayer(layer: Konva.Layer) {
    layer.add(this.group);
  }

  removeFromLayer(layer: Konva.Layer) {
    this.group.remove();
    layer.draw();
  }
}
