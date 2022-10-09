export class TransactionStore {

    public static transactionTime: string = '';

    // customer details
    public static customerId: number = 0;
    public static firstName: string = '';
    public static email: string = '';

    // movie details
    public static movieId: number = 0;
    public static movieName: string = '';
    public static duration: string = '';
    public static showTime: string = '';
    public static seatCost: number = 0;


    // seat details
    public static selectedSeats: string[] = [];
    public static noOfSelectedSeats: number = 0;
    public static totalCost: number = 0;
}