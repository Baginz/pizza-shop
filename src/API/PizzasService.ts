import axios from "axios";
import { IPizzas } from "../interfaces/interfaces";

export default class PizzasService {
    static async getAll() {
        try {
            const response = await axios.get<IPizzas[]>('https://baginz.github.io/pizza-shop/db.json')    
            return response;
        } catch (error: any) {
            return error.message;
        }
    }
}