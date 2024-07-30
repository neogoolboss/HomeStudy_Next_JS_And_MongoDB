// dynamic route 문법
import { connectDB } from "../../../../util/database";
import { ObjectId } from "mongodb";
import Comment from "./Comment";
import NotFountPage from "@/app/not-found";

export default async function Detail(props) {

    const db = (await connectDB).db("forum")

    let result = await db.collection('post').findOne({ _id : new ObjectId(props.params.postid)})
    console.log(result);
    console.log(props);

    if(result == null) {
        return <NotFountPage/>
    }

    return (
        <div>
            <h4>상세페이지</h4>
            <h4>{result.title.asdddsasd.dsd}</h4>
            <p>{result.content}</p>
            <Comment _id={result._id.toString()}/>
        </div>
    )
}