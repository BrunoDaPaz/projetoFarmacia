exports.up = function (knex) {
    return knex.schema.createTable('usuario',
        function (table) {
            table.string('id').primary();
            table.string('nome').notNullable();
            table.string('nome_usuario').notNullable();
            table.string('senha').notNullable();
            table.string('email').notNullable();
            table.string('telefone').notNullable();
            table.string('cidade').notNullable();
            table.string('bairro').notNullable();
            table.string('cep').notNullable();
        });
};

exports.down = function (knex) {
    return knex.schema.dropTable('usuario');
};