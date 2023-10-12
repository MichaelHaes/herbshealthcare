const axios = require("axios")
const useState = require("react")
const useEffect = require("react")
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient({
    datasourceUrl: env("DATABASE_URL")
  })
async function main() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/user`)
            .then((res) => {
                const fetchedUsers = res.data;
                console.log(fetchedUsers)
                setUsers(fetchedUsers);
            });
    }, []);

    const newUser = await prisma.user.create({
        data: {
            email: users.user.email,
            name: users.user.name,
            password: users.user.password,
        },
    })

    const getUsers = await prisma.user.findMany()
}

main()