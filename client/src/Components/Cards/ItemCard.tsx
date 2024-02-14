import Image from '../../assets/testimage.png'
const ItemCard = () => {
  return (
    <div className='border-2 border-black flex flex-col'>
        {/* image and icons */}
        <div className=' border-2 border-red-700'>
          <img src={Image} alt="" className='w-48 h-48 my-2 mx-4'/>
        </div>
        {/* info */}
        <div className=' flex flex-col border-2 border-blue-700'>
          <div>
            <h1 className='text-2xl'>Joystick</h1>
          </div>
          <div className='flex flex-row justify-start'>
            <h1>120$</h1>
            <h1 className='px-3 underline'>160$</h1>
          </div>
          {/* stars */}
          <div></div>
        </div>
    </div>
  )
}

export default ItemCard