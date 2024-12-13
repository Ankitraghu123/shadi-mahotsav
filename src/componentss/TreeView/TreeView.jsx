import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./TreeView.css";
import { getUplineTree } from "../../Features/Franchise/FranchiseSlice";
import { Tooltip, OverlayTrigger } from 'react-bootstrap';  // Import Tooltip and OverlayTrigger from React Bootstrap

const MAX_DEPTH = 2; // Limit depth to 2, because root + 2 levels = 3 levels total

const TreeView = () => {
  const dispatch = useDispatch();
  const currentFranchise = useSelector(
    (state) => state.Franchise?.currentFranchise?.franchise
  );

  // Get tree data and loading state from Redux store
  const treeData = useSelector(
    (state) => state.Franchise?.uplineTree?.uplineTree
  );

  const { loading, error } = useSelector((state) => state.Franchise);

  // Dispatch action to fetch franchise tree based on current franchise ID
  useEffect(() => {
    if (currentFranchise?._id) {
      dispatch(getUplineTree(currentFranchise?._id));
    }
  }, [dispatch, currentFranchise?._id]);

  // Ensure every node has exactly 3 uplines
  const ensureThreeUplines = (uplines = []) => {
    const filledUplines = [...uplines];
    while (filledUplines.length < 3) {
      filledUplines.push({
        id: `empty-${filledUplines.length}-${Math.random()}`, // Unique placeholder ID
        name: "Empty",
        isPlaceholder: true,
      });
    }
    return filledUplines;
  };

  // Render tree recursively with depth control
  const renderTree = (node, depth = 0) => {
    if (!node || depth > MAX_DEPTH) return null; // Stop recursion beyond MAX_DEPTH

    // Add placeholders to ensure 3 uplines
    const uplinesWithPlaceholders = ensureThreeUplines(node.uplines);

    // Tooltip content that will be displayed on hover
    const tooltipContent = (
      <Tooltip id={`tooltip-${node?.node?.id}`}>
        <strong>Franchise Code:</strong> {node?.node?.code || 'N/A'}<br />
        <strong>Name:</strong> {node?.node?.name || 'NA'}<br />
        <strong>Email:</strong> {node?.node?.email || 'NA'}<br />
        <strong>Mobile Number:</strong> {node?.node?.refBy == currentFranchise?._id ? node?.node?.mobileNumber : 'NA'}<br />
        <strong>Country:</strong> {node?.node?.country || 'NA'}<br />
        <strong>State:</strong> {node?.node?.state || 'NA'}<br />
        <strong>City:</strong> {node?.node?.city || 'NA'}<br />
        <strong>Package:</strong> {node?.node?.package || 'NA'}<br />
        <strong>refTo:</strong> {node?.node?.refTo.length || 'NA'}<br />
      </Tooltip>
    );

    // Click handler to load the tree for the clicked franchise
    const handleFranchiseClick = (franchiseId) => {
      // Dispatch the action to get upline tree for the clicked franchise
      dispatch(getUplineTree(franchiseId));
    };

    return (
      <div className="tree-node">
        <div className="tree-content">
          <OverlayTrigger
            placement="bottom"
            overlay={tooltipContent}  // Use the tooltip content on hover
          >
            <img
              src={
                node.isPlaceholder
                  ? "https://paisavasool.online/Images/OO.GIF" // Placeholder image
                  : node?.node?.profilePicture
              }
              alt={node?.node?.name || "No Data"}
              className="tree-avatar"
              onClick={() => handleFranchiseClick(node?.node?._id)} // Add the click handler here
            />
          </OverlayTrigger>
          
          <div className="tree-text">
            <strong>{node?.node?.code || "N/A"}</strong>
            <br />
            {node?.node?.name || "No Name"}
          </div>
        </div>
        {uplinesWithPlaceholders.length > 0 && depth < MAX_DEPTH && ( // Only render children if not at max depth
          <div className="tree-children">
            {/* Long Horizontal Line */}
            <div className="tree-line-horizontal-long"></div>
            <div className="tree-children-nodes">
              {uplinesWithPlaceholders.map((child) => (
                <div className="tree-child" key={child.id}>
                  {/* Render Vertical Line Only If Not at Max Depth */}
                  {!child.isPlaceholder && depth + 1 < MAX_DEPTH && (
                    <div className="tree-line-vertical"></div>
                  )}
                  {renderTree(child, depth + 1)} {/* Pass current depth */}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div id="margin-top" className="back_area">
      <div className="card-body">
        <div className="col-md-8 tree-container">
          <h1>Tree Matrix</h1>
          {loading ? (
            <p>Loading...</p>
          ) : treeData ? (
            renderTree(treeData)
          ) : (
            <p>No Data Available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TreeView;
