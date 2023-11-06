export const typeDefs = `#graphql
  type Recipe {
    id: ID!
    title: String!
    description: String!
    difficulty: String!
    createdAt: String!
    reviews: [Review]
  }

  type Review {
    id: ID!
    rating: Float!
    comment: String!
  }

  type Query {
    recipes: [Recipe]
    recipe(id: ID!): Recipe
    reviews: [Review]
    review(id: ID!): Review
  }

  type Mutation {
    addRecipe(recipe: addRecipeInput): Recipe
    addReview(review: addReviewInput): Review

    updateRecipe(id: ID!, edits: editRecipeInput!): Recipe
    updateReview(id: ID!, edits: editReviewInput!): Review

    deleteRecipe(id: ID!): [Recipe]
    deleteReview(id: ID!): [Review]
  }

  input addRecipeInput {
    title: String!
    description: String!
    difficulty: String!
  }

  input addReviewInput {
    rating: Float!
    comment: String!
  }

  input editRecipeInput {
    title: String
    description: String
    difficulty: String
    reviews: [ID]
  }

  input editReviewInput {
    rating: Float
    comment: String
  }
`;
