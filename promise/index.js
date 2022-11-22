let botaoSalvar = document.querySelector('#salvar');

let array = ['nome', 'idade', 'endereco', 'telefone'];

function validaCampos(array) {
    return new Promise((resolve, reject) => {
        let arrayIdValidos = [];
        let arrayIdInvalidos = [];

        array.forEach(id => {
            if (document.querySelector(`#${id}`).value !== '') {
                arrayIdValidos.push(id);
            } else {
                arrayIdInvalidos.push(id);
            }
        });

        if (arrayIdValidos.length == array.length) {
            resolve();
        } else {
            reject(arrayIdInvalidos);
        }
    });
}

botaoSalvar.addEventListener('click', () => {
    validaCampos(array)
        .then(() => alert('Dados salvos com sucesso'))
        .catch(arrayIdInvalidos => {
            let mensagens = arrayIdInvalidos.map(id => {
                return `<p>Campo ${id} é obrigatório</p>`;
            });
            console.log(mensagens.join(''));
            document.querySelector('.message').innerHTML = mensagens.join('');
        });
});