import mongoose from "mongoose";

// export const formatHashtags = (hashtags) =>
//   hashtags
//     .split(",")
//     .map((hashtag) =>
//       hashtag.startsWith("#") ? ` ${hashtag}` : `#${hashtag}`
//     );

const videoSchema = mongoose.Schema({
  title: { type: String, required: true, trim: true, maxLength: 80 },
  description: { type: String, required: true, trim: true, minLength: 20 },
  createdAt: { type: Date, required: true, default: Date.now }, // Date.now() <- call immediately
  hashtags: [{ type: String, trim: true }],
  meta: {
    views: { type: Number, default: 0, required: true },
    rating: { type: Number, default: 0, required: true },
  },
});
// make middleware before creating model
// there are 4 middlewares
// document middleware, model middleware, aggregate middleware, query middleware
// this -> document

// there is no middleware to findByIdAndUpdate
// pre and post save() hooks are not executed findByIdAndUpdate()
// so, use static functions to the model
videoSchema.static("formatHashtags", function (hashtags) {
  return hashtags
    .split(",")
    .map((hashtag) =>
      hashtag.startsWith("#") ? ` ${hashtag}` : `#${hashtag}`
    );
});

const Video = mongoose.model("Video", videoSchema);

export default Video;
