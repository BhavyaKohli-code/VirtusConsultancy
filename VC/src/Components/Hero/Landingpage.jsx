import React from 'react'
import herobg from './herobg.svg'
import styles from '../Navbar/navbar.module.css';
import { motion } from "framer-motion"
import img2 from '../Hero/sec2img.svg'
import rightarrow from '../Hero/rightarrow.svg'
import leftarrow from '../Hero/leftarrow.svg'
import { Link } from 'react-router-dom';

function Landingpage() {
  return (
    <>

  



    <div
  className={`h-screen flex justify-center items-center flex-col gap-4 p-5 overflow-hidden`}
  style={{
    backgroundImage: `url(${herobg})`,
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed', // or 'scroll' if you don't want it to be fixed
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  }}
>



<div>
<h1 className={styles.slidetext}>Your vision, Our innovation</h1>
<h2 className={styles.slidelefttext} >Accelerate your Global Dominance </h2>
<p className={styles.p1animation}>Experience rapid growth, increased market share, and a competitive edge as we unlock your business’s full potential. 
<br /> Join us in redefining industry standards and achieving extraordinary results.</p>
</div>
</div>


<div className='flex justify-center items-center p-3 bg-black-200 w-full overflow-hidden'>

<div className="flex justify-evenly items-center flex-row- w-full gap-[2px] ">




  <motion.img 
  
  initial={{x: -100}}
  whileInView={{x:0}}
  transition={{duration: 1.5}}
  className='self-center h-[50px]' src={rightarrow} alt="" />


<div className={styles.card2}>
  Usa
</div>

<div className={styles.card2}>
  UK
</div>

<div className={styles.card2}>
  India
</div>

<div className={styles.card2}>
  Canada
</div>

<div className={styles.card2}>
  Australia
</div>


<motion.img 
  
  initial={{x: 100}}
  whileInView={{x:0}}
  transition={{duration: 1.5}}

className='self-center h-[50px]' src={leftarrow} alt="" />


</div>

</div>


<div className='justify-center items-center flex flex-col min-h-[700px] p-4 bg-black'>

<div className='flex justify-center items-center flex-col gap-2 '>
< motion.h1
initial={{y: -100}}

whileInView={{y:0}}
transition={{ duration: 0.7 }}
className='text-[35px] mt-24 text-white font-bold relative '>TRANSFORMING VISIONS INTO REALITY</motion.h1>

<motion.h2 initial={{opacity:0}}
whileInView={{opacity:1}}
transition={{ duration: 0.9 }} className='text-[28px] text-white underline-offset-4 underline'>UNLEASHING EXCELLENCE IN EVERY SERVICE</motion.h2>

<motion.p 
initial={{y: 100}}
whileInView={{y:0}}
transition={{ duration: 0.7 }}
className='text-center w-[80%] text-white'>Welcome to Virtus Consultancy, where we turn your business ambitions into actionable success. Whether you’re looking for cutting-edge web and mobile app development, strategic business consultancy, or dynamic social media management, our expert team is here to elevate your brand to new heights.</motion.p>
</div>

<br />

<div className='flex mt-5 justify-center items-center gap-5'>

<motion.div
initial={{x: -100}}
whileInView={{x:0}}
transition={{ duration: 0.7 }}
className=' w-[60%]'>
<h3 className='text-[28px] text-white font-bold'>What We Do Best:</h3>
<ul className='list-disc  pl-2'>
<li className='text-white text-[18px] mt-1'><span>Innovative IT Solutions:</span> From bespoke web and mobile applications to seamless integrations, our skilled developers and architects create smart, scalable solutions tailored to your needs.</li>
<li className='text-white text-[18px]mt-1'><span className=''>Strategic Business Consultancy:</span> Our business experts offer insightful guidance and strategies to help you navigate challenges and seize opportunities for growth.</li>
<li className='text-white text-[18px]mt-1'><span>Impactful Social Media Management:</span> Enhance your online presence and engage with your audience through effective, data-driven social media strategies.</li>
</ul>
</motion.div>


<motion.div  initial={{ scale: 0.8, opacity:0 }}
  whileInView={{ scale: 1, opacity:1 }}
  transition={{ duration: 0.7 }}
  >
<motion.img src={img2} className='h-[300px]' alt="" />
</motion.div>
</div>

<Link to="/Whoweare">
<motion.button  
initial={{scale:0.8}}
whileInView={{scale:1}}
transition={{ duration: 0.1 }}
whileHover={{ scale: 1.2 }}
  whileTap={{ scale: 1.1 }} className='text-white text-[20px] rounded-3xl bg-cyan-600 p-2'> Learn more about us </motion.button>
</Link>
</div>




<div className='p-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 bg-black overflow-hidden justify-items-center items-center'>
  <div className={styles.card}>
    <div className={styles.firstcontent}>
      <span className='text-center'>300+ Developers</span>
    </div>
    <div className={styles.secondcontent}>
      <span className='text-[15px] text-center'>With a team of 300+ skilled developers, we deliver innovative solutions, specializing in custom software development, app creation, and tech consulting to drive business success</span>
    </div>
  </div>

  <div className={styles.card}>
    <div className={styles.firstcontent}>
      <span className='text-center'>500+ Customers</span>
    </div>
    <div className={styles.secondcontent}>
      <span className='text-[15px] text-center'>Trusted by 500+ clients globally, we deliver customized consulting solutions, fostering growth and innovation across diverse industries through a client-centric approach</span>
    </div>
  </div>

  <div className={styles.card}>
    <div className={styles.firstcontent}>
      <span className='text-center'>1140 Projects delivered</span>
    </div>
    <div className={styles.secondcontent}>
      <span className='text-[15px] text-center'>With 1,140 projects delivered, we demonstrate a proven track record of excellence, providing innovative, customized solutions that drive value and impact across diverse industries.</span>
    </div>
  </div>

  <div className={styles.card}>
    <div className={styles.firstcontent}>
      <span className='text-center'>96% Retention rate</span>
    </div>
    <div className={styles.secondcontent}>
      <span className='text-[15px] text-center'>Achieving a 96% client retention rate, we prioritize long-term partnerships through consistent delivery of exceptional results, personalized service, and unwavering client satisfaction</span>
    </div>
  </div>

  <div className={styles.card}>
    <div className={styles.firstcontent}>
      <span className='text-center'>200+ Employees</span>
    </div>
    <div className={styles.secondcontent}>
      <span className='text-[15px] text-center'>Supported by a diverse team of 200+ dedicated professionals, we offer expert consulting services across multiple domains, driving impactful solutions and delivering excellence to our clients</span>
    </div>
  </div>

  <div className={styles.card}>
    <div className={styles.firstcontent}>
      <span className='text-center'><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>Customer Ratings</span>
    </div>
    <div className={styles.secondcontent}>
      <span className='text-[15px] text-center'>Our 5-star reviews highlight our dedication to delivering exceptional service and impactful results, consistently exceeding client expectations and fostering long-term partnerships</span>
    </div>
  </div>
</div>










</>
  )
}

export default Landingpage