# Description

The proposed project aims to implement a MultiParty Escrow (MPE) protocol on the Cardano blockchain based on the outlined specifications. The MPE will facilitate secure, decentralized payment channels between clients and AI service providers within SingularityNET's platform. By leveraging Cardano’s Extended UTxO (EUTxO) model, this implementation will enable efficient token deposits, fund claims, and payment verification.

The project includes developing both on-chain smart contracts and off-chain infrastructure to manage channel creation, expiration, fund transfers, and security measures like signature validation. A strong emphasis will be placed on scalability, maintainability, and seamless integration into SingularityNET’s Marketplace, ensuring future-proofing for upgrades and optimizations.

![Architecture overview for MPE system](/images/deep-funding-mpe-overview.svg)

Through this project, we will deliver a robust and secure payment solution that aligns with Cardano’s architecture and SingularityNET's requirements, while providing clear documentation and practical tools for the community.

# Milestones

## Milestone 1: Whitepaper

Milestone Budget: `10'000$`

**Description**

This milestone focuses on creating a comprehensive whitepaper that outlines the full scope of the MPE implementation. The whitepaper will serve as a blueprint for the project, detailing the architecture, technical specifications, and integration strategies for the protocol. It will also include an analysis of Cardano’s EUTxO model and how it influences the design of the MPE solution.

**Deliverable**

- Publicly available whitepaper in PDF format or as a small website.
- Overview of the planned architecture, including diagrams and workflows.
- Detailed description of all systems and functionalities required by the RFP.
- Explanation of security considerations and scalability strategies.

## Milestone 2: Smart contract

Milestone Budget: `10'000$`

**Description**

This milestone involves developing the MPE’s core on-chain functionalities as a Cardano smart contract. The smart contract will enable token deposits, channel creation, fund claims, and expiration management. Security measures, such as signature validation and replay attack prevention, will also be implemented.

**Deliverable**

- Fully functional smart contract source code published in a public Git repository.
- Deployment of the smart contract on the Cardano preview testnet.
- Documentation of the contract functionality and usage.

## Milestone 3: Frontend & Backend

Milestone Budget: `10'000$`

**Description**

This milestone focuses on developing a user-friendly frontend and backend to interact with the MPE smart contract. The frontend will provide an intuitive interface for clients and service providers to manage payment channels, while the backend will handle off-chain operations such as signature generation and payment verification.

**Deliverable**

- Smart contract source code accessible in a public Git repository.
- Preview release of the frontend and backend connected to the deployed testnet contract.
- Functionalities include channel creation, fund management, and signature generation/validation.

## Milestone 4: Deployment and bugfixing

Milestone Budget: `10'000$`

**Description**
The final milestone focuses on deploying the MPE protocol to production and ensuring it is fully operational. Comprehensive testing and bug fixes will be performed to guarantee reliability and security. Additionally, the whitepaper will be updated with final details on integration and usage.

**Deliverable**

- Production-ready release of the frontend, backend, and smart contract.
- Updated whitepaper with integration instructions and usage documentation.
- A fully operational and secure MPE protocol available on the Cardano mainnet.
