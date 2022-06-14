const imageContainer = document.querySelector('.images');
const img = document.createElement('img');

const wait = (seconds) => new Promise((resolve) => setTimeout(resolve, seconds * 1000));

const createImage = (imgPath) =>
        new Promise((resolve, reject) => {
                img.src = imgPath;
                // we need to wait for the image to load before resolving it
                img.onload = () => {
                        imageContainer.append(img);
                        resolve(img);
                };
                img.onerror = () => reject(new Error(`Could not load ${imgPath}`));
        });

createImage('img/img-1.jpg')
        .then(() => wait(2))
        .then(() => {
                img.style.display = 'none';
                return createImage('img/img-2.jpg');
        })
        .then(() => wait(2))
        .then(() => {
                img.style.display = 'block';
        })
        .then(() => wait(2))
        .then(() => {
                img.style.display = 'none';
                return createImage('img/img-3.jpg');
        })
        .then(() => wait(2))
        .then(() => {
                img.style.display = 'block';
        })
        .then(() => wait(2))
        .then(() => {
                img.style.display = 'none';
        })
        .catch((err) => console.error(err));
