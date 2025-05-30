import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const generarNumero = () => {
    const aleatorio = Math.floor(Math.random() * anecdotes.length)
    setSelected(aleatorio)
  }

  const addVote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }
  const maxVotes = Math.max(...votes)
  const indexMax = votes.indexOf(maxVotes)

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>Has {votes[selected]} votes</p>

      <button onClick={generarNumero}>Next anecdote</button>
      <button onClick={addVote}>Vote</button>
      <p>{anecdotes[indexMax]}</p>
      <p>Has {votes[maxVotes]} votes</p>
    </div>
  )
}

export default App