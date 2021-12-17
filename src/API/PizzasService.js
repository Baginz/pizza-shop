import axios from "axios";

export default class PizzasService {
    static async getAll() {
        try {
            const response = await axios.get('https://baginz.github.io/pizza-shop/db.json')    
            return response;
        } catch (error) {
            return error.message;
        }
    }
}