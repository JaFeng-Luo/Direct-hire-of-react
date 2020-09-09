import React, { Component } from 'react'
import Logo from '../../components/Logo'
import {
    NavBar,
    InputItem,
    WhiteSpace,
    List,
    WingBlank,
    Button,
    Icon,
} from 'antd-mobile'
export default class Index extends Component {
    state = {
        userName: '',
        password: '',
    }
    goRegister = () => {
        this.props.history.replace('/register')
    }
    changeValue = (value,name) => {
        this.setState({
            [name]:value
        })
    }
    submit = () => {
        console.log(this.state);
    }
    render() {
        return (
            <div>
                <NavBar
                    icon={<Icon type="left" />}
                    rightContent={[
                        <Icon key="1" type="ellipsis" />,
                    ]}
                >React&nbsp;直&nbsp;聘</NavBar>
                <Logo />
                <WingBlank>
                    <List>
                        <WhiteSpace />
                        <InputItem
                            placeholder='请输入用户名'
                            onChange={(v)=>{this.changeValue(v,'userName')}}
                        >用户名:</InputItem>
                        <WhiteSpace />
                        <InputItem
                            type='password'
                            placeholder='请输入密码'
                            onChange={(v)=>{this.changeValue(v,'password')}}
                        >密&nbsp;&nbsp;码:</InputItem>
                        <WhiteSpace />
                        <WhiteSpace />
                        <div style={{ marginTop: 30 }}>
                            <Button
                                type='primary'
                                onClick={this.submit}
                            >登&nbsp;&nbsp;&nbsp;&nbsp;录</Button>
                            <WhiteSpace />
                            <WhiteSpace />
                            <Button
                                onClick={this.goRegister}
                            >未有账号</Button>
                        </div>
                    </List>
                </WingBlank>
            </div>
        )
    }
}
