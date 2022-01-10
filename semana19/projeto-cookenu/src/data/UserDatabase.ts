import { User } from "../entities/User"
import { BaseDatabase } from "./BaseDatabase"

export class UserDatabase extends BaseDatabase {
    async createUser(user: User): Promise<void> {
        try {
            await UserDatabase.connection("Cookenu_User").insert({
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail(),
                password: user.getPassword()
            })

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    async findUserByEmail(email: string): Promise<User> {
        try {
            const user = await UserDatabase.connection("Cookenu_User")
                .select("*")
                .where({ email })

                return user[0] && User.toUserModel(user[0])

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    async getProfile(id: string): Promise<User[]> {
        try {
            const user = await UserDatabase.connection("Cookenu_User")
                .select("*")
                .where("id", id)

            return user[0]

        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}