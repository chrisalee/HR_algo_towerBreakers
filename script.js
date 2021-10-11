/*
 * Complete the 'towerBreakers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n  //number of towers
 *  2. INTEGER m  //the height of each tower
 */

const towerBreakers = (n, m) => {
    if(n % 2 === 0 || m === 1) {
        return 2
    } else {
        return 1
    }
}
