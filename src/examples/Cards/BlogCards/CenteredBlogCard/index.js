// CopyRights for sse

// react-router components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import MuiLink from "@mui/material/Link";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

function CenteredBlogCard({ image, title, description, action }) {
  return (
    <Card style={{ marginLeft: '10px', backgroundColor: '#EDE9E9' }}>
      <MKBox position="relative" borderRadius="lg" mx={2} mt={-3}>
        <MKBox
          position="relative"
          width={450} // Specify your desired width
          height={200} // Specify your desired height
        >
          <MKBox
            borderRadius="lg"
            shadow="md"
            position="absolute"
            left={0}
            top={30}
            sx={{
              width: '100%',
              height: '100%',
              backgroundImage: `url(${image})`,
              backgroundSize: "contain", // Set the background size to 'contain'
              backgroundRepeat: "no-repeat", // Prevent the background image from repeating
              backgroundPosition: "center", // Center the background image
              transform: "scale(0.94)",
              // filter: "blur(2px)",
            }}
          />
        </MKBox>
      </MKBox>
      <MKBox p={3} mt={2} textAlign="center">
        <MKTypography display="inline" variant="h5" textTransform="capitalize" fontWeight="regular">
          {title}
        </MKTypography>
        <MKBox mt={1} mb={3}>
          <MKTypography variant="body2" component="p" color="text">
            {description}
          </MKTypography>
        </MKBox>
        {action.type === "external" ? (
          <MKButton
            component={MuiLink}
            href={action.route}
            target="_blank"
            rel="noreferrer"
            variant="gradient"
            size="small"
            color={action.color ? action.color : "dark"}
          >
            {action.label}
          </MKButton>
        ) : (
          <MKButton
            component={Link}
            to={action.route}
            variant="gradient"
            size="small"
            color={action.color ? action.color : "dark"}
          >
            {action.label}
          </MKButton>
        )}
      </MKBox>
    </Card>
  );
}

// Typechecking props for the CenteredBlogCard
CenteredBlogCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]).isRequired,
    route: PropTypes.string.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "light",
    ]),
    label: PropTypes.string.isRequired,
  }).isRequired,
};

export default CenteredBlogCard;
