import React, { Component } from 'react'
import Logo from '../../components/Logo'
import {
    NavBar,
    InputItem,
    WhiteSpace,
    List,
    WingBlank,
    Button,
    Checkbox,
    Icon,
} from 'antd-mobile'
export default class Index extends Component {
    state={
        userName:'',
        password:'',
        ConfirmPassword:'',
        userType:'worker',
    }
    changeValue = (value,name) => {
        this.setState({
            [name]:value
        })
    }
    goLogin = () => {
        this.props.history.replace('/login')
    }
    submit = () => {
        console.log(this.state);
    }
    render() {
        let { userType } = this.state
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
                        onChange={(v)=>{this.changeValue(v,'userName')}}
                        placeholder='请输入用户名'
                        >用户名:</InputItem>
                        <WhiteSpace />
                        <InputItem 
                        type='password'
                        onChange={(v)=>{this.changeValue(v,'password')}}
                        placeholder='请输入密码'
                        >密&nbsp;&nbsp;码:</InputItem>
                        <WhiteSpace />
                        <InputItem 
                        type='password'
                        onChange={(v)=>{this.changeValue(v,'ConfirmPassword')}}
                        placeholder='请确认密码'
                        >确认密码:</InputItem>
                        <WhiteSpace />
                        <div style={{ paddingLeft: 15, display: 'flex' }}>
                            <span style={{ fontSize: 17, display: 'flex', justifyItems: 'center', alignItems: 'center' }}>
                                用户类型:
                        </span>
                            <Checkbox.CheckboxItem 
                            checked={userType==='worker'}
                            onChange={()=>{this.changeValue('worker','userType')}}
                            >
                                求职者
                            </Checkbox.CheckboxItem>
                            <Checkbox.CheckboxItem 
                            onChange={()=>{this.changeValue('boss','userType')}}
                            checked={userType==='boss'}
                            >
                                BOSS
                            </Checkbox.CheckboxItem>
                        </div>
                        <WhiteSpace />
                        <div style={{ marginTop: 30 }}>
                            <Button 
                            type='primary'
                            onClick={this.submit}
                            >注&nbsp;&nbsp;&nbsp;&nbsp;册</Button>
                            <WhiteSpace />
                            <WhiteSpace />
                            <Button
                            onClick={this.goLogin}
                            >已有账号</Button>
                        </div>
                    </List>
                </WingBlank>
            </div>
        )
    }
}
