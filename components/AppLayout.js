import React from 'react';
import PropTypes from 'prop-types'; //typescript사용시 필요 x
import Link from 'next/link'; 
import { Menu } from 'antd';

//react hot loader next.js 지원

const AppLayout = ({children}) => {
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
            <Link href="/signup"><a>회원가입</a></Link>
            </Menu.Item>
            </Menu>
            {children}
        </div>
    )
};

AppLayout.propTypes = {
    children : PropTypes.node.isRequired,
};

export default AppLayout;