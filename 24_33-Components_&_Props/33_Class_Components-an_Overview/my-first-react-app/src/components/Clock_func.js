// This is the same way to do this fbut as a unction and ways leaner then the class way.
import { useState } from 'react'

export default function Clock({ name }) {
  const [date, setDate] = useState(new Date())

  return (
    <div>
      <h1>Halle, {name}</h1>
      <h2>It is {date.toLocaleTimeString()}</h2>
    </div>
  )
}
