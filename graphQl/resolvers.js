import Recipe from "../models/recipe.js";
import Review from "../models/reviews.js";

const resolvers = {
  Query: {
    async recipes() {
      try {
        const allRecipes = await Recipe.find();
        return allRecipes;
      } catch (error) {
        console.log("Error fetching recipes:", error);
      }
    },
    async recipe(_, args) {
      try {
        const recipe = await Recipe.findById(args.id);
        return recipe;
      } catch (error) {
        console.log("Error fetching a recipe: ", error);
      }
    },
    async reviews() {
      try {
        const allReviews = await Review.find();
        return allReviews;
      } catch (error) {
        console.log("Error fetching recipes:", error);
      }
    },
    async review(_, args) {
      try {
        const review = await Review.findById(args.id);
        return review;
      } catch (error) {
        console.log("Error fetching a review: ", error);
      }
    },
  },
  Recipe: {
    async reviews(parent) {
      try {
        const reviews = await Review.find({ _id: { $in: parent.reviews } });
        return reviews;
      } catch (error) {
        console.log("Error fetching reviews for recipe: ", error);
      }
    },
  },
  Mutation: {
    async addRecipe(_, args) {
      try {
        const newRecipe = await Recipe.create(args.recipe);
        return newRecipe;
      } catch (error) {
        console.log("Error adding a recipe. ", error);
      }
    },
    async addReview(_, args) {
      try {
        const newReview = await Review.create(args.review);
        return newReview;
      } catch (error) {
        console.log("Error adding a review. ", error);
      }
    },

    async updateRecipe(_, args) {
      try {
        // $set operator in MongoDB will only replace the fields that are specified
        // in the object. If a field is not specified in the object,
        // then the old value of that field will be kept.
        const updatedRecipe = await Recipe.findByIdAndUpdate(
          args.id,
          {
            $set: {
              title: args.edits.title,
              description: args.edits.description,
              difficulty: args.edits.difficulty,
            },
            // for the reviews we will only push the new reviews
            $push: { reviews: { $each: args.edits.reviews } },
          },
          { new: true }
        );
        return updatedRecipe;
      } catch (error) {
        console.log("Error editing the recipe. ", error);
      }
    },
    async updateReview(_, args) {
      try {
        const UpdatedReview = await Review.findByIdAndUpdate(
          args.id,
          args.edits,
          { new: true }
        );
        return UpdatedReview;
      } catch (error) {
        console.log("Error editing the review. ", error);
      }
    },

    async deleteRecipe(_, args) {
      try {
        await Recipe.findByIdAndDelete(args.id);
        const remainingRecipes = await Recipe.find();
        return remainingRecipes;
      } catch (error) {
        console.log("Error delelting the recipe. ", error);
      }
    },
    async deleteReview(_, args) {
      try {
        await Review.findByIdAndDelete(args.id);
        const remainingReviews = await Review.find();
        return remainingReviews;
      } catch (error) {
        console.log("Error delelting the review. ", error);
      }
    },
  },
};

export default resolvers;
