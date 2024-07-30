'use client'


export default function Error(props, reset) {

    return(
        <div>
        <h4>에러남 ㅅㄱ</h4>
        <button onClick={() => {reset()}}>뒤로가기</button>
        </div>
    )
}