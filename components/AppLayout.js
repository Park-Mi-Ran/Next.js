import React, { useState } from 'react';
import PropTypes from 'prop-types'; //typescript사용시 필요 x
import Link from 'next/link'; 
import { Input, Menu, Row, Col } from 'antd';
import UserProfile from '../components/UserProfile';
import LoginForm from '../components/LoginForm';
import styled from 'styled-components';
//react hot loader next.js 지원

const SearchInput = styled(Input.Search)`
    vertical-align: middle;
`;
const AppLayout = ({children}) => {
    const [isLoggedIn,setIsLoggedIn] = useState(false);
    return(
        <div>
            <Menu mode="horizontal">
            <Menu.Item>
            <Link href="/"><a>노드버드</a></Link>
            </Menu.Item>
            <Menu.Item>
            <Link href="/profile"><a>프로필</a></Link>
            </Menu.Item>
            <Menu.Item>
                <SearchInput/>
            </Menu.Item>
            <Menu.Item>
            <Link href="/signup"><a>회원가입</a></Link>
            </Menu.Item>
            </Menu>
            <Row gutter={8}>
                <Col xs={24} md={6}>
                    {isLoggedIn ? <UserProfile/> : <LoginForm/>}
                </Col>
                <Col xs={24} md={12}>
                {children}
                </Col>
                <Col xs={24} md={6}>
                <a href='#' target="_blank" rel="noreferrer noopener">Made by parkmiran</a>
                </Col>
            </Row>
        </div>
    )
};

AppLayout.propTypes = {
    children : PropTypes.node.isRequired,
};

export default AppLayout;