import axios from 'axios'

export const getAuth = (user, password) => {
  console.log('IN getAuth', user, password);
  let data = JSON.stringify({
    "email": user,
    "password": password
    // "email": "anita.borg@systers.xyz",
    // "password": "123456"
  });

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://localhost:8080/login',
    //url: 'https://virtserver.swaggerhub.com/ssinuco/BurgerQueenAPI/2.0.0/login',
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };

  return axios.request(config)
    .then((response) => {
      console.log(response.data);
      return response.data
    })
    .catch((error) => {
      return error;
    });
}
