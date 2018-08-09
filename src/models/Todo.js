import axios from 'axios';


export default class TodoModel {
    static all() {
        let requestUrl = axios.get("https://super-crud-api.herokuapp.com/api/todos");
        return requestUrl
    }
}