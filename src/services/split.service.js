export const calculateSplits = (amount, splitType, participants, splits) => {
    if (splitType === "EQUAL") {
        const share = amount / participants.length;
        return participants.map(id => ({ userId: id, amount: share }));
    }

    if (splitType === "EXACT") {
        return splits;
    }

    if (splitType === "PERCENT") {
        return splits.map(s => ({
            userId: s.userId,
            amount: (s.percent / 100) * amount
        }));
    }
};
