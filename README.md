# GraphQL Recipe App

This repository contains a simple GraphQL-based recipe app built with Node.js, Appolo and MongoDB. The app provides a GraphQL API for managing recipes and reviews.
This mini project is the just for practise your graphql skills.

## Table of Contents
1. [Models](#models)
   - [Recipe Model](#recipe-model)
   - [Review Model](#review-model)

2. [GraphQL](#graphql)
   - [Type Definitions](#type-definitions)
   - [Resolvers](#resolvers)

3. [Getting Started](#getting-started)
   - [Installation](#installation)
   - [Database Setup](#database-setup)
   - [Run the Server](#run-the-server)

## Models

### Recipe Model

The `Recipe` model represents a recipe with the following properties:

- `id` (ID): Unique identifier for the recipe.
- `title` (String): Title of the recipe.
- `description` (String): Description of the recipe.
- `difficulty` (String): Difficulty level, with options ["Easy", "Medium", "Hard"] (default: "Medium").
- `createdAt` (String): Timestamp when the recipe was created.
- `reviews` (Array of Reviews): Array containing review references associated with the recipe.

### Review Model

The `Review` model represents a review with the following properties:

- `id` (ID): Unique identifier for the review.
- `rating` (Float): Rating given for the recipe (min: 1, max: 5).
- `comment` (String): Comment provided in the review.

## GraphQL

### Type Definitions

The GraphQL schema defines the following types:

- **Recipe**: Represents a recipe with fields (`id`, `title`, `description`, `difficulty`, `createdAt`, `reviews`).
- **Review**: Represents a review with fields (`id`, `rating`, `comment`).
- **Query**: Defines queries to fetch recipes and reviews.
- **Mutation**: Defines mutations to add, update, and delete recipes and reviews.

### Resolvers

Resolvers define the logic for handling GraphQL operations. Key resolvers include:

- **Query Resolvers**:
  - `recipes`: Fetch all recipes.
  - `recipe`: Fetch a specific recipe by ID.
  - `reviews`: Fetch all reviews.
  - `review`: Fetch a specific review by ID.

- **Mutation Resolvers**:
  - `addRecipe`: Add a new recipe.
  - `addReview`: Add a new review.
  - `updateRecipe`: Update an existing recipe.
  - `updateReview`: Update an existing review.
  - `deleteRecipe`: Delete a recipe.
  - `deleteReview`: Delete a review.

- **Recipe Resolvers**:
  - `reviews`: Fetch associated reviews for a recipe.

## Getting Started

### Installation

1. Clone the repository:
```bash
    git clone https://github.com/your-username/your-recipe-app.git
    cd your-recipe-app
    npm install
```


