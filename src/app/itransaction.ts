export interface ITransaction {
    transactionId: number;
    transactionTime: string;
    // customer details
    customerId: number;
    // movie details
    movieId: number;
    // seat details
    seats: string[]
}
