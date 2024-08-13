"use client"
import React, { FC } from 'react'
import { searchIcon as SearchIcon } from '@/public/icons/searchIcon'

interface Props{
    setVisability:(value: boolean) => void;
}
export const button:FC<Props> = ({setVisability}) => {
    const handleButtonClick = () => {
        setVisability(true)
    }
    return (
        <button onClick={handleButtonClick} className='mx-4 hover:-translate-y-1 transition-all'><SearchIcon /></button>
    )
}
