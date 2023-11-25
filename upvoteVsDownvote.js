function calculateNetVotes(votes) {
    return votes.upvotes - votes.downvotes;
}
const voteCounts = { upvotes: 10, downvotes: 5 };
const netVotes = calculateNetVotes(voteCounts);
console.log(`Net Votes: ${netVotes}`);
