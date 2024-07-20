'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation"

export default function DetailLink() {

    const router = useRouter()

    const a = usePathname();
    const b = useSearchParams();

    console.log(a);
    console.log(b);

    return (
        <button onClick={() => { router.push('/')}}>버튼</button>
    )
}