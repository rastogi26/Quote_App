import { users, quotes } from "./fakeDB.js";
import {randomBytes} from "crypto"

const resolvers = {
  Query: {
    users: () => users,
    user: (_, { id }) => users.find((user) => user.id == id), // first argument is parent but it is already a root so we use _ and second is id
    quotes: () => quotes,
    iquote: (_, { by }) => quotes.filter((quote) => quote.by == by),
  },
  User: {
    quotes: (ur) => quotes.filter((quote) => quote.by == ur.id), //parent
  },
  Mutation: {
    signupUserDummy:(_,{userNew})=>{
        const id = randomBytes(5).toString("hex") 
        users.push({
            id,
            ...userNew
        })

        return users.find(user=>user.id==id)
       }
  },
};

export default resolvers;
