import Expense from "../models/Expense.js";
import Balance from "../models/Balance.js";
import { calculateSplits } from "../services/split.service.js";

export const addExpense = async (req, res) => {
    const { groupId, paidBy, amount, splitType, participants, splits } = req.body;

    const finalSplits = calculateSplits(amount, splitType, participants, splits);

    await Expense.create({
        groupId,
        paidBy,
        amount,
        splitType,
        splits: finalSplits
    });

    for (let s of finalSplits) {
        if (s.userId.toString() !== paidBy) {
            await Balance.findOneAndUpdate(
                { from: s.userId, to: paidBy },
                { $inc: { amount: s.amount } },
                { upsert: true }
            );
        }
    }

    res.json({ success: true });
};
