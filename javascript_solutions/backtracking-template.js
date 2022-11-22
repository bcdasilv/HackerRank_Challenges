function isValidState(state) {
    // check if it is a valid solution
    return true;
}

function getCandidates(state) {
    return [];
}

function search(state, solutions) {
    if (isValidState(state)) {
        solutions.push(state.copy())
        // return
    }

    for (candidate of getCandidates(state)) {
        state.add(candidate);
        search(state, solutions);
        state.remove(candidate);
    }
}

function solve() { 
    solutions = [];
    state = new Set();//could be another DS (e.g., array, map)
    search(state, solutions);
    return solutions;
}