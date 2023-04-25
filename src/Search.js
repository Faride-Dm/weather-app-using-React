import React from "react";

function Search() {
  return (
    <div className="Search">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control search-input"
              autoComplete="off"
              onChange={updateCity}
            />
          </div>
          <div className="col-3 p-0">
            <input
              type="submit"
              className="btn btn-primary w-100"
              value="Search"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Search;
