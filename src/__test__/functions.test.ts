/**
 * @jest-environment jsdom
 */

import { movieSort } from "../ts/functions"
import { mockData } from "../ts/services/__mocks__/movieserviceMock";

describe ("check if sorting function movieSort is working correctly", () => {

    test('should sort movies by title in alphabetical order', () => {
        //Arrange
        let test = mockData;

        //Act
        let sortedMovies = movieSort(test, true);

        //Assert
        expect(sortedMovies[0].Title).toContain("Avatar");
        expect(sortedMovies[1].Title).toContain("Top Gun");
    });

    test('should sort movies by title in reversed alphabetical order', () => {
        //Arrange
        let test = mockData;

        //Act
        let sortedMovies = movieSort(test, false);

        //Assert
        expect(sortedMovies[0].Title).toContain("Top Gun");
        expect(sortedMovies[1].Title).toContain("Avatar");
    });
});