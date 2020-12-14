const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema(
  {
    institution: String,
    date: Date,
    title: String,
  },
  { _id: false }
);

const workSchema = new mongoose.Schema(
  {
    institution: String,
    role: String,
    dates: String,
    public: Boolean,
  },
  { _id: false }
);

const achievementsSchema = new mongoose.Schema(
  {
    name: String,
    date: Date,
    description: String,
  },
  { _id: false }
);

const awardsSchema = new mongoose.Schema(
  {
    name: String,
    date: Date,
    description: String,
  },
  { _id: false }
);

const chargesSchema = new mongoose.Schema(
  {
    reason: String,
    date: Date,
    status: String,
  },
  { _id: false }
);

const newsSchema = new mongoose.Schema(
  {
    source: String,
    date: Date,
    link: String,
  },
  { _id: false }
);

const candidateSchema = new mongoose.Schema({
  name: String,
  image: String,
  birth: Date,
  party: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Party",
  },
  role: String,
  education: [educationSchema],
  work: [workSchema],
  achievements: [achievementsSchema],
  awards: [awardsSchema],
  charges: [chargesSchema],
  news: [newsSchema],
});

mongoose.model("Candidate", candidateSchema);
