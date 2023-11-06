# GraphQL Recipe App

This repository contains a simple GraphQL-based recipe app built with Node.js, Appolo, and MongoDB. The app provides a GraphQL API for managing recipes and reviews.
This mini project is just for practicing your graphql skills.

## Table of Contents
1. [Models](#models)
   - [Recipe Model](#recipe-model)
   - [Review Model](#review-model)

2. [GraphQL](#graphql)
   - [Type Definitions](#type-definitions)
   - [Resolvers](#resolvers)

3. [Getting Started](#getting-started)
   - [Installation](#installation)
   - [My tests](#My-tests)

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
    git clone https://github.com/Devai-coding/graphQl-mini-app
    cd your-recipe-app
    npm install
```
2. and here is an example to fill your MongoDB database  :
Example MongoDB data for reviews:
```bash
[{
  "_id": {
    "$oid": "6548e4eeede863d219973b18"
  },
  "rating": 4,
  "comment": "Great experience! The recipe was amazing."
},
{
  "_id": {
    "$oid": "6548e515ede863d219973b19"
  },
  "rating": 5,
  "comment": "Nice recipe!!!"
},
{
  "_id": {
    "$oid": "6548eac7ede863d219973b23"
  },
  "rating": 4,
  "comment": "Not terrible after All!!!"
},
{
  "_id": {
    "$oid": "6548f4cdff496739bc03faf5"
  },
  "rating": 5,
  "comment": "Perfectoo !!!",
  "__v": 0
}]
```
Example MongoDB data for recipes:
```bash
   [{
  "_id": {
    "$oid": "6548e607ede863d219973b1e"
  },
  "title": "Delicious Pasta Recipe",
  "description": "A mouth-watering pasta dish that everyone loves!",
  "difficulty": "Medium",
  "createdAt": "2023-11-06T12:00:00Z",
  "reviews": [
    {
      "$oid": "6548e515ede863d219973b19"
    },
    {
      "$oid": "6548e4eeede863d219973b18"
    }
  ]
},
{
  "_id": {
    "$oid": "6548eaeaede863d219973b25"
  },
  "title": "Delicious Pasta Recipe",
  "description": "A mouth-watering pasta dish that everyone loves!",
  "difficulty": "Medium",
  "createdAt": "2023-11-06T12:00:00Z",
  "reviews": [
    {
      "$oid": "6548ea9fede863d219973b22"
    },
    {
      "$oid": "6548eac7ede863d219973b23"
    }
  ]
},
{
  "_id": {
    "$oid": "6548f3b94cfed4d0f9f4f081"
  },
  "title": "updated Recipe",
  "description": "This is the full desc of this recipe",
  "difficulty": "Hard",
  "reviews": [
    {
      "$oid": "6548f4cdff496739bc03faf5"
    },
    {
      "$oid": "6548eac7ede863d219973b23"
    }
  ],
  "createdAt": {
    "$date": "2023-11-06T14:10:01.213Z"
  },
  "__v": 0
}]
```
3. Run the Server
Start the GraphQL server:
```sh
npm start
```

The server will be available at http://localhost:4000 and you can test your projects with the Apollo Sandbox tool.

### My tests :
![image](https://github.com/Devai-coding/graphQl-mini-app/assets/113947156/80bad1c0-91b5-4d0f-bd1a-cc09642fa0d1)

![image](https://github.com/Devai-coding/graphQl-mini-app/assets/113947156/9003f85e-5d74-41ba-af2d-9bad135b0bfe)

![image](https://github.com/Devai-coding/graphQl-mini-app/assets/113947156/f6f719ef-228a-4ba4-a133-928e7cfaf78c)

![addReview](https://github.com/Devai-coding/graphQl-mini-app/assets/113947156/85ec8641-218a-4210-a115-004fb5180646)

![deleteMutation](https://github.com/Devai-coding/graphQl-mini-app/assets/113947156/700cf817-4aa0-4e2f-a800-26eb952fc47f)

![updateRecipe](https://github.com/Devai-coding/graphQl-mini-app/assets/113947156/5f2d87f5-55c4-47f0-9cab-74a0498952f7)

![updateReview](https://github.com/Devai-coding/graphQl-mini-app/assets/113947156/32a340df-dcb3-4030-a98d-8c3a0f13bc16)

Feel free to write your own solutions or to contribute additional questions, solutions, or improvements to existing content.
