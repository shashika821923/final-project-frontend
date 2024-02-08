// CopyRights for sse

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "assets/images/rotating-card-bg-front.jpg";
import bgBack from "assets/images/rotating-card-bg-back.jpg";

function Information() {
  return (
    <MKBox component="section" py={6} my={3}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="AccessibilityIcon "
                title={
                  <>
                    Feel the changes
                    <br />
                    of our trainings
                  </>
                }
                description="We are always welcome the new members to feel the real fitness with us."
              />
              <RotatingCardBack
                image={bgBack}
                title={<>Book your first appointment <br/> now!</>}
                description="Create a new user account in few easy steps and book your first appoinment with us!"
                action={{
                  type: "internal",
                  route: "/pages/authentication/sign-in",
                  label: "Signup here",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="content_copy"
                  title="Customized meal plans"
                  description="Great news! we are using latest AI technolgies to suggest the best meal plans to you according to your weight and height."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="flip_to_front"
                  title="Expert Instructors"
                  description="We are selected best instructors for you to provide a best service for you after few round of interviews."
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="price_change"
                  title="Easy appointment handlings"
                  description="Here we go! we have fully web based appointments handling system to provide you a better service now you can add our appointment from any wahre at any time."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="devices"
                  title="Keep updated with new trends"
                  description="In this fitness subject there are lot of things every day updating we have ablogging section to share new updates within our members."
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
