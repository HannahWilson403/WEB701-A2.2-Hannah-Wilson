import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth/';


//authenticating a user's account - saves user to local storage
class AuthService {
login(user) {
return axios
    .post(API_URL + 'signin', {
    username: user.username,
    password: user.password
    })
    .then(response => {
    if (response.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }

    return response.data;
    });
}

// logout user service - removes user from local storage
logout() {
localStorage.removeItem('user');
}


//registration of a user account 
register(user) {
return axios.post(API_URL + 'signup', {
    username: user.username,
    email: user.email,
    password: user.password
});
}
}

export default new AuthService();