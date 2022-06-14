const container = document.querySelector('.container');
const btn = document.querySelector('.btn');

const renderRandomAdvice = (data) => {
        const html = ` 
        <div class="header">
        <h1>Advice <span class="id">#${data.slip.id}</span></h1>
    </div>
    <div class="advice">
            <p class="advice-para">${data.slip.advice}</p>
    </div>
   
    `;
        container.innerHTML = html;
};

const showRandomAdvice = (id) => {
        fetch(`https://api.adviceslip.com/advice`)
                .then((response) => {
                        if (!response.ok) throw new Error(`(${response.status})`);
                        return response.json();
                })
                .then((data) => {
                        // if (data.slip.id === undefined) throw new Error("Id doesn't exist");
                        // console.log(data.slip.advice);
                        renderRandomAdvice(data);
                })
                .catch((err) => {
                        console.log(`${err.message} 💥💥💥`);
                })
                .finally(() => {
                        // document.querySelector('h2').textContent = `Reviews`
                });
};
btn.addEventListener('click', showRandomAdvice);
