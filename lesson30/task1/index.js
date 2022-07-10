// Promise - first step (load image)

// addImage()
// in: url / out: promise

export const addImage = imgSrc => {
  const promiseAddImage = new Promise((resolveImgLoad, rejectImgLoad) => {
    const imgElem = document.createElement('img');
    imgElem.setAttribute('alt', 'My Photo');
    imgElem.src = imgSrc;

    const containerElem = document.querySelector('.page');
    containerElem.append(imgElem);

    const onImageLoaded = () => {
      const { width, height } = imgElem;
      resolveImgLoad({ width, height });
    };

    const onImageRejectLoad = () => {
      rejectImgLoad(new Error('Image load is failed...'));
    };

    imgElem.addEventListener('load', onImageLoaded);

    imgElem.addEventListener('error', onImageRejectLoad);
  });

  return promiseAddImage;
};

// test-data
// const imgSrc =
//   'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg';

// const resultPromise = addImage(imgSrc);

// resultPromise.then(data => console.log(data));
// resultPromise.catch(error => console.log(error));
