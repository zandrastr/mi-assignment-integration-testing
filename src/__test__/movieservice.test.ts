/**
 * @jest-environment jsdom
 */

import { getData } from "../ts/services/movieservice";
import { mockData } from "../ts/services/__mocks__/movieserviceMock";

jest.mock('axios', () => ({
    get:async(url:string) => {
        return new Promise((resolve) => {
            resolve({data: {Search: mockData} });
        }); 
    }
}));

test('should get mock data', async () => {
    //Arrange
    let searchText = "Test search"
    
    //Act
    let data = await getData(searchText);
    
    //Assert
    expect(data.length).toBe(2);
    expect(data[0].Title).toBe("Avatar 2");
    expect(data[0].imdbID).toBe("12345");
    expect(data[0].Type).toBe("Science Fiction");
    expect(data[0].Poster).toBe("Test");
    expect(data[0].Year).toBe("2022");
});

