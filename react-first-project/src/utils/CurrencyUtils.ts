class CurrencyUtils {
    static formatToDollar(amount: number) {
        return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
        }).format(amount);
    }
}

export default CurrencyUtils; 
