const bibtexParse = require('@orcid/bibtex-parse-js');


var sample = bibtexParse.toJSON('@proceedings{Anonymous:O7UPDeq-,title={A prototype empirical evaluation of test driven development - Software Metrics, 2004. Proceedings. 10th International Symposium on}, year={2001}, month={aug}}');

console.log(sample);