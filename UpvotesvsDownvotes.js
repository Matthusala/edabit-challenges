const calculateNetVote = (vote) => {
  if (
    typeof votes !== "object" ||
    !votes.hasOwnProperty("upvotes") ||
    !votes.hasOwnProperty("downvotes")
  ) {
    throw new Error("Invalid");
  }
  const netVotes = votes.upvotes - votes.downvotes;

  return netVotes;
};
