import Link from "next/link";
import { getposts } from "../datas/postApi";


const page = async () => {
  const postdata = await getposts();
  // console.log(postdata);
  return (
    <div>
      Post Page
      <div className="grid grid-cols-3 gap-5">
        {postdata.map((item) => (
          <div className="space-y-2" key={item.id}>
            <h1 className="text-xl">{item.title}</h1>
            <p>{item.body}</p>
            <Link href={`/posts/${item.id}`}><button className="btn btn-sm bg-pink-500">View Details</button></Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
