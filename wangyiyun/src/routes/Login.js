import React from 'react';
import { connect } from 'dva';
import './Login.scss';

//自己实现一个connect
// function connect(mapStateToProps,mapDispatchToProps){
//     return function (Target){
//         return class extends React.Component{
//             render(){
//                 return <Target {...mapStateToProps(state)}></Target>
//             }
//         }
//     }
// }

// es7的装饰器
@connect(state => {
    console.log('state...', state);
    return {
        login: state.login
    }
}, dispatch => {
    return {
        login: payload => {
            dispatch({
                type: 'index/login',
                payload
            })
        }
    }
})

class Login extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            phone: '17718445587',
            password: '147852.'
        }
    }

    submit() {
        if (!/\d{11}/.test(this.state.phone)) {
            alert('请输入正确的手机号码');
            return;
        }
        if (!/\S{6,20}/.test(this.state.password)) {
            alert('请输入正确的密码');
            return;
        }
        this.props.login({
            phone: this.state.phone,
            password: this.state.password 
        })
    }

    render() {
        console.log('this.props...', this.props);
        return (<div className="logins">
            <React.Fragment>
                <input placeholder="手机号" maxLength="11" value={this.state.phone} onChange={e => this.setState({ phone: e.target.value })} />
                <input placeholder="密码" type="password" value={this.state.password} onChange={e => this.setState({ password: e.target.value })} />
                <button onClick={this.submit.bind(this)}>登陆</button>
            </React.Fragment>
        </div>)
    }
}

export default Login;