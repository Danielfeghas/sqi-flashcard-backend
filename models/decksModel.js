import mongoose, { model,Schema } from "mongoose";

const flashCardSchema = new Schema({
     question: {
                type: String,
                required: [true,"Question is required"],
            },
            answer: {
                type: String,
                required: [true, "Answer is required!"]
            }
},{_id: false})

const deckSchema = new Schema({
    name: {
        type: String,
        required: [true, "Deck name is required"],
        unique: [true, "A deck with this name already exist"]
    },
    description : {
        type: String,
    },
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    flashcards: {
        type: [flashCardSchema],
        required: [true, "Flash card is required!"],
        validate: {
            validator: function(arr){
                return arr.length > 0;
            },
            message: "At least one flash card is required"
        }
    }
},{timestamps: true})

const deckModel = model("decks", deckSchema)
export default deckModel