import React from 'react';
import { Avatar, Badge, Space } from 'antd';

const CartWidget = () => {
    return(
        <Badge size="default" count={7}>
            <Avatar shape="square" size="large" />
        </Badge>
    )
}

export default CartWidget