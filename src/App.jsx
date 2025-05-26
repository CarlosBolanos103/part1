import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Display = props => <tr><td>{props.text}</td> <td>  {props.value} </td> {props.text2} </tr>

const Statistics= (props) => {
    const { good, neutral, bad } = props
    const total = good + neutral + bad
    const average = total ? ((good - bad) / total).toFixed(1) : 0
    const positive = total ? ((good / total) * 100).toFixed(1) : 0
    if ((good || neutral || bad)==0) {
      return(
        <div>
          <h2>Statistics</h2>
          No feedback given
        </div>
      )
    }
    return (
      <div> 
        <h2>Statistics</h2>
      <Display text={'Good'} value={good}  />
      <Display text={'neutral'} value={neutral}  />
      <Display text={'bad'}  value={bad}  />
      <Display text={'All'} value={total}  />
      <Display text={'average'} value={average}  />
      <Display text={'Positive'} value={(positive )} text2={'%'} />


      </div>
    )
       

}



const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const AddValueGood =() => {
   console.log('Anterior valor',good)
    setGood(good+1)
    
  }
  const AddValueNeutral =() => {
     console.log(neutral)
     setNeutral(neutral+1)
  }
  const AddValueBad =() => {
     console.log(bad)
     setBad(bad+1)
  }
  
 
  
  return (
    <div>
      <h1>give feedback</h1>
  
      <Button handleClick={AddValueGood} text={'Good'}    />
      <Button handleClick={AddValueNeutral} text={'Neutral'}    />
      <Button handleClick={AddValueBad} text={'Bad'}    />
      <Statistics good={good} neutral={neutral} bad={bad}   />

    </div>
  )
}

export default App