//TODO: still not complete

// MaliciousCorp has managed to hack NotSoMaliciousCorp's network. NotSoMaliciousCorp's network can be visualized as a graph of nodes connected by electrical lines wherein each node can send,
// receive or act as a gateway for data.

// MaliciousCorp has managed to install a virus on one of these nodes. NotSoMaliciousCorp has managed to disable the virus from spreading to other nodes but the infected node remains infected.
// Also, the infected node still manages to corrupt data depending on its "virality". Corrupt data is lost and cannot be recovered!

// Virality describes the maximum distance from the infected node such that all data passing through those nodes become corrupted & lost.

// NotSoMaliciousCorp has managed to identify which node has been infected, and want to know if it possible to transport data between two given nodes without it being lost in transit and if yes,
// what would be the minimal cost for the same.

/*
Node will have a list of connected nodes.

node = {
  data: {},
  connected_nodes: [],
  visited: false,
  infected: false
}

*/

// output: min length without passing by an infected path
function check(source, dest, infected, virality) {
  /*  
  Traverse the network until we find the dest.
  We have to mark the nodes we have visited.
  We have to count the length.
  We have to keep track of the min_length var and update it.
  */
  
  const connected_nodes = source.connected_nodes;
  const queue = [];
  let pathLength = -1;
  let radiusCount = 0;

  for (node of connected_nodes) {
    if (!node.visited) {
      if (areTheSame(node, dest) && !areTheSame(dest, infected)) {
        return 1;
      }
      node.visited = true;
      queue.unshift(node);
    }
  }
  while (queue.length > 0 && pathLength === -1) {
    pathLength = checkHelper(queue.pop(), dest, infected, virality, 1, radiusCount);
  }

  return pathLength;
  
}

function checkHelper(source, dest, infected, virality, pathLength, radiusCount) {
  const connected_nodes = source.connected_nodes;
  const queue = [];
  if (connected_nodes.length > 0) {
    pathLength++;
  }
  for (node of connected_nodes) {
    if (!node.visited) {
        if (areTheSame(node, infected)){
          node.infected = true;
          radiusCount = 1;
        }
        else if (areTheSame(node, dest) && (radiusCount === 0) && !node.infected) {
          return pathLength;
        } else if (radiusCount >= 1 && radiusCount <= virality) {
            node.infected = true;
        }
        node.visited = true;
        queue.unshift(node);
      }
  }
  while (queue.length > 0) {
    if (radiusCount > 1) {
        if (radiusCount < virality)
            radiusCount++;
        else
            radiusCount = 0;
    }
    const result = checkHelper(queue.pop(), dest, infected, virality, pathLength, radiusCount);
    if (result != -1)
        return result;
  }  
  return -1;
}