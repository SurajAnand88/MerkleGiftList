// const express = require('express');
import express from 'express';
// const verifyProof = require('../utils/verifyProof');
// const {keccak256}= require('ethereum-cryptography/keccak')
// const {hexToBytes, bytesToHex} = require("ethereum-cryptography/utils")
// const MerkleTree = require('../utils/merkleTree');
// const leaves = require('../utils/niceList.json')
import cors from 'cors';
import { keccak256 } from 'ethereum-cryptography/keccak.js';
import MerkleTree from './MerkleTree.js';
import leave from './niceList.json' assert { type: "json" };
import verifyProof from './verifyProof.js';

const port = 1225;

const app = express();
app.use(express.json());
app.use(cors())

let leaves = JSON.parse(JSON.stringify(leave));

const MERKLE_ROOT = '';

app.post('/gift',async (req, res) => {
  // grabbing the parameters from the front-end here
  try {
    const {root, index, proof} = req.body;
    if(index>=0){
      let node = keccak256(Buffer.from(leaves[index]))
      let  tree = new MerkleTree(leaves)
    
    
    const isInTheList =  verifyProof(proof, node, root);
    if(isInTheList) {
      res.send("You got a toy robot!");
    }
    else {
      res.send("You are not on the list :(");
    }
    }else{
      res.send("You are not on the list	")
    }
  } catch (error) {
    res.send(error.message)
  }
});



app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
