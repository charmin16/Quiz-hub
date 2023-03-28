import {NavLink} from 'react-router-dom'

const Home = () => {

  return (
    <div className='w-[90%] md:w-[50%] mx-auto pt-12 text-center text-white'>
      <div className='sub-wrapper'>  
        <h1 className='text-3xl md:text-4xl font-serif font-bold tracking-wider mb-20'>Welcome to QuizHub</h1>
        {/* <p id='isolated' className='text-2xl md:text-3xl mb-8'>Please choose any one of the following for your quiz</p> */}
        <div className='paras'>
          <NavLink to='/gen'>
            <p className='text-2xl md:text-3xl font-serif py-4 shadow-2xl max-w-[70%] md:max-w-[50%] mx-auto border-l pl-4 '>General Knowledge</p>
          </NavLink>
           <NavLink to='/africa'>
            <p className='text-2xl md:text-3xl font-serif py-4 shadow-2xl max-w-[70%] md:max-w-[50%] mx-auto border-l pl-4 mt-6 '>Africa</p>
          </NavLink>
          <NavLink to='/america'>
           <p className='text-2xl md:text-3xl font-serif py-4 shadow-2xl max-w-[70%] md:max-w-[50%] mx-auto border-l pl-4 mt-6 '>America</p>
          </NavLink>
          <NavLink to='/europe'>
           <p className='text-2xl md:text-3xl font-serif py-4 shadow-2xl max-w-[70%] md:max-w-[50%] mx-auto border-l pl-4 mt-6 '>Europe</p>
          </NavLink>
          <NavLink to='/tech'>
            <p className='text-2xl md:text-3xl font-serif py-4 shadow-2xl max-w-[70%] md:max-w-[50%] mx-auto border-l pl-4 mt-6 '>Tech</p>
          </NavLink>
          <NavLink to='/sports'>
            <p className='text-2xl md:text-3xl font-serif py-4 shadow-2xl max-w-[70%] md:max-w-[50%] mx-auto border-l pl-4 mt-6 '>Sports</p>
          </NavLink>
         
         
        </div>
       </div>
    </div>
  )
}

export default Home