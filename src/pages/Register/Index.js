import React, { Component } from 'react'
import Logo from '../../components/Logo'
import {
    NavBar,
    InputItem,
    WhiteSpace,
    List,
    WingBlank,
    Radio,
    Button,
} from 'antd-mobile'
export default class Index extends Component {
    render() {
        return (
            <div>
                <NavBar>React&nbsp;直&nbsp;聘</NavBar>
                <Logo />
                <WingBlank>
                    <List>
                        <WhiteSpace />
                        <InputItem>用户名:</InputItem>
                        <WhiteSpace />
                        <InputItem type='password'>密&nbsp;&nbsp;码:</InputItem>
                        <WhiteSpace />
                        <InputItem type='password'>确认密码:</InputItem>
                        <WhiteSpace />
                        <div style={{paddingLeft:15}}>
                        <span style={{fontSize:17}}>
                            用户类型:
                        </span>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                            <Radio>
                            求职者
                            </Radio>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <Radio>
                            BOSS
                            </Radio>
                        </div>
                        <WhiteSpace />
                        <div style={{marginTop:30}}>
                        <Button type='primary'>注&nbsp;&nbsp;&nbsp;&nbsp;册</Button>
                        <WhiteSpace />
                        <WhiteSpace />
                        <Button type='primary'>已有账号</Button>
                        </div>
                    </List>
                </WingBlank>
            </div>
        )
    }
}
