## Project Description
The objective of this project is to build an application that distributes gifts based on a specific list of names. However, there is a limitation on the server's memory, allowing only one 32-byte value to be stored. The challenge is to develop a solution that utilizes the Merkle tree data structure to determine if a person is on the list efficiently, while minimizing memory usage.

### Key Features
- **Construction of the Merkle Tree:** Generate the list of names and construct a Merkle tree from it, where each leaf node represents a name hashed using a cryptographic hash function like SHA-256.
- **Root Hash in Server Memory:** Only the root hash of the Merkle tree (32-byte value) is stored in the server's memory as a compact representation of all the names on the list.
- **Checking for List Membership:** The server can verify if a name is on the list by traversing the Merkle tree based on the received name and comparing computed hash values with stored hashes.
- **Verification Process:** The server starts with the root hash, traverses the tree using sibling hashes, and confirms the name's presence based on a match.

### Benefits
- **Efficient Memory Usage:** By utilizing the Merkle tree structure, the application achieves efficient verification of names while using minimal memory.
- **Constant Memory Consumption:** The server's memory usage remains constant as only the root hash and sibling hashes need to be stored during the verification process.

This project demonstrates the effective use of the Merkle tree data structure to solve the challenge of gift distribution, ensuring secure and efficient verification while optimizing server memory resources.

Feel free to contribute and enhance the project!
