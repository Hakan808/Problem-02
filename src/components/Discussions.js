import React, { useState } from 'react'
import Discussion from './Discussion'
import db from '../data/db'

const Discussions = () => {
  const [discussions, setDiscussions] = useState(db);

  return (
    <div>
      {discussions.map(item => (
        <Discussion key={item.id} discussion={item} />
      ))}
    </div>
  )
}

export default Discussions
