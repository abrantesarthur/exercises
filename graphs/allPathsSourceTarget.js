// https://leetcode.com/problems/all-paths-from-source-to-target/

const allPathsSourceTarget = function (graph) {
  return allPaths(graph, 0).filter((p) => p.length > 0);
};

const allPaths = function (graph, i) {
  let n = graph.length;
  if (i == n - 1) {
    return [[n - 1]];
  }
  if (graph[i].length == 0) {
    return [[]];
  }

  let paths = [];
  for (let j = 0; j < graph[i].length; j++) {
    paths = [...paths, ...allPaths(graph, graph[i][j])];
  }

  for (let j = 0; j < paths.length; j++) {
    if (paths[j].length > 0) {
      paths[j].unshift(i);
    }
  }
  return paths;
};
