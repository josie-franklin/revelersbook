import React, { useEffect } from "react";
// import { Link } from "react-router-dom";

const Results = (props) => {
  const { searchState } = props;

  useEffect(() => {
    if (searchState === "") {
      return;
    }
    console.log(searchState);
    // document.querySelector("#result").textContent = searchState;
  }, [searchState]);

  return (
    <section>
      <div id="result"></div>
      <table>
        <thead>
          <tr>
            <th>Book #</th>
            <th>Title</th>
            <th>Composer</th>
            <th>Arranger</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>001</td>
            <td>Example</td>
            <td>Example</td>
            <td>Example</td>
          </tr>
          <tr>
            <td>001</td>
            <td>Example</td>
            <td>Example</td>
            <td>Example</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Results;
