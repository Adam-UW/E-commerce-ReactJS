import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    pssword: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: 'john@example.com',
    pssword: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Jane Doe',
    email: 'jane@example.com',
    pssword: bcrypt.hashSync('123456', 10),
  },
]

export default users
