use bookings;
db.dropDatabase();

db.customers.insertMany([
{
name: "Chae",
email: "chae@chae.com",
checkedin: true
},
{
name: "Simoon",
email: "simon@simon.com",
checkedin: false
}
]);
