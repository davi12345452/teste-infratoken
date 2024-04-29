const express = require("express");
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();

const createMovement = require('./use-cases/create-movement/index');

app.use(express.json())

app.post(`/movement/`, async (req, res) => {
    const { initialPosition, movementsToDo } = req.body;
    try {
        const data = createMovement(initialPosition, movementsToDo);
        const movement = await prisma.movement.create({ data });
        return res.json(movement);
    } catch (error) {
        return res.status(400).send({ error: error.message });
    }
});

app.get(`/movement/`, async (req, res) => {
    const movements = await prisma.movement.findMany();
    return res.json(movements);
  })

app.get(`/movement/:id`, async (req, res) => {
    const { id } = req.params;
  
    const movement = await prisma.movement.findUnique({
        where: { id }
    });

    return res.json(movement);
  })


app.listen(8080)