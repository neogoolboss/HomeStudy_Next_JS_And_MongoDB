import { connectDB } from "../../../../util/database"
import { ObjectId } from "mongodb";

export default async function Edit(props) {

    const db = (await connectDB).db("forum")
    let result = await db.collection('post').findOne({ _id : new ObjectId(props.params.postid)})
    
    // await db.collection('post').updateOne({_id : props.params.postid},
                                    //   {$set : { title : '수정된 제목', content : '수정된 내용'}, });

    console.log(result);

    return(
        <div className="p-20">
            <h4>수정페이지</h4>
            <form action="/api/post/edit" method="POST">
                <input name="title" placeholder="제목" defaultValue={result.title}/>
                <input name="content" placeholder="내용" defaultValue={result.content}/>
                <input style={{display :'none'}} name="_id" defaultValue={result._id.toString()}/>
                <button type="submit">수정</button>
            </form>
        </div>
    )
}