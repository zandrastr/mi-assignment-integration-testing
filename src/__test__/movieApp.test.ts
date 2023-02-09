/**
 * @jest-environment jsdom
 */

import { init, handleSubmit, createHtml } from "../ts/movieApp";
import * as movieApp from "../ts/movieApp";
import { mockData } from "../ts/services/__mocks__/movieserviceMock";

jest.mock("../ts/services/movieservice.ts");

beforeEach(() => {
    document.body.innerHTML = "";
});

afterEach(() => {
    jest.restoreAllMocks();
});

test('should call function handleSubmit from init() when user clicks submit', () => {
    //Arrange
    document.body.innerHTML = `<form id="searchForm">
    <input type="text" id="searchText" placeholder="Skriv titel här" />
    <button type="submit" id="search">Sök</button>
    </form> <div id="movie-container"></div>`

    let button: HTMLButtonElement = document.querySelector("#search") as HTMLButtonElement;

    let spy = jest.spyOn(movieApp, "handleSubmit").mockReturnValue(
        new Promise<void>((resolve) => {
            resolve();
        })
    );

    //Act
    init();
    button.click();

    //Assert   
    expect(spy).toHaveBeenCalled();
}); 

test('should create new element for each movie when running createHtml()', () => {
    //Arrange
    document.body.innerHTML = `<form id="searchForm">
    <input type="text" id="searchText" placeholder="Skriv titel här" />
    <button type="submit" id="search">Sök</button>
    </form> <div id="movie-container"></div>`

    let container: HTMLDivElement = document.querySelector("#movie-container") as HTMLDivElement;
    
    //Act
    createHtml(mockData, container);
    let divElements = document.querySelectorAll(".movie");

    //Assert
    expect(divElements.length).toBe(2);
}); 