
fetch('https://www.rijksmuseum.nl/api/en-US/collection?key=2esrTh6M')
    .then(res => {
        return res.json();
    })
    .then(data => {
        console.log(data);
        data.forEach(user => {
            const teste = `<li>${user.name}</li>`;
            document.querySelector('ul').insertAdjacentHTML('beforeend', teste)
        });
    })
    .catch(error => console.log(error));


