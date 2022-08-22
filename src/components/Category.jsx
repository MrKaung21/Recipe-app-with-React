import { FaPizzaSlice, FaHamburger } from 'react-icons/fa'
import { GiNoodles, GiChopsticks } from 'react-icons/gi'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Category = () => {
  return (
    <List>
        <SLink to={'/cuisine/Italian'}>
            <Svg><FaPizzaSlice /></Svg>
            <Header>Italian</Header>
        </SLink>
        <SLink to={'/cuisine/American'}>
            <Svg><FaHamburger /></Svg>
            <Header>American</Header>
        </SLink>
        <SLink to={'/cuisine/Thai'}>
            <Svg><GiNoodles /></Svg>
            <Header>Thai</Header>
        </SLink>
        <SLink to={'/cuisine/Korean'}>
            <Svg><GiChopsticks /></Svg>
            <Header>Korean</Header>
        </SLink>
    </List>
  )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
`
const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 2rem;
    text-decoration: none;
    background: linear-gradient(35deg, #494949, #313131);
    
    width: 6rem;
    height: 6rem;
    cursor: pointer;
    transform: scale(0.8)
`
const Header = styled.div`
  color: #fff;
  font-size: 1rem;
`

const Svg = styled.div`
    color: #fff;
    font-size: 1.5rem
`
export default Category