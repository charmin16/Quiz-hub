import {NavLink} from 'react-router-dom'

const Home = () => {
// git push -u origin main
  return (
    <div className='w-[90%] md:w-[50%] mx-auto pt-12 text-center text-white'>
      <div className='sub-wrapper space-y-6'>  
        <h1 className='text-2xl md:text-4xl font-serif font-bold'>You Are Welcome to QuizHub</h1>
        <p id='isolated' className='text-lg mx-w-[40%] md:text-2xl mb-8'>Please choose any one of the following for your quiz</p>
        <div className='paras '>
          <NavLink to='/gen'>
            <p className='text-2xl md:text-3xl font-serif py-4 shadow-2xl max-w-[70%] md:max-w-[50%] mx-auto pl-4 '>General Knowledge</p>
          </NavLink>
           <NavLink to='/africa'>
            <p className='text-2xl md:text-3xl font-serif py-4 shadow-2xl max-w-[70%] md:max-w-[50%] mx-auto  pl-4 mt-6 '>Africa</p>
          </NavLink>
          <NavLink to='/america'>
           <p className='text-2xl md:text-3xl font-serif py-4 shadow-2xl max-w-[70%] md:max-w-[50%] mx-auto pl-4 mt-6 '>America</p>
          </NavLink>
          <NavLink to='/europe'>
           <p className='text-2xl md:text-3xl font-serif py-4 shadow-2xl max-w-[70%] md:max-w-[50%] mx-auto pl-4 mt-6 '>Europe</p>
          </NavLink>
          <NavLink to='/tech'>
            <p className='text-2xl md:text-3xl font-serif py-4 shadow-2xl max-w-[70%] md:max-w-[50%] mx-auto pl-4 mt-6 '>Tech</p>
          </NavLink>
          <NavLink to='/sports'>
            <p className='text-2xl md:text-3xl font-serif py-4 shadow-2xl max-w-[70%] md:max-w-[50%] mx-auto pl-4 mt-6 '>Sports</p>
          </NavLink>
         
         
        </div>
       </div>
    </div>
  )
}

export default Home