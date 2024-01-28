//USING ES6+ CLASSES T0 COMPUTE DESCRIPTIVE STATISTICS FOR UNGROUPED DATA

class DescriptiveStatistics {
    constructor(values) {
        this.value = values
    };


    //MEASURES OF CENTRAL TENDENCY
    getMean = (...nums) => {
        this.num = nums;

        const sumOfAllValues = this.num
            .reduce((acc, num) => acc + num, 0); 
        
        const totalNumOfValues = this.num.length;

        return sumOfAllValues / totalNumOfValues;
    };

    getMedian = (...nums) => {
        this.num = nums.sort((a, b) => a - b);

        let n = this.num.length
        let m = Math.floor(n / 2);
        let ans;

        n % 2 !== 0
            ? ans = (n + 1) / 2
            : ans = [m + (m + 1)] / 2
        
        return ans;
    }

    getMode = (...nums) => {
        let highestFrequency = 0;
        let mostOccuringNum;
        const frequencyBox = new Map(); //to store frequency of each number

        //to count the frequency
        nums.forEach(num => {
            frequencyBox
                .set(num, (frequencyBox.get(num) || 0 + 1));
        });

        //finding the most occuring number
        frequencyBox.forEach((freq, num) => {
            if (freq > highestFrequency) {
                highestFrequency = freq;
                mostOccuringNum = num;
            }
        });

        return mostOccuringNum;
    }


    //MEASURES OF DISPERSION
    getRange = (...nums) => {
        this.num = nums;
        
        let min = Math.min(...this.num);
        let max = Math.max(...this.num);

        let range = max - min;
       
        return range;
    }

    getVariance = (...nums) => {
        this.num = nums;

        let n = this.num.length;

        const mean = this.getMean(...nums);
            
        const variance = this.num
            .map(num => (num - mean) ** 2)
            .reduce((acc, num) => acc + num, 0) / (n - 1);

        return variance;
    }

    getStandardDeviation = (...nums) => {
        let variance = this.getVariance(...nums)

        let standardDeviation = Math.sqrt(variance);

        return standardDeviation;
    }

    getMeanDeviation = (...nums) => {
        this.num = nums;

        let n = this.num.length;

        const mean = this.getMean(...nums);
            
        const meanDeviation = this.num
            .map(num => Math.abs((num - mean)))
            .reduce((acc, num) => acc + num, 0) / n;

        return meanDeviation;
    }

    getQuartileDeviation = (...nums) => {
        this.num = nums.sort((a, b) => a - b);

        let n = this.num.length;

        let Q1, Q3, quartileDeviation;

        Q1 = (n + 1) / 4;
        Q3 = 3 * Q1;

        quartileDeviation = Q3 - Q1;

        return quartileDeviation;
    }
}

const stats = new DescriptiveStatistics();

//ALTER DATA HERE!
console.log(`The data = (1, 5, 3, 1, 4)`);
console.log(`Mean = ${stats.getMean(1, 5, 3, 1, 4)}`);
console.log(`Median = ${stats.getMedian(1, 5, 3, 1, 4)}`);
console.log(`Mode = ${stats.getMode(1, 5, 3, 1, 4)}`);
console.log(`Range = ${stats.getRange(1, 5, 3, 1, 4)}`);
console.log(`Standard deviation = ${stats.getStandardDeviation(1, 5, 3, 1, 4)}`);
console.log(`Mean deviation = ${stats.getMeanDeviation(1, 5, 3, 1, 4)}`);
console.log(`Quartile deviation = ${stats.getQuartileDeviation(1, 5, 3, 1, 4)}`);