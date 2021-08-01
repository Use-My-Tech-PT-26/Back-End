
exports.seed = function (knex) {
  return knex("equipment")
    .del()
    .then(function () {
      return knex("equipment").insert([
        {
          equipment_name: "Go Pro",
          equipment_description: "Ready for any adventure",
          equipment_img:
            "https://images.unsplash.com/photo-1513555633610-d912838b8ac5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
          equipment_available: true,
          user_id: 2,
        },
        {
          equipment_name: "Cannon Camera",
          equipment_description: "Take super crisp pictures",
          equipment_img:
            "https://images.unsplash.com/photo-1500646953400-045056a916d7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
          equipment_available: false,
          user_id: 2,
        },
        {
          equipment_name: "Nintendo Switch",
          equipment_description: "Take the games with you!",
          equipment_img:
            "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
          equipment_available: false,
          user_id: 2,
        },
      ])
    })
}
