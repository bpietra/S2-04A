onst fs = require('fs');
async function lerArquivo(caminho) {
    try {
        const dados = await fs.promises.readFile(caminho, 'utf-8');
        console.log(`Conteúdo do arquivo: ${dados}`);
    } catch (erro) {
        console.error(`Erro ao ler o arquivo: ${erro}`);
    }

}

async function esperar(segundos) {
    console.log(`Esperando ${segundos} segundos...`);
    await new Promise(resolve => setTimeout(resolve, segundos * 1000));
    console.log(`Esperei por ${segundos} segundos.`);

}


async function main() {
    await lerArquivo('index.js');
    await esperar(2);
    console.log('Todas as operações assíncronas foram concluídas.');

}

main();





