// nn_io.js

// ES6

// =============================================================================

function vecMake(n, val)

{

    let result = [];

    for (let i = 0; i < n; ++i) {

        result[i] = val;

    }

    return result;

}

function matMake(rows, cols, val)

{

    let result = [];

    for (let i = 0; i < rows; ++i) {

        result[i] = [];

        for (let j = 0; j < cols; ++j) {

            result[i][j] = val;

        }

    }

    return result;

}

function vecShow(v, dec)

{

    for (let i = 0; i < v.length; ++i) {

        if (v[i] >= 0.0) {

            process.stdout.write(" ");

        }

        process.stdout.write(v[i].toFixed(dec));

        process.stdout.write("  ");

    }

    process.stdout.write("\n");

}

function matShow(m, dec)

{

    let rows = m.length;

    let cols = m[0].length;

    for (let i = 0; i < rows; ++i) {

        for (let j = 0; j < cols; ++j) {

            if (m[i][j] >= 0.0) {

                process.stdout.write(" ");

            }

            process.stdout.write(m[i][j].toFixed(dec));

            process.stdout.write("  ");

        }

        process.stdout.write("\n");

    }

}

function hyperTan(x)

{

    if (x < -20.0) {

        return -1.0;

    } else if (x > 20.0) {

        return 1.0;

    } else {

        return Math.tanh(x);

    }

}

function vecMax(vec)

{

    let mx = vec[0];

    for (let i = 0; i < vec.length; ++i) {

        if (vec[i] > mx) {

            mx = vec[i];

        }

    }

    return mx;

}

function softmax(vec)

{

    let mx = vecMax(vec); // or Math.max(...vec)

    let result = [];

    let sum = 0.0;

    for (let i = 0; i < vec.length; ++i) {

        result[i] = Math.exp(vec[i] - mx);

        sum += result[i];

    }

    for (let i = 0; i < result.length; ++i) {

        result[i] = result[i] / sum;

    }

    return result;

}

// =============================================================================

class NeuralNet

{

    constructor(numInput, numHidden, numOutput)

    {

        this.ni = numInput;

        this.nh = numHidden;

        this.no = numOutput;

        this.iNodes = vecMake(this.ni, 0.0);

        this.hNodes = vecMake(this.nh, 0.0);

        this.oNodes = vecMake(this.no, 0.0);

        this.ihWeights = matMake(this.ni, this.nh, 0.0);

        this.hoWeights = matMake(this.nh, this.no, 0.0);

        this.hBiases = vecMake(this.nh, 0.0);

        this.oBiases = vecMake(this.no, 0.0);

    }

    eval(X)

    {

        let hSums = vecMake(this.nh, 0.0);

        let oSums = vecMake(this.no, 0.0);

        this.iNodes = X;

        for (let j = 0; j < this.nh; ++j) {

            for (let i = 0; i < this.ni; ++i) {

                hSums[j] += this.iNodes[i] * this.ihWeights[i][j];

            }

            hSums[j] += this.hBiases[j];

            this.hNodes[j] = hyperTan(hSums[j]);

        }

        console.log("\nInternal hidden node values = ");

        vecShow(this.hNodes, 4);

        for (let k = 0; k < this.no; ++k) {

            for (let j = 0; j < this.nh; ++j) {

                oSums[k] += this.hNodes[j] * this.hoWeights[j][k];

            }

            oSums[k] += this.oBiases[k];

        }

        console.log("\nInternal pre-softmax output nodes = ");

        vecShow(oSums, 4);

        this.oNodes = softmax(oSums);

        console.log("\nInternal softmax output nodes = ");

        vecShow(this.oNodes, 4);

        let result = [];

        for (let k = 0; k < this.no; ++k) {

            result[k] = this.oNodes[k];

        }

        return result;

    } // eval()

    setWeights(wts)

    {

        // order: ihWts, hBiases, hoWts, oBiases

        let p = 0;

        for (let i = 0; i < this.ni; ++i) {

            for (let j = 0; j < this.nh; ++j) {

                this.ihWeights[i][j] = wts[p++];

            }

        }

        for (let j = 0; j < this.nh; ++j) {

            this.hBiases[j] = wts[p++];

        }

        for (let j = 0; j < this.nh; ++j) {

            for (let k = 0; k < this.no; ++k) {

                this.hoWeights[j][k] = wts[p++];

            }

        }

        for (let k = 0; k < this.no; ++k) {

            this.oBiases[k] = wts[p++];

        }

    } // setWeights()

} // NeuralNet

// =============================================================================

function main()

{

    process.stdout.write("\033[0m"); // reset

    process.stdout.write("\x1b[1m" + "\x1b[37m"); // bright white

    console.log("\nBegin IO demo ");

    console.log("\nCreating 2-2-2 neural net ");

    let nn = new NeuralNet(2, 2, 2);

    let wts = [

        0.2, 0.4, 0.6, 0.8, // ihWeights

        0.10, 0.12, // hBiases

        0.14, 0.16, 0.18, 0.20, // hoWeights   

        0.21, 0.22, 0.23, 0.24,

        0.22, 0.24
    ]; // oBiases

    console.log("\nSetting weights and biases ");

    nn.setWeights(wts);

    let X = [1.0, 2.0];

    console.log("\nSetting input = ");

    vecShow(X, 1);

    let oupt = nn.eval(X);

    console.log("\nReturned output values = ");

    vecShow(oupt, 4);

    process.stdout.write("\033[0m"); // reset

    console.log("\nEnd demo");

}

main();