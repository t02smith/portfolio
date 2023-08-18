---
title: BlockWare
overview: A blockchain-based distributed market for buying and selling video games.
logo: /icons/projects/blockware.png
---
# Using Blockchain for Video Game Distribution

> [https://github.com/t02smith/part-iii-project](https://github.com/t02smith/part-iii-project) (Once it has been marked and I can make it public 😝)

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

<div class="image">

![architecture diagram](/img/projects/blockware/layers.png)
</div>

### ♻️ P2P File Sharing

Blockware implements a custom P2P file sharing protocol for the large-scale distribution of games. Each game uploaded has a hash tree generated of it that describes the directory structure as well as the contents of each file using hashing.

<div class="image">

![hash tree](/img/projects/blockware/hashtree.png)
</div>

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


## 🛠️ Tools used

<div class="tools">

![Go Badge](https://img.shields.io/badge/Go-00ADD8?logo=go&logoColor=fff&style=for-the-badge)
![JavaScript Badge](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000&style=for-the-badge)
![Vue.js Badge](https://img.shields.io/badge/Vue.js-4FC08D?logo=vuedotjs&logoColor=fff&style=for-the-badge)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![LaTeX](https://img.shields.io/badge/latex-%23008080.svg?style=for-the-badge&logo=latex&logoColor=white)
![Solidity Badge](https://img.shields.io/badge/Solidity-363636?logo=solidity&logoColor=fff&style=for-the-badge)
![Ethereum Badge](https://img.shields.io/badge/Ethereum-3C3C3D?logo=ethereum&logoColor=fff&style=for-the-badge)
![IPFS Badge](https://img.shields.io/badge/IPFS-65C2CB?logo=ipfs&logoColor=fff&style=for-the-badge)
</div>