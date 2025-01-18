import React from 'react'

export default function QuestionContent({question}:{question: string}) {
  return (
    <p className='font-medium text-lg text-white text-center'>{question}</p>
  )
}
