import React from 'react'
import { useParams } from 'react-router-dom';

export default function Watch() {
  const Key = useParams();
  console.log(Key)
  return (
    <div>Watch

    </div>
  )
}
