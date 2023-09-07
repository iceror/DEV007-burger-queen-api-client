import axios from 'axios'

export const getAuth = (user, password) => {
  let data = JSON.stringify({
    "email": user,
    "password": password
    // "email": "anita.borg@systers.xyz",
    // "password": "123456"
  });

  let config = {
    method: 'post',
    url: 'http://localhost:8080/login',
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };

  return axios.request(config)
    .then((response) => {
      // console.log(response.data);
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
    url: 'http://localhost:8080/products?_page=1&_limit=20',
    headers: {
      'Authorization': `Bearer ${accessToken}`
    },
    data: data
  };

  return axios.request(config)
    .then((response) => {
      // console.log(JSON.stringify(response.data));
      return response.data
    })
    .catch((error) => {
      // console.log(error);
      return error;
    });
}

export const postOrder = (order, accessToken) => {
  let data = JSON.stringify({
    ...order,
    'status': 'pending',
    'dateEntry': new Date().toLocaleString()
  });

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://localhost:8080/orders',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    },
    data: data
  };

  return axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
}

export const getOrders = (accessToken) => {
  let data = '';

  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'http://localhost:8080/orders?_page=1&_limit=50',
    headers: {
      'Authorization': `Bearer ${accessToken}`
    },
    data: data
  };

  return axios.request(config)
    .then((response) => {
      // console.log(JSON.stringify(response.data));
      return response.data
    })
    .catch((error) => {
      // console.log(error);
      return error
    });
}

export const updateOrder = (order, accessToken) => {
  let data = JSON.stringify(
    {
      'status': 'delivered',
      'dateProcessed': new Date().toLocaleString()
    }
  );

  let config = {
    method: 'patch',
    maxBodyLength: Infinity,
    url: `http://localhost:8080/orders/${order.id}`,
    headers: {
      'Content-Type': 'application/json',
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
