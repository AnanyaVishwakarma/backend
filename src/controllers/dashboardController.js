import db from "../db.js";

exports.summary = async (req, res) => {
    const [income] = await db.execute(
        "SELECT SUM(amount) as total FROM records WHERE type='income'"
    );

    const [expense] = await db.execute(
        "SELECT SUM(amount) as total FROM records WHERE type='expense'"
    );

    const [category] = await db.execute(
        "SELECT category, SUM(amount) as total FROM records GROUP BY category"
    );

    res.json({
        totalIncome: income[0].total || 0,
        totalExpense: expense[0].total || 0,
        netBalance: (income[0].total || 0) - (expense[0].total || 0),
        categoryBreakdown: category
    });
};