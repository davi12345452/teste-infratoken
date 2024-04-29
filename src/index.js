// Essa aplicação utiliza um backend node com express e um banco de dados
// PostgreSQL manipulado através de Prisma ORM
const express = require("express");
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();

const createMovement = require('./use-cases/create-movement/index');

app.use(express.json())

// Endpoint para criar um movimento. Usuário fornece a posição inicial e quais movimentos serão feitos
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

// Endpoint para pegar todos os movimentos já realizados na aplicação
app.get(`/movement/`, async (req, res) => {
    const movements = await prisma.movement.findMany();
    return res.json(movements);
  })

// Endpoint para pegar um movimento em específico, através do ID.
app.get(`/movement/:id`, async (req, res) => {
    const { id } = req.params;
  
    const movement = await prisma.movement.findUnique({
        where: { id }
    });

    if(!movement) {
        return res.status(400).send({error: 'ID informado é inválido'})
    }

    return res.json(movement);
  })


app.listen(3030)