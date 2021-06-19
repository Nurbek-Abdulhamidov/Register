import styled from 'styled-components'
// import {ReactComponent as User} from './icon/user.svg'

export const Container=styled.div`
display:flex;
justify-content:center;
align-items:center;
background-color:#2a393E;
width:100%;
height:100vh;
color:#fff;
`

export const Wrapper=styled.div`
width:360px;
height:380px;
border:2px solid #445859;
border-radius:5px;
display:flex;
margin:10px;
flex-direction:column;
align-items:center;
padding:30px;
box-sizing:border-box;
`

export const Description=styled.div`
color:#fff;
font-size:20px;
font-weight:600;
`

export const Title=styled.div`
color:#E7C961;
font-size:28px;
`

export const InputWrapper = styled.div`
position:relative;
display:flex;
width:100%
`

export const Input =styled.input`
width:100%;
height:45px;
border-radius:5px;
background-color:rgba(104, 105, 102,.1);
outline:none;
border:1px solid #354545;
margin-top:20px;
color:#fff;
padding-left:35px;
`

export const Iconic =styled.div`
position:absolute;
top: 50%;
left:10px;
width:30px;
font-size:20px;
`

export const Button = styled.button`
width:123px;
height:45px;
background:#00908D;
color:white;
font-weight:700;
font-size:22px;
margin-top:15px;
margin-left:auto;
border:none;
outline:none;
border-radius:5px;
padding:10px;
cursor:pointer;
`

export const Info =styled.div`
display: flex;
width: 100%;

`


export const CheckBox =styled.input`
display: flex;
width: 50px;
height: 50px;
background-color:rgba(104, 105, 102,.1);
border: 1px solid #354545;
margin-top:15px;
`

export const Span = styled.span`
display: flex;
align-items: center;
justify-content: center;
width:120px;
gap: 10px;
font-size: 15px;
`

export const Pass = styled.div`
margin-left:auto;
margin-top: 10px;
color: white;
font-size: 15px;
font-weight: 400;
`
