
export default function handler(요청, 응답) {
    
    console.log('어쩌구 응답');

    return 응답.status(200).json()
}