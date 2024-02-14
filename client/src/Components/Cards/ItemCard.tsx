import Image from '../../assets/testimage.png'
import StarRating from '../StarRating/StarRating'
const ItemCard = () => {
  return (
    <div className=' flex flex-col shadow-xl'>
        {/* image and icons */}
        <div className=' mt-1 bg-gray-100 '>
          <img src={Image} alt="" className='w-50 h-48 my-2 mx-4'/>
        </div>
        {/* info */}
        <div className=' flex flex-col px-4'>
          <div className='my-2'>
            <h1 className='text-2xl font-bold'>Joystick</h1>
          </div>
          <div className='flex flex-row my-1'>
            <h1>120$</h1>
            <h1 className='px-3 underline text-gray-400'>160$</h1>
          </div>
          {/* stars */}
          <div className='my-1'>
            <StarRating />
          </div>
        </div>
    </div>
  )
}

export default ItemCard