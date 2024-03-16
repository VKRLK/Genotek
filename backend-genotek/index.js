import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3010;

app.get("/api/namedata", (req, res) => {
  res.json({ data: nameData });
});

app.get("/api/namedata/:page", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.json({
    data: nameData.slice(
      Number(req.query.limit * (req.query.page - 1)),
      Number(req.query.limit * req.query.page)
    ),
  });
});
app.use(cors());
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

const nameData = [
  {
    id: 1,
    firstName: "Иван1",
    lastName: "Иванов1",
  },
  {
    id: 2,
    firstName: "Иван2",
    lastName: "Иванов2",
  },
  {
    id: 3,
    firstName: "Иван3",
    lastName: "Иванов3",
  },
  {
    id: 4,
    firstName: "Иван4",
    lastName: "Иванов4",
  },
  {
    id: 5,
    firstName: "Иван5",
    lastName: "Иванов5",
  },
  {
    id: 6,
    firstName: "Иван6",
    lastName: "Иванов6",
  },
  {
    id: 7,
    firstName: "Иван7",
    lastName: "Иванов7",
  },
  {
    id: 8,
    firstName: "Иван8",
    lastName: "Иванов8",
  },
  {
    id: 9,
    firstName: "Иван9",
    lastName: "Иванов9",
  },
];
