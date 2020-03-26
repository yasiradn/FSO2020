import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = (props) => {
return <button onClick = {props.onClick}>{props.text}</button>
}
 

const Statistics = (props) => {
  const totalValue = props.valueOfGood+props.valueOfBad+props.valueOfNeutrul
  if(totalValue === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  } 

  

  return(
    <div>
      <table>
        <tr>
          <td>good</td>
          <td>{props.valueOfGood}</td>
        </tr>
        <tr>
          <td>neutral</td>
          <td>{props.valueOfNeutrul}</td>
        </tr>
        <tr>
          <td>bad</td>
          <td>{props.valueOfBad}</td>
        </tr>
        <tr>
          <td>total</td>
          <td>{totalValue}</td>
        </tr>
        <tr>
          <td>average</td>
          <td>{(props.valueOfGood-props.valueOfBad)/(totalValue)}</td>
        </tr>
        <tr>
          <td>positive</td>
          <td>{(props.valueOfGood/totalValue)*100}%</td>
        </tr>
      </table>
    </div>
  )
}

const App = (props) => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <div>
        <h3>Give Feedback</h3>
        <Button onClick={()=> setGood(good+1)} text="good"/>
        <Button onClick={()=> setBad(bad+1)} text="bad"/>
        <Button onClick={()=> setNeutral(neutral+1)} text="neutral"/>
        <h3><b>Statistic</b></h3>
        <Statistics valueOfGood = {good} valueOfBad = {bad}  valueOfNeutrul = {neutral}/>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)