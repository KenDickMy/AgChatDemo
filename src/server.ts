import express from 'express';
import path from 'path';
import rateLimit from 'express-rate-limit';
import apiRouter from './routes/api';

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

// ── Rate limiting ─────────────────────────────────────────────────────────────
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 120,            // max 120 requests per minute per IP
  standardHeaders: true,
  legacyHeaders: false,
});

// ── Middleware ────────────────────────────────────────────────────────────────
app.use(limiter);
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

// ── API Routes ────────────────────────────────────────────────────────────────
app.use('/api', apiRouter);

// ── SPA fallback — serve index.html for any non-API, non-static route ─────────
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

// ── Start server ──────────────────────────────────────────────────────────────
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`\n🌾 AgChatDemo running at http://localhost:${PORT}`);
    console.log(`   Press Ctrl+C to stop\n`);
  });
}

export default app;
