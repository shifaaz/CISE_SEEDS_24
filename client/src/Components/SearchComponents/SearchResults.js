import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
import * as ReactBootStrap from "react-bootstrap";
import "../pages/SearchResults.css";
import Alert from "react-bootstrap/Alert";

class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seMethod: "",
            claim: "",
            start: "",
            end: "",
            radio: "",
            getSeMethods: ["SE 2", "TDD", "SE 3"],
            getClaims: ["Refactoring", "Code quality", "CI CD",],
            error: "",
            value: "all years",
            listArticles: [],
            sortType: 'asc',
            sortBy: 'author',
            status: true
        };
        this.onSearch = this.onSearch.bind(this);
        // this.validate = this.validate.bind(this);
        this.load = this.load.bind(this);
    }
    componentDidMount() {
        this.setState({
            seMethod: this.props.match.params.seMethod,
            claim: this.props.match.params.claim,
            start: this.props.match.params.start,
            end: this.props.match.params.end,
            radio: this.props.match.params.radio
        });
        console.log(this.props.match.params.seMethod)
        this.onSearch(this.props.match.params.seMethod, this.props.match.params.claim, this.props.match.params.start, this.props.match.params.end, this.props.match.params.radio)
    }
    load() {
        this.onSearch();
    }
    onSearch(se, claim, start, end, radio) {
        let yr = new Date().getFullYear()
        if (radio == 'last 1 year') {
            let startYr = yr - 1;
            let endYr = yr;
            axios.get('/search/' + se + '/' + claim + '/' + startYr + '/' + endYr).then(response => {
                console.log(response.data)
                console.log(response.status);
                console.log(startYr);
                console.log(endYr);
                this.setState({
                    listArticles: response.data
                })
                if (this.state.listArticles != '') {
                    console.log("true")
                    this.setState({
                        status: false
                    })
                }

            }).catch(function (error) {
                console.log(error);
            })
        } else if (radio == 'last 5 year') {
            let startYr = yr - 5;
            let endYr = yr;
            axios.get('/search/' + se + '/' + claim + '/' + startYr + '/' + endYr).then(response => {
                console.log(response.data)
                console.log(response.status);
                this.setState({
                    listArticles: response.data
                })
                if (this.state.listArticles != '') {
                    console.log("true")
                    this.setState({
                        status: false
                    })
                }
            }).catch(function (error) {
                console.log(error);
            })
        } else if (radio == 'last 10 year') {
            let startYr = yr - 10;
            let endYr = yr;
            axios.get('/search/' + se + '/' + claim + '/' + startYr + '/' + endYr).then(response => {
                console.log(response.data)
                console.log(response.status);
                this.setState({
                    listArticles: response.data
                })
                if (this.state.listArticles != '') {
                    console.log("true")
                    this.setState({
                        status: false
                    })
                }
            }).catch(function (error) {
                console.log(error);
            })
        } else if (radio == 'All years') {
            axios.get('/searchWithoutYr/' + se + '/' + claim).then(response => {
                console.log(response.data)
                console.log(response.status);
                this.setState({
                    listArticles: response.data
                })
                if (this.state.listArticles != '') {
                    console.log("true")
                    this.setState({
                        status: false
                    })
                }
            }).catch(function (error) {
                console.log(error);
            })
        } else {
            let startYr = start;
            let endYr = end;
            let obj = { se, claim, startYr, endYr };
            axios.get('/search/' + se + '/' + claim + '/' + startYr + '/' + endYr).then(response => {
                console.log(response.data)
                console.log(response.status);
                this.setState({
                    listArticles: response.data
                })
                if (this.state.listArticles != '') {
                    console.log("true")
                    this.setState({
                        status: false
                    })
                }
            }).catch(function (error) {
                console.log(error);
            })

            console.log(obj);
        }
    }

    onSort = sortType => {
        this.setState({ sortType })
    }



    render() {

        const { listArticles, sortType, sortBy } = this.state;


        const sortedListArticles = this.state.listArticles.sort((a, b) => {
            const isReversed = (sortType === 'asc') ? 1 : -1;

            if (sortBy === 'author') {
                return isReversed * a.author.localeCompare(b.author)
            }
            if (sortBy === 'title') {
                return isReversed * a.title.localeCompare(b.title)
            }
            if (sortBy === 'se_practice') {
                return isReversed * a.se_practice.localeCompare(b.se_practice)
            }
            if (sortBy === 'year') {
                return isReversed * a.year.localeCompare(b.year)
            }
            if (sortBy === 'claim') {
                return isReversed * a.claim.localeCompare(b.claim)
            }
            if (sortBy === 'strength_of_evidence') {
                return isReversed * a.strength_of_evidence.localeCompare(b.strength_of_evidence)
            }
        })

        return (
            <div className={"container"} style={{ marginTop: "5%" }}>
                <div className="searchData">
                    <ReactBootStrap.Table striped bordered hover style={{ width: "100%" }}>
                        <thead>
                            <tr>
                                <th style={{ width: "16.66%" }}>
                                    <button className="tableButtons" onClick={() => { this.onSort(this.state.sortType === "desc" ? "asc" : "desc"); this.state.sortBy = 'author' }}>
                                        Author
                                </button>
                                </th>
                                <th style={{ width: "16.66%" }}>
                                    <button className="tableButtons" onClick={() => { this.onSort(this.state.sortType === "desc" ? "asc" : "desc"); this.state.sortBy = 'title' }}>
                                        Title
                                </button>
                                </th>
                                <th style={{ width: "16.66%" }}>
                                    <button className="tableButtons" onClick={() => { this.onSort(this.state.sortType === "desc" ? "asc" : "desc"); this.state.sortBy = 'se_practice' }}>
                                        SE Practice
                                </button>
                                </th>
                                <th style={{ width: "16.66%" }}>
                                    <button className="tableButtons" onClick={() => { this.onSort(this.state.sortType === "desc" ? "asc" : "desc"); this.state.sortBy = 'year' }}>
                                        Year
                                </button>
                                </th>
                                <th style={{ width: "16.66%" }}>
                                    <button className="tableButtons" onClick={() => { this.onSort(this.state.sortType === "desc" ? "asc" : "desc"); this.state.sortBy = 'claim' }}>
                                        Claim
                                </button>
                                </th>
                                <th style={{ width: "16.66%" }}>
                                    <button className="tableButtons" onClick={() => { this.onSort(this.state.sortType === "desc" ? "asc" : "desc"); this.state.sortBy = 'strength_of_evidence' }}>Strength of Evidence</button>
                                </th>
                            </tr>
                        </thead>


                        {!this.state.status ?

                            <tbody>
                                {sortedListArticles.map(item => {
                                    return (
                                        <tr>
                                            <td>{item.author}</td>
                                            <td>{item.title}</td>
                                            <td>{item.se_practice}</td>
                                            <td>{item.year}</td>
                                            <td>{item.claim}</td>
                                            <td>{item.strength_of_evidence}</td>
                                        </tr>
                                    )




                                })}
                            </tbody>


                            // <td><center><h2 className="text-danger" style={{ width: "100%" }}>No Entries for the Search!</h2></center></td>

                            :
                            <tbody>

                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <Alert variant="success">No Results Found</Alert>
                                    </td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>

                        }

                    </ReactBootStrap.Table>
                </div>
            </div>
        );
    }
}

SearchResults.propTypes = {};

export default SearchResults;