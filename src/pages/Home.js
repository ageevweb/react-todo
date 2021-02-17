import React from 'react'
import {Form} from '../components/Form'
import {Notes} from '../components/Notes'


export const Home = () => {
  const notes = [
    {
      id: 1,
      title: 'note 1'
    },
    {
      id: 2,
      title: 'note 2'
    },
  ]

  return (
    <>
      <Form/>
      <Notes notes={notes}/>
    </>
  )
}