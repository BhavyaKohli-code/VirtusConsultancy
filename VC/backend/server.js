const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware
app.use(cors({
  origin: 'http://localhost:5173'
}));
app.use(express.json());

// MongoDB connection string
const uri = 'mongodb+srv://gamerx14yt:Bhavya%401234@cluster0.ow2df.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Connect to MongoDB
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected successfully'))
.catch((err) => console.error('Error connecting to MongoDB:', err));

// Define schema and model
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String
});
const Contact = mongoose.model('Contact', contactSchema);

// Define route for form submission
app.post('/submit', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Create a new contact entry
    const newContact = new Contact({
      name,
      email,
      message
    });

    // Save the contact entry to the database
    await newContact.save();
    res.status(200).json({ message: 'Message received and saved!' });
  } catch (error) {
    console.error('Error handling form submission:', error);
    res.status(500).json({ error: 'Failed to save message' });
  }
});

// Basic route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
