
exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
      tbl.increments();

      tbl.string("VIN", 120).notNullable().unique().index();

      tbl.string("make", 120).notNullable();
  
      tbl.string("model", 120).notNullable();
  
      tbl.string("mileage", 120).notNullable();
  
      tbl.string("transmission", 120);
  
      tbl.boolean("title");
      
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
}; 
