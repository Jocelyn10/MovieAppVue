<template>
  <div class="home">
    <NavBar />
    <div id="main-section">
      <Sidebar />
      <MovieList />
    </div>
  </div>
</template>

<script>
import NavBar from "../components/Navbar";
import MovieList from "../components/MovieList";
import Sidebar from "../components/Sidebar";

export default {
  name: "Home",
  components: {
    NavBar,
    Sidebar,
    MovieList,
  },
};
</script>
