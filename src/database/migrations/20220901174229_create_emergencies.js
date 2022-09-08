/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('emergencies', function (table) {
        table.increments();
        table.string('tipo').notNullable();
        table.string('id_usuario').notNullable();
        table.string('nome_usuario').notNullable();
        table.string('foto_emergencia').notNullable();
        table.string('foto_local').notNullable();
        table.string('descricao');
        table.boolean('status');
        table.string('horario').notNullable();
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('emergencies');
};
