import axios from 'axios';
import MerkleTree from "../../server/MerkleTree";
import leaves from '../../server/niceList.json';

const serverURL = "http://localhost:1225";

async function main(name) {
    
    let tree = new MerkleTree(leaves);
    let index = leaves.includes(name)? leaves.indexOf(name) : -1;
    let proof = tree.getProof(index);
    let root  = tree.getRoot();
     
    console.log(index, proof, root)
    const {data} = await axios.post(`${serverURL}/gift`, {index,proof,root});
    return data;
}

export default main;