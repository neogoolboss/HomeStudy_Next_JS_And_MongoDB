import { getServerSession } from "next-auth";
import { connectDB } from "../../../util/database";
import { ObjectId } from "mongodb";
import { authOptions } from "../auth/[...nextauth]";


export default async function handler(요청, 응답) {

    if (요청.method == 'DELETE') {

        console.log(요청.body);

        const session = await getServerSession(요청, 응답, authOptions);

        const db = (await connectDB).db('forum')
        const findDB = await db.collection('post').findOne({_id : new ObjectId(요청.body)})
        console.log('findDB : ', findDB);

        if (findDB.author === session.user.email) {
           let result = await db.collection('post').deleteOne({ _id : new ObjectId(요청.body) })
            return 응답.status(200).json('삭제완료')
        } else {
            return 응답.status(500).json('유저불일치');
        }

    }
}