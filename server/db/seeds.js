use hotel;
db.dropDatabase();

db.bookings.insertMany([
    {
        name: "Reka Kovacs",
        email: "rkovacs@fakemail.com",
        checkedIn: true
    },
    {
        name: "Angel Wow",
        email: "powerpuffgirlsno1fan@mojojojo.com",
        checkedIn: false
    },
    {
        name: "Hanna Durham",
        email: "birthdaygirl@cloud9.com",
        checkedIn: true
    },
    {
        name: "Michael McKenzie",
        email: "teleportingthrudoorz@curlyboyz.co.uk",
        checkedIn: false
    }
])
