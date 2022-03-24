import { useQuery, useMutation, useQueryClient } from "react-query"
import { createAPost, getAllPosts, getSinglePost, getStarWarsCharacters } from "../api"


export const useGetAllPosts = () => {
  const res = useQuery('allposts', getAllPosts, {
    
  });

  return res
}


export const useGetSinglePost = (id)=> {
  const queryClient = useQueryClient()
  const res = useQuery(['singleplst', id], getSinglePost, {
    initialData: ()=> {
      return queryClient.getQueryData('allposts')?.find((post)=>post.id=== Number(id))
    }
  });

  return res;
}

export const useCreatePost = (options={}) => {
  const res = useMutation('post', (body)=> createAPost(body), options)
  return res
}

export const useGetStarWarsCharacters = (page,options={})=> {
  const {data, isLoading, isRefetching, status} = useQuery(['starwars', page], getStarWarsCharacters, {...options});
  return { data, isLoading, isRefetching, status};
}