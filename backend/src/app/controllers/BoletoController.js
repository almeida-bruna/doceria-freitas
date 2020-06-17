import fs from 'fs';
import {bradesco} from 'boleto-pdf';

class BoletoController {
  async store(req, res) {
    const dados = req.body;

    const boleto = {
      barcodeData: '23797726700000009997506091900000120800542910',
      digitableLine: '23797.50603 91900.000125 08005.429108 7 72670000000999',
      paymentPlace:
        'Pagável preferencialmente na rede Bradesco ou Bradesco Expresso.',
      beneficiary: 'Doceria Freitas - CNPJ: 032.418.323/0001-96',
      beneficiaryAddress:
        'Rua Doutor Cardoso Terra, 205 - Jardim Lisboa - São Paulo - SP  - CEP 03675-050',
      instructions:
        'Após o vencimento cobrar multa de 2,00% , mais juros ao mes de 1,00%.',
      agency: '7506',
      agencyDigit: '0',
      account: '54291',
      accountDigit: '1',
      expirationDay: new Date(), // 30/08/2017
      documentDate: new Date(), // 18/08/2017
      processingDate: new Date(), // 18/08/2017
      card: '09',
      documentNumber: '42493',
      formatedOurNumber: '09/19000001208-0',
      formatedValue: `R$ ${dados.price}`,
      documentType: 'DS',
      accept: 'N',
      currencyType: 'Real (R$)',
      amount: ' ',
      valueOf: ' ',
      descountValue: ' ',
      otherDiscounts: ' ',
      feeValue: ' ',
      outherFees: ' ',
      chargeValue: ' ',
      payer: {
        name: `${dados.name}`,
        registerNumber: `${dados.cpf}`,
        street: `${dados.address}`,
        number: `${dados.number}`,
        complement: `${dados.complement}`,
        district: `${dados.district}`,
        city: `${dados.city}`,
        state: `${dados.state}`,
        postalCode: `${dados.cep}`
      },

      // guarantor: {
      //   name: 'Doceria Freitas',
      //   registerNumber: '074.064.502/0001-12',
      //   street: 'Servidão',
      //   number: '439',
      //   district: 'Estrada Nova',
      //   complement: ' ',
      //   city: 'Jaraguá do Sul',
      //   state: 'SC',
      //   postalCode: '89254-375'
      // }
    }

    bradesco(boleto).then( data => {
      fs.writeFile('./tmp/boletos/boleto.pdf',data,'binary', err =>{
        if(err){
          console.log(err)
          return
        }

        console.log('file saved')
        // return res.json({"url": 'http://localhost:3333/tmp/boletos/boleto.pdf'})
      })
    }).catch(err =>{
      console.log(err)
    })

  }

  async get(req, res) {
    const boleto = 'tmp/boletos/boleto.pdf'
    // // // Website you wish to allow to connect
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // // // Request methods you wish to allow
    // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // // // Request headers you wish to allow
    // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // // Set to true if you need the website to include cookies in the requests sent
    // // to the API (e.g. in case you use sessions)
    // res.setHeader('Access-Control-Allow-Credentials', true);
    res.download(boleto)
    // next();
  }
}

export default new BoletoController();
