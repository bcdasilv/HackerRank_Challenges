/**
 * DFS Recursive version
 * Start with the root: dfs(root)
 * if (!node) return
 * 
 * if(node.value === target) return node; //or do something
 * 
 * dfs(node.left)
 * dfs(node.right)
 * // or dfs each of its children if it's not a binary tree
 */

//DFS iterative version
const dfs = (node) => { 
    stack.push(node);
    while (!stack.isEmpty()) {
       node = stack.pop();
       if (visited[node] == false) {
          visited[node] = true;
          console.log(`we visited ${node}`)
          for (let j = 0; j < graphAdj[node].length; j++) {
             if (graphAdj[node][j] === 1){
                 stack.push(j);
              }
           }
      }
    }
}

/**
 * Create a queue
 * Queue the first element
 * Start a while queue is not empty
 * De-queue a node, if matches your search do something or return the node
 * Otherwise, queue each of it's children (or left and right if it's a bin tree)
 */

const bfs = (node) => { 
    visited[node] = true;
    queue.equeue(node); 
     while (!queue.isEmpty()) {
         let visiting = queue.dequeue();
         console.log(`we visited ${visiting}`)
         for (let j = 0; j < graphAdj[visiting].length; j++) {
            if ((graphAdj[visiting][j] === 1) && (visited[j] === false)) {  
            visited[j] = true;
            queue.equeue(j);
           }
        }
      }
 }