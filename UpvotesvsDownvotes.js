const calcuateNetVote = (vote) => {
  return vote.update - vote.downvote;
};
