import { IMovie } from "../../models/Movie";

/*
Title: string;
imdbID: string;
Type: string;
Poster: string;
Year: string;
*/

export let mockData: IMovie[] = [
    {Title: "Avatar 2", imdbID: "12345", Type: "Science Fiction", Poster: "Test", Year: "2022" },
    {Title: "Top Gun Maverick", imdbID: "456789", Type: "Action", Poster: "Test", Year: "2022" }
];

export const getData = async (searchText: string): Promise<IMovie[]> => {
    return new Promise((resolve) => {
        resolve(mockData);
    });
};