//listing is going to be our model name coz diff. places like houses, apartments, flats, etc. sbko ek list form mein data share krenge

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        type: String,   //as an URL send krenge
        default: "random link",    //kuchh bhi image nhi diye then..this is only for testing in terminal
        set: (v) => v === "" ? "Default Link" : v,   //v is a value(url) if given then v printed otherwise default link ke badle kuchh image ka link de skte hain...it is for client frontend
    },
    price: Number,
    location: String,
    country: String,
    reviews : [
        {
            type: Schema.Types.ObjectId,
            ref: "Review",
        },
    ],
});

listingSchema.post("findOneAndDelete", async (listing) => {    //mongoose Middleware
    if(listing){
        await review.deleteMany({_id : {$in: listing.reviews}});   //delete the listings and also the corresponding data from the database
    }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing; 