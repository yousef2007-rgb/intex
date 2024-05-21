import React from 'react'
import { useRouter } from 'next/navigation'

export const pageNumbers = (props: {}) => {
    const router = useRouter();
    const numbers = [0, 1, 2]
    const handleClick = (number: number) => (e: any) => {
        router.push({
            pathname: router.pathname,
            query: { ...router.query, name: 'John' },
        });
    }
    return (
        <div className='flex'>
            {numbers.map((number: number, index: number) => (
                <button key={number} onClick={handleClick(number)}>{number + 1}</button>
            ))}
        </div>
    )
}
