import axios from "axios";
import {
  IResponseBook,
  IResponseNewBooks,
  IResponseSearch,
  ISearchResult,
} from "../types";

class booksAPI {
  private readonly BASE_URL = "https://api.itbook.store/1.0/";
  private readonly ENDPOINTS = {
    new: "new",
    search: "search",
    books: "books",
  };
  API = axios.create({
    baseURL: this.BASE_URL,
  });

  public async getNewBooks() {
    const { data } = await this.API.get<IResponseNewBooks>(this.ENDPOINTS.new);
    return data;
  }

  //починить опции
  public async searchBooks({ searchValue, page }: ISearchResult) {
    const { data } = await this.API.get<IResponseSearch>(
      `${this.ENDPOINTS.search}/${searchValue}/${page}`
    );
    return data;
  }
  public async getBook(isbn13: string) {
    const { data } = await this.API.get<IResponseBook>(
      `${this.ENDPOINTS.books}/${isbn13}}`
    );
    return data;
  }
}

export const restBooksAPI = new booksAPI();
