import AllPosts from "./pages/AllPosts";
import SinglePost from "./pages/SinglePost";
import {QueryClient, QueryClientProvider} from 'react-query';
import {Routes, Route} from 'react-router-dom'
import CreatePost from "./pages/CreatePost";
import StarWars from "./pages/StarWarsPage";
function App() {

  const queryClient = new QueryClient({
    defaultOptions:{
      queries:{
        retry:3,
        refetchOnMount:false,
        refetchInterval:60_000,
        refetchOnWindowFocus:false,
        refetchIntervalInBackground:false
      }
    }
  })
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<AllPosts />} />
        <Route path="/post/:id" element={<SinglePost/>}/>
        <Route path="/create" element={<CreatePost />} />
        <Route path = "/starwars" element={<StarWars/>}/>

      </Routes>
    </QueryClientProvider>
  );
}

export default App;
