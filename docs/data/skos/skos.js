var nodes = new vis.DataSet([
    {id: 'Concept', label: 'Concept', group: 'concept'},
    {id: 'Collection', label: 'Collection', group: 'collection'},
    {id: 'ConceptScheme', label: 'ConceptScheme', group: 'conceptScheme'},
    {id: 'TopConcept', label: 'TopConcept', group: 'topConcept'},
    // Add more nodes here
]);

var edges = new vis.DataSet([
    {from: 'Concept', to: 'Collection', arrows: 'to', label: 'isContainedIn'},
    {from: 'Concept', to: 'ConceptScheme', arrows: 'to', label: 'isIn'},
    {from: 'ConceptScheme', to: 'TopConcept', arrows: 'to', label: 'hasTopConcept'},
    // Add more edges here
]);

var container = document.getElementById('network');
var data = {
    nodes: nodes,
    edges: edges
};
var options = {
    groups: {
        concept: {color: {background: 'red'}, borderWidth: 3},
        collection: {color: {background: 'blue'}, borderWidth: 3},
        conceptScheme: {color: {background: 'green'}, borderWidth: 3},
        topConcept: {color: {background: 'orange'}, borderWidth: 3},
    },
    layout: {
        hierarchical: {
            direction: 'UD',
            sortMethod: 'directed'
        }
    },
    edges: {
        font: {
            align: 'top'
        }
    }
};
var network = new vis.Network(container, data, options);
