module.exports = (transactions) => {
const express = require('express');
const router = express.Router();


router.get('/', async (req, res) => {	
    const listTransactions = await transactions.findAll();
    res.json(listTransactions);
}
);

router.get('/:transactions_id', (req, res) => {
    const transactions_id = req.params.transactions_id;
    res.json(transactions_id);
}
);

router.post('/', async (req, res) => {
    const transactions = req.body;
    await transactions.create(transactions);
    res.json(transactions);
}
);

router.put('/:transactions_id', async (req, res) => {
    const transactions = req.body;
    await transactions.update(transactions, {
        where: {
            transactions_id: req.params.transactions_id
        }
    });
    res.json(transactions);
}
);

router.delete('/:transactions_id', async (req, res) => {
    await transactions.destroy({
        where: {
            transactions_id: req.params.transactions_id
        }
    });
    res.json('Transactions deleted');
}
);
return router;

};

