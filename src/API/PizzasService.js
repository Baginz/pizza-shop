import axios from "axios";

export default class PizzasService {
    static async getAll() {
        try {
            const response = await axios.get('http://localhost:3000/db.json')    
            return response;
        } catch (error) {
            return error.message;
        }
    }
}