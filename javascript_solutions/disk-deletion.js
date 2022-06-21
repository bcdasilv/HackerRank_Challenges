//Google
// Disks (name: "abc", source: "def", children: [disk1, disk2, disk3])
// disks = [{name: "abc", source: "def", children: ["123", "345", ..]}, {} ]

// Return a sequence of disk deletions, given that no disk can be 
// deleted until all of its children are also deleted
function cleanupDisks(disks) {
  // Traverse the tree of disks
  // all the way to the leaves
  // for each leaf, add to the sequence of deletions
  // for each node, once the subtree is visited/marked for deletion
  // add the node to the sequence of deletions
  
  //const output = []; //sequence of deletions
  const mapOutput = new Map();
  let count = 0;
  for (disk of disks) {
    if (disk.childen && disk.children.length > 0) {
      deleteDisk(disk.children, mapOutput, cout);
    }
    //output.push(disk);
    if (!mapOutput.has(disk.name)) {
      count++;
      mapOutput.set(disk.name, count);
    }
  }
  
  return buildSequence(mapOutput);
}

function deleteDisk(disks, mapOutput, count) {
  for (disk of disks) {
    if (disk.childen && disk.children.length > 0) {
      deleteDisk(disk.children, output);
    }
    if (!mapOutput.has(disk.name)) {
      count++;
      mapOutput.set(disk.name, count);
    }
  }
}

function buildSequence(mapOutput) {
  //Object.keys(mapOuput);
  // get the values of the map
  // iterate over the values and taking the name (key of the map).
  // mapOutput.values(); // this gives an iterator
}

/*
[d1, d2, d3, d4]

d1: (name: "abc", source: "", children: [d2, d3])
d2: (name: "abc", source: "", children: [])
d3: (name: "abc", source: "", children: [])
d4: (name: "abc", source: "", children: [])

output: [d2, d3, d1]
count = 4
  const mapOutput = {
    "d2": 1,
    "d3": 2,
    "d1": 3,
    "d4": 4
  }

d1: (name: "abc", source: "", children: [d2, d3])
d2: (name: "abc", source: "", children: [])
d3: (name: "abc", source: "", children: [d4])
d4: (name: "abc", source: "", children: [])

output: [d4, d2, d3, d1]

count = 4
  const mapOutput = {
    "d2": 1,
    "d4": 2,
    "d3": 3,
    "d1": 4
  }

*/