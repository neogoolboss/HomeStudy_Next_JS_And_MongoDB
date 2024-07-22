import { ObjectId } from "mongodb";
import { connectDB } from "../../../util/database";

export default async function handler(요청, 응답) {

    if(요청.method === 'POST') {

        console.log(요청.body);

        const 변경내용 = {
            
            title : 요청.body.title,
            
            content: 요청.body.content
            
        }

        console.log('변경내용', 변경내용);
        
        const db = (await connectDB).db("forum")
        await db.collection('post').updateOne({_id : new ObjectId(요청.body._id)},
            {$set : 변경내용 });
        
        return 응답.status(200).redirect('/list');
    }
}