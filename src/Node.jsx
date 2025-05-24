import React, { useState } from "react";
import { AiOutlineFolderAdd, AiFillFileAdd } from "react-icons/ai";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { MdDeleteOutline, MdEdit } from "react-icons/md";
function Node({ obj, addNode, deleteNode, editNode, addFolder }) {
  const [collapse, setCollapse] = useState(false);
  const [addingNode, setAddingNode] = useState(false);
  const [addingFolder, setAddingFolder] = useState(false);
  const [editing, setEditing] = useState(false);
  const addN = (e) => {
    e.preventDefault();
    addNode(e.target[0].value, obj.id);
    setAddingNode(false);
  };
  const addF = (e) => {
    e.preventDefault();
    addFolder(e.target[0].value, obj.id);
    setAddingFolder(false);
  };
  const del = (e) => {
    e.preventDefault();
    deleteNode(obj.id);
  };
  const edit = (e) => {
    e.preventDefault();
    editNode(obj.id ,e.target[0].value);
    setEditing(false);
  };
  return (
    <div className="mt-1">
      {editing ? (
        <form className="ml-4" onSubmit={edit}>
          <input type="text" className="border-2 border-gray-400" />
        </form>
      ) : (
        <>
          {obj.isFolder && (
            <span
              className="inline-flex text-xl cursor-pointer"
              onClick={() => setCollapse(!collapse)}
            >
              {collapse ? <FaCaretUp /> : <FaCaretDown />}
            </span>
          )}

          <span>{obj.name}</span>
          {obj.isFolder && (
            <span
              className="inline-flex text-xl cursor-pointer"
              onClick={() => setAddingFolder(!addingFolder)}
            >
              {" "}
              <AiOutlineFolderAdd />
            </span>
          )}
          {obj.isFolder && (
            <span
              className="inline-flex text-xl cursor-pointer"
              onClick={() => setAddingNode(!addingNode)}
            >
              {" "}
              <AiFillFileAdd />{" "}
            </span>
          )}
          <span
            className="inline-flex text-xl cursor-pointer"
            onClick={()=>setEditing(true)}
          >
            <MdEdit />
          </span>
          <span className="inline-flex text-xl cursor-pointer" onClick={del}>
            <MdDeleteOutline />
          </span>
          <br />
        </>
      )}
      {addingNode && (
        <form className="ml-4" onSubmit={addN}>
          <input type="text" className="border-2 border-gray-400" />
        </form>
      )}

      {addingFolder && (
        <form className="ml-4" onSubmit={addF}>
          <input type="text" className="border-2 border-gray-400" />
        </form>
      )}

      {collapse && obj.isFolder && (
        <div className="ml-4">
          {obj.children.map((node) => {
            return (
              <Node
                key={node.id}
                obj={node}
                addNode={addNode}
                deleteNode={deleteNode}
                editNode={editNode}
                addFolder={addFolder}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Node;
