export const simplifyBalances = balances => {
    const net = {};

    balances.forEach(b => {
        net[b.from] = (net[b.from] || 0) - b.amount;
        net[b.to] = (net[b.to] || 0) + b.amount;
    });

    const debtors = [];
    const creditors = [];

    Object.entries(net).forEach(([user, amt]) => {
        if (amt < 0) debtors.push({ user, amt: -amt });
        if (amt > 0) creditors.push({ user, amt });
    });

    const result = [];
    let i = 0, j = 0;

    while (i < debtors.length && j < creditors.length) {
        const x = Math.min(debtors[i].amt, creditors[j].amt);
        result.push({ from: debtors[i].user, to: creditors[j].user, amount: x });
        debtors[i].amt -= x;
        creditors[j].amt -= x;
        if (debtors[i].amt === 0) i++;
        if (creditors[j].amt === 0) j++;
    }

    return result;
};
