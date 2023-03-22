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

function PublicPost({ title, price, photo, id, date, sale, username }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const token = useSelector((state) => state.value);

    return (
        <Card sx={{}}>
            <CardHeader title={username} color="primary" />
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
        </Card>
    );
}

export { PublicPost };
