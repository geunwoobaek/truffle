pragma solidity ^0.5.0;

import "./Branch.sol";
import "./LeafC.sol";
import "./LibraryA.sol";

contract Root is Branch {
  uint root;

  function addToRoot(uint a, uint b) public {
    root = LibraryA.add(a, b);
  }
}
