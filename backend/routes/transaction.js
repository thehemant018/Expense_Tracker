const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Transaction = require('../models/Transaction');
const User = require('../models/User');
// Create a new income or expense transaction
router.post('/add-transaction', fetchuser, async (req, res) => {
  try {
    const { type, amount, description } = req.body;
    
    if (type !== 'income' && type !== 'expense') {
      return res.status(400).json({ success: false, error: 'Invalid transaction type' });
    }

    const transaction = new Transaction({
      user: req.user.id,
      type,
      amount,
      description,
    });

    await transaction.save();
    res.json({ success: true, transaction });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
  }
});

// Get all transactions for a user
router.get('/get-transactions', fetchuser, async (req, res) => {
  try {
    const userId = req.user.id;
    const transactions = await Transaction.find({ user: userId }).sort({ createdAt: -1 });
    res.json({ success: true, transactions });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
