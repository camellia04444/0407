import React from 'react'
import { useRecoilValue } from 'recoil'
import { loginState } from './recoil'

const C1 = () => {
    const state = useRecoilValue(loginState)
  return (
    <div>C1: {state.toString()}</div>
  )
}

export default C1