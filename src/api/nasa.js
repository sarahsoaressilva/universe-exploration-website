//import axios
import axios from 'axios'

// NASA API KEY
const API_KEY = '90qSKrv7ycqIy47iWhIp4aGLwgXfQCBUGQ8KiqTV';

const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1&api_key=${API_KEY}`;

async function  getMarsImages() {
    let response = await axios.get(url);
    return response.data;
};

export { getMarsImages };