import axios from 'axios'

console.log(process.env.REACT_APP_META_TOKEN)

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
