/* eslint-disable no-param-reassign */
// CopyRights for sse

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Routes
import routes from "routes";

function NavbarDark() {
  return (
    <MKBox variant="gradient" bgColor="dark" shadow="sm" py={0.25}>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.Lords-Gym.com/",
          label: "Sign in",
          color: "info",
        }}
        transparent
        relative
        light
        center
      />
    </MKBox>
  );
}

export default NavbarDark;
