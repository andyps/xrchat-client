import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import GoogleIcon from '../../assets/GoogleIcon';
import { 
  loginUserByGithub,
  loginUserByGoogle,
  loginUserByFacebook,
} from '../../../redux/auth/service'
import './auth.scss'

interface Props {
  auth: any
  loginUserByGithub: typeof loginUserByGithub
  loginUserByGoogle: typeof loginUserByGoogle
  loginUserByFacebook: typeof loginUserByFacebook
  isEnableFacebook: boolean
  isEnableGoogle: boolean
  isEnableGithub: boolean
};

class SocialLogin extends React.Component<Props> {
  state = {
    email: '',
    password: ''
  }

  handleInput = (e: any) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleGithubLogin = (e: any) => {
    e.preventDefault()
    this.props.loginUserByGithub();
  }

  handleGoogleLogin = (e: any) => {
    e.preventDefault()
    this.props.loginUserByGithub();
  }

  handleFacebookLogin = (e: any) => {
    e.preventDefault()
    this.props.loginUserByGithub();
  }

  render () {
    const {isEnableFacebook, isEnableGoogle, isEnableGithub} = this.props;
    console.log('social login', isEnableFacebook, isEnableGoogle, isEnableGithub);
    const githubButton = isEnableGithub ? 
      (
        <Grid item xs={12}>
          <Button onClick={(e) => this.handleGithubLogin(e)}>
            <GitHubIcon fontSize="large"/>
            Login with GitHub
          </Button>
        </Grid>
      ) : '';
    const googleButton = isEnableGoogle ? 
        (
          <Grid item xs={12}>
            <Button onClick={(e) => this.handleGoogleLogin(e)}>
              <GoogleIcon/>
              Login with Google
            </Button>
          </Grid>
        ) : '';
    const facebookButton = isEnableFacebook ? 
      (
        <Grid item xs={12}>
          <Button onClick={(e) => this.handleFacebookLogin(e)}>
            <FacebookIcon fontSize="large"/>
            Login with Facebook
          </Button>
        </Grid>
      ) : '';

    return (
        <Container component="main" maxWidth="xs">
          <Grid container justify="center" spacing={2}>
            {githubButton}
            {facebookButton}
            {googleButton}
          </Grid>
        </Container>
    );
  }
}

export default SocialLogin;
