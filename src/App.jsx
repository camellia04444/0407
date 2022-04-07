import React, { createContext, useContext } from 'react'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import styled from 'styled-components'
import {arrState, loginState, sortedArr, sortTypeState} from './components/recoil'
import C1 from './components/C1'

const items = [
    {id: 0, content: '0000'},
    {id: 'aaa', content: '1111'},
    {id: 2, content: '2222'},
    {id: 3, content: '3333'},
    {id: 4, content: '4444'},
    {id: 5, content: '5555'},
]

const StyledAppContainer = styled.div`
    display: flex;
    justify-content: space-around;

    background-color: gray;
    width: 100vw;

    div{
        border: 1px solid black;
    }
`

// const context = createContext()

const App = () => {

    const [state, setState] = useRecoilState(loginState)
    const s1 = useRecoilValue(loginState)
    const setSSS = useSetRecoilState(loginState)

    const arr = useRecoilValue(arrState)
    const sorted = useRecoilValue(sortedArr)
    const setType = useSetRecoilState(sortTypeState)

    console.log('sorted', sorted)

    return (
    <StyledAppContainer>
        <span>{sorted.toString()}</span>
        <button onClick={()=> setType(0)}>set 0</button>
        <button onClick={()=> setType(1)}>set 1</button>
        <button onClick={()=> setType(2)}>set 2</button>
        {/* {
            items.map(item => <CustomButton {...item}/>)
            // items.map(item => <CustomButton id={item.id} content={item.content}/>)
        } */}
        <C1 />
    </StyledAppContainer>
  )
}

function mapColor(id){
    const colors = ['#f00', '#0f0', '#00f', '#1c1c1c']
    return colors[id % colors.length]
}

const StyledButton = styled.button`
    background-color: ${({id}) => mapColor(!isNaN(id)? id: 0)};
`

const CustomButton = ({id, content})=> <StyledButton id={id}>{content}</StyledButton>

export default App