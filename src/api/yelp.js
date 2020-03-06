import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: "Bearer SfjlHW0FwDX1_iSzEMaZBZGzkti0pQW9j3f7W-0oNkS3GK9JGxQjydOUlWDza7sQBHH0BalfM-e7dKD4ZMa84KfxUojw8yttSYrRR92KoMDKFoPsjO2u0qCXWiFgXnYx"
  }
})