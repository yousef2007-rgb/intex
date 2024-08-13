import React from 'react'

export default function similarProducts() {
  return (
<div>


            <div className='bg-gray-200 p-5 rounded-md'>
                <div className='flex items-center bg-white px-2 py-3 rounded-md'>
                    <label htmlFor='dimensions' className="block text-gray-700 text-sm font-bold ">
                        New Dimension:
                    </label>
                    <input
                        type="text"
                        id="dimensions"
                        name="dimensions"
                        value={currentDimension}
                        onChange={handleDimensionChange}
                        maxLength={920}
                        minLength={1}
                        className="border mx-2 rounded flex-1 w-full py-2 px-3  outline-none"
                    />
                    <button onClick={handleAddDimensions}>
                        <AddIcon />
                    </button>
                </div>
                {formData.dimensions?.map((dimension:string, index:number) => (
                    <div key={index} className='flex items-center my-2 px-2 py-3 rounded-md bg-white'>
                        <label htmlFor='dimensions' className="block text-gray-700 text-sm font-bold ">
                            Dimension {index + 1}:
                        </label>
                        <input
                            type="text"
                            id="dimensions"
                            name="dimensions"
                            value={dimension}
                            onChange={handleOldDimensionChange(index)}
                            required
                            maxLength={920}
                            minLength={1}
                            className="border mx-2 rounded flex-1 py-2 px-3  outline-none"
                        />
                        <button onClick={handleDimensionDelete(index)}>
                            <TrashIcon />
                        </button>
                    </div>
                ))}
</div>
</div>
            
  )
}
