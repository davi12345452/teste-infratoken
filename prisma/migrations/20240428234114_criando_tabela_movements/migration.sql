-- CreateTable
CREATE TABLE "Movement" (
    "id" TEXT NOT NULL,
    "initial_position" TEXT NOT NULL,
    "movements_to_do" TEXT NOT NULL,
    "movements_done" TEXT[],
    "final_position" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "Movement_id_key" ON "Movement"("id");
