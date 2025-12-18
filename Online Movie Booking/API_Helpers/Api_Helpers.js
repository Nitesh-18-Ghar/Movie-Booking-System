import axios from "axios";
import axios from "axios";

/* ================= MOVIES ================= */

export const getAllMovies = async () => {
  try {
    const res = await axios.get("/movie");
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const getMovieDetails = async (id) => {
  try {
    const res = await axios.get(`/movie/${id}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const addMovie = async (data) => {
  try {
    const res = await axios.post(
      "/movie",
      {
        title: data.title,
        description: data.description,
        releaseDate: data.releaseDate,
        posterUrl: data.posterUrl,
        featured: data.featured,
        actors: data.actors,
        admin: localStorage.getItem("adminId"),
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

/* ================= USER ================= */

export const sendUserAuthRequest = async (data, signup) => {
  try {
    const res = await axios.post(
      `/user/${signup ? "signup" : "login"}`,
      {
        name: signup ? data.name : "",
        email: data.email,
        password: data.password,
      }
    );
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const getUserDetails = async () => {
  try {
    const id = localStorage.getItem("userId");
    const res = await axios.get(`/user/${id}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

/* ================= ADMIN ================= */

export const sendAdminAuthRequest = async (data) => {
  try {
    const res = await axios.post("/admin/login", {
      email: data.email,
      password: data.password,
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const getAdminById = async () => {
  try {
    const adminId = localStorage.getItem("adminId");
    const res = await axios.get(`/admin/${adminId}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

/* ================= BOOKINGS ================= */

export const deleteBooking = async (id) => {
  try {
    const res = await axios.delete(`/booking/${id}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

