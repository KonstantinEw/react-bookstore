import axios from "axios";
import { IResponseBook, IResponseNewBooks, IResponseSearch } from "../types";

class booksAPI {
  private readonly BASE_URL = "https://api.itbook.store/1.0/";
  API = axios.create({
    baseURL: this.BASE_URL,
  });

  public async getNewBooks() {
    const { data } = await this.API.get<IResponseNewBooks>("new");
    return data;
  }

  public async searchBooks() {
    const { data } = await this.API.get<IResponseSearch>("search/");
    return data;
  }
  // need типизация
  public async getBook() {
    const { data } = await this.API.get<IResponseBook>("books/");
    return data;
  }
}

export const restBooksAPI = new booksAPI();
