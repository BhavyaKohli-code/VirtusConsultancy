import React from 'react'

function Footer() {
  return (
<>

    <div className='h-60 w- h-full bg-pink-900 flex justify-center gap-3 items-center'>



<div className='w-[32%] text-white h-[90%] bg-gray-800'>

<h3 className='text-white text-[27px]'>Our Services</h3>
<ul>
<li className='text-[20px] text-white'>IT Services</li>
<li className='text-[20px] text-white'>Business consulting</li>
<li className='text-[20px] text-white'>SOcial media management </li>
</ul>

</div>







<div className='w-[32%] h-[90%] bg-gray-800'> <h3 className='text-white text-[27px]'>Newsletter</h3>


<div className='flex gap-1 w-full'>
<input className='w-[60%]' type="newsletter" />
<button className='w-[25%] bg-pink-300'>Subscribe</button>
</div>
</div>








<div className='w-[32%] h-[90%] bg-gray-800'> </div>


    </div>
  

</>
)
}

export default Footer