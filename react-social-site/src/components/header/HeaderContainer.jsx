import React from 'react';
import { Header } from './Header';
import { connect } from 'react-redux';
import {getAuthUserData} from '../../redux/reducers';

export class HeaderContainerAPI extends React.Component {

    componentDidMount(){
        this.props.getAuthUserData();
        /* getAuthMe().then(res => {
            if(res.resultCode === 0){
                const { id, email, login } = res.data;
                this.props.setAuthUserData(id, email, login);
            }
        }) */
    }

    render() {
        return (
            <Header {...this.props} />
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export const HeaderContainer = connect(mapStateToProps, {getAuthUserData} )(HeaderContainerAPI)
