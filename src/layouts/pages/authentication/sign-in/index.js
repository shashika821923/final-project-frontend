// CopyRights for sse

// Material Kit 2 React pages
import SignIn from "pages/LandingPages/SignIn";
import PropTypes from 'prop-types';

export default function SignInPage({ userID }) {
  return <SignIn userID={userID}/>;
}

SignInPage.propTypes = {
  userID: PropTypes.number
};