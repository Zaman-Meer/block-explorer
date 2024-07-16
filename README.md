# Block Explorer

A full-stack block explorer application that retrieves and displays data about recent blocks on the Ethereum blockchain. Built using Next.js, Tailwind CSS, Node.js, MongoDB, and TypeScript.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [API Endpoints](#api-endpoints)
- [Components](#components)
- [Database Schema](#database-schema)
- [Testing](#testing)
- [Deployment](#deployment)
- [Technical Choices](#technical-choices)
- [Feedback](#feedback)
- [License](#license)

## Features

- View Ethereum blocks with details like number, size, timestamp, nonce, gas limit, and hash.
- Sort blocks by various fields in ascending or descending order.
- Toggle display mode between decimal and hexadecimal for numeric fields.
- Delete individual blocks or all blocks from the database.

## Technologies Used

- **Frontend**: Next.js, React, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **TypeScript**: For enhanced type safety
- **APIs**: Ethereum blockchain API for fetching block data

## Getting Started

### Prerequisites

- Node.js (>= 14.x)
- MongoDB (local or cloud instance)
- Git

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/block-explorer.git
   cd block-explorer

   ```

2. **Install dependencies:**

   ```bash
   npm install

   ```

3. **Create a .env file in the root directory:**

   MONGODB_URI=your_mongodb_connection_string
   INFURA_PROJECT_ID=https://your.ethereum.api.url

4. **Run the development app:**

   ```bash
   npm run dev

   ```

5. **Open your browser and navigate to http://localhost:3000.**

## Folder Structure

````plaintext
block-explorer/
public
├── favicon.ico
├── globals.css
└── layout.tsx

src
├── app
│   ├── api
│   │   └── blocks
│   │       └── [id]
│   │           └── deleteAll
│   │               └── route.ts
│   ├── components
│   ├── hooks
│   ├── models
│   ├── scripts
│   ├── types
│   └── utils
├── .env.example
├── .env.local
├── .eslintrc.json
├── .gitignore
├── next-env.d.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
└── README.md
└── tailwind.config.ts
└── tsconfig.json


# API Endpoints

## Blocks API

### Retrieve All Blocks
- **Method:** `GET`
- **Endpoint:** `/api/blocks`
- **Description:** Retrieve all blocks.

### Retrieve a Block by ID
- **Method:** `GET`
- **Endpoint:** `/api/blocks/:id`
- **Description:** Retrieve a block by its ID.

### Add a New Block
- **Method:** `POST`
- **Endpoint:** `/api/blocks`
- **Description:** Add a new block.

### Delete a Block by ID
- **Method:** `DELETE`
- **Endpoint:** `/api/blocks/:id`
- **Description:** Delete a block by its ID.

### Delete All Blocks
- **Method:** `DELETE`
- **Endpoint:** `/api/blocks/deleteAll`
- **Description:** Delete all blocks.

# Components

## BlockItem
- **Description:** Displays individual block information with a delete option.

## SortDropdown
- **Description:** Allows users to select sorting criteria and order.

## BlockItemSkeleton
- **Description:** A loading skeleton component for fetching data.

# Database Schema

## MongoDB Schema for Blocks

```javascript
import mongoose from 'mongoose';

const BlockSchema = new mongoose.Schema({
  size: { type: Number, required: true },
  number: { type: Number, required: true, unique: true },
  timestamp: { type: Number, required: true },
  nonce: { type: String, required: true },
  gasLimit: { type: String, required: true },
  hash: { type: String, required: true, unique: true },
});

const Block = mongoose.model('Block', BlockSchema);
export default Block;



# Deployment

## Deploy the application using Vercel:

1. Sign up for a Vercel account.
2. Connect your GitHub repository.
3. Set up necessary environment variables in the Vercel dashboard.
4. Deploy your application.

---

# Technical Choices

- **Next.js:** Chosen for its server-side rendering capabilities and ease of use with React.
- **MongoDB:** Utilized for its flexibility and scalability in handling dynamic data.
- **Tailwind CSS:** Selected for its utility-first approach, allowing rapid UI development.

---

# Feedback

The application is designed to provide a user-friendly interface for exploring Ethereum blocks. Future improvements could include enhanced error handling and UI refinements based on user feedback.

---

# License

This project is licensed under the MIT License - see the LICENSE file for details.


````
