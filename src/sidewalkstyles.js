import { Stroke, Style, Fill } from 'ol/style';

const green = new Style ({
    fill: new Fill ({
      color: 'rgba(0,255,0,1.0)'
    }),
    stroke: new Stroke ({
      color: 'rgba(0,255,0,1.0)',
      width: 3
    })
})
  
  
const red = new Style ({
    fill: new Fill ({
      color: 'rgba(255,0,0,1.0)'
    }),
    stroke: new Stroke ({
      color: 'rgba(255,0,0,1.0)',
      width: 3
    })
})
  
const blue = new Style ({
    fill: new Fill ({
      color: 'rgba(0,0,255,1.0)'
    }),
    stroke: new Stroke ({
      color: 'rgba(0,0,255,1.0)',
      width: 3,
      lineDash: [3, 7]
    })
})
  
 
function sidewalkStyles(feature) {
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

export default sidewalkStyles