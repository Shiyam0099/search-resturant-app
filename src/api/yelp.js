import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer lJ5r80PP0qwrI4JgVf5G-BsHuKuEcZfGzuTovwlG5N0VFmN4xNkaav2FBsoFi-8_H4HMu6ya2TRxSC0vwbXI-MpO7gpmJrodPe5d5auTnFPnLgNEjhaf8n-9lWnzYnYx'
    }
})