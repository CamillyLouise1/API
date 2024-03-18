form = document.querySelector('form')

form.addEventListener('submit', function(e) {
    e.preventDefault();
    inpValue = e.target.querySelector('input').value
    fetchData4mAPI(inpValue)
})

async function fetchData4mAPI(inpVal) {
    app_id = 'd8feb9b1';
    app_key = 'cd9cb2390f98fe12e951f5df71d0b41e';
    baseURl = `https://api.edamam.com/search?q=${inpVal}&app_id=${app_id}&app_key=${app_key}&to=4`;
    result = await fetch(baseURl);
    datas = await result.json()
    console.log(datas)
    geraterHTML(datas.hits);
}

function geraterHTML(results) {
    showHTML = '';
    results.map(result => {
        showHTML += `<div class="container">
        <section>
            <h3 class='text-white'>Search Food Recipe</h3>
            <form action="">
                <div class="input">
                    <input type="text" class="form" placeholder='Procure por Receita'>
                    <button>Enviar</button>
                </div>
            </form>
        `
        document.querySelector('#showHTML').innerHTML = showHTML;

    })
}