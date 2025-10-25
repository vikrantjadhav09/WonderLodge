const Listing = require("../models/listing");
const Review = require("../models/review");


module.exports.createReview = async (req, res) => {

    console.log(req.params.id);

    let listing = await Listing.findById(req.params.id); // object instance
    let newReview = new Review(req.body.review); // small 'r', matches form
    newReview.author = req.user._id;
    listing.reviews.push(newReview); // ✅ push to instance
    await newReview.save();
    await listing.save();

    console.log("New review saved");
    req.flash("success", "New Review Created!");
    res.redirect(`/listings/${listing._id}`); // redirect to show page
};

module.exports.destroyReview = async (req, res) => {
    const { id, reviewId } = req.params;

    // 1. Listing find kara
    const listing = await Listing.findById(id);

    // 2. Review delete kara
    await Review.findByIdAndDelete(reviewId);

    // 3. Listing madhe review reference remove kara
    listing.reviews.pull(reviewId); // pull() removes the ObjectId from array
    await listing.save();

    console.log("Review deleted successfully");
    req.flash("success", "Review Deleted!");
    res.redirect(`/listings/${id}`);
};