import * as dotenv from 'dotenv';
dotenv.config();

const form = document.querySelector('#search-form > form');
const input: HTMLInputElement | null = document.querySelector('#input-localizacao');
const sectionTempoInfo = document.querySelector('#tempo-info');
const apiKey = process.env.API_KEY;

form?.addEventListener('submit', async (event) => {
    event.preventDefault();
    if(input === null || sectionTempoInfo === null) return;
    const localizacao = input.value;
    if(localizacao.length < 3) {
        alert('Insira uma localidade com no mímino 3 letras!');
        return;
    }
    try {
        const resposta = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${localizacao}&appid=${apiKey}&lang=pt_br&units=metric`);
    
        const dados = await resposta.json();
        const infos = {
            temperatura: Math.round(dados.main.temp),
            local: dados.name,
            icone: `https://openweathermap.org/img/wn/${dados.weather[0].icon}@2x.png`
        };

        sectionTempoInfo.innerHTML = `
            <div class="tempo-dados">
                <h2>${infos.local}</h2>
                <span>${infos.temperatura}°C</span>
            </div>
            <img src="${infos.icone}">
            `;
        input.value = '';
        } catch(err) {
            console.log('Algo deu errado!', err);
        }
});