console.log('--- CODING CHALLENGE #11 261---');
console.log('-----ASYNCHRONOUS JAVASCRIPT #4-----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649367#questions

// TEST DATA
const imgArr = ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg'];

// GLOBAL VARIABLES
const imageContainer = document.querySelector('.images');
const imgDiv = document.createElement('img');

// FUNCTIONS
const wait = seconds => new Promise(resolve => setTimeout(resolve, seconds * 1000));

// Part 1:
const createImage = imgPath =>
        new Promise((resolve, reject) => {
                imgDiv.src = imgPath;

                imgDiv.onload = () => {
                        imageContainer.append(imgDiv);
                        resolve(imgDiv);
                };
                imgDiv.onerror = () => reject(new Error(`Could not load ${imgPath}`));
        });

const loadAndPause = async (...imgPath) => {
        try {
                const imgs = await Promise.all(imgPath.flatMap(img => img));
                console.log(imgs);

                return createImage(imgs[0])
                        .then(() => wait(2))
                        .then(() => {
                                imgDiv.style.display = 'none';
                                return createImage(imgs[1]);
                        })
                        .then(() => wait(2))
                        .then(() => {
                                imgDiv.style.display = 'block';
                        })
                        .then(() => wait(2))
                        .then(() => {
                                imgDiv.style.display = 'none';
                                return createImage(imgs[2]);
                        })
                        .then(() => wait(2))
                        .then(() => {
                                imgDiv.style.display = 'block';
                        })
                        .then(() => wait(2))
                        .then(() => {
                                imgDiv.style.display = 'none';
                        });
        } catch (err) {
                return Promise.reject(new Error(`💥 ${err.message}`));
        }
};

// PART 2:
const createImageAll = imgPath =>
        new Promise((resolve, reject) => {
                const imgEl = document.createElement('img');
                imgEl.classList.add('parallel');
                imgEl.src = imgPath;

                imgEl.onload = () => {
                        imageContainer.append(imgEl);
                        resolve(imgEl);
                };
                imgEl.onerror = () => reject(new Error(`Could not load ${imgPath}`));
        });

const loadAlI = async (...imgArr) => {
        try {
                const images = await Promise.all(imgArr);
                return images.map(img => createImageAll(img));
        } catch (err) {
                return Promise.reject(new Error(`💥 ${err.message}`));
        }
};

// 🎯 Invokes the loadAndPause and loadAll fns asycnronusly.
(async () => {
        try {
                await loadAndPause(imgArr)
                        .then(() => wait(2))
                        .then(() => (imgDiv.style.display = 'none'))
                        .then(() => loadAlI(...imgArr));
        } catch (err) {
                console.error(` 💥 ${err.message}`);
        }
})();
