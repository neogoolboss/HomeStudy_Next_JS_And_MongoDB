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
                    <span onClick={(e) => {
                        fetch('/api/post/delete', {method : 'DELETE', body : post._id })
                        .then((r) => {
                            if(r.status == 200) {
                                return r.json()
                            } else {
                                throw new Error('Server responded with an error status: ' + r.status);
                            }
                        })
                        .then((result) => {
                            e.target.parentElement.style.opacity = 0;
                            setTimeout(() => {
                                e.target.parentElement.style.display = 'none'; 
                            }, 1000)
                        }).catch((error) => {
                            //인터넷 문제로 실패 시 실행할 코드
                        });

                        // fetch('/api/abc/어쩌구')
                    }}>🗑</span>
                    <p>1월 1일</p>
                </div>
            ))}
        </div>

    )
}