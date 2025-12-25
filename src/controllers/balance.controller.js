import Balance from "../models/Balance.js";
import { simplifyBalances } from "../services/simplify.service.js";

export const getUserBalance = async (req, res) => {
    const balances = await Balance.find({
        $or: [{ from: req.params.userId }, { to: req.params.userId }]
    });
    res.json(balances);
};

export const getSimplifiedBalances = async (req, res) => {
    const balances = await Balance.find();
    const simplified = simplifyBalances(balances);
    res.json(simplified);
};
