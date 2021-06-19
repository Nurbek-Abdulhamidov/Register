import React from 'react'
import { Wrapper,Description,Title,Input,InputWrapper,Iconic,Button,Info,CheckBox,Span,Pass} from './style'
import { AiOutlineUser,} from "react-icons/ai";
import { FaKey} from "react-icons/fa";

// const style ={position:'absolute', top:'0'}
function Login() {
    return (
            <Wrapper>
                <Description>
                Already have an account
                </Description>
                <Title>
                    Log in Here
                </Title>
                <InputWrapper>
                <Iconic>
                <AiOutlineUser/>
                </Iconic>
                <Input placeholder="Username" >
                </Input>
                </InputWrapper>
                <InputWrapper>
                <Iconic>
                <FaKey/>
                </Iconic>
                <Input placeholder="Password">
                </Input>
                </InputWrapper>
                <Info>
                    <Span>
                <CheckBox type="checkbox"/>
                Keep me loged in
                    </Span>
                <Button>Log in</Button>
                </Info>
                <Pass>
                Forgod your password ?
                </Pass>
             
            </Wrapper>

    )
}

export default Login
