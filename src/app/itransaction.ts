export interface ITransaction {
    // customer details
    firstName: string;
    email: string;

    // movie details
    movieId: number;
    movieName: string;
    duration: string;
    showTime: string;
    seatCost: number;


    // seat details
    selectedSeats: string[];
    noOfSelectedSeats: number;
    totalCost: number;
}
