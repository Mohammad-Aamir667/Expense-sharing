import express from "express";
// import userRoutes from "./routes/user.routes.js";
// import groupRoutes from "./routes/group.routes.js";
// import expenseRoutes from "./routes/expense.routes.js";
// import balanceRoutes from "./routes/balance.routes.js";

const app = express();

app.use(express.json());

// app.use("/users", userRoutes);
// app.use("/groups", groupRoutes);
// app.use("/expenses", expenseRoutes);
// app.use("/balances", balanceRoutes);

export default app;
