import logo from './logo.svg';
import { Axios } from 'axios';
import './App.css';

const axios = require('axios');
s// Make a request for a user with a given ID
axios.get('https://jsonplaceholder.typicode.com/posts/1')
  .then(function (response) {
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });


export default App;
