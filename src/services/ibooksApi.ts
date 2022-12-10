import axios from "axios";
import {
  IResponseBook,
  IResponseNewBooks,
  IResponseSearch,
  ISearchParams,
} from "../types";

class booksAPI {
  private readonly BASE_URL = "https://api.itbook.store/1.0/";
  private readonly ENDPOINTS = {
    new: "new",
    search: "search/",
    books: "books/",
  };
  API = axios.create({
    baseURL: this.BASE_URL,
  });

  public async getNewBooks() {
    const { data } = await this.API.get<IResponseNewBooks>(this.ENDPOINTS.new);
    return data;
  }

  //починить опции
  public async searchBooks(options: string) {
    const params = {
      options,
    };
    const { data } = await this.API.get<IResponseSearch>(
      this.ENDPOINTS.search,
      { params }
    );
    return data;
  }
  public async getBook() {
    const { data } = await this.API.get<IResponseBook>(this.ENDPOINTS.books);
    return data;
  }
}

export const restBooksAPI = new booksAPI();
