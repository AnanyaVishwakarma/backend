import db from '../db.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

exports.register = async (req, res) => {
    const { name, email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    const hashed = await bcrypt.hash(password, 10);

    await db.execute(
        "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
        [name, email, hashed]);
    res.json({ msg: 'User registered' });

    exports.login = async (req, res) => {
        const [rows] = (await db).execute("SELECT * from users WHERE email = ?", [req.body.email]);

        if (!rows.length) return res.status(400).json({ msg: "User not found" });

        const user = rows[0];

        const match = await bcrypt.compare(req.body.password, user.password);
        if (!match) return res.status(400).json({ msg: "Invalid credentials" });

        const token = jwt.sign(
            { id: user.id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.json({ token });
    };

}