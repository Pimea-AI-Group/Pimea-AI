const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const app = express();

require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Serve static files from the React app
const buildPath = path.join(__dirname, '..', 'treatmentapp', 'build');
app.use(express.static(buildPath));

// Establish a connection to the MongoDB database
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => { console.log('Database connected'); })
  .catch((err) => { console.error('Database connection error:', err); });

// Define User schema
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  gender: String,
  dob: Date,
  email: String,
  phoneNumber: String,
  city: String,
  password: String,
  commitment: Number,
  money: Number,
  obligated: Boolean,
  allergies: [{
    name: String,
    allergyDiagnosed: String,
    allergyDiagnosisExplanation: String,
    yearsWithAllergy: Number,
    selectedSymptoms: [],
    medicine: String,
    formerTreatment: Boolean,
    sufferScale: Number
  }]
});

// Create User model
const User = mongoose.model('User', userSchema);

app.post('/addUser', (req, res) => {
  let temp = req.body.User
  const add = async (tp) => {
    await User.insertMany(tp)
    res.json({ msg: 'added!' })
  }
  add(temp)
})

app.post('/AddAllergyInfo', async (req, res) => {
  const { email, allergy, formData } = req.body;
  const user = await User.findOne({ email });
  const allergyIndex = user.allergies.findIndex((allergyItem) => allergyItem.name === allergy);
  const updatedAllergy = {
    ...user.allergies[allergyIndex],
    ...formData,
    name: user.allergies[allergyIndex].name,
  };

  user.allergies[allergyIndex] = updatedAllergy;

  await user.save();

  res.json({ msg: 'Allergy Info Added!' });
});

app.post('/AddAllergies', (req, res) => {
  const update = async (email, allergies) => {
    await User.findOneAndUpdate(
      { email },
      { allergies }
    );
    res.json({ msg: 'Allergy Added!' });
  }
  update(req.body.email, req.body.selectedAllergies);
});

app.post('/AddAnswers', (req, res) => {
  const update = async (email, commitment, money, obligated) => {
    await User.findOneAndUpdate(
      { email },
      { commitment, money, obligated }
    );
    res.json({ msg: 'Answers Added!' });
  }
  update(req.body.email, req.body.commitment, req.body.money, req.body.obligated);
});

app.get('/GetUserData', (req, res) => {
  const getUser = async (password) => {
    const user = await User.findOne(
      { password },
    );
    res.json({ user });
  }
  getUser(req.query.password);
});

app.get('/GetUserDataByEmail', (req, res) => {
  const getUser = async (email) => {
    const user = await User.findOne(
      { email },
    );
    res.json(user);
  }
  getUser(req.query.email);
});

app.get('/GetAllergiesOfUser', (req, res) => {
  const getAllergiesArray = async (email) => {
    const user = await User.findOne(
      { email },
    );
    res.json({ allergies });
  }
  getAllergiesArray(req.query.email);
});


// Handle all requests that are not defined above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'treatmentapp', 'build', 'index.html'));
});

// Start the server and listen on port 3000
app.listen(3000, () => { console.log('Server listening on port 3000'); });
