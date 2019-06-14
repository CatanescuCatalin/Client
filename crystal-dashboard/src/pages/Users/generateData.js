import axios from 'axios';

export default () => {
  const data = [];
  
  axios.get('http://localhost:3001/users')
    .then(response => {
      response.data.forEach(user => {
        data.push(user)
      });
    })
  return data;
}