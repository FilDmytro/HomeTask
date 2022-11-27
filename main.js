const IPA_key = "1e877084";
const wrapTitle = document.querySelector(".wrap-title");
const headerTitle = document.querySelector(".header-title");

function mySearch() {
  let current;
  const input = document.querySelector("#search").value;
  const omdbapiRepoURL = `http://www.omdbapi.com/?apikey=${IPA_key}&s=${input}&page=${current}`;

  fetch(omdbapiRepoURL)
    .then((result) => {
      console.log(result)
      if(result.ok == true) {
        return result.json()
      } else if (result.ok == false){
        return error();
      }
    })
    .then((dataMovies) => {
      console.log(dataMovies);
      if (dataMovies.Response === 'False') {
        return error();
      }
      document.querySelector(".wrap-title").innerHTML = "";
      errorResponse.innerHTML = '';
      dataMovies.Search.forEach(renderHTMLpage);
      pagination();
    });
    
}

const searchBtn = document.querySelector(".search-btn");
searchBtn.addEventListener("click", mySearch);

function renderHTMLpage(data) {
  const wrapItem = document.createElement("div");
  const titleImg = document.createElement("img");
  const titleInfo = document.createElement("div");
  const titleName = document.createElement("h3");
  const titleYear = document.createElement("p");
  const titleType = document.createElement("p");
  let btnMore = document.createElement("button");

  titleName.innerHTML = `${data.Title}`;
  titleYear.innerHTML = `Release year: ${data.Year}`;
  titleType.innerHTML = `Type: ${data.Type}`;
  btnMore.innerHTML = `more`;
  titleImg.src = data.Poster;

  wrapTitle.append(wrapItem);
  wrapItem.append(titleImg, titleInfo);
  titleInfo.append(titleName, titleYear, titleType, btnMore);

  wrapItem.classList.add("box-item");
  titleInfo.classList.add("about-movi");
  titleName.classList.add("header-movi");
  titleYear.classList.add("text-movi");
  titleType.classList.add("text-movi");

  btnMore.classList.add("btn-more");
  btnMore.setAttribute("id", data.imdbID);
  const imdbID = data.imdbID;

  btnMore.addEventListener("click", moreInfo);

  function moreInfo(e) {
    const omdbapiMovieURL = `http://www.omdbapi.com/?apikey=${IPA_key}&i=${imdbID}`;
    console.log(e.currentTarget.value);
    fetch(omdbapiMovieURL)
      .then((result) => result.json())
      .then((data) => {
        renderHTMLmoreInfo(data);
        btnMore.setAttribute("disabled", true);
      });
  }

  function renderHTMLmoreInfo(data) {
    const runTime = document.createElement("p");
    const actors = document.createElement("p");
    const boxOffice = document.createElement("p");
    const country = document.createElement("p");
    const director = document.createElement("p");
    const genre = document.createElement("p");
    const language = document.createElement("p");
    const plot = document.createElement("p");

    runTime.innerHTML = `${data.Runtime}`;
    actors.innerHTML = `${data.Actors}`;
    boxOffice.innerHTML = `${data.BoxOffice}`;
    country.innerHTML = `${data.Country}`;
    director.innerHTML = `${data.Director}`;
    genre.innerHTML = `${data.Genre}`;
    language.innerHTML = `${data.Language}`;
    plot.innerHTML = `${data.Plot}`;

    runTime.classList.add("text-movi");
    actors.classList.add("text-movi");
    boxOffice.classList.add("text-movi");
    country.classList.add("text-movi");
    director.classList.add("text-movi");
    genre.classList.add("text-movi");
    language.classList.add("text-movi");
    plot.classList.add("text-movi");

    titleInfo.append(
      runTime,
      actors,
      boxOffice,
      country,
      director,
      genre,
      language,
      plot
    );
  }
}

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

    this.render = (container = document.body) => {
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
    input = document.querySelector("#search").value;
    omdbapiRepoURL = `http://www.omdbapi.com/?apikey=${IPA_key}&s=${input}&page=${current}`;
    fetch(omdbapiRepoURL)
      .then((result) => result.json())
      .then((dataMovies) => {
        console.log(dataMovies);
        document.querySelector(".wrap-title").innerHTML = "";
        dataMovies.Search.forEach(renderHTMLpage);
      });
  });
}

const errorResponse = document.createElement('h2');
errorResponse.classList.add('error');
headerTitle.append(errorResponse);

function error() {
  errorResponse.innerHTML = 'Movie not Found';
}