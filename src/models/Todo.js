import axios from 'axios';


export default class TodoModel {
    static all() {
        let requestUrl = axios.get("https://super-crud-api.herokuapp.com/api/todos");
        return requestUrl
    }
    static create(todo) {
        let request = axios.post("https://super-crud-api.herokuapp.com/api/todos", todo)
        return request
      }
}