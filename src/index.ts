import Konva from 'konva';

var width = window.innerWidth;
var height = window.innerHeight;

var stage = new Konva.Stage({
  container: 'container',
  width: width,
  height: height,
});

var layer = new Konva.Layer();
stage.add(layer);

var text1 = new Konva.Text({
  x: 50,
  y: 70,
  fontSize: 30,
  text: 'centeredScaling = true',
  draggable: true,
});
layer.add(text1);

var tr1 = new Konva.Transformer({
  nodes: [text1],
  centeredScaling: true,
});
layer.add(tr1);

var text2 = new Konva.Text({
  x: 50,
  y: 200,
  fontSize: 30,
  text: 'centeredScaling = false',
  draggable: true,
});
layer.add(text2);

var tr2 = new Konva.Transformer({
  nodes: [text2],
  centeredScaling: false,
});
layer.add(tr2);