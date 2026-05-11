import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import mysql from 'mysql2/promise';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Connection Pool setup based on env vars
  let pool: mysql.Pool | null = null;
  const dbHost = process.env.DB_HOST;
  const dbUser = process.env.DB_USER;
  const dbPassword = process.env.DB_PASSWORD;
  const dbName = process.env.DB_NAME;

  if (dbHost && dbUser && dbPassword && dbName) {
    try {
      pool = mysql.createPool({
        host: dbHost,
        user: dbUser,
        password: dbPassword,
        database: dbName,
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
      });
      console.log('MySQL connection pool created successfully');
    } catch (e) {
      console.error('Failed to create MySQL connection pool:', e);
    }
  } else {
    console.warn('MySQL environment variables not fully set. Proceeding without database connection.');
  }

  // API POST - Example implementation for saving inquiries
  app.post('/api/inquiries', async (req, res) => {
    try {
      const { name, email, phone, message, tourType } = req.body;

      if (!name || !email) {
         res.status(400).json({ error: 'Name and email are required.' });
         return;
      }

      // If DB is connected, save it there
      if (pool) {
        const query = `
          INSERT INTO inquiries (name, email, phone, message, tour_type, created_at)
          VALUES (?, ?, ?, ?, ?, NOW())
        `;
        await pool.execute(query, [name, email, phone, message || '', tourType || 'Unknown']);
        res.status(201).json({ success: true, message: 'Inquiry saved to database.' });
      } else {
        // Fallback or "mock" saving behaviour for UI
        console.log('Received inquiry (no DB configured):', { name, email, phone, message, tourType });
        res.status(201).json({ success: true, message: 'Inquiry received (DB not configured).' });
      }
    } catch (error) {
      console.error('Error processing inquiry:', error);
      res.status(500).json({ error: 'Failed to process inquiry.' });
    }
  });

  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', dbConnected: !!pool });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
