import { useState, useRef } from 'react'
import {NavLink} from 'react-router-dom'

const Sports = () => {

   const [showNav, setShowNav] = useState(false)
    const [thanks, setThanks] = useState(false)
    const [displayQues, setDisplayQues] = useState(false)
    const [show, setShow] = useState(false)
    const [showScore, setShowScore] = useState(false)
    const [showClock, setShowClock] = useState(true)
    
    const [thankz, setThankz] = useState(false)

    const scoreFalue = useRef() 
    const countdownRef = useRef()

    const [quesOne, setQuesOne] = useState('')
    const [quesTwo, setQuesTwo] = useState('')
    const [quesThree, setQuesThree] = useState('')
    const [quesFour, setQuesFour] = useState('')
    const [quesFive, setQuesFive] = useState('')
    const [quesSix, setQuesSix] = useState('')
    const [quesSeven, setQuesSeven] = useState('')
    const [quesEight, setQuesEight] = useState('')
    const [quesNine, setQuesNine] = useState('')
    const [quesTen, setQuesTen] = useState('')
    // , 'C', 'C', 'A', 'C'
    let givenAnswers = []
    let correctAnswers = ['B', 'C', 'B', 'A', 'A', 'B' ]

    givenAnswers.push(quesOne, quesTwo, quesThree, quesFour, quesFive, quesSix, quesSeven, quesEight, quesNine, quesTen ) 

    let score = 0
    correctAnswers.forEach((item, index) => {
        if (item === givenAnswers[index]) {
            score += 10    
        }
    })


    let startingminutes = 1
    let time = startingminutes * 7

    const clockHandler = () => {      
        
        setShow(!show)
        setDisplayQues(!displayQues)
        setThankz(!thankz)
        
        const boss = setInterval(() => {
            let mins = Math.floor(time / 60)
            let secs = time % 60
            time--

            if (mins < 0) {
                clearInterval(boss)
                // alert("Time's Up. You Have One Additional Minute to Roundoff!\nYeah, I am generous like that😊😉")
            }
        
            countdownRef.current.textContent = `${mins} : ${secs}`
        }, 1000)
    }


    let output = 0
   
    const submitHandler = (e) => {
        e.preventDefault() 

        setDisplayQues(!displayQues)
        setShowClock(!showClock)
        setThanks(!thanks)
        setShowNav(!showNav)
        
        window.scrollTo(0, 0)
        
        const timer = setInterval(() => {
            if (output < score) {
                output++
            }
            
            else {
                clearInterval(timer)
            }
            
            scoreFalue.current.textContent = `${output}%`

            setTimeout(() => {

            }, 3000)
        }, 30)
        
    }
  

  return (
  
     <div className='font-serif w-[100%] pb-6 md:w-[50%] mx-auto pt-4 text-white text-center borde bg-gray-700 shadow-2xl shadow-gry-300'>
       <div className="heading">            
            
            <h2 className='md:text-4xl text-3xl font-bold py-4'>Sports</h2>
            {!show && (
                <div className='instruction text-xl max-w-[80%] mx-auto'>
                    <p>You have one 30 seconds for this quiz. Goodluck😊😉</p>                   
                    <p>Click the button below to start</p>
                </div>
            )}
            {/* {!show && <h4>You have 1 min (plus additional bonus time, thats if you dont finish within the one minute mark. Dont worry, I am generous like that😊😉) for this quiz. Have fun🕺🕺🕺🕺 <br /> Click the button below to start</h4>}         */}
            {!thankz && <button style={{marginTop: '0.3em'}} onClick={clockHandler} className='text-green-500 text-xl italic' >START QUIZ</button>  }
            {thankz && thanks && <p style={{ fontSize: '1.5em' }}>Your score:</p> }
            
            {displayQues && <p ref={countdownRef} className='countdown text-3xl text-green-400'>countdown timer</p>}
            {showNav && <p ref={scoreFalue} className="score md:text-2xl text-xl"> Score: </p>}
            <NavLink to='/'>
                  {showNav && <button id='navbutton' className=' text-xl'>Try Another Subject Area? </button>}
            </NavLink>
            {/* {showNav && <p style={{margin:'0.5em 0'}}>OR...</p>} */}
            {/* {showNav && <button  className='navbutton' onClick={logout}>signout</button>} */}
          </div>
            <form onSubmit={submitHandler} className={displayQues? 'form-carrier' : 'no-display'}>
                <div className="general text-left md:text-xl mt-8 md:max-w-[90%] max-w-[80%] mx-auto md:pl-16 space-y-6"> 
                  <div className='space-y-2'>
                   <p><span className='mr-2'>1)</span> In which country did the Olympics originate </p>
                    <div className='ml-8 space-y-3'>
                        <input className='' type="radio" name="q1" id="a1" value='A' onChange={e => setQuesOne(e.target.value)} />
                        <label htmlFor="a1" className='pl-2'>Germany</label> <br />
                        <input type="radio" name="q1" id="b1"value='B' onChange={e => setQuesOne(e.target.value)} />
                        <label htmlFor="b1" className='pl-2'>Greek</label><br />
                        <input type="radio" name="q1" id="c1" value='C' onChange={e => setQuesOne(e.target.value)} />
                        <label htmlFor="c1" className='pl-2'>America</label>
                    </div> 
                  </div>             
                   
                  <div className='space-y-2'>
                    <p><span className='mr-2'>2)</span>Which country has hosted the most Olympics </p>
                    <div className='ml-8 space-y-3'>
                        <input className='' type="radio" name="q2" id="a2" value='A' onChange={e => setQuesOne(e.target.value)} />
                        <label htmlFor="a2" className='pl-2'>France</label> <br />
                        <input type="radio" name="q2" id="b2"value='B' onChange={e => setQuesOne(e.target.value)} />
                        <label htmlFor="b2" className='pl-2'>Russia</label><br />
                        <input type="radio" name="q2" id="c1" value='C' onChange={e => setQuesOne(e.target.value)} />
                        <label htmlFor="c1" className='pl-2'>The United States</label>
                    </div> 
                  </div>
                    
                  <div className='space-y-2'>
                    <p><span className='mr-2'>3)</span> Which city has hosted the Olympics the most </p>
                     <div className='ml-8 space-y-3'>
                        <input className='' type="radio" name="q3" id="a3" value='A' onChange={e => setQuesOne(e.target.value)} />
                        <label htmlFor="a3" className='pl-2'>Atlanta</label> <br />
                        <input type="radio" name="q3" id="b3"value='B' onChange={e => setQuesOne(e.target.value)} />
                        <label htmlFor="b3" className='pl-2'>London</label><br />
                        <input type="radio" name="q3" id="c3" value='C' onChange={e => setQuesOne(e.target.value)} />
                        <label htmlFor="c3" className='pl-2'>Paris</label>
                    </div> 
                  </div>
                    
                    <div className='space-y-2'>
                      <p><span className='mr-2'>4)</span>Which female tennis player has won the highest number of Grand Slams</p>
                       <div className='ml-8 space-y-3'>
                        <input className='' type="radio" name="q4" id="a4" value='A' onChange={e => setQuesOne(e.target.value)} />
                        <label htmlFor="a4" className='pl-2'>Serena Williams</label> <br />
                        <input type="radio" name="q4" id="b4"value='B' onChange={e => setQuesOne(e.target.value)} />
                        <label htmlFor="b4" className='pl-2'>Venus Williams</label><br />
                        <input type="radio" name="q4" id="c1" value='C' onChange={e => setQuesOne(e.target.value)} />
                        <label htmlFor="c4" className='pl-2'>Martina Navratilova</label>
                    </div> 
                    </div>

                    <div className='space-y-2'>
                       <p><span className='mr-2'>5)</span> Which football player holds the record as the top scorer in the history of the FIFA World Cup</p>
                       <div className='ml-8 space-y-3'>
                        <input className='' type="radio" name="q5" id="a5" value='A' onChange={e => setQuesOne(e.target.value)} />
                        <label htmlFor="a5" className='pl-2'>Miroslav Klose</label> <br />
                        <input type="radio" name="q5" id="b5"value='B' onChange={e => setQuesOne(e.target.value)} />
                        <label htmlFor="b5" className='pl-2'>Maradona</label><br />
                        <input type="radio" name="q5" id="c5" value='C' onChange={e => setQuesOne(e.target.value)} />
                        <label htmlFor="c5" className='pl-2'>Pele</label>
                    </div> 
                    </div>

                   <div className='space-y-2'>
                    <p><span className='mr-2'>6)</span>What does WWE stand for</p>
                   <div className='ml-8 space-y-3'>
                        <input className='' type="radio" name="q6" id="a6" value='A' onChange={e => setQuesOne(e.target.value)} />
                        <label htmlFor="a6" className='pl-2'>World Wide Education</label> <br />
                        <input type="radio" name="q6" id="b6"value='B' onChange={e => setQuesOne(e.target.value)} />
                        <label htmlFor="b6" className='pl-2'>World Wrestling Entertainment</label><br />
                        <input type="radio" name="q1" id="c6" value='C' onChange={e => setQuesOne(e.target.value)} />
                        <label htmlFor="c6" className='pl-2'>World Wide Entertainment </label>
                    </div> 
                   </div>
                     <div className='text-center py-8'>
                      <button id='btz' className='bg-cyan-500 py-2 px-6' >Submit</button>
                     </div>
                    
                </div>
               
            </form> 

    </div>

  )
}

export default Sports