import { Stroke, Style } from 'ol/style';
import Select from 'ol/interaction/Select';
import { click, pointerMove } from 'ol/events/condition';

const green = new Style({
  stroke: new Stroke({
    color: 'rgba(0,255,0,1.0)',
    width: 3
  })
})

const greenSelected = new Style({
  stroke: new Stroke({
    color: 'rgba(0,255,0,1.0)',
    width: 5
  })
})

const red = new Style({
  stroke: new Stroke({
    color: 'rgba(255,0,0,1.0)',
    width: 3
  })
})

const redSelected = new Style({
  stroke: new Stroke({
    color: 'rgba(255,0,0,1.0)',
    width: 5
  })
})

const blue = new Style({
  stroke: new Stroke({
    color: 'rgba(0,0,255,1.0)',
    width: 3
  })
})

const blueSelected = new Style({
  stroke: new Stroke({
    color: 'rgba(0,0,255,1.0)',
    width: 5
  })
})

const sidewalkStyles = (feature) => {
  const color = feature.get('color');
  switch (color) {
    case 1:
      return green;
    case 2:
      return red;
    case 3:
      return blue;
    default:
      return blue;
  }
}

const selectedStyle = (feature) => {
  const color = feature.get('color');
  switch (color) {
    case 1:
      return greenSelected;
    case 2:
      return redSelected;
    case 3:
      return blueSelected;
    default:
      return blueSelected;
  }
}

var selectPointerMove = new Select({
  condition: pointerMove,
  style: selectedStyle,
});

var selectClick = new Select({
  condition: click,
  style: selectedStyle
});

export { sidewalkStyles, selectPointerMove, selectClick }