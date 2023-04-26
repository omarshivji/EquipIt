module.exports = (transactions) => {
    const express = require('express');
    const router = express.Router();

    router.get('/', async (req, res) => {
        const listTransactions = await transactions.findAll();
        res.json(listTransactions);
    });

    router.get('/:transactions_id', (req, res) => {
        const transactions_id = req.params.transactions_id;
        res.json(transactions_id);
    });

    router.post('/', async (req, res) => {
        const newTransaction = req.body;
        const createdTransaction = await transactions.create(newTransaction);
        res.json(createdTransaction);
    });

    router.put('/:transactions_id', async (req, res) => {
        const updatedTransaction = req.body;
        await transactions.update(updatedTransaction, {
            where: {
                transactions_id: req.params.transactions_id
            }
        });
        res.json(updatedTransaction);
    });

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