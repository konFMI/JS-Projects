function solution(command) {
    switch (command) {
        case 'upvote':
            this.upvotes += 1;
            break;
        case 'downvote':
            this.downvotes += 1;
            break;
        case 'score':
            let [upvotes, downvotes] = [this.upvotes, this.downvotes];
            if (upvotes >= 50 || downvotes >= 50) {
                let greaterValue = (upvotes > downvotes) ? upvotes : downvotes;
                let increase = Math.ceil(greaterValue * 0.25);
                upvotes += increase;
                downvotes += increase;
            }
            let balance = upvotes - downvotes;

            let rating = '';
            let positiveVotes = this.upvotes / (this.upvotes + this.downvotes);
            if (this.upvotes + this.downvotes < 10) {
                rating = 'new';
            } else if (positiveVotes >= 0.66) {
                rating = 'hot';
            } else if (balance >= 0 && (this.upvotes >= 100 || this.downvotes >= 100)) {
                rating = 'controversial';
            } else if (balance < 0) {
                rating = 'unpopular';
            } else {
                rating = 'new';
            }
            return [upvotes, downvotes, balance, rating];
            break;
        default:
            break;
    }
}

let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};
var forumPost = {
    id: '1234',
    author: 'author name',
    content: 'these fields are irrelevant',
    upvotes: 50,
    downvotes: 0
};
solution.call(forumPost, 'upvote');

console.log(solution.call(forumPost, 'score'));
solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score'); // [127, 127, 0, &#39;controversial&#39;]
console.log(score);
for (let index = 0; index < 50; index++) {
    solution.call(post, 'downvote'); // (executed 50 times)
}
score = solution.call(post, 'score'); // [139, 189, -50, &#39;unpopular&#39;]
console.log(score);