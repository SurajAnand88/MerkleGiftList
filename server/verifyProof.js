// const { keccak256 } = require('ethereum-cryptography/keccak');
// const { hexToBytes, bytesToHex } = require('ethereum-cryptography/utils');

import { keccak256 } from "ethereum-cryptography/keccak.js";
import { bytesToHex, hexToBytes } from "ethereum-cryptography/utils.js";

const concat = (left, right) => keccak256(Buffer.concat([left, right]));

function verifyProof(proof, leaf, root) {
  proof = proof.map(({data, left}) => ({ 
    left, data: hexToBytes(data)
  }));
  // let data = keccak256(Buffer.from(leaf));
  let data = leaf;

  for (let i = 0; i < proof.length; i++) {
    if (proof[i].left) {
      data = concat(proof[i].data, data);
    } else {
      data = concat(data, proof[i].data);
    }
  }

  return bytesToHex(data) === root;
}

// module.exports = verifyProof;
export default verifyProof
