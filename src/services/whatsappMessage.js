import axios from 'axios'

console.log('REACT_APP_META_URL', process.env.REACT_APP_META_URL)
console.log('REACT_APP_META_TOKEN', process.env.REACT_APP_META_TOKEN)
console.log('REACT_APP_PHONE_NUMBER', process.env.REACT_APP_PHONE_NUMBER)
export const sendMessage = () => {
  const config = {
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_META_TOKEN}`,
      'Content-Type': 'application/json',
    },
  }

  const data = {
    messaging_product: 'whatsapp',
    to: process.env.REACT_APP_PHONE_NUMBER,
    type: 'template',
    template: {
      name: 'hello_world',
      language: {
        code: 'en_US',
      },
    },
  }

  axios
    .post(process.env.REACT_APP_META_URL, data, config)
    .then(response => {
      console.log(response.data)
    })
    .catch(error => console.log(error))
}
