import CreatePost from "@/components/Posts/createPost";
import PostList from "@/components/Posts/postList";
import ActiveUser from "@/components/User/activeUser";

export default function Home() {

  return(
    <>
    <CreatePost/>
    <ActiveUser/>
    <div className="max-h-96 overflow-y-scroll overflow-x-hidden">
    <PostList/>
    </div>
    </>
    
  )
  
}
