import React from 'react'

const loading = (props: {}) => {
    return (
        <>
            <div className='flex'>
                <div className="rounded-md flex-1 shadow-md bg-white p-3 flex items-center">
                    <div className="w-[300px] animate-pulse duration-1000 h-6 bg-gray-300 rounded"></div>
                </div>
                <div className="rounded-md min-w-[60px] ml-2 shadow-md bg-white p-3 flex items-center">
                    <div className="w-[75%] bg-gray-300 rounded"></div>
                </div>
            </div>
            <div className="rounded-md shadow-md bg-white h-[385px] justify-around my-5 p-5 flex flex-col">
                <div className='my-2 animate-pulse flex items-center'>
                    <div className="w-[150px] h-[75px] bg-gray-300 rounded mr-5"></div>
                    <div className="flex flex-col">
                        <div className="w-[200px] h-6 mb-4 bg-gray-300 rounded"></div>
                        <div className="w-[100px] h-6 bg-gray-300 rounded"></div>
                    </div>
                </div>
                <div className='my-2 animate-pulse flex items-center'>
                    <div className="w-[150px] h-[75px] bg-gray-300 rounded mr-5"></div>
                    <div className="flex flex-col">
                        <div className="w-[200px] h-6 mb-4 bg-gray-300 rounded"></div>
                        <div className="w-[100px] h-6 bg-gray-300 rounded"></div>
                    </div>
                </div>
            <div className='my-2 animate-pulse flex items-center'>
                <div className="w-[150px] h-[75px] bg-gray-300 rounded mr-5"></div>
                <div className="flex flex-col">
                    <div className="w-[200px] h-6 mb-4 bg-gray-300 rounded"></div>
                    <div className="w-[100px] h-6 bg-gray-300 rounded"></div>
                </div>
            </div>
            </div>
        </>
    )
}
export default loading;
