const connection = require('../config/connection');
const { User} = require('../models');

connection.on('error', (err) => err);

function fillData(){

}
const fillData = [
    {
        username
        email
    },
    {

    }
]

connection.once('open', async () => {
  console.log('connected');
    // Delete the collections if they exist
    let checkUser = await connection.db.listCollections({ name: 'user' }).toArray();
    if (checkUser.length) {
      await connection.dropCollection('user');
    }

    // let studentsCheck = await connection.db.listCollections({ name: 'students' }).toArray();
    // if (studentsCheck.length) {
    //   await connection.dropCollection('students');
    // }


  // Create empty array to hold the students
  const users = [];

  // Loop 20 times -- add students to the students array
  for (let i = 0; i < 2; i++) {
    // Get some random assignment objects using a helper function that we imported from ./data
    const username = 

    const email = 
    const first = fullName.split(' ')[0];
    const last = fullName.split(' ')[1];
    const github = `${first}${Math.floor(Math.random() * (99 - 18 + 1) + 18)}`;

    students.push({
      first,
      last,
      github,
      assignments,
    });
  }

  // Add students to the collection and await the results
  await Student.collection.insertMany(students);

  // Add courses to the collection and await the results
  await Course.collection.insertOne({
    courseName: 'UCLA',
    inPerson: false,
    students: [...students],
  });

  // Log out the seed data to indicate what should appear in the database
  console.table(students);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
