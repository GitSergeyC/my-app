import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const PORT = 5050;

// Включаем CORS и JSON парсер
app.use(cors());
app.use(bodyParser.json());

const TOKEN = "8403431932:AAFjeQF9Cw-kb6_SpFmUkNTgrZVGnOzmpUc";
const CHAT_ID = "-4837051774";

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.get("/", (req, res) => {
  res.send("Сервер работает ✅");
});

app.post("/send-message", async (req, res) => {
  const { name, phone, message } = req.body;
  console.log("Данные из формы:", req.body);

  if (!name || !phone) {
    return res
      .status(400)
      .json({ success: false, error: "Имя и телефон обязательны." });
  }

  const text = `
📩 Новая заявка с сайта:
👤 Имя: ${name}
📞 Телефон: ${phone}
💬 Сообщение: ${message || "—"}
`;

  try {
    console.log("Отправляем запрос в Telegram API...");

    // Таймаут — если Telegram не ответит за 7 секунд, запрос прервётся
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 7000);

    const tgResponse = await fetch(
      `https://api.telegram.org/bot${TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text,
          parse_mode: "HTML",
        }),
        signal: controller.signal,
      }
    );

    clearTimeout(timeout);

    console.log("Ответ Telegram API:", tgResponse.status);
    const result = await tgResponse.text();
    console.log("Тело ответа Telegram:", result);

    if (!tgResponse.ok) {
      return res
        .status(500)
        .json({ success: false, error: "Ошибка Telegram API", result });
    }

    console.log("✅ Сообщение успешно отправлено в Telegram!");
    return res.status(200).json({ success: true, message: "Сообщение отправлено!" });
  } catch (error) {
    console.error("Ошибка при отправке:", error);
    return res
      .status(500)
      .json({ success: false, error: "Ошибка на сервере", details: error.message });
  }
});

// слушаем все интерфейсы (важно для доступа с Mac)
app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Сервер запущен на всех интерфейсах (порт ${PORT})`);
});
