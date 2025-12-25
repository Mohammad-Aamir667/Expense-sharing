import mongoose from "mongoose";

const balanceSchema = new mongoose.Schema({
    from: mongoose.Schema.Types.ObjectId,
    to: mongoose.Schema.Types.ObjectId,
    amount: Number
});

export default mongoose.model("Balance", balanceSchema);
