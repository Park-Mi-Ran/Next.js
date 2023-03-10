import {Form, Input, Button} from 'antd';
import { useCallback, useState, useMemo} from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
margin-top:10px;
`;

const LoginForm = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const onChangeId = useCallback((e)=>{
        setId(e.target.value);
    },[]);

    const onChangePassword = useCallback((e)=>{
        setPassword(e.target.value);
    },[]);
    // const [passwordCheck, setPasswordCheck] = useState('');
    
    // const style = useMemo(()=>({marginTop:10},[]));
    
    return(
        <>
        <Form>
            <div>
                <label htmlForm="user-id">아이디</label>
                <br/>
                <Input name="user-id" value={id} onChange={onChangeId} required/>
            </div>
            <div>
            <label htmlForm="user-id">비밀번호</label>
                <br/>
                <Input name="user-id" type="password" value={password} onChange={onChangePassword} required/>
            </div>
            <ButtonWrapper>
                <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
                <Link href="/signup"><a><Button>회원가입</Button></a></Link>
            </ButtonWrapper>
        </Form>
        </>
    );
}

export default LoginForm;