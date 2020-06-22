import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router,Switch,Route,withRouter} from 'react-router-dom';
import Login from './components/Auth/Login';
import firebase from './firebase';
import 'semantic-ui-css/semantic.min.css';
import Register from './components/Auth/Register';

import {createStore, applyMiddleware} from 'redux';
import {Provider,connect} from 'react-redux';
//import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './reducers/index';  
import {setUser} from './actions';
import{clearUser} from './actions/index'
import logger from 'redux-logger';
import Spinner from './spinner';


const middlewares=[logger];

const store = createStore(rootReducer,applyMiddleware(...middlewares));

class Root extends React.Component {
    componentDidMount(){
        firebase.auth().onAuthStateChanged(user =>{
            if(user){
                console.log(user);
                this.props.setUser(user);
                this.props.history.push("/");
            }else{
                this.props.history.push('/login');
                this.props.clearUser();
            }

        });
    }

    render() {
        return this.props.isLoading?<Spinner/>:(
    
                <Switch>
                    <Route exact path='/' component={App} />
                    <Route path='/login' component={Login} />
                    <Route path='/register' component={Register} />
                </Switch>
          

        )
    }
}

const mapStateToProps = state => ({
    isLoading:state.user.isLoading
});

const RootWithAuth = withRouter(connect(mapStateToProps,{setUser,clearUser})(Root));
    

ReactDOM.render(<Provider store={store}><Router><RootWithAuth/></Router></Provider>, document.getElementById('root'));
registerServiceWorker();
