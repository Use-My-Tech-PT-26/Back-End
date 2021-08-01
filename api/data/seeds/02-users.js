const bcrypt = require("bcryptjs")

exports.seed = function (knex) {
  return knex("users")
    .del()
    .then(function () {
      return knex("users").insert([
        {
          username: "Corie",
          password: bcrypt.hashSync("9876", 8),
          role: "renter",
        },
        {
          username: "Sarah",
          password: bcrypt.hashSync("9876", 8),
          role: "owner",
        },
        {
          username: "Tamara",
          password: bcrypt.hashSync("9876", 8),
          role: "renter",
        },
      ])
    })
}