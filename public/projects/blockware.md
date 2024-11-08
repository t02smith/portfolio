
Millions of worldwide users enjoy video games, which are large pieces of software that require complex platforms to distribute them. This results in them being generally provided by multinational corporations.
However, this approach often results in these platforms:

- taking a large cut of revenue from developers,
- being prone to censorship from entities like governments,
- relying on a single platform to stay active, distribute games, and maintain a user’s
  ownership.

Modern web technology allows users to build and deploy their own platforms, which can
be made with the users in mind and not financial gain or pressure from governing bodies.

This project was submitted as part of my Part III project for my **BSc Computer Science** at the **University of Southampton**.

## 🏠 Architecture

Blockware uses the MVC pattern and is divided into the following three parts:

- **User Interface** The GUI built using Vue.js v3
- **Controller** Controller functions written in Go that can be called by the **User Interface**
- **Backend** Where things get interesting...See below.

![architecture diagram](/img/projects/blockware/layers.png)

### ♻️ P2P File Sharing

Blockware implements a custom P2P file sharing protocol for the large-scale distribution of games. Each game uploaded has a hash tree generated of it that describes the directory structure as well as the contents of each file using hashing.

![hash tree](/img/projects/blockware/hashtree.png)

Users exchange blocks of data in order to download games. Some notable features include:

- allowing for many concurrent TCP connections
- querying the blockchain to determine whether a user has purchased a game and should be sent a block
- users are identified by their Ethereum address and this is exchanged using signed messages
- peers are ranked based upon the success rate of requests sent to them
- it will randomly send requests to less desireable peers to try find better ones
- peers will exchange their list of peers upon forming a connection to help users discover other users

### 🪙 Ethereum

An Ethereum smart contract was written and deployed to Sepolia [(take a look here)](https://sepolia.etherscan.io/address/0xca2522592219954c270451f0994fafcaba8ff104). This contract has the following functionality:

- storing a list of all games uploaded to the network
- storing a record of which users have purchased which games
- storing metadata about each of the games that help to identify it
