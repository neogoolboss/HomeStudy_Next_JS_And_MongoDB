import { connectDB } from "../../util/database"

export default async function Home() {

  const client = await connectDB;
  const db = client.db("forum")

  let result = await db.collection('post').find().toArray()
  console.log(result)

  return (
    <div>테스트중입니다.</div>
  )
}