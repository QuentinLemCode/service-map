import { Layer } from 'konva/lib/Layer';
import { Link } from './link';
import { Service } from './service';

export class Graph {
  public services: Map<number, Service> = new Map();
  public links: Link[] = [];

  constructor(private layer: Layer) {}

  private static idCounter: number = 0;

  public addService(x: number, y: number, name: string) {
    const id = Graph.idCounter;
    const service = new Service(x, y, name, id);
    this.services.set(id, service);
    Graph.idCounter++;
    return id;
  }

  public removeService(service: Service) {
    service.removeFromLayer(this.layer);
    this.services.delete(service.Id);
  }

  public render() {
    this.services.forEach((service) => {
      service.addToLayer(this.layer);
    });
    this.links.forEach((link) => {
      link.addToLayer(this.layer);
    });
  }

  public createLink(from: number, to: number) {
    const fromService = this.services.get(from);
    const toService = this.services.get(to);
    if(!fromService || !toService) throw new Error('Linked service not found');

    fromService.addOutgoingLink(to);
    toService.addIncomingLink(from);
    const link = new Link(from, to, this);
    this.links.push(link);
  }

}
