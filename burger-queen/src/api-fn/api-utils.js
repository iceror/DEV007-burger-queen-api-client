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

export const getProducts = (accessToken) => {
  let data = '';

  let config = {
    method: 'get',
    url: 'http://localhost:8080/products?_page=1&_limit=10',
    headers: {
      'Authorization': `Bearer ${accessToken}`
    },
    data: data
  };

  return axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      return response.data
    })
    .catch((error) => {
      console.log(error);
      return error
    });
}
