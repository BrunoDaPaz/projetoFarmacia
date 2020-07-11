exports.up = function (knex) {
    return knex.schema.createTable('cliente',
        function (table) {
            table.string('id').primary();
            table.string('nome').notNullable();
            table.string('cpf').notNullable();
            table.string('email').notNullable();
            table.string('telefone').notNullable();
            table.string('cidade');
            table.string('bairro');
            table.string('cep');
        });
};

exports.down = function (knex) {
    return knex.schema.dropTable('cliente');
};