import { logout, setAuthToken } from "../Storage/authSlice";
import { refreshAuthToken } from "../../common/refreshAuthToken";
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import { Post } from "../Post";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import axios from "axios";
import Typography from "@mui/material/Typography";

function MyPosts() {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.value);
    const [posts, setPosts] = useState([]);

    useEffect(async () => {
        try {
            const newToken = await refreshAuthToken(token);
            if (newToken) {
                dispatch(setAuthToken(newToken));
            } else {
                dispatch(logout());
                alert("Session caducated, please login again");
            }
            const postsResponse = await axios.get(
                `${process.env.REACT_APP_BACKEND_HOST}/post?user_id=${token.id}&token=${token.token}`,
                {
                    headers: {
                        "x-api-key": process.env.REACT_APP_TOKEN_KEY,
                    },
                }
            );
            setPosts(postsResponse.data.data.response[0]);
            console.log(posts);
        } catch (err) {
            console.error(err);
            alert("Error getting posts");
        }
    }, []);
    return (
        <>
            <Box
                sx={{
                    flexGrow: 1,
                    justifyContent: "center",
                    display: "flex",
                }}
            >
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <Typography variant="h3" align="center" color="primary">
                            My Posts
                        </Typography>
                    </Grid>
                    {posts.length > 0 ? (
                        posts.map((post, index) => {
                            return (
                                <Grid item xs={4} key={index}>
                                    <Post
                                        title={post.name.S}
                                        price={post.price.S}
                                        photo={post.photo.S}
                                        id={post.id.S}
                                        date={post.createdAt.S}
                                        sale={post.sale.BOOL}
                                    />
                                </Grid>
                            );
                        })
                    ) : (
                        <Typography variant="h5" align="center">
                            You dont have any posts yet. Start posting!
                        </Typography>
                    )}
                </Grid>
            </Box>
        </>
    );
}

export { MyPosts };
