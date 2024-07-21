

export default function NowTime(요청, 응답) {

    const today = new Date();
    const hours = today.getHours();
    const minuites = today.getMinutes();
    const seconds = today.getSeconds();
    const milliseconds = today.getMilliseconds();

    const now = hours + ' : ' + minuites + ' : ' + seconds + ' : ' + milliseconds 

        return 응답.status(200).json(now);
}