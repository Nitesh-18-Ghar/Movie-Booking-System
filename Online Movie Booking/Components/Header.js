import React, { useEffect, useState } from "react";
import{AppBar,Autocomplete,Box,Tab,Tabs,TextField,Toolbar}from "@mui/material";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import { getAllMovies } from "../api-helpers/api-helpers";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { adminActions, userActions } from "../store";
// const dummyArray = ["eMemory", "Brahmastra", "OK", "PK"];
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAdminLoggedIn = useSelector((state) => state.admin.isLoggedIn);
  const isUserLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const [movies, setMovies] = useState([]);
  const [value, setValue] = useState(false);

  useEffect(() => {
    getAllMovies()
      .then((data) => {
        if (data && data.movies) setMovies(data.movies);
      })
      .catch((err) => console.log(err));
  }, []);

  const logout = (isAdmin) => {
    dispatch(isAdmin ? adminActions.logout() : userActions.logout());
    navigate("/");
  };

  const handleChange = (e, val) => {
    const movie = movies.find((m) => m.title === val);
    if (!movie) return;
    if (isUserLoggedIn) navigate(`/booking/${movie._id}`);
  };
}

export default Header;
