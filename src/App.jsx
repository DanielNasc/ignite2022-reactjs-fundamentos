import { Post } from "./Post";

export function App() {
  return (
    <>
      <h1>Hello, Vite + React!</h1> 
      <Post 
        title="Title"
        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque temporibus officiis adipisci consequatur voluptatem cum voluptate quidem recusandae. Molestiae maxime itaque delectus, quam nam officiis laudantium minus laborum autem quos!"
        author="idk"
      />
    </>
  )
}

