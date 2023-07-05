import { Link } from 'react-router-dom';

const LoginPage = () => {
    return (
        <>
        <h1>Log In</h1>
        <input placeholder="Your email address"/>
        <input type="password" placeholder="Your password"/>
        <Link to = '/home'><button>Log In</button></Link>
        </>
    );
}

export default LoginPage;