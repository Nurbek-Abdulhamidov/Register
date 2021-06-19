import React from 'react'
import { Wrapper,Description,Title,InputWrapper,Iconic,Input,Button } from './style'
import { AiOutlineUser} from "react-icons/ai";
import { FaKey} from "react-icons/fa";
function Register() {
    return (
<Wrapper>
        <Description>
    Don`t have an account
        </Description>
        <Title>
        Register Now
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
                <Input placeholder="Username" >
                </Input>
        </InputWrapper>
        <InputWrapper>
                <Iconic>
                <FaKey/>
                </Iconic>
                <Input placeholder="Username" >
                </Input>
        </InputWrapper>
                <Button>
                    Log in
                </Button>
</Wrapper>
    )
}

export default Register
