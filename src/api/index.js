import axios from 'axios'


const baseUrl = 'https://jsonplaceholder.typicode.com/posts';
const starWarUrl = 'https://swapi.dev/api/people'

export const getAllPosts = async () => {
  const res = await axios.get(baseUrl);
  return res.data;
}


export const getSinglePost = async (params) => {
  const {queryKey} = params;
  const [, id] = queryKey
  const res = await axios.get(`${baseUrl}/${id}`)
  return res.data;
}

export const createAPost = async (params) => {
  const res = await axios.post(`${baseUrl}`, params);
  return res
}


export const getStarWarsCharacters = async (params)=> {
  const {queryKey} = params;
  const [, page] = queryKey;
  const res = await axios.get(`${starWarUrl}/?page=${page}`);
  return res.data
}
