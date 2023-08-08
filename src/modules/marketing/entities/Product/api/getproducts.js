import axios from 'axios'

export const getAllProducts = async () => {
    const response = await axios.get('https://mars-marketing-app.onrender.com/product/');
    console.log(response.data)
  };