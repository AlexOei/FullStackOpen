import React, { useState } from 'react'


const Button = ({ handleClick, text }) => (

    <button onClick={handleClick}>
        {text}
    </button>
)

const Statistics = ({good, bad, neutral}) =>{
    if(good === 0 && bad === 0 && neutral === 0){
        return(
            <div>
                No feedback gathered
            </div>
        )
    }


    return(
    <div>
        <Statistic feedback = "good" num = {good}/>
        <Statistic feedback = "neutral" num = {neutral}/>
        <Statistic feedback = "bad" num = {bad}/>
        <Statistic feedback= "all" num = {good + bad + neutral} />
        <Statistic feedback="average" num = {(good - bad)/(good+bad+neutral)} />
        <Statistic feedback = "positive" num = {good/(good+bad+neutral)} />
    </div>)
}

const Statistic = ({feedback, num}) =>{
    return(
    <tr>
        <td>{feedback} </td>
        <td>{num}</td>
    </tr>
    )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setGoodVal = (newValue) =>{
      setGood(newValue)
  }
  const setNeutralVal = (newValue) =>{
      setNeutral(newValue)
  }
  const setBadVal = (newValue) =>{
      setBad(newValue)
  }


    return (
      <div>
          <h1>give feedback</h1>
          <Button handleClick={()=>setGoodVal(good + 1)} text='good' />
          <Button handleClick={()=>setNeutralVal(neutral + 1)} text='neutral' />
          <Button handleClick={()=>setBadVal(bad + 1)} text='bad' />
          <h1>statistics</h1>
          <Statistics good ={good} bad ={bad} neutral ={neutral} />



      </div>
  )
}

export default App