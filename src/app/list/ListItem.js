'use client'

import Link from "next/link"
import { useEffect } from "react"

export default function ListItem({result}) {

    // useEffect(() => {



    // },[])

    return (

        <div className="list-bg">
            {result.map((post, index) => (
                <div className="list-item" key={index}>
                    <Link href={`/detail/${post._id}`}><h4>{post.title}</h4></Link>
                    {/* <p>{post.content}</p> */}
                    {/* <DetailLink/> */}
                    <Link href={'/edit/' + post._id}>✏</Link>
                    <span onClick={() => {
                        fetch('/api/post/delete', {method : 'DELETE', body : post._id })
                        .then((r) => {
                            if(r.status == 200) {
                                return r.json()
                            } else {
                                // 서버가 에러 코드 전송 시 실행할 코드
                            }
                        })
                        .then((result) => {
                            // 성공 시 실행할 코드
                        }).catch((error) => {
                            //인터넷 문제로 실패 시 실행할 코드
                        });
                    }}>🗑</span>
                    <p>1월 1일</p>
                </div>
            ))}
        </div>

    )
}