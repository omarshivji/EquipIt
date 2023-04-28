module.exports = (transactions) => {
    const express = require('express');
    const router = express.Router();

    // Get all transactions
    router.get('/', async (req, res) => {
        const listTransactions = await transactions.findAll();
        res.json(listTransactions);
    });

    // Get transactions by id
    router.get('/:transactions_id', (req, res) => {
        const transactions_id = req.params.transactions_id;
        res.json(transactions_id);
    });

    // Create a new transactions
    router.post('/', async (req, res) => {
        const newTransaction = req.body;
        const createdTransaction = await transactions.create(newTransaction);
        res.json(createdTransaction);
    });

    // Update a transactions
    router.put('/:transactions_id', async (req, res) => {
        const updatedTransaction = req.body;
        await transactions.update(updatedTransaction, {
            where: {
                transactions_id: req.params.transactions_id
            }
        });
        res.json(updatedTransaction);
    });

    // Delete a transactions
    router.delete('/:transactions_id', async (req, res) => {
        await transactions.destroy({
            where: {
                transactions_id: req.params.transactions_id
            }
        });
        res.json('Transactions deleted');
    });

    return router;
};