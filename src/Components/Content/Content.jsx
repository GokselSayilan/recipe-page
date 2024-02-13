import React from "react";
import "./content.css";
function Content() {
  return (
    <div className="content">
      <div className="ingredients">
        <h2 className="ingredientsTitle headingM">Ingredients</h2>
        <ul className="ingredientsItems">
          <li className="ingredientsItem">
            <p className="ingredientsItemDesc bodyTextPrimary">
              2-3 large eggs
            </p>
          </li>
          <li className="ingredientsItem">
            <p className="ingredientsItemDesc bodyTextPrimary">
              Salt, to taste
            </p>
          </li>
          <li className="ingredientsItem">
            <p className="ingredientsItemDesc bodyTextPrimary">
              Pepper, to taste
            </p>
          </li>
          <li className="ingredientsItem">
            <p className="ingredientsItemDesc bodyTextPrimary">
              1 tablespoon of butter or oil
            </p>
          </li>
          <li className="ingredientsItem">
            <p className="ingredientsItemDesc bodyTextPrimary">
              Optional fillings: cheese, diced vegetables, cooked meats, herbs
            </p>
          </li>
        </ul>
      </div>
      <hr className="contentSep" />
      <div className="instructions">
        <h2 className="instructionsTitle headingM">Instructions</h2>
        <ol className="instructionsItems">
          <li className="instructionsItem">
            <p className="instructionsItemDesc bodyTextPrimary">
              <span className="bodyTextSecondary">Beat the eggs: </span>
              In a bowl, beat the eggs with a pinch of salt and pepper until
              they are well mixed. You can add a tablespoon of water or milk for
              a fluffier texture.
            </p>
          </li>
          <li className="instructionsItem">
            <p className="instructionsItemDesc bodyTextPrimary">
              <span className="bodyTextSecondary">Cook the omelette: </span>
              Place a non-stick frying pan over medium heat and add butter or
              oil.
            </p>
          </li>
          <li className="instructionsItem">
            <p className="instructionsItemDesc bodyTextPrimary">
              <span className="bodyTextSecondary">
                Add fillings (optional):
              </span>
              Once the butter is melted and bubbling, pour in the eggs. Tilt the
              pan to ensure the eggs evenly coat the surface.
            </p>
          </li>
          <li className="instructionsItem">
            <p className="instructionsItemDesc bodyTextPrimary">
              <span className="bodyTextSecondary">Beat the eggs: </span>
              When the eggs begin to set at the edges but are still slightly
              runny in the middle, sprinkle your chosen fillings over one half
              of the omelette.
            </p>
          </li>
          <li className="instructionsItem">
            <p className="instructionsItemDesc bodyTextPrimary">
              <span className="bodyTextSecondary">Fold and serve: </span>
              As the omelette continues to cook, carefully lift one edge and
              fold it over the fillings. Let it cook for another minute, then
              slide it onto a plate.
            </p>
          </li>
          <li className="instructionsItem">
            <p className="instructionsItemDesc bodyTextPrimary">
              <span className="bodyTextSecondary">Enjoy: </span>
              Serve hot, with additional salt and pepper if needed.
            </p>
          </li>
        </ol>
      </div>
      <hr className="contentSep" />
      <div className="nutrition">
        <h2 className="nutritionTitle headingM">Nutrition</h2>
        <p className="nutritionDesc bodyTextPrimary">
          The table below shows nutritional values per serving without the
          additional fillings.
        </p>
        <ul className="nutritionItems">
          <li className="nutritionItem">
            <div className="nutritionItemText">
              <p className="nutritionItemTitle bodyTextPrimary">Calories</p>
              <p className="nutritionItemValue bodyTextSecondary">277kcal</p>
            </div>
            <hr className="nutritionSep" />
          </li>
          <li className="nutritionItem">
            <div className="nutritionItemText">
              <p className="nutritionItemTitle bodyTextPrimary">Carbs</p>
              <p className="nutritionItemValue bodyTextSecondary">0g</p>
            </div>
            <hr className="nutritionSep" />
          </li>
          <li className="nutritionItem">
            <div className="nutritionItemText">
              <p className="nutritionItemTitle bodyTextPrimary">Protein</p>
              <p className="nutritionItemValue bodyTextSecondary">20g</p>
            </div>
            <hr className="nutritionSep" />
          </li>
          <li className="nutritionItem">
            <div className="nutritionItemText">
              <p className="nutritionItemTitle bodyTextPrimary">Fat</p>
              <p className="nutritionItemValue bodyTextSecondary">22g</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Content;
