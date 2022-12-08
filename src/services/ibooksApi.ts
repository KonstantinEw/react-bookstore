import axios from "axios";
import { IResponseBooks } from "../types";

class booksAPI {
  private readonly BASE_URL = "https://api.itbook.store/1.0/";
  API = axios.create({
    baseURL: this.BASE_URL,
  });

  public async getNewBooks() {
    const { data } = await this.API.get<IResponseBooks>("new");
    return data;
  }

  public async searchBooks() {
    const { data } = await this.API.get<IResponseBooks>("search");
    return data;
  }

  public async getBook() {
    const { data } = await this.API.get<IResponseBooks>("books");
    return data;
  }
}

export const restBooksAPI = new booksAPI();
