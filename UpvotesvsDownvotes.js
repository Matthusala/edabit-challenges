const calcuateNetVote = (vote) => {
  return vote.update - vote.downvote;
};
const voteCounts = { upvotes: 10, downvotes: 5 };
const netVotes = calculateNetVotes(voteCounts);
