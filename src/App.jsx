import { useState } from "react";
import "./App.css";
import Node from "./Node";
const files = [
  {
    id: 1,
    name: "public",
    isFolder: true,
    children: [
      {
        id: 2,
        name: "index.html",
        isFolder: false,
      },
    ],
  },
  {
    id: 3,
    name: "src",
    isFolder: true,
    children: [
      {
        id: 4,
        name: "components",
        isFolder: true,
        children: [
          {
            id: 5,
            name: "test",
            isFolder: true,
            children: [
              {
                id: 6,
                name: "file.js",
                isFolder: false,
              },
            ],
          },
        ],
      },
      {
        id: 7,
        name: "App.js",
        isFolder: false,
      },
    ],
  },
];
function App() {
  const [data, setData] = useState(files);

  const addNode = (newNode, parentId) => {
    const temp = structuredClone(data);
    const NODE = {
      id: Date.now(),
      name: newNode,
      isFolder: false,
    };
    const DFS = (curr) => {
      for (let node of curr) {
        if (node.id === parentId) {
          node.children.push(NODE);
          return true;
        }
        if (node.isFolder) {
          if (DFS(node.children)) return true;
        }
      }
    };
    DFS(temp);
    setData(temp);
  };
  const deleteNode = (nodeId) => {
    const temp = structuredClone(data);

    const DFS = (curr) => {
      for (let i = 0; i < curr.length; i++) {
        if (curr[i].id === nodeId) {
          curr.splice(i, 1); // remove the node
          return true;
        }
        if (curr[i].isFolder && curr[i].children) {
          if (DFS(curr[i].children)) return true;
        }
      }
      return false;
    };

    const success = DFS(temp);
    if (success) {
      setData(temp);
    } else {
      console.warn("Node not found");
    }
  };

  const editNode = (nodeId, newName) => {
    const DFS = (curr) => {
      return curr.map((node) => {
        if (node.id === nodeId) {
          return { ...node, name: newName };
        }
        if (node.isFolder && node.children) {
          return { ...node, children: DFS(node.children) };
        }
        return node;
      });
    };

    const updatedTree = DFS(data); 
    setData(updatedTree);
  };

  const addFolder = (newNodeName, parentId) => {
    const NODE = {
      id: Date.now(),
      name: newNodeName,
      isFolder: true,
      children: [],
    };
    const DFS = (curr) => {
      return curr.map((node) => {
        if (node.id === parentId) {
          return {
            ...node,
            children: [...(node.children || []), NODE],
          };
        }

        if (node.isFolder && node.children) {
          return {
            ...node,
            children: DFS(node.children),
          };
        }

        return node;
      });
    };

    const updatedTree = DFS(data);
    setData(updatedTree);
  };

  return (
    <div className="">
      {data.map((node) => {
        return <Node key={node.id} obj={node} addNode={addNode} deleteNode={deleteNode} editNode={editNode} addFolder={addFolder}/>;
      })}
    </div>
  );
}

export default App;
