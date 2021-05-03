import React, { useMemo, useState, useEffect } from "react";


import Table from "./Table";
import "./App.css";




function App() {
    const columns = useMemo(
        () => [

            {
                Header: "Title",
                accessor: 'title'
            },
            {
                Header: "Author",
                accessor: 'author'
            },

            {
                Header: "Year",
                accessor: 'year'
            },
            {
                Header: "Claim",
                accessor: 'claim'
            },
            {
                Header: "SE Practice",
                accessor: 'se_practice'

            },
            {
                Header: "Stength of Evidence",
                accessor: 'strength_of_evidence'
            }

        ],
        []
    );

    const data = [
        {
            author: 'Aniche, M F and Testing, MA Gerosa Software and {Verification} and {and} and {2010}',
            description: '',
            title: "Most common mistakes in test-driven development practice: Results from an online survey with developers",
            journal: '',
            year: "2017",
            volume: 0,
            number: 0,
            pages: '',
            month: '',
            url: '',
            DOI: '',
            claim: 'Code quality',
            strength_of_evidence: 'Weak',
            se_practice: 'TDD',
            __v: 0
        },
        {
            author: 'Janzen, D S, Saiedian, H ',
            description: '',
            title: 'Does Test-Driven Development Really Improve Software Design Quality',
            journal: 'Software, IEEE',
            year: '2008',
            volume: 25,
            number: 2,
            pages: '77--84',
            month: '',
            url: '',
            DOI: '',
            claim: 'CI CD',
            strength_of_evidence: 'Strong',
            se_practice: 'TDD',
            __v: 0
        },
        {
            author: '',
            description: '',
            title: 'A prototype empirical evaluation of test driven development - Software Metrics, 2004. Proceedings. 10th International Symposium on',
            journal: '',
            year: '2001',
            volume: 0,
            number: 0,
            pages: '',
            month: 'aug',
            url: '',
            DOI: '',
            claim: 'Code quality',
            strength_of_evidence: 'Strong',
            se_practice: 'TDD',
            __v: 0
        },
        {
            author: 'Romano, Simone and Fucci, Davide and Baldassarre, Maria Teresa and Caivano, Danilo and Scanniello, Giuseppe ',
            description: '',
            title: 'An Empirical Assessment on Affective Reactions of Novice Developers when Applying Test-Driven Development',
            journal: 'arXiv.org',
            year: '2019',
            volume: 0,
            number: 0,
            pages: 'arXiv:1907.12290',
            month: 'jul',
            url: '',
            DOI: '',
            claim: 'Pair Programming',
            strength_of_evidence: 'Strong',
            se_practice: 'TDD',
            __v: 0
        },
        {
            author: '',
            description: '',
            title: 'Evaluating Test- Driven Development in an Industry - Sponsored Capstone Project',
            journal: 'IEEE',
            year: '2009',
            volume: 0,
            number: 0,
            pages: '',
            month: 'mar',
            url: '',
            DOI: '',
            claim: 'Code quality',
            strength_of_evidence: 'Weak',
            se_practice: 'TDD',
            __v: 0
        },
        {
            author: 'Siniaalto, Maria and Abrahamsson, Pekka ',
            description: '',
            title: 'A Comparative Case Study on the Impact of Test-Driven Development on Program Design and Test Coverage',
            journal: 'arXiv.org',
            year: '2017',
            volume: 0,
            number: 0,
            pages: 'arXiv:1711.05082',
            month: 'nov',
            url: '',
            DOI: '',
            claim: 'Code quality',
            strength_of_evidence: 'Strong',
            se_practice: 'TDD',
            __v: 0
        }

    ];

    return (
        <div className="App">
            <h1>SEEDS PROJECT TEAM 24.</h1>
            <Table columns={columns} data={data} />
        </div>
    );
}

export default App;