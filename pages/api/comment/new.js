import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { connectDB } from "../../../util/database";
import { ObjectId } from "mongodb";


export default async function handler(요청, 응답) {

        const session = await getServerSession(요청, 응답, authOptions);
        
        console.log('댓쓴이메일 : ', session.user.email);
        console.log(요청.body); 
        
        // if(session) {
            // 요청.body.commenter = session.user.email
        // }


    if(요청.method === 'POST') {

        요청.body = JSON.parse(요청.body)

        const 저장할거 = {
            content : 요청.body.comment,
            title_id : new ObjectId(요청.body._id),
            author: session.user.email
        }

        console.log(저장할거);

        const db = (await connectDB).db('forum')
        let result = await db.collection('comment').insertOne(저장할거)

        return 응답.status(200).json('저장완료')
    }


    
    

}