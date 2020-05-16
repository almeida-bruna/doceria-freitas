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
      beneficiary: 'UNICRED FLORIANÓPOLIS - CNPJ: 074.064.502/0001-12',
      beneficiaryAddress:
        'Rua Tenete Silveira, 315 - Centro - Florianópolis - SC  - CEP 88010-301',
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
        name: 'Bruno de Paula',
        registerNumber: '221.412.772-05',
        street: 'Estrada do Copiuva',
        number: '1500',
        complement: ' ',
        district: 'Vila da Oportunidade',
        city: 'Carapicuiba',
        state: 'SP',
        postalCode: '06330-00'
      },
      guarantor: {
        name: 'Doceria Freitas',
        registerNumber: '074.064.502/0001-12',
        street: 'Servidão',
        number: '439',
        district: 'Estrada Nova',
        complement: ' ',
        city: 'Jaraguá do Sul',
        state: 'SC',
        postalCode: '89254-375'
      }
    }

    bradesco(boleto).then( data => {
      fs.writeFile('./tmp/boletos/boleto.pdf',data,'binary', err =>{
        if(err){
          console.log(err)
          return
        }

        console.log('file saved')
        return res.json({"url": 'http://localhost:3333/tmp/boletos/boleto.pdf'})
      })
    }).catch(err =>{
      console.log(err)
    })

  }
}

export default new BoletoController();
