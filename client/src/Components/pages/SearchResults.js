import React, { useEffect, useState } from "react";
import axios from "axios";
import NavigationBar from "./NavBar";
import "./SearchResults.css";
import SearchHeader from "../SearchComponents/SearchHeader";
import * as ReactBootStrap from "react-bootstrap";
import { useParams } from "react-router-dom";
import StarRating from "../SearchComponents/StarRating";
import { Dropdown } from "react-bootstrap";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useSelector } from "react-redux";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

function SearchResults() {
  const leftCustomValue = useSelector((state) => state.leftCustomValue);
  const operatorCustomValue = useSelector((state) => state.operatorCustomValue);
  const { term } = useParams();
  const { custom } = useParams();

  const [articles, setArticles] = useState([]);
  const [selectOption] = useState("Sort search by");
  // eslint-disable-next-line
  const [showModal, setShowModal] = useState(false);
  const [index, setIndex] = useState();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const sortByAuthor = (e) => {
    e.preventDefault();
    if (e.target.textContent.toLowerCase() === "author") {
      setArticles(
        [...articles].sort((a, b) =>
          a.author.trim() > b.author.trim() ? 1 : -1
        )
      );
    }
  };

  const sortByTitle = (e) => {
    e.preventDefault();
    if (e.target.textContent.toLowerCase() === "title") {
      setArticles(
        [...articles].sort((a, b) => (a.title.trim() > b.title.trim() ? 1 : -1))
      );
    }
  };

  const sortByYear = (e) => {
    e.preventDefault();
    if (e.target.textContent.toLowerCase() === "year") {
      setArticles(
        [...articles].sort((a, b) => (a.year.trim() < b.year.trim() ? 1 : -1))
      );
    }
  };

  const sortByJournal = (e) => {
    e.preventDefault();
    if (e.target.textContent.toLowerCase() === "journal") {
      setArticles(
        [...articles].sort((a, b) =>
          a.journal.trim().toLowerCase() > b.journal.trim().toLowerCase()
            ? 1
            : -1
        )
      );
    }
  };

  const sortByRating = (e) => {
    if (e.target.textContent.toLowerCase() === "rating") {
      setArticles(
        [...articles].sort((b, a) =>
          parseFloat(
            a.rating.reduce((a, v) => (a = a + v), 0) / a.rating.length
          ) >=
          parseFloat(
            b.rating.reduce((a, v) => (a = a + v), 0) / b.rating.length
          )
            ? 1
            : -1
        )
      );
    }
  };

  const sortByClaim = (e) => {
    e.preventDefault();
    if (e.target.textContent.toLowerCase() === "claim") {
      setArticles(
        [...articles].sort((a, b) => (a.claim.trim() > b.claim.trim() ? 1 : -1))
      );
    }
  };

  const sortByEvidence = (e) => {
    e.preventDefault();
    if (e.target.textContent.toLowerCase() === "Strength of Evidence") {
      setArticles(
        [...articles].sort((a, b) =>
          a.strength_of_evidence.trim() > b.strength_of_evidence.trim() ? 1 : -1
        )
      );
    }
  };

  useEffect(() => {
    axios.get("/getArticles").then((response) => {
      setArticles(response.data);
    });
  }, [term]);

  const filteredArticles = articles.filter((article) => {
    if (term === undefined || term === "custom") {
      if (custom !== undefined) {
        var left = leftCustomValue.items[0]
          .toString()
          .toLowerCase()
          .split(" ")
          .join("");
        var operator = operatorCustomValue.items[0];

        if (operator === "contains") {
          return Object.keys(article).some((key) =>
            key === left
              ? article[left]
                  .toString()
                  .toLowerCase()
                  .includes(custom.toLowerCase().trim())
              : false
          );
        } else if (operator === "does not contain") {
          return Object.keys(article).some((key) =>
            key === left
              ? !article[left]
                  .toString()
                  .toLowerCase()
                  .includes(custom.toLowerCase().trim())
              : false
          );
        } else if (operator === "begins with") {
          return Object.keys(article).some((key) =>
            key === left
              ? article[left]
                  .toString()
                  .toLowerCase()
                  .trim()
                  .startsWith(custom.toLowerCase().trim())
              : false
          );
        } else if (operator === "ends with") {
          return Object.keys(article).some((key) =>
            key === left
              ? article[left]
                  .toString()
                  .toLowerCase()
                  .trim()
                  .endsWith(custom.toLowerCase().trim())
              : false
          );
        } else if (operator === "is equal") {
          return Object.keys(article).some((key) =>
            key === left
              ? article[left].toString().toLowerCase().trim() ===
                custom.toLowerCase().trim()
              : false
          );
        }
      }
      return articles;
    } else {
      if (custom !== null) {
        return Object.keys(article).some(
          (key) =>
            article[key]
              .toString()
              .toLowerCase()
              .includes(term.toLowerCase().trim()) &&
            (key === left
              ? article[left]
                  .toString()
                  .toLowerCase()
                  .includes(custom.toLowerCase().trim())
              : false)
        );
      } else {
        return Object.keys(article).some((key) =>
          article[key]
            .toString()
            .toLowerCase()
            .includes(term.toLowerCase().trim())
        );
      }
    }
  });

  const toggleTrueFalse = () => {
    setShowModal(handleShow);
  };

  const ModalContent = () => {
    return (
      <Modal isOpen={show} toggle={handleClose}>
        <ModalHeader>Title: {articles[index].title}</ModalHeader>
        <ModalBody>Description: {articles[index].description}</ModalBody>
        <ModalBody>DOI: {articles[index].DOI}</ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => {
              toggleTrueFalse();
              window.open(articles[index].url);
            }}
          >
            Go to article
          </Button>
        </ModalFooter>
      </Modal>
    );
  };

  const renderArticles = (article, index) => {
    let sum = 0;
    if (article.rating != null) {
      for (let num of article.rating) {
        sum = sum + num;
      }
      sum = Math.round((sum / article.rating.length) * 10) / 10;
    }
    if (isNaN(sum)) sum = 0;

    return (
      <tr
        id={article}
        className="results"
        key={index}
        onClick={() => {
          setIndex(index);
          toggleTrueFalse();
        }}
      >
        <td>{article.author}</td>
        <td>{article.title}</td>
        <td>{article.se_practice}</td>
        <td>{article.year}</td>
        <td>{article.claim}</td>
        <td>{article.strength_of_evidence}</td>
      </tr>
    );
  };

  return (
    <div>
      <NavigationBar></NavigationBar>
      <div className="searchResults">
        <div className="searchHeader">
         
        </div>
        <div className="sortBy"></div>
        <p className="resultsNumber">
          Number of results for query "{term}" : {filteredArticles.length}
        </p>
        {show ? <ModalContent /> : null}
        <div className="searchData">
          <ReactBootStrap.Table striped bordered hover>
            <thead>
              <tr>
                <th style={{ width: "31.66%" }}>
                  <button className="tableButtons" onClick={sortByAuthor}>
                    Author
                  </button>
                </th>
                <th style={{ width: "31.66%" }}>
                  <button className="tableButtons" onClick={sortByTitle}>
                    Title
                  </button>
                </th>
                <th style={{ width: "16.66%" }}>
                  <button className="tableButtons" onClick={sortByJournal}>
                    SE Practice
                  </button>
                </th>
                <th style={{ width: "2.66%" }}>
                  <button className="tableButtons" onClick={sortByYear}>
                    Year
                  </button>
                </th>
                <th style={{ width: "2.66%" }}>
                  <button className="tableButtons" onClick={sortByClaim}>
                    Claim
                  </button>
                </th>
                <th style={{ width: "2.66%" }}>
                  <button className="tableButtons">Strength of Evidence</button>
                </th>
              </tr>
            </thead>
            <tbody>{filteredArticles.map(renderArticles)}</tbody>
          </ReactBootStrap.Table>
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
