import fs from "fs";
import chalk from "chalk";
import { error } from "console";

function tratarErro(erro){
  console.log(erro);
  throw new Error(chalk.bgRedBright(erro.code, 'não há arquivo no diretório'));
}

async function pegarArquivo(caminhoDoArquivo){
  try{
    const encoding = 'utf-8';
    const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
    console.log(chalk.yellow(texto));
  }catch(erro){
    tratarErro(erro)
  }finally{
    console.log(chalk.green(`Operação concluída!`));
  }
}

// function pegarArquivo(caminhoDoArquivo){
//   const encoding = 'utf-8';

//   fs.promises.readFile(caminhoDoArquivo, encoding)
//     .then((texto) => console.log(chalk.green(texto)))
//     .catch(tratarErro)
// }

// function pegarArquivo(caminhoDoArquivo){
//   const encoding = 'utf-8';
//   fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
//     if(erro){
//       tratarErro(erro);
//     }
//     console.log(chalk.green(texto))
//   })
// }

pegarArquivo('./arquivos/texto.md');