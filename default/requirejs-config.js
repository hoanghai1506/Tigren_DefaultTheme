var config = {

    // When load 'requirejs' always load the following files also
    deps: [
        "js/main"
    ],
    map: {
        '*': {
            'scpi': 'js/path/to/script'
        }
    }
};
