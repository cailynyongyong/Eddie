import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Box } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: "relative",
    color: theme.palette.primary.dark,
    marginBottom: theme.spacing(0),
    height: "100%",
    width: "100%",
    backgroundImage:
      "url(https://www.heart.org/-/media/aha/h4gm/article-images/fruit-and-vegetables.jpg?la=en&hash=65387BD7AEEF9C37F30838E6A897796400EE80F4)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    fontSize: 55,
  },
  mainFeaturedPostContent: {
    position: "relative",
    top: 100,
    bottom: 100,
    right: 100,
    left: 300,
    padding: theme.spacing(10),
    // [theme.breakpoints.up('lg')]: {
    //   padding: theme.spacing(10),
    //   paddingRight: 100,
    // },
  },
}));

export default function MainFeaturedPost(props:any) {
  const classes = useStyles();
  const { post } = props;
  const router = useRouter();

  return (
    <Paper
      className={classes.mainFeaturedPost}
      style={{ backgroundImage: `url(${post.image})` }}
    >
      {
        <img
          style={{ display: "none" }}
          src={post.image}
          alt={post.imageText}
        />
      }
      <Grid container>
        <Grid item md={6}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              align="center"
              gutterBottom
            >
              <Box fontWeight="fontWeightBold">{post.title}</Box>
            </Typography>
          </div>
        </Grid>
      </Grid>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="45vh"
      >
        <Link variant="subtitle1" href="#">
          <Button
            onClick={() => router.push("/products")}
            variant="contained"
            size="large"
            color="primary"
          >
            {post.linkText}
          </Button>
        </Link>
      </Box>
    </Paper>
  );
}

MainFeaturedPost.propTypes = {
  post: PropTypes.object,
};
