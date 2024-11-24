/*
    TASK
    -- Designing RestAPI which stores json data
    -- will deal with users. GET /api/users - List all users
    -- GET /api/users/1 -> Get the user with id 1
    -- POST /api/users -> Creates new user
    -- PATCH /api/users/id -> Edit the user with ID
    -- DELETE /api/users/id -> Delete the user with ID
*/

const express = require("express");
const users = require("./MOCK_DATA.json");
const app = express();
const port = 8000;

//Routes
app.get("/users", (req, res) => {
  const html = `
    <ul>
        ${users.map((user) => `<li> ${user.first_name}</li>`).join("")}
    </ul>
    `;
  res.send(html);
});

// Rest API
app.get("/api/users", (req, res) => {
  return res.json(users);
});

// Dynamic path parametes -> GET /api/users/:id

// app.get('/api/users/:id', (req, res) => {
//     const id = Number(req.params.id);
//     const user = users.find(user => user.id === id);
//     return res.json(user);
// });

// app.patch('/api/users/:id', (req, res) => {
//     // TODO: Edit the user with id
//     return res.json({ status: "pending"} );
// });

// app.delete('/api/users/:id', (req, res) => {
//     // TODO: Delete the user with id
//     return res.json({ status: "pending"} );
// });

app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
  })
  .patch((req, res) => {
    // TODO: Edit the user with id
    return res.json({ status: "Pending" });
  })
  .delete((req, res) => {
    // TODO: Delete the user with id

    return res.json({ status: "Pending" });
  });

// post, patch and delete will be implemented in next section using postman

app.post("/api/users", (req, res) => {
  // TODO: Create new user
  return res.json({ status: "pending" });
});

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
