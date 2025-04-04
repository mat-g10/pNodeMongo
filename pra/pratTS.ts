// novas promises
const myPromise_a = new Promise((resolve, reject) =>  { //resolve promise e reject promise
      // código assincrono

  })

  //Em typescript é possivel adicionar um "tipo" a promise para indicar o tipo que ela resolve, por padrão é any

const myPromise_b: Promise<string> = new Promise((resolve, reject) => {
  //essa promise resolve uma string

})

//métodos para se comunicar ou falhar com a operação assincrona
//.then() é chamado quando a promise é resolvida
//.catch() quando é rejeitada
//útil para tratamento de erros

myPromise_b.then((value) => {
  console.log("Promise foi resolvida com valor: " + value);
})

myPromise_b.catch((error) => {
  console.log("Promise foi rejeitada com o erro: " + error);
})

//async/await é outro maneira, mais usual de se lidar com promises (handle promises)

async function myAsyncFunction() { //async indica que a função retorna uma promise
  try {
    const value = await myPromise; //await indica esperar pela prmose ser resolvida
    console.log('Promise resolvida com o valor: ' + value);
  }
  catch {
    console.error('Promise rejeitada com o erro: ' + error);
  }
}