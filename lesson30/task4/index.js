// Promisification

import { addImage } from './solution/addImage.js';

export const addImageV2 = url => {
  const promise = new Promise((resolveImgLoad, rejectImgLoad) => {
    addImage(url, (error, ...rest) => {
      error ? rejectImgLoad(new Error(error)) : resolveImgLoad(...rest);
    });
  });

  return promise;
};

// examples
// const imgSrc =
//   'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg';

// const imgSrcBad =
//   'https://p.igstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg';

// addImageV2(imgSrc)
//   .then(data => console.log(data)) // ==> { width: 200, height: 100 }
//   .catch(error => console.log(error)); // ==> 'Image load failed'

// addImageV2(imgSrcBad)
//   .then(data => console.log(data)) // ==> { width: 200, height: 100 }
//   .catch(error => console.log(error)); // ==> 'Image load failed'
