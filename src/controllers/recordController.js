import db from "../db.js";

exports.createRecord = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const record = await db.query("INSERT INTO records (name, email, password) VALUES ($1, $2, $3) RETURNING *", [name, email, password]);
        res.json(record.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}

exports.getRecords = async (req, res) => {
    try {
        const records = await db.query("SELECT * FROM records");
        res.json(records.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}

exports.getRecord = async (req, res) => {
    try {
        const { id } = req.params;
        const record = await db.query("SELECT * FROM records WHERE id = $1", [id]);
        res.json(record.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}

exports.updateRecord = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, password } = req.body;
        const record = await db.query("UPDATE records SET name = $1, email = $2, password = $3 WHERE id = $4 RETURNING *", [name, email, password, id]);
        res.json(record.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}

exports.deleteRecord = async (req, res) => {
    try {
        const { id } = req.params;
        const record = await db.query("DELETE FROM records WHERE id = $1 RETURNING *", [id]);
        res.json(record.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}