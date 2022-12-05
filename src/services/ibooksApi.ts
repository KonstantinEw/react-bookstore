import axios from "axios";
import { IBook, IResponseBooks } from "../types";

class BooksApi {
  private readonly BASE_URL = "https://api.itbook.store/1.0/";
  API = axios.create({
    baseURL: this.BASE_URL,
  });

  public async getNewBooks() {
    const { data } = await this.API.get<IResponseBooks>("new");
    return data;
  }
}

export const booksAPI = new BooksApi();
