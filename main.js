const IPA_key = "1e877084";
const wrapMovies = document.querySelector(".wrap-movies");
const paginationWrap = document.querySelector(".pagination-wrap");
const headerTitle = document.querySelector(".header-title");

const mySearch = async () => {
  try {
    let current;
    let movies = [];
    const input = document.querySelector("#search").value;
    const moviesResponse = await axios.get(
      `http://www.omdbapi.com/?apikey=${IPA_key}&s=${input}&page=${current}`
    );
    movies = await moviesResponse.data.Search;
    pageCleener();
    renderMovies(movies);
    pagination();
  } catch (error) {
    invalidResponseHandler();
  }
};

function renderMovies(data) {
  data.forEach((dataMovie) => {
    const { Title, Year, Type, Poster, imdbID } = dataMovie;
    const wrapMovie = document.createElement("li");
    const moviePoster = document.createElement("img");
    const movieInfo = document.createElement("div");
    const movieName = document.createElement("h3");
    const movieYear = document.createElement("p");
    const movieType = document.createElement("p");
    let btnMore = document.createElement("button");

    movieName.innerHTML = `${Title}`;
    movieYear.innerHTML = `Release year: ${Year}`;
    movieType.innerHTML = `Type: ${Type}`;
    btnMore.innerHTML = `more`;
    moviePoster.src = Poster;
    moviePoster.setAttribute("alt", "Image");

    wrapMovie.classList.add("wrap-movie");
    movieInfo.classList.add("movie-inner");

    const movieDescrip = [movieName, movieYear, movieType, btnMore];
    movieDescrip.forEach((e) => e.classList.add("movie-about"));

    wrapMovies.append(wrapMovie);
    wrapMovie.append(moviePoster, movieInfo);
    movieInfo.append(movieName, movieYear, movieType, btnMore);

    btnMore.setAttribute("id", imdbID);
    btnMore.addEventListener("click", moreInfo);

    async function moreInfo() {
      try {
        let moreInfoData = [];
        const omdbapiMovieURL = await axios.get(
          `http://www.omdbapi.com/?apikey=${IPA_key}&i=${imdbID}`
        );
        moreInfoData = await omdbapiMovieURL.data;
        renderMoreInfo(moreInfoData);
        btnMore.setAttribute("disabled", true);
      } catch (error) {
        invalidResponseHandler();
      }
    }

    function renderMoreInfo(data) {
      const {
        Runtime,
        Actors,
        BoxOffice,
        Country,
        Director,
        Genre,
        Language,
        Plot,
      } = data;
      const runTimeMovie = document.createElement("p");
      const actorsMovie = document.createElement("p");
      const boxOfficeMovie = document.createElement("p");
      const countryMovie = document.createElement("p");
      const directorMovie = document.createElement("p");
      const genreMovie = document.createElement("p");
      const languageMovie = document.createElement("p");
      const plotMovie = document.createElement("p");

      runTimeMovie.innerHTML = `${Runtime}`;
      actorsMovie.innerHTML = `${Actors}`;
      boxOfficeMovie.innerHTML = `${BoxOffice}`;
      countryMovie.innerHTML = `${Country}`;
      directorMovie.innerHTML = `${Director}`;
      genreMovie.innerHTML = `${Genre}`;
      languageMovie.innerHTML = `${Language}`;
      plotMovie.innerHTML = `${Plot}`;

      const moreMovieInfo = [
        runTimeMovie,
        actorsMovie,
        boxOfficeMovie,
        countryMovie,
        directorMovie,
        genreMovie,
        languageMovie,
        plotMovie,
      ];

      moreMovieInfo.forEach((e) => e.classList.add("movie-about"));
      movieInfo.append(
        runTimeMovie,
        actorsMovie,
        boxOfficeMovie,
        countryMovie,
        directorMovie,
        genreMovie,
        languageMovie,
        plotMovie
      );
    }
  });
}

const searchBtn = document.querySelector(".search-btn");
searchBtn.addEventListener("click", mySearch);

function pagination() {
  const pageNumbers = (total, max, current) => {
    const half = Math.floor(max / 2);
    let to = max;

    if (current + half >= total) {
      to = total;
    } else if (current > half) {
      to = current + half;
    }

    let from = Math.max(to - max, 0);
    return Array.from({ length: Math.min(total, max) }, (_, i) => i + 1 + from);
  };

  function PaginationButton(totalPages, maxPagesVisible = 10, currentPage = 1) {
    let pages = pageNumbers(totalPages, maxPagesVisible, currentPage);
    let currentPageBtn = null;
    const buttons = new Map();
    const disabled = {
      start: () => pages[0] === 1,
      prev: () => currentPage === 1 || currentPage > totalPages,
      end: () => pages.slice(-1)[0] === totalPages,
      next: () => currentPage >= totalPages,
    };
    const frag = document.createDocumentFragment();
    const paginationButtonContainer = document.createElement("div");
    paginationButtonContainer.className = "pagination-buttons";

    const createAndSetupButton = (
      label = "",
      cls = "",
      disabled = false,
      handleClick
    ) => {
      const buttonElement = document.createElement("button");
      buttonElement.textContent = label;
      buttonElement.className = `page-btn ${cls}`;
      buttonElement.disabled = disabled;
      buttonElement.addEventListener("click", (e) => {
        handleClick(e);
        this.update();
        paginationButtonContainer.value = currentPage;
        paginationButtonContainer.dispatchEvent(
          new CustomEvent("change", { detail: { currentPageBtn } })
        );
      });

      return buttonElement;
    };

    const onPageButtonClick = (e) =>
      (currentPage = Number(e.currentTarget.textContent));

    const onPageButtonUpdate = (index) => (btn) => {
      btn.textContent = pages[index];

      if (pages[index] === currentPage) {
        currentPageBtn.classList.remove("active");
        btn.classList.add("active");
        currentPageBtn = btn;
        currentPageBtn.focus();
      }
    };

    buttons.set(
      createAndSetupButton(
        "start",
        "start-page",
        disabled.start(),
        () => (currentPage = 1)
      ),
      (btn) => (btn.disabled = disabled.start())
    );

    buttons.set(
      createAndSetupButton(
        "prev",
        "prev-page",
        disabled.prev(),
        () => (currentPage -= 1)
      ),
      (btn) => (btn.disabled = disabled.prev())
    );

    pages.map((pageNumber, index) => {
      const isCurrentPage = currentPage === pageNumber;
      const button = createAndSetupButton(
        pageNumber,
        isCurrentPage ? "active" : "",
        false,
        onPageButtonClick
      );

      if (isCurrentPage) {
        currentPageBtn = button;
      }

      buttons.set(button, onPageButtonUpdate(index));
    });

    buttons.set(
      createAndSetupButton(
        "next",
        "next-page",
        disabled.next(),
        () => (currentPage += 1)
      ),
      (btn) => (btn.disabled = disabled.next())
    );

    buttons.set(
      createAndSetupButton(
        "end",
        "end-page",
        disabled.end(),
        () => (currentPage = totalPages)
      ),
      (btn) => (btn.disabled = disabled.end())
    );

    buttons.forEach((_, btn) => frag.appendChild(btn));
    paginationButtonContainer.appendChild(frag);

    this.render = () => {
      const container = document.querySelector(".pagination-wrap");
      container.appendChild(paginationButtonContainer);
    };

    this.update = (newPageNumber = currentPage) => {
      currentPage = newPageNumber;
      pages = pageNumbers(totalPages, maxPagesVisible, currentPage);
      buttons.forEach((updateButton, btn) => updateButton(btn));
    };

    this.onChange = (handler) => {
      paginationButtonContainer.addEventListener("change", handler);
    };
  }

  const paginationButtons = new PaginationButton(10, 5);

  paginationButtons.render();

  paginationButtons.onChange((e) => {
    current = e.target.value;
    const mySearch = async () => {
      try {
        let movies = [];
        const input = document.querySelector("#search").value;
        const moviesResponse = await axios.get(
          `http://www.omdbapi.com/?apikey=${IPA_key}&s=${input}&page=${current}`
        );
        movies = await moviesResponse.data.Search;
        document.querySelector(".wrap-movies").innerHTML = "";
        renderMovies(movies);
      } catch (error) {
        invalidData();
      }
    };
    mySearch();
  });
}

const errorResponse = document.createElement("h2");
errorResponse.classList.add("error");
headerTitle.append(errorResponse);

function invalidData() {
  errorResponse.innerHTML = "Something went wrong";
}

function invalidResponseHandler() {
  errorResponse.innerHTML = "Movie not Found";
}

function pageCleener() {
  document.querySelector(".wrap-movies").innerHTML = "";
  document.querySelector(".pagination-wrap").innerHTML = "";
  errorResponse.innerHTML = "";
}
