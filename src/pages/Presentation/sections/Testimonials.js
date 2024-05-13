// CopyRights for sse

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultReviewCard from "examples/Cards/ReviewCards/DefaultReviewCard";
import { useEffect, useState } from "react";
import { emailPromotions } from "pages/LandingPages/SignIn/services";
import moment from "moment";

function Information() {
  const [reviewsList, setReviewsList] = useState([]);

  useEffect(() => {
    emailPromotions.getAllReviews().then((data) => setReviewsList(data.data));
  }, []);

  return (
    <MKBox component="section" py={0}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          justifyContent="center"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKTypography variant="h2">Customer Feedbacks</MKTypography>
          {/* <MKTypography variant="h2" color="info" textGradient mb={2}>
            1,679,477+ web developers
          </MKTypography>
          <MKTypography variant="body1" color="text" mb={2}>
            Many Fortune 500 companies, startups, universities and governmental institutions love
            Creative Tim&apos;s products.
          </MKTypography> */}
        </Grid>
        <Grid container spacing={3} sx={{ mt: 2 }}>
          {reviewsList.length > 0 && reviewsList.slice(0,3).map((review) => <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name={review.name}
              date={moment(review.postedDateTime).format("YYYY-MM-DD HH:mm:ss")}
              review={review.review}
              color="info"
            />
          </Grid>)}
        </Grid>
        <Divider sx={{ my: 6 }} />
      </Container>
    </MKBox>
  );
}

export default Information;
