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
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import routes from "routes";
import bgImage from "assets/images/bg-sign-in-basic.jpeg";
import { useState } from "react";

function AppointmentListing() {

    const [appointments, setAppointments] = useState([{
        color: "info",
        name: "Shailesh Kushwaha",
        date: "1 week ago",
        review: "I found solution to all my design needs from Creative Tim. I use them as a freelancer in my hobby projects for fun! And its really affordable, very humble guys !!!",
        rating: 5,
    },{
        color: "info",
        name: "Shailesh Kushwaha",
        date: "1 week ago",
        review: "I found solution to all my design needs from Creative Tim. I use them as a freelancer in my hobby projects for fun! And its really affordable, very humble guys !!!",
        rating: 5,
    },{
        color: "info",
        name: "Shailesh Kushwaha",
        date: "1 week ago",
        review: "I found solution to all my design needs from Creative Tim. I use them as a freelancer in my hobby projects for fun! And its really affordable, very humble guys !!!",
        rating: 5,
    },{
        color: "info",
        name: "Shailesh Kushwaha",
        date: "1 week ago",
        review: "I found solution to all my design needs from Creative Tim. I use them as a freelancer in my hobby projects for fun! And its really affordable, very humble guys !!!",
        rating: 5,
    },{
        color: "info",
        name: "Shailesh Kushwaha",
        date: "1 week ago",
        review: "I found solution to all my design needs from Creative Tim. I use them as a freelancer in my hobby projects for fun! And its really affordable, very humble guys !!!",
        rating: 5,
    }])

    return (
        <>
            <DefaultNavbar
                routes={routes}
                action={{
                    type: "external",
                    route: "https://www.Lords-Gym.com/",
                    label: "Sign in",
                    color: "info",
                }}
                transparent
                light
            />
            <MKBox
                position="absolute"
                top={0}
                left={0}
                zIndex={1}
                width="100%"
                minHeight="100vh"
                sx={{
                    backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
                        `${linearGradient(
                            rgba(gradients.dark.main, 0.6),
                            rgba(gradients.dark.state, 0.6)
                        )}, url(${bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            />
            <MKBox px={1} py={20} width="100%" height="100vh" mx="auto" position="relative" zIndex={2}>
                <MKBox component="section" py={0}>
                    <Container>
                        <Grid container spacing={3} sx={{ mt: 2 }}>
                            {appointments.map((item) => <Grid item xs={12} md={6} lg={4}>
                                <DefaultReviewCard
                                    color={item.color}
                                    name={item.name}
                                    date={item.date}
                                    review={item.review}
                                    rating={item.rating}
                                />
                            </Grid>)}
                        </Grid>
                        <Divider sx={{ my: 6 }} />
                    </Container>
                </MKBox>
            </MKBox>

        </>

    );
}

export default AppointmentListing;
