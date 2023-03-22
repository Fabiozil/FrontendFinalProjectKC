import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { logout, setAuthToken } from "../Storage/authSlice";
import { refreshAuthToken } from "../../common/refreshAuthToken";
import Alert from "@mui/material/Alert";

function Post({ title, price, photo, id, date, sale }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const token = useSelector((state) => state.value);

    const deletePost = async () => {
        try {
            const result = prompt("Type 'delete' to delete this post");
            if (result !== "delete") {
                return;
            }
            const newToken = await refreshAuthToken(token);
            if (newToken) {
                dispatch(setAuthToken(newToken));
            } else {
                dispatch(logout());
                alert("Session caducated, please login again");
            }

            const postResponse = await axios.delete(
                `${process.env.REACT_APP_BACKEND_HOST}/post?id=${id}`,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        "x-api-key": process.env.REACT_APP_TOKEN_KEY,
                        "x-access-token": token.token,
                    },
                }
            );
            alert("Post deleted successfully!");
            navigate("/posts");
        } catch (err) {
            console.error(err);
            if (err.response.status === 403) {
                dispatch(logout());
                alert("Session caducated, please login again");
            } else {
                console.error(err);
                alert("Error deleting post");
            }
        }
    };

    const editPost = () => {
        navigate(
            `/edit-post?id=${id}&title=${title}&price=${price}&image${photo}&sale=${sale}`
        );
    };

    return (
        <Card sx={{}}>
            <CardHeader title={title} subheader={date} color="primary" />
            <CardMedia
                component="img"
                height="100vh"
                image={`https://post-images-backend-kk.s3.amazonaws.com/${photo}`}
                alt="Product image"
            />
            <CardHeader
                title={sale ? "For Sale" : "Searching for"}
                subheader={`$${price},00`}
            />
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites" onClick={deletePost}>
                    <DeleteIcon />
                </IconButton>
                <IconButton aria-label="share" onClick={editPost}>
                    <EditIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}

export { Post };
