
//async/await

async function getUsers() {
    try {
        const resposta = await fetch('https://dummyapi.io/data/v1/user', {
            headers: {
                "app-id": "6536fd3dc5b3017566a9338d"
            }
        });
        const dados = await resposta.json();
        console.log(dados);
    } catch(erro) {
        console.log(erro);
    }
}

async function getUser(idUser) {
    try {
        const resposta = await fetch('https://dummyapi.io/data/v1/user/'+idUser, {
            headers: {
                "app-id": "6536fd3dc5b3017566a9338d"
            }
        });
        const dados = await resposta.json();
        console.log(dados);
    } catch(erro) {
        console.log(erro);
    }
}

async function createUser(firstNameUser, lastNameUser, emailUser) {

    const user = {
        firstName: firstNameUser,
        lastName: lastNameUser,
        email: emailUser
    };

    try {
        const resposta = await fetch('https://dummyapi.io/data/v1/user/create', {
            body: JSON.stringify(user),
            headers: {
                "app-id": "6536fd3dc5b3017566a9338d",
                "Content-type": "application/json"
            },
            method: 'POST'
        });
        const dados = await resposta.json();
        console.log(dados);
    } catch(erro) {
        console.log(erro);
    }
}

getUsers();
getUser("653703a8e40c9da7516c1ecf");
createUser("Lucas", "Araujo", "lucas@gmail.com");