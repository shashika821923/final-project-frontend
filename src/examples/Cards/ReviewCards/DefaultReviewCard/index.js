// CopyRights for sse

// prop-types is library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKAvatar from "components/MKAvatar";
import MKTypography from "components/MKTypography";
import { CalendarOutlined } from "@ant-design/icons";

function DefaultReviewCard({ color, image, name, date, review, rating }) {
  const ratings = {
    0.5: [
      <Icon key={1}>star_outline</Icon>,
      <Icon key={2}>star_outline</Icon>,
      <Icon key={3}>star_outline</Icon>,
      <Icon key={4}>star_outline</Icon>,
      <Icon key={5}>star_outline</Icon>,
    ],
    1: [
      <Icon key={1}>star</Icon>,
      <Icon key={2}>star_outline</Icon>,
      <Icon key={3}>star_outline</Icon>,
      <Icon key={4}>star_outline</Icon>,
      <Icon key={5}>star_outline</Icon>,
    ],
    1.5: [
      <Icon key={1}>star</Icon>,
      <Icon key={2}>star_half</Icon>,
      <Icon key={3}>star_outline</Icon>,
      <Icon key={4}>star_outline</Icon>,
      <Icon key={5}>star_outline</Icon>,
    ],
    2: [
      <Icon key={1}>star</Icon>,
      <Icon key={2}>star</Icon>,
      <Icon key={3}>star_outline</Icon>,
      <Icon key={4}>star_outline</Icon>,
      <Icon key={5}>star_outline</Icon>,
    ],
    2.5: [
      <Icon key={1}>star</Icon>,
      <Icon key={2}>star</Icon>,
      <Icon key={3}>star_half</Icon>,
      <Icon key={4}>star_outline</Icon>,
      <Icon key={5}>star_outline</Icon>,
    ],
    3: [
      <Icon key={1}>star</Icon>,
      <Icon key={2}>star</Icon>,
      <Icon key={3}>star</Icon>,
      <Icon key={4}>star_outline</Icon>,
      <Icon key={5}>star_outline</Icon>,
    ],
    3.5: [
      <Icon key={1}>star</Icon>,
      <Icon key={2}>star</Icon>,
      <Icon key={3}>star</Icon>,
      <Icon key={4}>star_half</Icon>,
      <Icon key={5}>star_outline</Icon>,
    ],
    4: [
      <Icon key={1}>star</Icon>,
      <Icon key={2}>star</Icon>,
      <Icon key={3}>star</Icon>,
      <Icon key={4}>star</Icon>,
      <Icon key={5}>star_outline</Icon>,
    ],
    4.5: [
      <Icon key={1}>star</Icon>,
      <Icon key={2}>star</Icon>,
      <Icon key={3}>star</Icon>,
      <Icon key={4}>star</Icon>,
      <Icon key={5}>star_half</Icon>,
    ],
    5: [
      <Icon key={1}>star</Icon>,
      <Icon key={2}>star</Icon>,
      <Icon key={3}>star</Icon>,
      <Icon key={4}>star</Icon>,
      <Icon key={5}>star</Icon>,
    ],
  };

  return (
    <MKBox
      variant={"gradient"}
      bgColor={color}
      borderRadius="xl"
      shadow={"md"}
      p={3}
      sx={{ height: 300, width: 400, overflow: "hidden" }} // Fixed height and width with overflow hidden
    >
      {image && (
        <MKAvatar
          src={image}
          alt={name}
          variant="rounded"
          size="lg"
          shadow="md"
          sx={{ mt: -5, mb: 1 }}
        />
      )}
      <MKBox lineHeight={1}>
        <MKTypography
          display="block"
          variant={image ? "button" : "h6"}
          fontWeight="bold"
          color={
            color === "transparent" || color === "light" ? "dark" : "white"
          }
          mb={0.5}
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }} // Text truncation CSS
        >
          {name}
        </MKTypography>
        <MKTypography
          variant={image ? "caption" : "button"}
          fontWeight="regular"
          lineHeight={1}
          color={
            color === "transparent" || color === "light" ? "text" : "white"
          }
          sx={{ display: "flex", alignItems: "center" }}
        >
         <CalendarOutlined />
          <span style={{marginLeft: '5px'}}>{date}</span>
        </MKTypography>
      </MKBox>
      <MKTypography
        variant="body2"
        color={color === "transparent" || color === "light" ? "text" : "white"}
        my={4}
        sx={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "break-spaces", // Allow line breaks
          display: "-webkit-box",
          WebkitLineClamp: 4, // Show up to four lines
          WebkitBoxOrient: "vertical", // Vertical orientation
          fontSize: "1rem", // Adjust the font size as needed
        }}
      >
        &quot;{review}&quot;
      </MKTypography>

      <MKTypography
        variant="h4"
        color={color === "transparent" || color === "light" ? "text" : "white"}
        sx={{
          display: "flex",
          alignItems: "center",
          ml: 0.375,

          "& .material-icons-round": {
            ml: -0.375,
          },
        }}
      >
        {ratings[rating]}
      </MKTypography>
    </MKBox>
  );
};

DefaultReviewCard.defaultProps = {
  color: "transparent",
  image: "",
};

DefaultReviewCard.propTypes = {
  color: PropTypes.oneOf([
    "transparent",
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "light",
  ]),
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  review: PropTypes.string.isRequired,
  rating: PropTypes.oneOf([0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]).isRequired,
};

export default DefaultReviewCard;