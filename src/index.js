const express = require("express");
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();

const createMovement = require('./use-cases/create-movement/index');

app.use(express.json())

app.post(`/movement/`, async (req, res) => {
    const {initialPosition, movementsToDo } = req.body
    const data = createMovement(initialPosition, movementsToDo);
    const movement = await prisma.movement.create({
        data,
    })
    res.json(movement);
  })

app.get(`/movement/`, async (req, res) => {
    const movements = await prisma.movement.findMany();
    res.json(movements);
  })

app.get(`/movement/:id`, async (req, res) => {
    const { id } = req.params;
  
    const movement = await prisma.movement.findUnique({
        where: { id }
    });

    res.json(movement);
  })


app.listen(8080)