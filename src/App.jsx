import { useEffect, useState } from "react"

const Card = ({ title }) => {
  const [count, setCount] = useState(0)
  const [hasLiked, setHasLiked] = useState(false);


  useEffect(() => {
    console.log(`${title} has been liked: ${hasLiked}`)
  })

  return (
    <div className="card" onClick={() => { setCount((prevState) => prevState + 1) }}>
      <h2>{title}</h2>
      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? "❤️" : "🤍"}
      </button>
    </div>)
}

const App = () => {

  return (
    <div className='card-container'>

      <Card title="star Wars" rating={4} isCool={true} />
      <Card title="Avatar" />
      <Card title="Angel" />
    </div>

  )

}
export default App;