
import smaller320 from './top-image320.webp';
import from321to1024 from './top-image448.webp';
import imgDefault from './top-image1200.webp';

const getTopImage = (viewPortSize: number): string => {
  if(viewPortSize <= 320) {
    return smaller320;
   } else if(viewPortSize <= 1024) {
    return from321to1024;
   } else {
    return imgDefault;
  }
}

export default getTopImage;
