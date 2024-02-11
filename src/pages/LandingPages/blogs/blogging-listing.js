import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// About Us page sections
import Information from "pages/LandingPages/AboutUs/sections/Information";

// Routes
import routes from "routes";


// Images
import bgImage from "assets/images/bg-about-us.jpg";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
import { useEffect, useState } from "react";
import { blogPostService } from "../SignIn/services";

function BlogListing() {
    const [blogPosts, setAllBlogPosts] = useState([]);

    useEffect(() => {
        getAllPosts();
    }, [])

    function getAllPosts() {
        blogPostService.getAllBlogPosts().then((blogPosts) => setAllBlogPosts(blogPosts.data))
    }

    return (
        <>
            <DefaultNavbar
                routes={routes}
                action={{
                    type: "external",
                    route: "https://www.Lords-Gym.com/",
                    label: "Sign in",
                    color: "default",
                }}
                transparent
                light
            />
            <MKBox
                minHeight="75vh"
                width="100%"
                sx={{
                    backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
                        `${linearGradient(
                            rgba(gradients.dark.main, 0.6),
                            rgba(gradients.dark.state, 0.6)
                        )}, url(${bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "grid",
                    placeItems: "center",
                }}
            >
                <Container>
                    <Grid
                        container
                        item
                        xs={12}
                        lg={8}
                        justifyContent="center"
                        alignItems="center"
                        flexDirection="column"
                        sx={{ mx: "auto", textAlign: "center" }}
                    >
                        <MKTypography
                            variant="h1"
                            color="white"
                            sx={({ breakpoints, typography: { size } }) => ({
                                [breakpoints.down("md")]: {
                                    fontSize: size["3xl"],
                                },
                            })}
                        >
                            Keep update with new trends
                        </MKTypography>
                        <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
                            We are maintaining this blog for our members to share the knowladge with others
                        </MKTypography>
                        <MKButton color="default" sx={{ color: ({ palette: { dark } }) => dark.main }}>
                            Create a post
                        </MKButton>

                    </Grid>

                </Container>
            </MKBox>
            <Card
                sx={{
                    p: 2,
                    mx: { xs: 2, lg: 3 },
                    mt: -8,
                    mb: 4,
                    boxShadow: ({ boxShadows: { xxl } }) => xxl,
                }}
            >
                <Grid container spacing={3}>
                    <Grid item xs={12} lg={12}>
                        <Grid container>
                            {blogPosts.map((post, index) => (<Grid key={index} item xs={12} lg={4} sx={{ mt: { xs: 5, lg: 5, ml: 10 } }}>
                                <CenteredBlogCard
                                    image={post.imageName}
                                    title={post.title}
                                    description={post.description}
                                    action={{
                                        type: "internal",
                                        route: "pages/company/about-us",
                                        color: "info",
                                        label: "find out more",
                                    }}
                                />
                            </Grid>))}

                        </Grid>
                    </Grid>
                </Grid>
            </Card>

        </>
    );

}

export default BlogListing;